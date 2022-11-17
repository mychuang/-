import { MenbersService } from './../menbers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MENBERS, USERS } from '../menbers';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  //menberList: MENBERS;
  userList: any = [];
  Employee: any = [];

  //constructor(private http: HttpClient) { };
  constructor(private menberService: MenbersService) {
  };

  ngOnInit(): void {
    console.log('component is inited');
    this.loadEmployees();
    this.loadUsers();
  }

  // 事件繫結用變數
  public onClickEvent() {
    console.log(this.userList[1]);
  }

  // Get employees list
  loadEmployees() {
    return this.menberService.getEmployees().subscribe(
      (data: {}) => {
        this.Employee = data;
        console.log(this.Employee[0].name);
      }
    )
  };

  // Get employees list
  loadUsers() {
    return this.menberService.getUsers().subscribe(
      (data: {}) => {
        this.userList = data;
        console.log(this.userList[0].name);
      }
    )
  };

}
