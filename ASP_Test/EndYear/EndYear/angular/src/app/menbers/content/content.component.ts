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
  menberList: MENBERS[];
  userList: USERS[];

  //constructor(private http: HttpClient) { };
  constructor(private menberService: MenbersService) {
    this.userList = new Array<USERS>();
    this.menberList = new Array<MENBERS>;
  };

  ngOnInit(): void {
    console.log('component is inited');
    this.loadUsers();
    this.loadMenbers();
  }

  // 事件繫結用變數
  public onClickEvent() {
    console.log(this.userList[1]);
  }

  // Get user list
  loadUsers() {
    return this.menberService.getUsers().subscribe(
      (data: Array<USERS>) => {
        this.userList = data;
        console.log(data[0]);
        console.log(this.userList);
        console.log(this.userList[0].name)
        console.log(this.userList[0]);
      }
    );
  };

  loadMenbers(){
    return this.menberService.getMenbers().subscribe(
      (data: Array<MENBERS>) => {
        this.menberList = data;
        console.log(this.menberList[0].codeName[0]);
        console.log(this.menberList[0].codeName[10]);
      }
    )
  }

}
