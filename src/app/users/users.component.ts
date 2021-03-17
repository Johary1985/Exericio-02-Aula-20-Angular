import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Array <any>

  constructor(private UsersComponent: UserService) {

    this.usuarios = new Array<any>()

   }

  getDataApi() {
    this.UsersComponent.getData().subscribe((usuarios) =>{

      this.usuarios = usuarios;
      
    })
  }

  ngOnInit(): void {

    

  }

}
