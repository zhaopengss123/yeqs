import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryComponent, QueryNode } from 'src/app/ng-relax/components/query/query.component';
import { TableComponent } from 'src/app/ng-relax/components/table/table.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Input() id;

  @Input() userInfo;

  @ViewChild('query') query: QueryComponent;

  @ViewChild('table') table: TableComponent;

  queryNode: QueryNode[] = [
    {
      label       : '变更类型',
      key         : 'comment',
      type        : 'select',
      default     : '续卡',
      options     : [ { name: '续卡', id: '续卡'} ]
    },
    {
      label       : '卡号',
      key         : 'cardCode',
      type        : 'input',
    }
  ];

  defaultInit = {
    cardCode: null,
    comment: '续卡'
  };
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

   }

  ngOnInit() {
    var queryNode: QueryNode[] = [
      {
        label       : '变更类型',
        key         : 'comment',
        type        : 'select',
        default     : '续卡',
        options     : [ { name: '续卡', id: '续卡'} ]
      },
      {
        label       : '卡号',
        key         : 'cardCode',
        type        : 'input',
        default     : this.userInfo.cardCode,        
      }
    ];
    console.log(this.userInfo);
    this.queryNode = queryNode;
    if (this.userInfo.cardCode) {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
        this.defaultInit.cardCode = this.userInfo.cardCode;
        this.defaultInit.comment = '续卡';
    })
  }
  }

}
