import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsourceComponent } from './csource.component';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CsourceComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      {
        path: '',
        component: CsourceComponent
      }
    ])
  ]
})
export class CsourceModule { }
