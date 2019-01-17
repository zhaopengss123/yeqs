import { Component, OnInit } from '@angular/core';
import { QueryNode } from 'src/app/ng-relax/components/query/query.component';

@Component({
  selector: 'app-shortmsg',
  templateUrl: './shortmsg.component.html',
  styleUrls: ['./shortmsg.component.scss']
})
export class ShortmsgComponent implements OnInit {

  queryNode: QueryNode[] = [
    {
      label       : '接收手机号',
      key         : 'mobile',
      type        : 'input'
    },
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
      label       : '主教老师',
      key         : 'teacherId',
      type        : 'select',
      optionsUrl  : '/tongka/teacherList'
    },
    {
      label       : '发送日期',
      key         : 'date',
      valueKey    : ['startDate', 'endDate'],
      type        : 'rangepicker'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
