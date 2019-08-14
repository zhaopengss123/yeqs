import { MemberCardDetailModule } from './../../public/member-card-detail/member-card-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { PreviewComponent } from './preview/preview.component';
import { ConsumptionComponent } from './consumption/consumption.component';

@NgModule({
  declarations: [ListComponent, PreviewComponent, ConsumptionComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgRelaxModule,
    MemberCardDetailModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    }])
  ],
  exports: [ListComponent, PreviewComponent, ConsumptionComponent],
  entryComponents: [PreviewComponent, ConsumptionComponent]
})
export class ListModule { }
