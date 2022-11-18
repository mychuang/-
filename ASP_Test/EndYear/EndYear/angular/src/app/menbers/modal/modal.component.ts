import { MENBERONE } from './../menbers';
import { Component, OnInit, Input, SimpleChanges, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenbersService } from '../menbers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  getMenber: MENBERONE;
  putMenber: MENBERONE;

  // 內嵌繫結用變數
  status: string;
  prizeName: string;

  constructor(private menberService: MenbersService,
              private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) private injectData: any) {
    this.getMenber = new MENBERONE;
    this.putMenber = new MENBERONE;
    this.prizeName = '';
    this.status = injectData.selectedStatus;
    this.prizeName = injectData.selectedValue;
  }

  ngOnInit(): void {
    this.loadMenber();
  }

  loadMenber(){
    return this.menberService.getMenberOne().subscribe(
      (data: MENBERONE) => {
        this.getMenber.CODE = data.CODE;
        this.getMenber.NAME = data.NAME;
        this.getMenber.ID = data.ID;
      }
    );
  }

  public onClickEvent() {
    this.putMenber.ID = this.getMenber.ID;
    this.putMenber.CODE = this.getMenber.CODE;
    this.putMenber.NAME = this.getMenber.NAME;
    this.putMenber.STATUS = this.status;

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
