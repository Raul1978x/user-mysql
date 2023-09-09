import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../services/api.service';
import { User } from './user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  created: boolean = false;
  usuario!: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.usuario = this.initForm();
  }

  onSubmit(): void {
    const userData = this.usuario.value;
    this.apiService.createUser(userData).subscribe(
      (response) => {
        console.log('Respuesta:', response);
        this.created = true;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(7)]],
      direccion: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.maxLength(4)]],
      dni: ['', [Validators.required, Validators.maxLength(8)]]
    });
  }
}
