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
  userList: USERS[];

  //constructor(private http: HttpClient) { };
  constructor(private menberService: MenbersService) {
    this.userList = new Array<USERS>();
  };

  ngOnInit(): void {
    console.log('component is inited');

    this.menberService.getLocation().subscribe(
      (data: Array<USERS>) => {
        this.userList = data;
        console.log(data[0]);
        console.log(this.userList);
        console.log(this.userList[0].name)
        console.log(this.userList[0]);
      }
    );

  }

  // 事件繫結用變數
  public onClickEvent() {
    console.log(this.userList[1]);
  }

}
