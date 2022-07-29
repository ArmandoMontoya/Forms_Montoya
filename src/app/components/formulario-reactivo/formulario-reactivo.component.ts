import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  regexInput = "^[ a-zA-ZÀ-ÿ\u00f1\u00d1\.]*$";

  profileForm: FormGroup = this.fb.group({
    firstName: ['',[
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(15),
    Validators.pattern(this.regexInput)
  ]
  ],
    lastName: ['',
    [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(15),
    Validators.pattern(this.regexInput)
    ]
  ],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.log('Formulario enviado')
  }

  //Validar formularios
  validarForm(campo: string) {
    return this.profileForm.controls[campo].errors
      && this.profileForm.controls[campo].touched
  }

}
