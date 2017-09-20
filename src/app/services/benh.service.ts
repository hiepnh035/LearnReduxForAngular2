import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/Rx';
import { BenhStore } from '../benh.store';
import { DsBenh } from '../_models/benh';
import { FormGroup } from '@angular/forms';
@Injectable()
export class BenhService {
  // Redux based variables
  dsBenh: Observable<Array<DsBenh>>;
  constructor(
    private store: Store<BenhStore>,
    private http: Http
  ) {
    this.dsBenh = store.select('dsBenh');
  }
  loadBenh(soluong: number) {
    return this.http.get(`http://api.truongkhoa.com/api/CSDLYT/DanhSachBenh?soluong=${soluong}`)
      .map((res: Response) => {
        let body = res.json();
        return body.DsBenh || {};
      })
      .map((payload: DsBenh[]) => {
        return { type: 'LOAD_BENH', payload };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }

  createBenh(form: FormGroup) {
    const body = new URLSearchParams();
    body.set('Ten', form.controls['TenBenh'].value);
    body.set('ThongTin', form.controls['ThongTin'].value);
    return this.http.post(`http://api.truongkhoa.com/api/CSDLYT/Benh_Create`, body)
      .map((response: Response) =>
        response.json())
      .map((payload: DsBenh[]) => {
        return { type: 'ADD_BENH', payload };
      })
      .subscribe((action) => {
        this.store.dispatch(action);
      });
  }
}
