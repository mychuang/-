import { MENBERONE } from './../menbers';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MenbersService } from '../menbers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  menber: MENBERONE[];
  putMenber: MENBERONE;

  // 內嵌繫結用變數
  code: string;
  name: string;

  constructor(private menberService: MenbersService, private dialogRef: MatDialogRef<ModalComponent>) {
    this.menber = new Array<MENBERONE>();
    this.putMenber = new MENBERONE;
    this.code = '';
    this.name = '';
  }

  ngOnInit(): void {
    this.loadMenber();
  }

  loadMenber(){
    return this.menberService.getMenberOne().subscribe(
      (data: Array<MENBERONE>) => {
        this.menber = data;
        console.log(this.menber[0].STATUS);
        this.code = this.menber[0].CODE;
        this.name = this.menber[0].NAME;
      }
    );
  }

  public onClickEvent() {
    this.putMenber.CODE = '1';
    this.putMenber.NAME = '李悦';
    this.putMenber.STATUS = '20';
    this.putMenber.ID = '7';

    this.menberService.putOne(this.putMenber).subscribe(
      {
        next: data => {
          console.log('next', data);
          this.dialogRef.close();
        },
        error: error => {
          console.log('error', error);
        }
      }
    );
  }

}
