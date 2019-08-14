import { AutographService } from './../autograph.service';
<<<<<<< HEAD
import { YlbbResponse } from './../../../ng-relax/services/http.service';
=======
>>>>>>> upgrade
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryNode, QueryComponent } from 'src/app/ng-relax/components/query/query.component';
import { PageInfo } from 'src/app/ng-relax/components/table/table.component';
<<<<<<< HEAD
=======
import { YlbbResponse } from 'src/app/core/http.intercept';
>>>>>>> upgrade

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
<<<<<<< HEAD
  styleUrls: ['./record.component.scss']
=======
  styleUrls: ['./record.component.less']
>>>>>>> upgrade
})
export class RecordComponent implements OnInit {

  @ViewChild('eaQuery') eaQuery: QueryComponent;

  queryNode: QueryNode[] = [
    {
      label: '业务类型',
<<<<<<< HEAD
      type : 'select',
=======
      type: 'select',
>>>>>>> upgrade
      key: 'productId',
      optionKey: { label: 'productName', value: 'id' }
    },
    {
      label: '交易时间',
      type: 'datepicker',
      key: 'orderCreate'
    },
    {
      label: '交易状态',
      type: 'select',
<<<<<<< HEAD
      options: [ { name: '失败', id: 0 }, { name: '成功', id: 1 } ],
=======
      options: [{ name: '失败', id: 0 }, { name: '成功', id: 1 }],
>>>>>>> upgrade
      key: 'payStatus'
    }
  ];

  sign;


  domain;

  _pageInfo: PageInfo = new PageInfo();

  constructor(
    private http: HttpClient,
    private autograph: AutographService
  ) {
    this._getSign();
    this.domain = this.autograph.domain;
  }

  ngOnInit() {
  }

  private _getSign() {
    this.autograph.getAutograph().then(res => {
      this.sign = res;
      this.request();
      this.http.post<YlbbResponse>(`${this.domain}/product/name/all/${JSON.stringify(this.sign)}`, {}).subscribe(category => {
<<<<<<< HEAD
        this.eaQuery._node.map(res => {
=======
        this.eaQuery.node.map(res => {
>>>>>>> upgrade
          if (res.key === 'productId') {
            res.options = category.result;
          }
          return res;
        })
      })
    });
  }

  dataSet: any[];
  queryParams = {};
  query(e) {
    this.queryParams = e;
    this.request();
  }

  request() {
    this._pageInfo.loading = true;
    this.http.post<YlbbResponse>(`${this.domain}/order/erp/${JSON.stringify(Object.assign(this.queryParams, this.sign))}`, {}).subscribe(res => {
      if (res.code == 1000) {
        this.dataSet = res.result.ordersList;
        this._pageInfo.totalPage = res.result.sumSize;
        this._pageInfo.pageNum = res.result.pageSum;
      }
      this._pageInfo.loading = false;
    })
  }

}
