import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.scss']
})
export class UpperComponent implements OnInit {

  constructor(public dialog: MatDialog) { };

  prize: any = [
    { status: "1",
      value: '董事長獎' },
    { status: "2",
      value: '總經理獎' },
    { status: "3",
      value: '資訊長獎' },
    { status: "4",
      value: '財務長獎' },
    { status: "5",
      value: '不讓你獎' },
    { status: "6",
      value: '虎年唬唬獎'},
    { status: "7",
      value: '偏偏要得獎' }
  ];

  selectedPrize: string = "1";

  ngOnInit(): void {
  };

  // 事件繫結用變數
  public onClickEvent() {
    console.log(this.selectedPrize);
    this.showAddPostDialog();
  }

  public showAddPostDialog() {
    this.dialog.open(ModalComponent);
  }

}
