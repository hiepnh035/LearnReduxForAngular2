import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DsBenh } from '../_models/benh';
import { BenhService } from '../services/benh.service';

@Component({
  selector: 'app-benh-count',
  templateUrl: './BenhCount.component.html',
  styleUrls: ['./BenhCount.component.css']
})
export class BenhCountComponent implements OnInit {
  length: number;
  dsBenh: Observable<Array<DsBenh>>;
  private subscription: Subscription;
  constructor(
    private benhService: BenhService
  ) {
    this.dsBenh = benhService.dsBenh;
  }

  ngOnInit() {
    this.subscription = this.dsBenh.subscribe(
      ds => {
        this.length = ds.length;
      },
      error => {
        console.log(error);
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
