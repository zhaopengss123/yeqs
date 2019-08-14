<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { NgRelaxModule } from '../../ng-relax/ng-relax.module';

@NgModule({
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgRelaxModule
  ],
  declarations: [AnalysisComponent]
=======
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis.component';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';

@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgRelaxModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/home/analysis/list',
        pathMatch: 'full'
      },
      {
      path: 'list',
      component: AnalysisComponent
      }
    ])
  ]
>>>>>>> upgrade
})
export class AnalysisModule { }
