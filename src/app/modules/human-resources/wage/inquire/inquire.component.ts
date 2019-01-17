import { DatePipe } from '@angular/common';
import { HttpService } from './../../../../ng-relax/services/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ListPageComponent } from '../../../../ng-relax/components/list-page/list-page.component';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})
export class InquireComponent implements OnInit {

  @ViewChild('listPage') listPage: ListPageComponent;

  showPopover: boolean;
  generateLoading: boolean;

  generateMonth;

  constructor(
    private http: HttpService,
    private format: DatePipe
  ) { }

  ngOnInit() {
  }

  generate() {
    this.generateLoading = true;
    this.http.post('/payroll/generatePayroll', { 
      month: this.format.transform(this.generateMonth, 'yyyy-MM') 
    }).then(res => {
      this.generateLoading = false;
      this.showPopover = false;
      this.listPage.eaTable._request();
    }).catch(err => this.generateLoading = false);
  }

  _disabledDate(current: Date): boolean {
    return current && current.getTime() > Date.now();
  }

}
