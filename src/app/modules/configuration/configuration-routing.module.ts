import { CommunityComponent } from './community/community.component';
import { SwimmingCircleComponent } from './swimming-circle/swimming-circle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { AuthGuardService } from 'src/app/ng-relax/services/auth-guard.service';
import { CsourceComponent } from './csource/csource.component';

const routes: Routes = [
  {
    path: 'setting',
    data: { title: '基础配置' },
    component: SettingComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'swimming',
    data: { title: '泳圈管理' },
    component: SwimmingCircleComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'community',
    data: { title: '社区管理' },
    component: CommunityComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'csource',
    data: { title: '客户来源' },
    component: CsourceComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
