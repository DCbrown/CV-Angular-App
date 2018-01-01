import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users:string;

  constructor(public dataService:DataService) {

    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
   }

  ngOnInit() {
  }

}
