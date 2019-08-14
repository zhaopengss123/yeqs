<<<<<<< HEAD
import { OptionsKey } from './../../../ng-relax/components/query/query.component';
import { QueryNode } from 'src/app/ng-relax/components/query/query.component';
import { PreviewComponent } from './../preview/preview.component';
import { NzDrawerService } from 'ng-zorro-antd';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpService } from 'src/app/ng-relax/services/http.service';
=======
import { VisitComponent } from './../public/visit/visit.component';
// import { UpdateComponent } from './../public/update/update.component';
import { UpdateComponent } from './update/update.component';

import { QueryNode } from 'src/app/ng-relax/components/query/query.component';
import { PreviewComponent } from './../public/preview/preview.component';
import { NzDrawerService } from 'ng-zorro-antd';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrawerCreate } from 'src/app/ng-relax/decorators/drawer/create.decorator';
>>>>>>> upgrade

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
<<<<<<< HEAD
  styleUrls: ['./clue.component.scss']
=======
  styleUrls: ['./clue.component.less']
>>>>>>> upgrade
})
export class ClueComponent implements OnInit {

  @ViewChild('EaTable') table;
<<<<<<< HEAD
  yhfTable: any = [];
  isLoadingHf: boolean = false;
  queryNode: QueryNode[] = [
    {
      label       : '宝宝昵称',
      key         : 'nick',
      type        : 'input',
=======

  queryNode: QueryNode[] = [
    {
      label: '宝宝昵称',
      key: 'nick',
      type: 'input',
>>>>>>> upgrade
    },
    {
      label       : '来源',
      key         : 'customerSourceId',
<<<<<<< HEAD
      optionKey: { label: 'sourceName', value: 'sourceId' },
      type        : 'select',
      optionsUrl  : '/management/selectSource',
      isHide      : true
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
      optionsUrl  : '/retrunVisit/getEmployeeList',
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
  tableNode = [
    {
      name  : '宝宝昵称',
      width : '90px'
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
      width : '140px'
    }, 
    {
      name  : '入库时间',
      width : '180px'
    },
    {
      name  : '下次跟进时间',
      width : '160px'
    },
    {
      name  : '最后跟进时间',
      width : '180px'
    },
    {
      name  : '来源',
      width : '140px'
    },
    {
      name  : '客户状态',
      width : '100px'
    },
    {
      name  : '跟进阶段',
      width : '120px'
    },
    {
      name  : '收集者',
      width : '120px'
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private drawer: NzDrawerService,
    private format: DatePipe,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe( (res: any) => {
=======
      optionKey   : { label: 'sourceName', value: 'sourceId' },
      type        : 'select',
      optionsUrl  : '/management/selectSource'
    },
    {
      label: '家长姓名',
      key: 'parentName',
      type: 'input',
    },
    {
      label: '手机号码',
      key: 'mobilePhone',
      type: 'input',
    },
    {
      label: '下次跟进',
      key: 'nextFollowTime',
      type: 'rangepicker',
      valueKey: ['nextFollowTimeStart', 'nextFollowTimeEnd']
    },
    {
      label: '宝宝性别',
      key: 'sex',
      type: 'select',
      options: [{ name: '男', id: '男' }, { name: '女', id: '女' }],
      isHide: true
    },
    {
      label: '宝宝生日',
      key: 'birthday',
      type: 'rangepicker',
      valueKey: ['babyBirthdayStart', 'babyBirthdayEnd'],
      isHide: true
    },
    {
      label: '创建时间',
      key: 'createTime',
      type: 'rangepicker',
      valueKey: ['createDateStart', 'createDateEnd'],
      isHide: true
    },
    {
      label: '最后跟进',
      key: 'lastFollowTime',
      type: 'rangepicker',
      valueKey: ['lastFollowTimeStart', 'lastFollowTimeEnd'],
      isHide: true
    },
    {
      label: '收集者',
      key: 'collectorId',
      type: 'select',
      optionsUrl: '/common/collectorList',
      isHide: true
    },
    {
      label: '推荐人',
      key: 'recommendedId',
      type: 'select',
      optionsUrl: '/common/recommenderList',
      isHide: true
    },
  ];
  tableNode = ['宝宝昵称', '宝宝姓名', '宝宝生日', '性别', '月龄', '家长姓名', '家长电话', '所属小区', '入库时间', '下次跟进时间', '最后跟进时间', '来源', '客户状态', '跟进阶段', '收集者']

  constructor(
    private activatedRoute: ActivatedRoute,
    private drawer: NzDrawerService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
>>>>>>> upgrade
      if (res.params.reset) {
        this.table._request();
      }
    })
  }
<<<<<<< HEAD

  preview(id) {
    const drawer = this.drawer.create({
      nzWidth: 860,
      nzContent: PreviewComponent,
      nzClosable: false,
      nzContentParams: { id, followStageId: 2 }
    });
    drawer.afterClose.subscribe(res => {
      this.table._request()
    });
  }

  @ViewChild('drawerTemplate') drawerTemplate: TemplateRef<any>;

  gethf(){
    this.isLoadingHf = true;
    this.http.post('/retrunVisit/todayReturnVisit', { status: 0 },false).then(res => {
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
  
  @DrawerCreate({ content: PreviewComponent, width: 860, closable: false, params: { followStageId: 2 } }) preview: ({id: number}) => void;

  @DrawerCreate({ title: '新增客户线索', content: UpdateComponent }) addCustomer: () => void;

  @DrawerCreate({ title: '今日已回访列表', content: VisitComponent, params: { followStageId: 2, status: 0 } }) visitList: () => void;

>>>>>>> upgrade
}
