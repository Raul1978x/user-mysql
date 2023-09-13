import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { User } from '../create-user/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  data: FormControl<any> = new FormControl([''], Validators.required)

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const userData: any = this.data.value;
    this.apiService.getUserByEmail(userData).subscribe(
      (response) => {
        console.log('Respuesta:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
