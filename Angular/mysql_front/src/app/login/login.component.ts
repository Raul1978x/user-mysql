import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../services/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError: string = "";
  loginForm = this.formBuilder.group({
    email: ['raul@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder
    , private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  get email(){
    return this.loginForm.controls.email;
  }

  get password()
  {
    return this.loginForm.controls.password;
  }

  login(){
    if(this.loginForm.valid){
      this.loginError="";
      this.userService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      })

    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

}
