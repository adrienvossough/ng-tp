import { Component, OnInit } from '@angular/core';
//Importation de FormArray et FormBuilder
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-arr',
  templateUrl: './form-arr.component.html',
  styleUrls: ['./form-arr.component.css']
})
export class FormArrComponent implements OnInit {
  myTeamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myTeamForm = this.fb.group({
      // Création du tableau de membres
      membres: this.fb.array([
        // méthode pour remplir le tableau
        this.fb.control('')
      ])
    });
  }

  ngOnInit(): void {
  }

  // Méthodes qui retourne la liste des membres de myTeamForm
  get members(): FormArray {
    return this.myTeamForm.get('membres') as FormArray;
  }

  addNewMember(): void {
    // ajouter un nouveau membre à la liste 'members'
    this.members.push(this.fb.control(''));
  }

  onSubmit(): void {
    // Afficher tous les membres :
    // console.log(this.myTeamForm.value);

    // Afficher un membre en particulier :
    console.log(this.myTeamForm.get(['membres', '0']).value);
  }

}
