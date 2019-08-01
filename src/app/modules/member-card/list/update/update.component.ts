import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { DatePipe } from '@angular/common';
import { NzDrawerRef, NzMessageService, NzDrawerService } from 'ng-zorro-antd';
import { UpdatebqComponent } from '../updatebq/updatebq.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {
  @Input() id;

  @Input() memberCardInfo;
  cardTypeList: any[] = [];
  teacherList: any[] = [];
  salesList: any[] = [];
  showSave: boolean;
  formGroupOne: FormGroup;
  formGroup: FormGroup
  step: number = 0;
  userInfo: any;
  memberId: number;
  constructor(
    private http: HttpService,
    private format: DatePipe,
    private fb: FormBuilder = new FormBuilder(),
    private drawerRef: NzDrawerRef,
    private message: NzMessageService,
    private drawer: NzDrawerService

  ) { 
    this.http.post('/member/getStoreSales', {}, false).then(res => this.salesList = res.result);


  }

  ngOnInit() {
    this.formGroupOne = this.fb.group({
      id: [this.id],
      cardCode: [{ value: this.memberCardInfo.cardCode,  disabled: true}],//卡号
      name: [{ value: this.memberCardInfo.name || this.memberCardInfo.memberName, disabled: true }], //姓名
      orgTypeId: [this.memberCardInfo.cardTypeId], //原卡类型id,
      orgTimes: [{ value: this.memberCardInfo.remainTimes, disabled: true }],//原正价卡次
      orgFreeTimes: [{ value: this.memberCardInfo.remainFreeTimes, disabled: true }],//原赠送卡次
      balance: [{ value :this.memberCardInfo.balance ,  disabled: true }], //金额
      orgExpireDate: [{ value: this.memberCardInfo.expireDate, disabled: true }],//原停卡日期
      // salesId: [, [Validators.required]],
      sname:[],
      mobilePhone:[ ,[Validators.required, Validators.pattern(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/)]]
    });

    this.formGroup = this.fb.group({
      id: [this.id],
      memberId:[],
      havecard:[],
      cardCode: [{ value: this.memberCardInfo.cardCode}, [Validators.required]],//卡号
      name: [], //姓名
      times: [],//正价卡次
      freeTimes: [],//赠送卡次
      expireDate: [],//停卡日期
      salesId: [, [Validators.required]],//成长顾问
      ransferContractNo:[ ,[Validators.required]], //转卡协议号
      transferMemberId: []
    });
    
  }
  dateChange(e, data) {
    data.startDate = this.format.transform(e, 'yyyy-MM-dd');
  }

  @DrawerClose() close: () => void;
  saveLoading: boolean;
  firstNext(){
    if (this.formGroupOne.invalid) {
    for (let i in this.formGroupOne.controls) {
      this.formGroupOne.controls[i].markAsDirty();
      this.formGroupOne.controls[i].updateValueAndValidity();
    }
  }else{
    let mobilePhone = this.formGroupOne.value.mobilePhone;
    this.saveLoading = true;
    this.http.post('/curriculum/transfererVification', { mobilePhone }).then(res => {
      this.saveLoading = false;
      if(res.code == 1001||res.code == 1000){
        this.saveLoading = true;
        this.memberId = res.result.member.id;
        this.userInfo = res.result.member;
        this.http.post('/member/checkMemberInfo', { id: res.result.member.id }, false).then(res => {
          this.saveLoading = false;
          if (res.code == 2053) {
            this.message.warning(res.info);
            this.openDrawer({ title: '编辑-请补全基本信息', component: UpdatebqComponent });
          }else{
            this.step = 1; 
          }
        })
       // 会员计算卡次 停卡 日期
       if(res.code == 1000){
        this.formGroup.patchValue(this.memberCardInfo);
        let datas = res.result.card; //被转卡人
        let userInfo = this.memberCardInfo; //原转卡人
        let dates = Number(new Date(userInfo.expireDate).getTime() - new Date().getTime()) + Number(new Date(datas.expireDate).getTime());
        let datem = new Date(dates);
        let y: any = datem.getFullYear(), m: any = datem.getMonth(), d: any =datem.getDate();
        m = m > 9 ? m : '0' + m;
        d =  d > 9 ? d : '0' + d;
        let expireDate = y +'-' + m + '-' + d ;
        this.formGroup.patchValue({ name: res.result.member.name });
        this.formGroup.patchValue({ havecard: 1 });
        this.formGroup.patchValue({ expireDate });
        this.formGroup.patchValue({ memberId: res.result.member.id });
        this.formGroup.patchValue({ id: this.memberCardInfo.memberCardId});
        this.formGroup.patchValue({ times: this.memberCardInfo.remainTimes + res.result.card.remainTimes});
        this.formGroup.patchValue({ freeTimes: this.memberCardInfo.remainFreeTimes + res.result.card.remainFreeTimes});
        this.formGroup.patchValue({ transferMemberId: this.memberCardInfo.memberId });
        

      }else{
        this.formGroup.patchValue(this.memberCardInfo);
        this.formGroup.patchValue({ havecard: 0 });
        this.formGroup.patchValue({ name: res.result.member.name });
        this.formGroup.patchValue({ memberId: res.result.member.id });
        this.formGroup.patchValue({ id: this.memberCardInfo.memberCardId});
        this.formGroup.patchValue({ transferMemberId: this.memberCardInfo.memberId });
        this.formGroup.patchValue({ times: this.memberCardInfo.remainTimes});
        this.formGroup.patchValue({ freeTimes: this.memberCardInfo.remainFreeTimes });

      }
      }else if(res.code == 1002){
        this.message.warning('没有该会员信息，请核对后再试');
      }else{
        this.message.error(res.info);
      }
    });
  }
  }
  openDrawer(options) {
    let userInfo = this.userInfo;
    const drawer = this.drawer.create({
      nzWidth: 720,
      nzTitle: options.title || null,
      nzContent: options.component,
      nzContentParams: options.params || { id: this.memberId, userInfo }
    });
  }
  @DrawerSave('/curriculum/transferCard') save: () => void;

}
