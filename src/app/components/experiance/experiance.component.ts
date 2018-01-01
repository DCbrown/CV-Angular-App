import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {

  users:any;

  constructor(public dataservice:DataService) {

    this.dataservice.getUsers().subscribe(users => {
      this.users = users;
    });



  }
  ngOnInit() {
  }

}
