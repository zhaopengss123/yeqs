import { ListPageComponent } from './../../../ng-relax/components/list-page/list-page.component';
import { NzMessageService, NzModalService, NzDrawerService } from 'ng-zorro-antd';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { QueryNode } from './../../../ng-relax/components/query/query.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare const require: any;
const DataSet = require('@antv/data-set');
const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.less']
})
export class LeaveComponent implements OnInit {

  @ViewChild('listPage') listPage: ListPageComponent;
  defaultInit = {
    leaveStatus: 1,
  };
  showAdjust:boolean = false;
  isrepeat: any = false;
  memberdetailTk:any = '';
  radioValue:any ='';
   RecordList:any = [];

  datalabelList:any = [];
  dateList:any = [];
  SyllabusAllList:any  = [];
  queryNode: QueryNode[] = [
    {
      label       : '手机号',
      key         : 'mobilePhone',
      type        : 'input'
    },
    {
      label       : '会员姓名',
      key         : 'memberName',
      type        : 'input'
    },
    {
      label       : '会员小名',
      key         : 'nick',
      type        : 'input'
    },
    {
      label       : '会员卡号',
      key         : 'cardCode',
      type        : 'input'
    }
  ]

  checkedItems: any[] = [];



  saveLoading: boolean;

  showDrawer: boolean;
  drawerTitle: string;
  constructor(
    private http: HttpService,
    private message: NzMessageService,
    private router: Router,
    private modal: NzModalService,
    private activatedRoute: ActivatedRoute,
    private drawer: NzDrawerService
  ) {


  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      this.defaultInit.leaveStatus = 1;
     })
  }

  type: string;
  mobilePhone: number;
  paramsInit: any = {};
  dataChange(dataset) {
    if (this.type) {
      this.checkedItems.push(dataset[0].id);
      dataset[0].checked = true;
      this.operation(this.type);
    }
  } 

  operation(type) {
    if (!this.checkedItems.length) {
      this.message.warning('请选择一条数据进行操作');
    } else {
      let dataSet = JSON.parse(JSON.stringify(this.listPage.eaTable.dataSet));
      let userInfo = dataSet.filter(res => res.id == this.checkedItems[0])[0] ;
      if(userInfo.makeStatus == 0){
        setTimeout(() => {
          this.router.navigate(['/home/customer/settlement'], {
            queryParams: {
              userInfo: JSON.stringify(userInfo)
            }
          });
        }, 300);
      }else{
        var int =  userInfo.makeStatus == 1 ?'该条记录已生成补课记录 ' : userInfo.makeStatus == 2 ?'该条记录已取消' : userInfo.makeStatus == 3 ?'该条记录已结算' : '该条记录不能补课';
        this.message.warning(int);
      }
      
    }
  }
  openDrawer(options) {
    let dataSet = JSON.parse(JSON.stringify(this.listPage.eaTable.dataSet));
    let userInfo = options.userInfo ? dataSet.filter(res => res.id == this.checkedItems[0])[0] : {};
    const drawer = this.drawer.create({
      nzWidth: 720,
      nzTitle: options.title || null,
      nzContent: options.component,
      nzContentParams: options.params || { id: this.checkedItems[0], userInfo }
    });
    drawer.afterClose.subscribe(res => res && this.listPage.eaTable._request());
  }




 



  /* ------------------------ 查看社区办卡信息 ------------------------ */
  showModal: boolean;
  data;
  labelConfig = ['percent', {
    offset: -40,
    textStyle: {
      rotate: 0,
      textAlign: 'center',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  }];
  scale = scale;
  previewCommunity(communityId) {
    this.http.post('/member/findCardFromCommunity', { communityId }, false).then(res => {
      if (res.result) {
        this.showModal = true;
        const dv = new DataSet.View().source(res.result);
        dv.transform({
          type: 'percent',
          field: 'cardNum',
          dimension: 'communityName',
          as: 'percent'
        });
        this.data = dv.rows;
      } else {
        this.message.warning('暂无社区信息');
      }
    })
  }

}