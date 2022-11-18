import { MenbersService } from './../menbers.service';
import { Component, OnInit } from '@angular/core';
import { MENBERS } from '../menbers';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  menberList: MENBERS;
  myTags: string[];
  TagCloud: any;

  //constructor(private http: HttpClient) { };
  constructor(private menberService: MenbersService) {
    this.menberList = new MENBERS;
    this.myTags = [];
    this.TagCloud = require('TagCloud');
  };

  ngOnInit(): void {
    this.loadMenbers();
  }


  loadMenbers(){
    return this.menberService.getMenbers().subscribe(
      (data: MENBERS) => {
        this.menberList = data;
        this.myTags = this.menberList.codeName;
        console.log(this.myTags);
        this.mainUI(this.myTags);
      }
    )
  }

  mainUI(tags: string[]){
    this.TagCloud('.cloudContent', tags,{
        // radius in px
        radius: 550,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'normal',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,

        // interact with cursor move on mouse out
        keep: true,
    });
  }

}
