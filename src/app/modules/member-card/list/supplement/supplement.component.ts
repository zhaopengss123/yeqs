import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer.decorator';
import { HttpService } from 'src/app/ng-relax/services/http.service';
=======
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
>>>>>>> upgrade

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
  styleUrls: ['./supplement.component.scss']
})
export class SupplementComponent implements OnInit {

  @Input() id;

  @Input() memberCardInfo;

  formGroup: FormGroup

  constructor(
    private http: HttpService,
<<<<<<< HEAD
    private fb: FormBuilder = new FormBuilder()
=======
    private fb: FormBuilder = new FormBuilder(),
    private drawerRef: NzDrawerRef
>>>>>>> upgrade
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [this.id],
      type: [0],
      cardCode: [{ value: this.memberCardInfo.cardCode, disabled: true }],
      memberName: [{ value: this.memberCardInfo.memberName, disabled: true }],
      newSerial: [, [Validators.required]],
      newCode: [, [Validators.required]]
    });
  }

<<<<<<< HEAD
  @DrawerSave('/memberCard/replaceCard') save: () => Promise<boolean>;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/memberCard/replaceCard') save: () => void;
>>>>>>> upgrade

}
