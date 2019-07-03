import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NointentionComponent } from './nointention.component';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NointentionComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    NgRelaxModule,
    RouterModule.forChild([{
      path: '',
      component: NointentionComponent
    }])
  ]
})
export class NointentionModule { }
