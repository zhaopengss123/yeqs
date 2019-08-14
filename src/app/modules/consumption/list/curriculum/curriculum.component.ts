import { HttpService } from 'src/app/ng-relax/services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { DrawerSave } from '../../../../ng-relax/decorators/drawer.decorator';
=======
import { DrawerSave } from 'src/app/ng-relax/decorators/drawer/save.decorator';
>>>>>>> upgrade

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class UpdateCurriculumComponent implements OnInit {

  @Input() id;

  @Input() recordInfo;

  formGroup: FormGroup;

  constructor(
    private http: HttpService,
    private fb: FormBuilder = new FormBuilder()
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [this.id],
      cardCode: [{ value: this.recordInfo.cardCode, disabled: true }],
      memberName: [{ value: this.recordInfo.memberName, disabled: true }],
      memberNick: [{ value: this.recordInfo.memberNick, disabled: true }],
      swimTeacher: [{ value: this.recordInfo.swimTeacher, disabled: true }],
      type: [, [Validators.required]],
      remarks: []
    })
  }

<<<<<<< HEAD
  @DrawerSave('') save: () => Promise<boolean>;
=======
  @DrawerSave('') save: () => void;
>>>>>>> upgrade

}
