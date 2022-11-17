import { MenbersService } from './../menbers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  //constructor(private http: HttpClient) { };
  constructor(private menberService: MenbersService) { };

  ngOnInit(): void {
    console.log('component is inited');

    //this.http.get('http://localhost:3000/getAll').subscribe(res => {
    //console.log('res', res)});

    this.menberService.getLocation().subscribe(
      (res => {
        console.log('res', res);
      })
    );

  }

}
