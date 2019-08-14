import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { DrawerSave } from '../../../../ng-relax/decorators/drawer.decorator';
import { DatePipe } from '@angular/common';
=======
import { DatePipe } from '@angular/common';
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
>>>>>>> upgrade

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.scss']
})
export class AppointComponent implements OnInit {

  @Input() id;

  @Input() memberCardInfo;
  
  formGroup: FormGroup;

  communityList: any[] = [];
  cardList: any[] = [];
  teacherList: any[] = [];
  swimRingList: any[] = [];

  constructor(
    private http: HttpService,
    private fb: FormBuilder = new FormBuilder(),
<<<<<<< HEAD
    private format: DatePipe
=======
    private format: DatePipe,
    private drawerRef: NzDrawerRef
>>>>>>> upgrade
  ) { 
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      memberId: [this.memberCardInfo.memberId],
      name: [this.memberCardInfo.name, [Validators.required]],
      nick: [this.memberCardInfo.nick],
      sex: [this.memberCardInfo.sex, [Validators.required]],
      monthAge: [this.memberCardInfo.monthAge, [Validators.required]],
      babyType: [this.memberCardInfo.babyType, [Validators.required]],
      communityId: [this.memberCardInfo.communityId, [Validators.required]],
      cardId: [, [Validators.required]],
      spec: [0],
      reserveDate: [, [Validators.required]],
      reserveHour: [, [Validators.required]],
      rHour: [],
      rMinute: [],
      swimTeacherId: [, [Validators.required]],
      ringId: [],
      comment: []
    });
    this.formGroup.patchValue(this.memberCardInfo);
    this.http.post('/member/communityList', {}, false).then(res => this.communityList = res.result);
    this.http.post('/memberCard/getMemberCards', { memberId: this.memberCardInfo.memberId }, false).then(res => {
      this.cardList = res.result;
      res.result.length && this.formGroup.patchValue({ cardId: res.result[0].id });
    });
    /* ------------------ 获取泳师列表 并默认选择第一条数据：到店安排 ------------------ */
    this.http.post('/tongka/teacherList', {}, false).then(res => {
      this.teacherList = res.result;
      this.formGroup.patchValue({ swimTeacherId: res.result[0].id });
    });
    this.http.post('/swimRing/getStoreSwimRings', {}, false).then(res => this.swimRingList = res.result);

    this.formGroup.get('reserveHour').valueChanges.subscribe(e => {
      if (e) {
        let newHour = this.format.transform(e, 'yyyy-MM-dd HH:mm').split(' ')[1];
        this.formGroup.patchValue({
          rHour: newHour.split(':')[0],
          rMinute: newHour.split(':')[1]
        })
      }
    });

    /* ------------------ 获取当前系统的预约时间 ------------------ */
    this.http.post('/reserve/getResetveDate', {}, false).then(res => this.formGroup.patchValue({
      reserveHour: new Date(res.result),
      reserveDate: new Date(res.result)
    }));
  }

<<<<<<< HEAD
  @DrawerSave('/reserve/createReserve') save: () => Promise<boolean>;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/reserve/createReserve') save: () => void;
>>>>>>> upgrade


  _disabledDate(current: Date): boolean {
    return current && current.getTime() < Date.now();
  }
  _disabledHours(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7]
  }

}
