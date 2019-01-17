import { Component, OnInit } from '@angular/core';
import { QueryNode } from 'src/app/ng-relax/components/query/query.component';

@Component({
  selector: 'app-revoke',
  templateUrl: './revoke.component.html',
  styleUrls: ['./revoke.component.scss']
})
export class RevokeComponent implements OnInit {

  queryNode: QueryNode[] = [
    {
      label       : '会员卡号',
      key         : 'cardCode',
      type        : 'input'
    },
    {
      label       : '会员姓名',
      key         : 'memberName',
      type        : 'input'
    },
    {
      label       : '儿童类型',
      key         : 'babyType',
      type        : 'select',
      options: [{ name: '0-3岁', id: '0-3岁' }, { name: '3-6岁', id: '3-6岁' }, { name: '6-12岁', id: '6-12岁' }],    
    },
    {
      label       : '消费商品',
      key         : 'commodityId',
      type        : 'select',
      optionsUrl  : '/commodity/getStoreCommodities'
    },
    {
      label       : '服务泳师',
      key         : 'teacherId',
      type        : 'select',
      optionsUrl  : '/tongka/teacherList',
      isHide      : true
    },
    {
      label       : '顾客满意度',
      key         : 'satisfaction',
      type        : 'select',
      options     : [ { name: '满意', id: '满意' }, { name: '一般', id: '一般' } ],
      isHide      : true
    },
    {
      label       : '消费日期',
      key         : 'date',
      valueKey    : ['startDate', 'endDate'],
      type        : 'rangepicker',
      isHide      : true
    },
    {
      label       : '撤销日期',
      key         : 'datec',
      valueKey    : ['startcDate', 'endcDate'],
      type        : 'rangepicker',
      isHide      : true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
