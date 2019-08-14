<<<<<<< HEAD
=======
import { NgZorroAntdModule } from 'ng-zorro-antd';
>>>>>>> upgrade
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardDetailComponent } from './member-card-detail.component';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    NgRelaxModule
=======
    NgZorroAntdModule,
    NgRelaxModule,
>>>>>>> upgrade
  ],
  declarations: [MemberCardDetailComponent],
  exports: [MemberCardDetailComponent],
  entryComponents: [MemberCardDetailComponent]
})
export class MemberCardDetailModule { }
