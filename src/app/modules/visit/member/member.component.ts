import { NzDrawerService } from 'ng-zorro-antd';
<<<<<<< HEAD
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/ng-relax/services/http.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { PreviewComponent } from '../public/preview/preview.component';
import { DatePipe } from '@angular/common';
import { DrawerCreate } from 'src/app/ng-relax/decorators/drawer/create.decorator';
import { VisitComponent } from '../public/visit/visit.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.less']
>>>>>>> upgrade
})
export class MemberComponent implements OnInit {
  
  @ViewChild('EaTable') table;
<<<<<<< HEAD
  yhfTable: any = [];
  isLoadingHf: boolean = false;
=======

>>>>>>> upgrade
  queryNode = [
    {
      label       : '宝宝昵称',
      key         : 'nick',
      type        : 'input',
    },
    {
      label       : '来源',
      key         : 'customerSourceId',
<<<<<<< HEAD
      optionKey: { label: 'sourceName', value: 'sourceId' },
      type        : 'select',
      optionsUrl  : '/management/selectSource',
      isHide      : true
=======
      optionKey   : { label: 'sourceName', value: 'sourceId' },
      type        : 'select',
      optionsUrl  : '/management/selectSource'
>>>>>>> upgrade
    },
    {
      label       : '家长姓名',
      key         : 'parentName',
      type        : 'input',
    }, 
    {
      label       : '手机号码',
      key         : 'mobilePhone',
      type        : 'input',
    },
    {
      label       : '下次跟进',
      key         : 'nextFollowTime',
      type        : 'rangepicker',
      valueKey    : ['nextFollowTimeStart', 'nextFollowTimeEnd']
    },
    {
      label       : '宝宝性别',
      key         : 'sex',
      type        : 'select',
      options     : [ { name: '男', id: '男' }, { name: '女', id: '女' } ],
      isHide      : true
    },
    {
      label       : '宝宝生日',
      key         : 'birthday',
      type        : 'rangepicker',
      valueKey    : ['babyBirthdayStart', 'babyBirthdayEnd'],
      isHide      : true
    },
    {
      label       : '创建时间',
      key         : 'createTime',
      type        : 'rangepicker',
      valueKey    : ['createDateStart', 'createDateEnd'],
      isHide      : true
    },
    {
      label       : '最后跟进',
      key         : 'lastFollowTime',
      type        : 'rangepicker',
      valueKey    : ['lastFollowTimeStart', 'lastFollowTimeEnd'],
      isHide      : true
    },
    {
      label       : '收集者',
      key         : 'collectorId',
      type        : 'select',
<<<<<<< HEAD
      optionsUrl  : '/retrunVisit/getEmployeeList',
=======
      optionsUrl  : '/common/collectorList',
>>>>>>> upgrade
      isHide      : true
    },
    {
      label       : '推荐人',
      key         : 'recommendedId',
      type        : 'select',
      optionsUrl  : '/common/recommenderList',
      isHide      : true
    },
  ];
  
<<<<<<< HEAD
  tableNode = [
    {
      name  : '卡号',
      width : '120px'
    },
    {
      name  : '卡类型',
      width : '120px'
    },
    {
      name  : '总卡次（正价/赠送）',
      width : '140px'
    },
    {
      name  : '剩余卡次（正价/赠送）',
      width : '160px'
    },
    {
      name  : '宝宝昵称',
      width : '90px',
    },
    {
      name  : '宝宝姓名',
      width : '90px'
    },
    {
      name  : '宝宝生日',
      width : '100px'
    },
    {
      name  : '性别',
      width : '60px'
    },
    {
      name  : '月龄',
      width : '60px'
    },
    {
      name  : '家长姓名',
      width : '80px'
    },
    {
      name  : '家长电话',
      width : '100px'
    },
    {
      name  : '所属小区',
      width : '100px'
    }, 
    {
      name  : '办卡时间',
      width : '140px'
    },
    {
      name  : '下次跟进时间',
      width : '100px'
    },
    {
      name  : '最后跟进时间',
      width : '180px'
    },
    {
      name  : '渠道来源',
      width : '80px'
    }
  ]

  constructor(
    private drawer: NzDrawerService,
    private format: DatePipe,
    private http: HttpService
=======
  tableNode = ['卡号','卡类型','总卡次（正价/赠送）','剩余卡次（正价/赠送）','宝宝昵称','宝宝姓名','宝宝生日','性别','月龄','家长姓名','家长电话','所属小区','办卡时间','下次跟进时间','最后跟进时间','渠道来源']

  constructor(
    private drawer: NzDrawerService
>>>>>>> upgrade
  ) { }
  ngOnInit() {
  }

<<<<<<< HEAD
  preview(id) {
    const drawer = this.drawer.create({
      nzWidth: 860,
      nzContent: PreviewComponent,
      nzClosable: false,
      nzContentParams: { id, followStageId: 4 }
    });
    drawer.afterClose.subscribe(res => this.table._request());
  }

  @ViewChild('drawerTemplate') drawerTemplate: TemplateRef<any>;
  gethf(){
    this.isLoadingHf = true;
    this.http.post('/retrunVisit/todayReturnVisit', { status: 2 },false).then(res => {
      this.isLoadingHf = false;
      this.yhfTable = res.result;
      this.drawer.create({
        nzTitle: '已回访列表'+ '('+ this.yhfTable.length +'条)',
        nzWidth: 900,
        nzContent: this.drawerTemplate
      });
    })
  }  

=======
  @DrawerCreate({ width: 860, closable: false, params: { followStageId: 4 }, content: PreviewComponent }) preview: ({ id: number }) => void;


  @DrawerCreate({ title: '今日已回访列表', content: VisitComponent, params: { followStageId: 4, status: 2 } }) visitList: () => void;
>>>>>>> upgrade

}
