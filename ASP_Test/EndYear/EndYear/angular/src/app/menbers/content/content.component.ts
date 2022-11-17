import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    console.log('component is inited');

    this.http.get('http://localhost:3000/users').subscribe(res => {
    console.log('res', res)
  })
  }

}
