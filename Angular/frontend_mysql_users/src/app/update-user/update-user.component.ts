import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { User } from '../create-user/user';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  editUsuario!: FormGroup;
  user!: User;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.user = params['user'];
    })
    // this.apiService.getOneUser(id).subscribe((response) => {
    //   this.user = response;
    //   // console.log(this.user);
    // })
    // this.editForm();
     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(this.user));
  }

  onSubmit(): void {
    const userData:User = this.editUsuario.value;
    this.apiService.editUser(userData.id!, userData).subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  editForm(): FormGroup {
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
