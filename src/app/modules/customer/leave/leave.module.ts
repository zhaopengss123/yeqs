import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveComponent } from './leave.component';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LeaveComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    RouterModule.forChild([{
      path: '',
      component: LeaveComponent
    }])
  ]
})
export class LeaveModule { }
