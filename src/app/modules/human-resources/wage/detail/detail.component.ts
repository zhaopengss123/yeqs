import { QueryComponent } from 'src/app/ng-relax/components/query/query.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('eaQuery') eaQuery: QueryComponent;

  detail = {
    payrollRecord: [],
    addTypes: [],
    subTypes: [],
    others: []
  }
  resultId:any = null;
  constructor(
    private http: HttpService,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      if (res.params.employeeId && res.params.month) {
        let newParams = JSON.parse(JSON.stringify(res.params));
        newParams.employeeId = Number(newParams.employeeId);
        this.query(newParams);
        setTimeout(() => {
          this.eaQuery._queryForm.patchValue(newParams);
        });
      }
    })
  }

  query(params) {
    if (!params.employeeId || !params.month) {
      this.message.warning('请选择需要查询的员工及月份')
    } else {
      this.http.post('/payrollRecordDetail/getPayrollRecordDetail', {
        paramJson: JSON.stringify(params)
      }, false).then(res => {
        if (res.code == 1000) {
          res.result.payrollRecord = [res.result.payrollRecord];
          this.detail = res.result;
        } else {
          this.message.warning(res.info)
        }
      })
      this.queryFormula(params);
    }
  }

  formula: string;

  queryFormula(params) {
    if (!params.employeeId || !params.month) {
      this.message.warning('请选择需要查询的员工及月份')
    } else {
      this.http.post('/bonusSalesDetail/getByEmployeeAndMonth', { 
        paramJson: JSON.stringify(params)
      }, false).then(res => {
        this.resultId = res.result.id;
        if (res.result == null) {
          this.formula = null;
        } else {
          this.formula = res.result.formula;
        }
      })
    }
  }

}
