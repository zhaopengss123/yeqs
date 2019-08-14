import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { DrawerSave } from '../../../../ng-relax/decorators/drawer.decorator';
=======
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
import { NzDrawerRef } from 'ng-zorro-antd';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
>>>>>>> upgrade

@Component({
  selector: 'app-add-integral',
  templateUrl: './add-integral.component.html',
  styleUrls: ['./add-integral.component.scss']
})
export class AddIntegralComponent implements OnInit {

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
      name: [{ value: this.userInfo.name, disabled: true }, [Validators.required]],
      memberPoint: [, [Validators.required]],
      comment: []
    })
  }

<<<<<<< HEAD

  @DrawerSave('/member/saveMemberPoint') save: () => Promise<boolean>;
=======
  @DrawerClose() close: () => void;
  saveLoading: boolean;
  @DrawerSave('/member/saveMemberPoint') save: () => void;
>>>>>>> upgrade

}
