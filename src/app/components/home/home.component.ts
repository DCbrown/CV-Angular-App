import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

users:any;

constructor(public dataService:DataService){

  this.dataService.getUsers().subscribe(users => {
    this.users = users;
    console.log(users);
  });
}

  ngOnInit() {
  }

}
