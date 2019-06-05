import { Router,ActivatedRoute } from '@angular/router';
import { SupplementComponent } from './supplement/supplement.component';
import { StopComponent } from './stop/stop.component';
import { ListPageComponent } from './../../../ng-relax/components/list-page/list-page.component';
import { ContinuedComponent } from './continued/continued.component';
import { ChangeComponent } from './change/change.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { QueryNode } from './../../../ng-relax/components/query/query.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { OpenComponent } from './open/open.component';
import { NumberComponent } from './number/number.component';
import { AppointComponent } from './appoint/appoint.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { concat } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  datalabelList:any = [];
  passArranging:any = false;
  ItemsMemberId:any = "";
  showAdjust: boolean = false;
  memberdetailTk: any = '';
  radioValue: any = [];
  isrepeat: any = false;
  SyllabusAllList: any = [];  
     RecordList:any = [];
  RecordList1: any = [];
  RecordList2: any = [];
  RecordList3: any = [];
  RecordList4: any = [];
  RecordList5: any = [];
  RecordList6: any = [];
  RecordList7: any = []; 
  radioName: any = [];
  dateList:any = [];
  memberData:any = {};
  operationComponents = {
    adjustment: {
      title: '通卡调整',
      component: AdjustmentComponent
    },
    change: {
      title: '卡项变更',
      component: ChangeComponent
    },
    continued: {
      title: '续卡',
      component: ContinuedComponent
    },
    appoint: {
      title     : '预约',
      component : AppointComponent,
      userInfo  : true
    },
    consumption: {
      title     : '消费',
      component : ConsumptionComponent,
      userInfo  : true
    },
    stop: {
      title: '停卡',
      component: StopComponent
    },
    open: {
      title: '重开卡',
      component: OpenComponent
    },
    supplement: {
      title: '补卡',
      component: SupplementComponent
    },
    number: {
      title: '换卡号',
      component: NumberComponent
    },
    withdraw: {
      title: '退卡',
      component: WithdrawComponent
    }
  }

  queryNode: QueryNode[] = [
    {
      label       : '卡号',
      key         : 'cardCode',
      type        : 'input'
    },
    {
      label       : '会员ID',
      key         : 'memberId',
      type        : 'input'
    }, 
    {
      label       : '会员姓名',
      key         : 'memberName',
      type        : 'input'
    }, 
    {
      label       : '卡类型',
      key         : 'cardTypeId',
      type        : 'select',
      optionsUrl  : '/cardTypeManagement/findList'
    },
    {
      label       : '卡状态',
      key         : 'status',
      type        : 'select',
      options     : [ { name: '正常', id: '0' }, { name: '停卡', id: '1' }, { name: '过期', id: '2' } ]
    },
    {
      label       : '儿童类型',
      key         : 'babyType',
      type        : 'select',
      options     : [{ name: '0-3岁', id: '0-3岁' }, { name: '3-6岁', id: '3-6岁' }, { name: '6-12岁', id: '6-12岁' } ],
      isHide      : true
    },
    {
      label       : '剩余卡次',
      key         : 'remainTimes',
      type        : 'between',
      valueKey    : ['startCardTimes', 'endCardTimes'],
      isHide      : true
    },
    {
      label       : '所属社区',
      key         : 'communityName',
      type        : 'input',
      isHide      : true
    }, 
  ]
  
  paramsDefault = {};
  checkedItems: any[] = [];

  showDrawer: boolean;
  drawerTitle: string;

  constructor(
    private router: Router,
    private http: HttpService,
    private reoute: ActivatedRoute,
    private message: NzMessageService,
    private resolver: ComponentFactoryResolver,
    private activatedRoute: ActivatedRoute
  ) { 
    this.selectSyllabusAll();
    this.activatedRoute.queryParamMap.subscribe((res: any) => {
      if (res.params.type) {
        this.type = res.params.type;
        this.paramsInit.cardCode = res.params.code;
        setTimeout(() => {
          this.listPage.eaQuery._queryForm.patchValue({ cardCode: res.params.code })
        });
      } else if (res.params.memberId) {
        this.paramsInit = { memberId: res.params.memberId };
        setTimeout(() => {
          this.listPage.eaQuery._queryForm.patchValue({ memberId: res.params.memberId });
        });
      }
    });
    this.http.post('/intelligent/selectScour', {}, false).then(res => {
        this.dateList = res.result.list;
    });
  }

  ngOnInit() {
  }

  type: string;
  cardCode: number;
  paramsInit: any = {};
  dataChange(dataset) {
    if (this.type) {
      this.checkedItems.push(dataset[0].id);
      this.memberData = dataset[0];
      
      dataset[0].checked = true;
      this.operation(this.type);
    }
  } 
  operation(type) {
    if (!this.checkedItems.length) {
      this.message.warning('请选择一条数据进行操作');
    } else if (type === 'stop') {
      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
          if (res.turnCard) {
            this.message.warning('该卡有停卡限制,不能停卡！');
          } else {
            this.showDrawer = true;
            this.drawerTitle = this.operationComponents[type].title;
            this.createComponent(this.operationComponents[type]);
          }
        }
      })
    } else if (type === 'open') {
      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
    
            this.showDrawer = true;
            this.drawerTitle = this.operationComponents[type].title;
            this.createComponent(this.operationComponents[type]);
        
        }
      })
    } else if (type === 'supplement') {
      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
          if (res.serialNumber) {
            this.showDrawer = true;
            this.drawerTitle = this.operationComponents[type].title;
            this.createComponent(this.operationComponents[type]);
          } else {
            this.message.warning('该卡是电子卡片,请点击换卡号！');
          }
        }
      })
    } else if (type === 'withdraw') {
      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
          if (res.runningState != '退卡') {
            this.showDrawer = true;
            this.drawerTitle = this.operationComponents[type].title;
            this.createComponent(this.operationComponents[type]);
          } else {
            this.message.warning('该卡已退卡！');
          }
        }
      })
    } else if (this.operationComponents[type]) {
      this.showDrawer = true;
      this.drawerTitle = this.operationComponents[type].title;
      this.createComponent(this.operationComponents[type]);
    }
  }


  @ViewChild('listPage') listPage: ListPageComponent;
  saveLoading: boolean;
  saveDrawer() {
    this.saveLoading = true;
    this.componentRef.instance.save().then(res => {
      this.saveLoading = false;
      if (res) {
        this.showDrawer = false;
        this.listPage.eaTable._request();
        if (this.drawerTitle === '重开卡') {
          this.listPage.eaTable.dataSet.map(res => {
            if (res.id == this.checkedItems[0]) {
                    // this.showAdjust = true;
                    // this.radioValue = '';
                    // this.RecordList = [];
                    // this.datalabelList = [];
                    // this.http.post('/curriculum/selectMsg', { memberId: res.memberId }, false).then(res => {
                    //   if (res.code == 1000) {
                    //     this.memberdetailTk = res.result.list;
                    //   } else {
                    //     this.message.create('error', res.info);
                    //   }
                    // });
            }
          })
        }
      }
    });
  }
  // 排课
  arranging() {
    if (!this.checkedItems.length) {
      this.message.warning('请选择一条数据进行操作');
    } else {
        this.RecordList = [];
        this.RecordList1 = [];
        this.RecordList2 = [];
        this.RecordList3 = [];
        this.RecordList4 = [];
        this.RecordList5 = [];
        this.RecordList6 = [];
        this.RecordList7 = [];      
        this.showAdjust = true;
        this.radioValue = [];
        this.RecordList = [];
        this.datalabelList = [];

      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
          this.http.post('/curriculum/selectMsg', { memberId: res.memberId }, false).then(res => {
            if (res.code == 1000) {
              this.memberdetailTk = res.result.list;
            } else {
              this.message.create('error', res.info);
            }
          });
          this.memberData = res;
        }
      })
     
      }
  }
    /* ----------------- 新增抽屉组件并传参Id及用户信息 ----------------- */
  componentRef: ComponentRef<any>;
  @ViewChild("drawerContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  createComponent(operationComponent) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(operationComponent.component || operationComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.id = this.checkedItems[0];
    this.listPage.eaTable.dataSet.map(res => {
      if (res.id == this.checkedItems[0]) {
        this.componentRef.instance.memberCardInfo = res;
      }
    })
  }

  /****************办卡选课******************* */

  closeAdjust() {
    //this.message.create('error', '如果关闭弹窗，将不能继续排课！');
    this.showAdjust = false;
  }
  isAdjust(status) {
    if (!this.datalabelList.length) {
      this.message.create('error', '请选择课程');
      return false;
    }
   
    let paramJson: any = JSON.stringify({
      babyNumber: this.memberdetailTk.babyNumber,
      status: status,
      name: this.memberData.name,
      parentName: this.memberData.parentName,
      cardNumber: this.memberdetailTk.cardNumber,
      memberId: this.memberData.memberId,
      cardCode: this.memberdetailTk.cardCode,
      mobilePhone: this.memberdetailTk.mobilePhone,
      list: this.datalabelList
    });
    //排课
    this.http.post('/curriculum/insertMemberRecord', { paramJson }, false).then(res => {
      if (res.code == 1000) {
        this.message.create('success', '排课成功！');
        if (status == 0 && !this.isrepeat) {
          this.isrepeat = true;
          this.radioValue = [];
          this.RecordList = [];
          this.datalabelList = [];
        } else {
          this.isrepeat = false;
          this.showAdjust = false;
        }
      } else if (res.code == 1001){
        this.message.create('error', '该用户已经排过课了！');
      } else {
        this.message.create('error', res.info);
      }
    });

  }
  //查询课程类别
  selectSyllabusAll() {
    this.http.post('/scheduling/selectSyllabusAll', {}, false).then(res => {
      if (res.code == 1000) {
        this.SyllabusAllList = res.result.list;
      } else {
        this.message.create('error', res.info);
      }
    });
  }

  //办卡选课中课表展示
  selectlabel(data) {
  
    if(data.checked){
      this.http.post('/curriculum/selectIdRecord', { syllabusName: data.name }, false).then(res => {
        if (res.code == 1000) {
          let arr = this.RecordList.concat(res.result.list);
          this.RecordList = arr;
          this.datalabelList = [];
          this.RecordList1 = [];
          this.RecordList2 = [];
          this.RecordList3 = [];
          this.RecordList4 = [];
          this.RecordList5 = [];
          this.RecordList6 = [];
          this.RecordList7 = [];
          this.RecordList.map( item=>{
            if(item.week=='星期一'){
              this.RecordList1.push(item);
            } else if (item.week == '星期二'){
              this.RecordList2.push(item);
            } else if (item.week == '星期三') {
              this.RecordList3.push(item);
            } else if (item.week == '星期四') {
              this.RecordList4.push(item);
            } else if (item.week == '星期五') {
              this.RecordList5.push(item);
            } else if (item.week == '星期六') {
              this.RecordList6.push(item);
            } else if (item.week == '星期日') {
              this.RecordList7.push(item);
            }
          })
        } else {
          this.message.create('error', res.info);
        }
      });
    }else{
      // let arr = this.RecordList.concat(res.result.list);
      // let arr = JSON.parse(JSON.stringify(this.RecordList));
      // arr.map((item,index)=>{
      //   if(item.name == data.name){
      //       arr.splice(index,1);
      //   }
      // })
      let arrs = ['aa','bb','ccc','dd'];
      console.log(arrs.slice(0,1));
    }
  }
  adjusting(){
    if (!this.checkedItems.length) {
      this.message.warning('请选择一条数据进行操作');
    } 
    this.router.navigateByUrl('/home/customer/newinfo/'+'1111');
  }
  //选择课程
  datalabelChange(data) {
    //data.syllabusName = data.name;
    if (data.checked) {
      this.datalabelList.push(data);
    } else {
      this.datalabelList.map((item, index) => {
        if (item.id == data.id) {
          this.datalabelList.splice(index, 1);
        }
      })
    }
  }
  
  noPassArranging(){
    this.passArranging = false;
  }
  isPassArranging(){
    this.http.post('/curriculum/cancelReserve', { memberId: this.ItemsMemberId }, false).then(res => {
      if (res.code == 1000) {
        this.message.create('success', '取消成功！');
        this.passArranging = false;
      } else if(res.code == 1001) {
        this.message.create('error', '该用户没有排课！');
        this.passArranging = false;
      }else{
        this.message.create('error', res.info);
      }
    });
  }
  noArranging(){
    if (!this.checkedItems.length) {

      this.message.warning('请选择一条数据进行操作');

    } else {
      this.passArranging = true;
      this.listPage.eaTable.dataSet.map(res => {
        if (res.id == this.checkedItems[0]) {
          this.ItemsMemberId = res.memberId;  
        }
      })
    }

    
  }

}