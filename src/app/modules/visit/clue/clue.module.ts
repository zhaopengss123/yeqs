import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgRelaxModule } from './../../../ng-relax/ng-relax.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClueComponent } from './clue.component';
import { VisitModule } from '../visit.module';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [ClueComponent, UpdateComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    NgZorroAntdModule,
    VisitModule,
    RouterModule.forChild([{
      path: '',
      component: ClueComponent
    }])
  ],
  entryComponents: [UpdateComponent]

})
export class ClueModule { }
