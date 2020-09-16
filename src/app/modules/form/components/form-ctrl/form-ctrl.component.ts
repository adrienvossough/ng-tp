import { Component, OnInit } from '@angular/core';
// Import de FormGroup et FormControl
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-ctrl',
  templateUrl: './form-ctrl.component.html',
  styleUrls: ['./form-ctrl.component.css']
})
export class FormCtrlComponent implements OnInit {
  userProfileForm: FormGroup;
  newUserProfileForm: FormGroup;

  constructor() {
    // Création d'un premier groupe à l'aide de FormGroup et non plus FormBuilder
    this.userProfileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl('')
    });

    // Création d'un second groupe qui va récupérer les données entrées dans le premier
    this.newUserProfileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmitFirst(): void {
    // Méthode magique (SetValue)
    // this.newUserProfileForm.setValue(this.userProfileForm.value);

    this.newUserProfileForm.patchValue({
      // Deux méthodes ici pour récupérer un champ spécifique
      nom: this.userProfileForm.controls['nom'].value,
      prenom: this.userProfileForm.get('prenom').value
    });
  }

  onSubmitSecond(): void {
    console.log(this.userProfileForm.value);
  }
}
