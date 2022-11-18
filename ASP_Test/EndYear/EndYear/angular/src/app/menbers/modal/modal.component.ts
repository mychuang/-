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

  constructor(private menberService: MenbersService) {
    this.menber = new Array<MENBERONE>();
  }

  ngOnInit(): void {
    this.loadMenber();
  }

  // 內嵌繫結用變數
  code = 'ITCS';
  name = '李悦';

  loadMenber(){
    return this.menberService.getMenberOne().subscribe(
      (data: Array<MENBERONE>) => {
        this.menber = data;
        console.log(data);
      }
    );
  }

}
