import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  users:any;

  constructor(public dataservice:DataService) {

    this.dataservice.getUsers().subscribe(users => {
      this.users = users;
    });

   }

  ngOnInit() {
  }

}
