import { Component, OnInit } from '@angular/core';
import { MENBERONE } from '../menbers';
import { MenbersService } from '../menbers.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  menber: MENBERONE[];

  // 內嵌繫結用變數
  code: string;
  name: string;

  constructor(private menberService: MenbersService) {
    this.menber = new Array<MENBERONE>();
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
        this.code = this.menber[0].CODE;
        this.name = this.menber[0].NAME;
      }
    );
  }

}
