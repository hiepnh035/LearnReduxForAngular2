import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DsBenh } from '../_models/benh';
import { Subscription } from "rxjs/Subscription";
import { CampaignService } from '../CampaignService.service';
import { campaigns } from '../_reducers/campaign.reducer';

@Component({
  selector: 'campaigns',
  templateUrl: './Campaign.component.html',
  styleUrls: ['./Campaign.component.css']
})
export class CampaignComponent implements OnInit {

  // Redux based variables
  dsBenh: Observable<Array<DsBenh>>;
  private subscription: Subscription;
  constructor(
    private campaignService: CampaignService
  ) {
    this.dsBenh = campaignService.dsBenh;
    console.log(this.dsBenh);
  }
  ngOnInit() {
    this.subscription = this.dsBenh.subscribe(ds => {
      // do sth
      console.log(ds);
    },
      error => {
        console.log(error);
      });
    this.campaignService.loadCampaigns();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
