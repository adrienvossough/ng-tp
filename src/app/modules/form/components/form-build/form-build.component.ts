import { Component, OnInit } from '@angular/core';
// Import de FormBuilder
import { FormBuilder, FormGroup } from '@angular/forms';
// Import de Validators pour les formulaires
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-build',
  templateUrl: './form-build.component.html',
  styleUrls: ['./form-build.component.css']
})
export class FormBuildComponent implements OnInit {
  userProfileForm: FormGroup;

  // FormBuilder en paramètre du constructeur
  constructor(private fb: FormBuilder) {
    // On met en place un formGroup qui permet de définir des paramètres au formulaire
    this.userProfileForm = this.fb.group({

      // Les paramètres nom et prénom sont requis
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      // On créer un "sous" FormGroup dans un FormGroup qui permet de lier des paramètres entre eux
      adresse: this.fb.group({
        numero: [''],
        rue: [''],
        cp: ['']
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userProfileForm.value);

    // var nom = this.userProfilForm.get('nom').value
  }

}
