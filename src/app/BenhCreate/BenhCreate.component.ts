import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { Http } from '@angular/http';
import { BenhService } from '../services/benh.service';

@Component({
  selector: 'app-tao-moi',
  templateUrl: './BenhCreate.component.html',
  styleUrls: ['./BenhCreate.component.css']
})
export class BenhCreateComponent implements OnInit {
  form = new FormGroup({
    ThongTin: new FormControl(),
    TenBenh: new FormControl(),
  });
  constructor(
    private router: Router,
    private activedroute: ActivatedRoute,
    private http: Http,
    private benhService: BenhService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      TenBenh: ['', [Validators.required, Validators.minLength(2)]],
      ThongTin: ['', Validators.required]
    });
  }

  setValue(event: string) {
    this.form.controls['ThongTin'].setValue(event);
  }

  create() {
    const _imgArr = localStorage.getItem('textEditor.imgData') ? localStorage.getItem('textEditor.imgData') : null;
    if (_imgArr) {
      const imgArr = JSON.parse(_imgArr);
      const thong_tin = this.form.controls['ThongTin'].value;
      let imgDeleted = [];
      imgArr.forEach(element => {
        if (thong_tin.indexOf(element) === -1) {
          imgDeleted = [...imgDeleted, element];
        }
      });
      if (imgDeleted.length > 0) {
        this.http.post('http://api.truongkhoa.com/api/DD/DeleteImg', imgDeleted).subscribe(
          rs => {
            rs.json();
          },
          err => {
            console.log(err);
          });
      }
      this.benhService.createBenh(this.form);
    } else {
      this.benhService.createBenh(this.form);
    }
  }

  back(){

  }

}
