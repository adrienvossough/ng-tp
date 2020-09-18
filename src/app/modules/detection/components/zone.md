# Zone.js

Zone JS met en place des wrappers sur les fonctions asynchrones natives

- événements : clics, boutons, etc. (EventEmitter, DOM event listeners)
- setTimeout, etc.
- XMLHttpRequest, fetch, etc.

Il regarde si un événement est appelé et si c'est le cas transmet l'information à Angular qui lance le change detection

Il ne faut donc pas toucher à Zone.js

## Fonctionnement de la Change Detection

1. Déclenchement de la "change detection" d'Angular par Zone
2. "Change Detection" de chaque composant : compare les anciennes et les nouvelles valeurs de chaque expression utilisée dans les bindings (Template Interpolation ou Property Binding).
3. Mise à jour de la vue si nécessaire
4. Double check en mode dév seulement : relance le "Change Detection" pour détecter les appels récursives entre composants (A vers B, B vers A, A vers B, etc.)

## Performance

Par défaut, Angular vérifie tous les composants

[Change detection](https://www.youtube.com/watch?v=jvKGQSFQf10)

Lors de la compilation Angular créer un arbre de composant pour le Change Detection qui est optimisé et très rapide.


## Optimisation

2 modes :

1. Default : un événement => vérification de tous les composants depuis le parent jusqu'au enfants. ```ChangeDetectionStrategy.Default```
Peut être lent sur les grosses applications

2. OnPush : Ne met à jour le composant que si un événement (ou observable, ou async pipe, ou @Input) a lieu sur lui ou ses enfants seulement

``` TypeScript
@Component({
    selector: 'hero-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ...
})
export class HeroCard {
    ...
}
```
![push](https://www.mokkapps.de/e9c151a1260485a277c6928b5f19019b/cd-on-push-cycle.gif)


[Démo en ligne](https://angular-change-detection-demo.netlify.app/simple-demo)

## le cas de l'@Input 

1. en Default : detection à chaque modification de la valeur de l'@Input
2. en Push : Seulement si c'est une nouvelle référence ou une nouvelle valeur primitive. Il faut donc passer à chaque fois un nouvel objet ! 


Si on utilise le Push, il vaut mieut le mettre sur tous les composants et d'utiliser que des immutables/immuables (création de nouvelle objet à chaque fois).
Il est conseillé d'utiliser la bibliothèque [Immutable.js](https://facebook.github.io/immutable-js/). Elle fournit des Maps et Lists immuables.

## Le cas des événements

1. en Default : on recharge tout depuis le parent
2. en Push : On recharge que si l'événement est le composant courant ou les enfants. **Attention**, setTimeout/setInterval/Promise.resolve().then(), this.http.get('...').subscribe() ne provoque pas de changement du template !!!

## Le cas des changements manuels

detectChanges() on ChangeDetectorRef : force la détection sur la vue est ses enfants. On peut le lier à "detach()" pour mettre en place un test de détection locale.

ApplicationRef.tick() : force la détection sur l'application. La strategie de détection des composants est respectée.

markForCheck() on ChangeDetectorRef : Marque tous les parents à être vérifié au prochain test de détection, même onpush.

Utiliser le changement manuel doit rester raisonnable.

![Exemple](https://www.mokkapps.de/static/0d8019fa5da448dabae8b314de501847/e3189/changedetectorref-methods.png)

## AsyncPipe

Lié à un observable. En interne, il appelle markForCheck() à chaque fois qu'une valeur est émise.

Code source :

``` Javascript
private _updateLatestValue(async: any, value: Object): void {
  if (async === this._obj) {
    this._latestValue = value;
    this._ref.markForCheck();
  }
}
```

AsyncPipe fonctionne donc bien avec OnPush.

## Détection des erreurs

En mode production, la détection n'est exécutée qu'une seule fois pour de meilleures performances.

En mode dev, la détection est exécutée deux fois pour trouver les erreurs dûes à des récursions.

Exemple d'erreur :
Changer une valeur dans ngAfterViewInithook

![cycle](https://www.mokkapps.de/static/31fbf73918a17ceffdc6a0ad066f2e89/e3189/lifecycle-hooks.png)


Article : https://indepth.dev/everything-you-need-to-know-about-change-detection-in-angular/

## Code en dehors de Zone

Il est possible de lancer du code sans détection du changement :

```javascript

  constructor(private ngZone: NgZone) {}

  runWithoutChangeDetection() {
    this.ngZone.runOutsideAngular(() => {
      // the following setTimeout will not trigger change detection
      setTimeout(() => doStuff(), 1000);
    });
  }
```

## Désactiver le changement

Désactiver la détection, si vous utilisez un WebSocket pour pousser un grand nombre de données du backend vers le frontend et que les composants frontend correspondants ne doivent être mis à jour que toutes les 10 secondes. 

Nous pouvons désactiver la détection en appelant detach()et la déclencher manuellement en utilisant detectChanges()

``` javascript
constructor(private ref: ChangeDetectorRef) {
    ref.detach(); // deactivate change detection
    setInterval(() => {
        this.ref.detectChanges(); // manually trigger change detection
    }, 10 * 1000);
}
```