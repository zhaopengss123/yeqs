import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ViserModule } from 'viser-ng';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';

@NgModule({
  declarations: [TipsComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    NgZorroAntdModule,
    ViserModule,
    RouterModule.forChild([{
      path: '',
      component: TipsComponent
    }])
  ]
})
export class TipsModule { }
