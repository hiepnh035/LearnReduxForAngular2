import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { campaigns } from './_reducers/campaign.reducer';
import { AppComponent } from './app.component';
import { CampaignComponent } from './Campaign/Campaign.component';
import { CampaignService } from './CampaignService.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent
],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      dsBenh: campaigns
    }),
    StoreDevtoolsModule.instrument(),
    HttpModule
  ],
  providers: [
    CampaignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
