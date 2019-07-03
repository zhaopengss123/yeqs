import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { RouterModule } from '@angular/router';
import { PatchLogComponent } from './patch-log.component';

@NgModule({
  declarations: [PatchLogComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgRelaxModule,
    RouterModule.forChild([
      {
        path: '',
        component: PatchLogComponent
      }
    ])
  ]
})
export class PatchLogModule { }
