import { Component, OnInit } from '@angular/core';
import { DrawerClose } from 'src/app/ng-relax/decorators/drawer/close.decorator';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GetList } from 'src/app/ng-relax/decorators/getList.decorator';
import { HttpService } from 'src/app/ng-relax/services/http.service';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {

  formGroup: FormGroup;

  @GetList('/bonusSatisfaction/getTeacherRanks') teacherRankList: any;


  constructor(
    private http: HttpService,
    private fb: FormBuilder = new FormBuilder,
    private drawerRef: NzDrawerRef
  ) {
    typeof this.teacherRankList === 'function' && this.teacherRankList();
    this.http.post('/satisfaction/selectPosition', {
    }, false).then(res => {
      this.teacherRankList = res.result;
    });
    this.formGroup = this.fb.group({
      rankId: [, [Validators.required]],
      rank2: [, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      rank4: [, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    })
  }

  ngOnInit() {
  }

  saveLoading: boolean;
  save() {
    if (this.formGroup.invalid) {
      for (let i in this.formGroup.controls) {
        this.formGroup.controls[i].markAsDirty();
        this.formGroup.controls[i].updateValueAndValidity();
      }
    } else {

      this.saveLoading = true;
      console.log(this.formGroup.get('rank1'),this.formGroup.get('rank2'),this.formGroup.get('rank3'),this.formGroup.get('rank4'));
      let params = {
        rankId: this.formGroup.get('rankId').value,
        rank: [ this.formGroup.get('rank2').value,  this.formGroup.get('rank4').value] //this.formGroup.get('rank3').value,this.formGroup.get('rank1').value,
      };
      this.http.post('/bonusSatisfaction/addBonusSatisfaction', {
        paramJson: JSON.stringify(params)
      }).then(res => {
        this.saveLoading = false;
        this.drawerRef.close(true);
      }).catch(err => this.saveLoading = false);
    }
  }

  @DrawerClose() close: () => void;

}
