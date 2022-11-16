import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.scss']
})
export class UpperComponent implements OnInit {
  idx!: number;
  heros = [
    '董事長獎',
    '總經理獎',
    '資訊長獎',
    '財務長獎',
    '不讓你獎',
    '虎年唬唬獎',
    '偏偏要得獎'
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // 內嵌繫結用變數
  interpolation = '資訊部新人教育訓練';

  // 事件繫結用變數
  public onClickEvent() {
    alert("You click me!");
  }

}
