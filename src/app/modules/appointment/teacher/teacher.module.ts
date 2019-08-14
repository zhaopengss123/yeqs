import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgRelaxModule,
    ListModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    }])
  ]
})
export class TeacherModule { }
