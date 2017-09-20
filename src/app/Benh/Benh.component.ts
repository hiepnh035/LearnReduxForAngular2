import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DsBenh } from '../_models/benh';
import { Subscription } from "rxjs/Subscription";
import { BenhService } from '../services/benh.service';
import { benh } from '../_reducers/benh.reducer';

@Component({
  selector: 'app-benh',
  templateUrl: './Benh.component.html',
  styleUrls: ['./Benh.component.css']
})
export class BenhComponent implements OnInit {
  soluongLoad: number;
  dsBenh: Observable<Array<DsBenh>>;
  private subscription: Subscription;
  constructor(
    private benhService: BenhService
  ) {
    this.dsBenh = benhService.dsBenh;
    console.log(this.dsBenh);
  }
  ngOnInit() {
    this.soluongLoad = 10;
    this.benhService.loadBenh(this.soluongLoad);
  }
  loadMore() {
    this.soluongLoad += 10;
    this.benhService.loadBenh(this.soluongLoad);
  }
  loadLess() {
    this.soluongLoad -= 10;
    this.benhService.loadBenh(this.soluongLoad);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
