import { BaseComponent } from './base.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../ng-relax/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'index',
        data: { title: '首页', noReuse: true },
        loadChildren: 'src/app/modules/index/index.module#IndexModule'
      },
      {
        path: 'password',
        data: { title: '修改密码', noReuse: true },
        loadChildren: 'src/app/modules/password/password.module#PasswordModule'
      },
      {
        path: 'appointment',
        data: { noReuse: true },
        children: [
          {
            path: 'list',
            data: { title: '预约列表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/appointment/list/list.module#ListModule'
          },
          {
            path: 'teacherlist',
            data: { title: '泳师专用列表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/appointment/teacher/teacher.module#TeacherModule'
          },
        ]
      },
      {
        path: 'visit',
        data: { noReuse: true },
        children: [
          {
            path: 'clue',
            data: { title: '线索回访' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/visit/clue/clue.module#ClueModule'
          },
          {
            path: 'nocard',
            data: { title: '未办卡回访' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/visit/nocard/nocard.module#NocardModule'
          },
          {
            path: 'member',
            data: { title: '会员回访' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/visit/member/member.module#MemberModule'
          }
        ]
      },
      {
        path: 'customer',
        data: { noReuse: true },
        children: [
          {
            path: 'list',
            data: { title: '客户列表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/customer/list/list.module#ListModule'
          },
          {
            path: 'nointention',
            data: { title: '无意向客户' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/customer/nointention/nointention.module#NointentionModule'
          },
          {
            path: 'settlement',
            data: { title: '上课结算' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/customer/settlement/settlement.module#SettlementModule'
          }
        ]
      },
      {
        path: 'membercard',
        data: { noReuse: true },
        children: [
          {
            path: 'list',
            data: { title: '会员卡列表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/member-card/list/list.module#ListModule'
          },
          {
            path: 'changelog',
            data: { title: '卡变更日志' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/member-card/change-log/change-log.module#ChangeLogModule'
          },
          {
            path: 'patchlog',
            data: { title: '补卡日志' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/member-card/patch-log/patch-log.module#PatchLogModule'
          },
          {
            path: 'cardtype',
            data: { title: '卡类型管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/member-card/card-type/card-type.module#CardTypeModule'
          },
          {
            path: 'cardbusiness',
            data: { title: '卡业务管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/member-card/card-business/card-business.module#CardBusinessModule'
          },
          {
            path: 'integrallist',
            data: { title: '会员积分列表' },
            canLoad: [AuthGuardService],
            loadChildren: 'src/app/modules/member-card/integral/integral.module#IntegralModule'
          },
          {
            path: 'integralchange',
            data: { title: '积分变更日志' },
            canLoad: [AuthGuardService],
            loadChildren: 'src/app/modules/member-card/integral-change/integral-change.module#IntegralChangeModule'
          },
          {
            path: 'integralexchange',
            data: { title: '积分兑换日志' },
            canLoad: [AuthGuardService],
            loadChildren: 'src/app/modules/member-card/integral-exchange/integral-exchange.module#IntegralExchangeModule'
          },
        ]
      },
      {
        path: 'consumption',
        data: { noReuse: true },
        children: [
          {
            path: 'list',
            data: { title: '消费列表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/consumption/list/list.module#ListModule'
          },
          {
            path: 'revoke',
            data: { title: '撤销记录' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/consumption/revoke/revoke.module#RevokeModule'
          },
          {
            path: 'satisfaction',
            data: { title: '满意度记录' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/consumption/satisfaction/satisfaction.module#SatisfactionModule'
          },
        ]
      },
      {
        path: 'message',
        data: { noReuse: true },
        children: [
          {
            path: 'sendout',
            data: { title: '短信发送' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/message/sendout/sendout.module#SendoutModule'
          },
          {
            path: 'template',
            data: { title: '模板配置' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/message/template/template.module#TemplateModule'
          },
          {
            path: 'sendlog',
            data: { title: '发送日志' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/message/sendlog/sendlog.module#SendlogModule'
          },
        ]
      },
      {
        path: 'payment',
        data: { noReuse: true },
        children: [
          {
            path: 'pay',
            data: { title: '在线充值' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/payment/pay/pay.module#PayModule'
          },
          {
            path: 'record',
            data: { title: '充值记录' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/payment/record/record.module#RecordModule'
          }
        ]
      },
      {
        path: 'analysis',
        data: { title: '经营分析', noReuse: true },
        loadChildren: 'src/app/modules/analysis/analysis.module#AnalysisModule'
      },
      {
        path: 'coursemanagement',
        data: { noReuse: true },
        children: [
          {
            path: 'curriculumtype',
            data: { title: '课程类型设置' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/curriculumtype/curriculumtype.module#CurriculumtypeModule'
          },
          {
            path: 'currcategorytype',
            data: { title: '课程类别设置' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/currcategory/currcategory.module#CurrcategoryModule'
          },
          {
            path: 'teacher',
            data: { title: '教师学员课表' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/teacher/teacher.module#TeacherModule'
          },
          {
            path: 'intelligent',
            data: { title: '智能排课' },
            canLoad: [AuthGuardService],
            loadChildren: 'src/app/modules/coursemanagement/intelligent/intelligent.module#IntelligentModule'
          },
          {
            path: 'list',
            data: { title: '课程管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/list/list.module#ListModule'
          },
          {
            path: 'timetable',
            data: { title: '课表展示' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/timetable/timetable.module#TimetableModule'
          },
          {
            path: 'adjustment',
            data: { title: '课表调整' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/coursemanagement/adjustment/adjustment.module#AdjustmentModule'
          }
        ]
      },
      {
        path: 'humanresources',
        data: { noReuse: true },
        children: [
          {
            path: 'positionsalary',
            data: { title: '职位管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/humanresources/positionsalary/positionsalary.module#PositionsalaryModule'
          },
          {
            path: 'department',
            data: { title: '部门管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/humanresources/department/department.module#DepartmentModule'
          },
          {
            path: 'staff',
            data: { title: '员工管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/humanresources/staff/staff.module#StaffModule'
          },
          {
            path: 'bonussales',
            data: { title: '销售提成' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/humanresources/bonussales/bonussales.module#BonussalesModule'
          },
          {
            path: 'achievements',
            data: { noReuse: true },
            children: [
              {
                path: 'checkwork',
                data: { title: '考勤情况' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/checkwork/checkwork.module#CheckworkModule'
              },
              {
                path: 'deduction',
                data: { title: '扣分管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/deduction/deduction.module#DeductionModule'
              },
              {
                path: 'extract',
                data: { title: '提成明细' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/extract/extract.module#ExtractModule'
              },
              {
                path: 'statistics',
                data: { title: '提成统计' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/statistics/statistics.module#StatisticsModule'
              },
              {
                path: 'satisfaction',
                data: { title: '满意度管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/satisfaction/satisfaction.module#SatisfactionModule'
              },
              {
                path: 'commission',
                data: { title: '提成阶梯管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/achievements/commission/commission.module#CommissionModule'
              }
            ]
          },
          {
            path: 'wage',
            data: { noReuse: true },
            children: [
              {
                path: 'assessment',
                data: { title: '考核项目配置' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/wage/assessment/assessment.module#AssessmentModule'
              },
              {
                path: 'adjustment',
                data: { title: '单月手动调整' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/wage/adjustment/adjustment.module#AdjustmentModule'
              },
              {
                path: 'inquire',
                data: { title: '单月工资查询' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/humanresources/wage/inquire/inquire.module#InquireModule'
              }
            ]
          }
        ]
      },
      {
        path: 'configuration',
        data: { noReuse: true },
        children: [
          {
            path: 'base',
            data: { title: '基础设置' },
            loadChildren: 'src/app/modules/configuration/base/base.module#BaseModule'
          },
          {
            path: 'community',
            data: { title: '社区管理' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/configuration/community/community.module#CommunityModule'
          },
          {
            path: 'csource',
            data: { title: '客户来源' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/configuration/csource/csource.module#CsourceModule'
          },
          {
            path: 'commodity',
            data: { noReuse: true },
            children: [
              {
                path: 'list',
                data: { title: '商品管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/configuration/commodity/list/list.module#ListModule'
              },
              {
                path: 'stock',
                data: { title: '库存管理' },
                canLoad: [AuthGuardService],
                loadChildren: 'src/app/modules/configuration/commodity/stock/stock.module#StockModule'
              }
            ]
          },
          {
            path: 'account',
            data: { noReuse: true },
            children: [
              {
                path: 'number',
                data: { title: '账号管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/configuration/account/number/number.module#NumberModule'
              },
              {
                path: 'role',
                data: { title: '角色管理' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/configuration/account/role/role.module#RoleModule'
              },
              {
                path: 'loginlog',
                data: { title: '登录日志' },
                canLoad: [ AuthGuardService ],
                loadChildren: 'src/app/modules/configuration/account/log/log.module#LogModule'
              },
            ]
          },
          {
            path: 'timetableperiod',
            data: { title: '排课时段' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/configuration/timetableperiod/timetableperiod.module#TimetableperiodModule'
          },
          {
            path: 'classroom',
            data: { title: '上课教室' },
            canLoad: [ AuthGuardService ],
            loadChildren: 'src/app/modules/configuration/classroom/classroom.module#ClassroomModule'
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
