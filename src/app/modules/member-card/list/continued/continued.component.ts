import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { DrawerSave } from '../../../../ng-relax/decorators/drawer.decorator';
=======
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
>>>>>>> upgrade

@Component({
  selector: 'app-continued',
  templateUrl: './continued.component.html',
  styleUrls: ['./continued.component.scss']
})
export class ContinuedComponent implements OnInit {

  @Input() id;

  @Input() memberCardInfo;

  cardTypeList: any[] = [];
  salesList: any[] = [];

  formGroup: FormGroup;

  constructor(
    private http: HttpService,
<<<<<<< HEAD
    private fb: FormBuilder = new FormBuilder()
=======
    private fb: FormBuilder = new FormBuilder(),
    private drawerRef: NzDrawerRef
>>>>>>> upgrade
  ) {
    this.http.post('/cardTypeManagement/findList', {}, false).then(res => this.cardTypeList = res.result);
    this.http.post('/member/getStoreSales', {}, false).then(res => this.salesList = res.result);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [this.id],
      cardCode: [{ value: this.memberCardInfo.cardCode, disabled: true }],
      memberName: [{ value: this.memberCardInfo.memberName, disabled: true }],
      times: [{ value: this.memberCardInfo.times, disabled: true }],
      freeTimes: [{ value: this.memberCardInfo.freeTimes, disabled: true }],
      balance: [{ value: this.memberCardInfo.balance, disabled: true }],
      expireDate: [{ value: this.memberCardInfo.expireDate, disabled: true }],
      changeCardType: [, [Validators.required]],
      salesId: [, [Validators.required]]
    });
  }

<<<<<<< HEAD
  @DrawerSave('/memberCard/continueCard') save: any;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/memberCard/continueCard') save: () => void;
>>>>>>> upgrade

}
