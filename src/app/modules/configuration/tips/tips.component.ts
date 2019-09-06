
import { ListPageComponent } from './../../../ng-relax/components/list-page/list-page.component';
import { NzMessageService, NzModalService, NzDrawerService } from 'ng-zorro-antd';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { QueryNode } from './../../../ng-relax/components/query/query.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.less']
})
export class TipsComponent implements OnInit {
  @ViewChild('listPage') listPage: ListPageComponent;
  queryNode: QueryNode[] = [
    {
      label       : '会员姓名',
      key         : 'memberName',
      type        : 'input'
    },
    {
      label       : '提交时间',
      key         : 'birthday',
      valueKey    : ['startDate', 'endDate'],
      type        : 'rangepicker',
    }   
  
  ]
  constructor() { }

  ngOnInit() {
  }

}
