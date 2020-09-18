# change detection (CD)

Permet la mise à jour de la vue

Attention, le fichier HTML d'Angular est un template qui permet de générer un DOM
MODEL + fichier HTML => DOM

Le controleur et le modèle ne sont pas couplé à la vue. C'est zone.js qui fait le lien entre les 2.

```
avec :
<div>{{ user.firstName }}</div>

on peut imaginer un code implicite géré par Zone :

refresh() {

    /* si aucun changement. */
    if (lastUserFirstName === user.firstName) {
        return;
    }

    /* mise à jour de la vue. */
    divElement.textContent = lastUserFirstName = user.firstName;
}
```
Se passe en deux parties :

1. Le développeur met à jour le modèle
2. Angular synchronise le modèle dans la vue

Le processus :

1. modification du model
2. Angular détecte le changement
3. le 'change detection' regarde tous les composants du parent aux enfants pour trouver si des modéles ont changé
4. mise à jour du DOM si un changement a lieu

![demo](https://www.mokkapps.de/cf7351e3976cdc3041cadce5367fc318/cd-cycle.gif)

CD compare la valeur actuelle du modèle avec la valeur précédente, si il y a une différence, la valeur passe à "isChanged = true"

Le code dans Angular : [anguar github](https://github.com/angular/angular/blob/885f1af509eb7d9ee049349a2fe5565282fbfefb/packages/core/src/util/comparison.ts#L13)

