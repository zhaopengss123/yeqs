<<<<<<< HEAD
import { DrawerSave } from './../../../../ng-relax/decorators/drawer.decorator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../../../../ng-relax/services/http.service';
import { Component, OnInit, Input } from '@angular/core';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
>>>>>>> upgrade

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit {

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
      cardCode: [{ value: this.memberCardInfo.cardCode, disabled: true }],
      memberName: [{ value: this.memberCardInfo.memberName, disabled: true }],
      reopenDate: [, [Validators.required]]
    });
  }

<<<<<<< HEAD
  @DrawerSave('/memberCard/pauseCard') save: () => Promise<boolean>;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/memberCard/pauseCard') save: () => void;
>>>>>>> upgrade

}
