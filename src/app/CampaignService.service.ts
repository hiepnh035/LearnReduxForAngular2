import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/Rx';
import { AppStore } from '../app/app.store';
import { DsBenh } from './_models/benh';
@Injectable()
export class CampaignService {
  // Redux based variables
  dsBenh: Observable<Array<DsBenh>>;
  constructor(
    private store: Store<AppStore>,
    private http: Http
  ) {
    this.dsBenh = store.select('dsBenh');
  }
  loadCampaigns() {
    return this.http.get(`http://api.truongkhoa.com/api/CSDLYT/DanhSachBenh?soluong=50`)
      .map((res: Response) => {
        let body = res.json();
        return body.DsBenh || {};
      })
      .map((payload: DsBenh[]) => {
        return { type: 'ADD_CAMPAIGNS', payload };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }
}
