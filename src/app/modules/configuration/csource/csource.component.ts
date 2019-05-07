import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { NzDrawerService } from 'ng-zorro-antd';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { TableComponent } from 'src/app/ng-relax/components/table/table.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-csource',
  templateUrl: './csource.component.html',
  styleUrls: ['./csource.component.scss']
})
export class CsourceComponent implements OnInit {

  @ViewChild('table') table: TableComponent;

  formGroup: FormGroup;
  saveLoading: boolean;

  constructor(
    private http: HttpService,
    private drawer: NzDrawerService
  ) {
    this.formGroup = new FormGroup({
      sourceId: new FormControl(null),
      // sourceName: new FormControl(null, [Validators.required], [this.nameAsyncValidator])
      sourceName: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }

  save(drawerRef) {
    if (this.formGroup.invalid) {
      // this.formGroup.get('sourceName').markAsDirty();
      this.formGroup.get('sourceName').updateValueAndValidity();
      return;
    }
    if(this.formGroup.value.sourceId){
      this.http.post('/management/updateSource', { sourceName: this.formGroup.value.sourceName, sourceId:this.formGroup.value.sourceId }).then(res => {
        drawerRef.close();
        this.table._request();
      })
    }else{
      this.http.post('/management/insertSource', { sourceName: this.formGroup.value.sourceName }).then(res => {
        drawerRef.close();
        this.table._request();
      })
    }

  }

  @ViewChild('drawerTemplate') drawerTemplate: TemplateRef<any>;

  update(data = { sourceId: null, sourceName: null }) {
    this.formGroup.patchValue(data);
    this.drawer.create({
      nzTitle: '客户来源',
      nzWidth: 720,
      nzContent: this.drawerTemplate
    });
  }

  delete(sourceId ) {
    this.http.post('/management/deleteSource', { sourceId  }).then(res => this.table._request());
  }

  // nameAsyncValidator = (control: FormControl): any => {
  //   return Observable.create(observer => {
  //     let params = {
  //       id: this.formGroup.get('sourceId').value,
  //       sourceName: control.value
  //     };
  //     this.http.post('/community/checkCommunity', { paramJson: JSON.stringify(params) }, false).then(res => {
  //       observer.next(res.result.flag ? null : { error: true, duplicated: true });
  //       observer.complete();
  //     }, err => {
  //       observer.next(null);
  //       observer.complete();
  //     })
  //   })
  // };

}
