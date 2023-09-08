import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  data: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
  this.getAllData();
}
getAllData(){
  this.apiService.getAllData().subscribe(data=>{this.data = data;
  console.log(this.data)})
}
  
}
