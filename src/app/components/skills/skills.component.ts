import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  users:any;

  constructor(public dataService:DataService) {
    this.dataService.getUsers().subscribe(users =>{
      this.users = users;
    });
  }


  ngOnInit() {
  }

}
