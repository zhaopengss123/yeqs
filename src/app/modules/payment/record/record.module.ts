import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgRelaxModule } from 'src/app/ng-relax/ng-relax.module';
import { AutographService } from '../autograph.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NgRelaxModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordComponent
      }
    ]),
  ],
  providers: [AutographService]
})
export class RecordModule { }
