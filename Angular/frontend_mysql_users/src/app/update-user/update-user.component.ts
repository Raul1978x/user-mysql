import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { User } from '../create-user/user';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  editUsuario!: FormGroup;
  id!: string;
  user!: User;
  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params) => {
      this.id = params['id'];
    });

    this.dataService.getUser(this.id).subscribe((response) => {
      this.user = response;
      console.log(response);
      
    });
  }
}