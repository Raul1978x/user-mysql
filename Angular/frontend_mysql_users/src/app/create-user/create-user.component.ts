import { Component } from '@angular/core';
import { User } from './user';
import { FormControl, FormGroup  } from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  usuario: any = new FormGroup({
    email: new FormControl<string|null>(''),
    password: new FormControl<string|null>(''),
    nombre: new FormControl<string|null>(''),
    apellido: new FormControl<string|null>(''),
    telefono: new FormControl<string|null>(''),
    direccion: new FormControl<string|null>(''),
    codigoPostal: new FormControl<number|null>(null),
    dni: new FormControl<number|null>(null)
  }
    ); 

    onSubmit(){
      
    }
}
