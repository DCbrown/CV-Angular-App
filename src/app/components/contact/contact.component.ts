import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
