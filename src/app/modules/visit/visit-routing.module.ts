import { MemberComponent } from './member/member.component';
import { NocardComponent } from './nocard/nocard.component';
import { AuthGuardService } from '../../ng-relax/services/auth-guard.service';
import { ClueComponent } from './clue/clue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewCustomerComponent } from 'src/app/modules/customer/preview/preview.component';
import { NewinformationComponent } from './newinformation/newinformation.component';

const routes: Routes = [
  {
    path: 'clue',
    data: { title: '线索回访' },
    component: ClueComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'nocard',
    data: { title: '未办卡回访' },
    component: NocardComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'member',
    data: { title: '会员回访' },
    component: MemberComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'newinfo/:id',
    data: { title: '新建潜在客户' },
    component: NewinformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
