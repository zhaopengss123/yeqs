<<<<<<< HEAD
import { NgRelaxModule } from '../../ng-relax/ng-relax.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitRoutingModule } from './visit-routing.module';
import { ClueComponent } from './clue/clue.component';
import { NocardComponent } from './nocard/nocard.component';
import { MemberComponent } from './member/member.component';
import { PreviewComponent } from './preview/preview.component';
import { NewinformationComponent } from './newinformation/newinformation.component';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
  imports: [
    CommonModule,
    VisitRoutingModule,
    NgRelaxModule,
    CustomerModule
  ],
  declarations: [ClueComponent, NocardComponent, MemberComponent, PreviewComponent, NewinformationComponent],
  entryComponents: [PreviewComponent]
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './public/preview/preview.component';
import { UpdateComponent } from './public/update/update.component';
//import { UpdateComponent } from './clue/update/update.component';

import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { VisitComponent } from './public/visit/visit.component';

@NgModule({
  declarations: [PreviewComponent, UpdateComponent, VisitComponent],
  imports: [
    CommonModule,
    NgRelaxModule,
    NgZorroAntdModule
  ],
  entryComponents: [PreviewComponent, UpdateComponent, VisitComponent]
>>>>>>> upgrade
})
export class VisitModule { }
