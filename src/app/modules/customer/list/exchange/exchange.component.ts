import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/ng-relax/services/http.service';
<<<<<<< HEAD
import { DrawerSave } from '../../../../ng-relax/decorators/drawer.decorator';
=======
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
>>>>>>> upgrade

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  @Input() id;

  @Input() userInfo;

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
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      memberId: [this.id],
      name: [{value: this.userInfo.name, disabled: true}],
      nick: [{value: this.userInfo.nick, disabled: true}],
      sex: [{value: this.userInfo.sex, disabled: true}],
      monthAge: [{value: this.userInfo.monthAge, disabled: true}],
      babyType: [{value: this.userInfo.babyType, disabled: true}],
      communityName: [{value: this.userInfo.communityName, disabled: true}],
      exchangePoint: [, [Validators.required]],
      exchangeRemark: [, [Validators.required]],
    })
  }


<<<<<<< HEAD
  @DrawerSave('/member/redeem') save: () => Promise<boolean>;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/member/redeem') save: () => void;
>>>>>>> upgrade

}
