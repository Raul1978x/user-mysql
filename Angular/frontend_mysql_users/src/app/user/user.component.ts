import { Component, getNgModuleById, numberAttribute } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../create-user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  data: any[] = [];
  user!: User;
  usuario!: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllUsers().subscribe(data => {
      this.data = data;
      // console.log(this.data)
    })
  }
  goToEdit(id: number): void {
    this.apiService.getOneUser(id).subscribe((response) => {
      this.user = response;
      // console.log(this.user);
    })
    let userEdit = this.user;
    this.router.navigate(['updateUser'], {
      queryParams: {
        user: userEdit,
        // {
        //   email: userEdit.email,
        //   password: '',
        //   nombre: userEdit.nombre,
        //   apellido: userEdit.apellido,
        //   telefono: userEdit.telefono,
        //   direccion: userEdit.direccion,
        //   codigoPostal: userEdit.codigoPostal,
        //   dni: userEdit.dni
        // }
      }
    });

  }

  onDelete(id: number): void {
    this.apiService.deleteUser(id).subscribe(
      (data: any) => {
        console.log('Usuario eliminado correctamente', data);
        this.getAllData();
        // Si deseas actualizar la lista de usuarios o realizar alguna otra acción después de eliminar
      },
      (error: any) => {
        console.error('Error al eliminar usuario', error);
        // Manejar el error si es necesario
      }
    );
  }



}
