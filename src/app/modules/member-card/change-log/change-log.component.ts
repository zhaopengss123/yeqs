import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { QueryComponent, QueryNode } from '../../../ng-relax/components/query/query.component';
import { TableComponent } from '../../../ng-relax/components/table/table.component';
=======
import { QueryComponent, QueryNode } from 'src/app/ng-relax/components/query/query.component';
import { TableComponent } from 'src/app/ng-relax/components/table/table.component';
>>>>>>> upgrade

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {

  @ViewChild('query') query: QueryComponent;
  @ViewChild('table') table: TableComponent;

  queryNode: QueryNode[] = [
    {
      label       : '记录时间',
      key         : 'startDate',
      type        : 'datepicker'
    },
    {
      label       : '变更类型',
      key         : 'comment',
      type        : 'select',
      options     : [ { name: '续卡', id: '续卡'},
                      { name: '调整', id: '调整'},
                      { name: '建卡', id: '建卡'},
                      { name: '停卡', id: '停卡'},
                      { name: '重开卡', id: '重开卡'},
                      { name: '退卡', id: '退卡'} ]
    },
    {
      label       : '卡号',
      key         : 'cardCode',
      type        : 'input'
    },
    {
      label       : '销售',
      type        : 'select',
      key         : 'salesId',
      optionsUrl  : '/member/getStoreSales'
    }
  ];

  defaultInit = {
    salesId: null
  };

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      if (res.params.salesId) {
        let salesId = Number(res.params.salesId);
        this.queryNode[3].default = salesId;
        this.defaultInit.salesId = salesId;
      }
    })
  }

  ngOnInit() {
  }


}