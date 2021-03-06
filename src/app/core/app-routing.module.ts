<<<<<<< HEAD
import { AuthGuardService } from './../ng-relax/services/auth-guard.service';
import { HomeComponent } from './../base/home/home.component';
import { UserInfoResolver } from './userInfo-resolver.service';
import { BaseComponent } from '../base/base.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
>>>>>>> upgrade

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: BaseComponent,
    resolve: { userInfo: UserInfoResolver },
    children: [
      {
        path: '',
        data: { title: '工作台', hideTitle: true },
        component: HomeComponent
      },
      {
        path: 'customer',
        data: { title: '客户管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/customer/customer.module#CustomerModule'
      },
      {
        path: 'marketing',
        data: { title: '营销管理' },
        loadChildren: 'src/app/modules/marketing/marketing.module#MarketingModule'
      },
      {
        path: 'account',
        data: { title: '账户管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/account/account.module#AccountModule'
      },
      {
        path: 'passcard',
        data: { title: '全国通卡' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/passcard/passcard.module#PasscardModule'
      },
      {
        path: 'interaction',
        data: { title: '用户互动' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/interaction/interaction.module#InteractionModule'
      },
      {
        path: 'wechat',
        data: { title: '微信' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/wechat/wechat.module#WechatModule'
      },
      {
        path: 'payment',
        data: { title: '充值中心' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/payment/payment.module#PaymentModule'
      },
      {
        path: 'visit',
        data: { title: '回访管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/visit/visit.module#VisitModule'
      },
      {
        path: 'membercard',
        data: { title: '会员卡管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/member-card/member-card.module#MemberCardModule'
      },
      {
        path: 'appointment',
        data: { title: '预约管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/appointment/appointment.module#AppointmentModule'
      },
      {
        path: 'consumption',
        data: { title: '消费管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/consumption/consumption.module#ConsumptionModule'
      },
      {
        path: 'integral',
        data: { title: '积分管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/integral/integral.module#IntegralModule'
      },
      {
        path: 'message',
        data: { title: '消息管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/message/message.module#MessageModule'
      },
      {
        path: 'analysis',
        data: { title: '经营分析' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/analysis/analysis.module#AnalysisModule'
      },
          
      {
        path: 'configuration',
        data: { title: '基础资料' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/configuration/configuration.module#ConfigurationModule'
      },
      {
        path: 'humanresources',
        data: { title: '人力资源' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/human-resources/human-resources.module#HumanResourcesModule'
      },
      {
        path: 'commodity',
        data: { title: '商品管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/commodity/commodity.module#CommodityModule'
      },
      {
        path: 'schedule',
        data: { title: '排课过程' },
        loadChildren: 'src/app/modules/schedule/schedule.module#ScheduleModule'
      },
      {
        path: 'coursemanagement',
        data: { title: '课程管理' },
        loadChildren: 'src/app/modules/coursemanagement/coursemanagement.module#CoursemanagementModule'
      },
      {
        path: 'currseting',
        data: { title: '排课基础设置' },
        loadChildren: 'src/app/modules/currseting/currseting.module#CurrsetingModule'
      },

      {
        path: 'writeoff',
        data: { title: '核销管理' },
        canLoad: [ AuthGuardService ],
        loadChildren: 'src/app/modules/writeoff/writeoff.module#WriteoffModule'
      }
    ]
  },
  {
    path: 'system',
    data: { title: '系统管理' },
=======
    redirectTo: '/home/index',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: { reuse: true },
    loadChildren: 'src/app/base/base.module#BaseModule'
  },
  {
    path: 'login',
    data: { reuse: true },
    loadChildren: 'src/app/modules/login/login.module#LoginModule'
  },
  {
    path: 'system',
>>>>>>> upgrade
    loadChildren: 'src/app/modules/system/system.module#SystemModule'
  },
  {
    path: '**',
    redirectTo: '/system/error/404',
    pathMatch: 'full'
  }
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes)],
=======
  imports: [RouterModule.forRoot(routes, { useHash: true })],
>>>>>>> upgrade
  exports: [RouterModule]
})
export class AppRoutingModule { }
