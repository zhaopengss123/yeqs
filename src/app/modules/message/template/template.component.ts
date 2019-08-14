<<<<<<< HEAD
import { HttpService } from './../../../ng-relax/services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/ng-relax/components/table/table.component';
=======
import { DrawerCreate } from 'src/app/ng-relax/decorators/drawer/create.decorator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/ng-relax/components/table/table.component';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { NzDrawerService } from 'ng-zorro-antd';
import { UpdateComponent } from './update/update.component';
>>>>>>> upgrade

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
<<<<<<< HEAD
  styleUrls: ['./template.component.scss']
=======
  styleUrls: ['./template.component.less']
>>>>>>> upgrade
})
export class TemplateComponent implements OnInit {

  @ViewChild('table') table: TableComponent

  queryNode = [
    {
      label       : '标题',
      key         : 'title',
      type        : 'input'
    }
  ];

<<<<<<< HEAD
  formGroup: FormGroup;

  showDrawer: boolean;

  saveLoading: boolean;

  constructor(
    private http: HttpService,
    private fb: FormBuilder = new FormBuilder()
  ) { 
    this.formGroup = this.fb.group({
      id: [],
      title: [, [Validators.required]],
      memo: [, [Validators.required]],
    });
  }
=======
  constructor(
    private http: HttpService,
    private drawer: NzDrawerService
  ) { }
>>>>>>> upgrade

  ngOnInit() {
  }

<<<<<<< HEAD

  updateTemplate(data?) {
    this.showDrawer = true;
    data && this.formGroup.patchValue(data);
  }

  deleteTemplate(id) {
    this.http.post('/smsTemplate/delete', { paramJson: JSON.stringify({ id }) }).then(_ => this.table._request());
  }
  saveTemplate() {
    if (this.formGroup.invalid) {
      for (let i in this.formGroup.controls) {
        this.formGroup.controls[i].markAsDirty();
        this.formGroup.controls[i].updateValueAndValidity();
      }
    } else {
      this.saveLoading = true;
      this.http.post('/smsTemplate/modify', {
        paramJson: JSON.stringify(this.formGroup.value)
      }).then(res => {
        this.table._request();
        this.saveLoading = false;
        this.showDrawer = false;
      }).catch(err => this.saveLoading = false);
    }
  }

=======
  deleteTemplate(id) {
    this.http.post('/smsTemplate/delete', { paramJson: JSON.stringify({ id }) }).then(() => this.table._request());
  }

  @DrawerCreate({ title: '编辑模板', content: UpdateComponent }) update: ({ templateInfo: object }?) => void;

>>>>>>> upgrade
}
