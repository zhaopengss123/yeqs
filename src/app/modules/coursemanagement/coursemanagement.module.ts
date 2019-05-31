import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRelaxModule } from './../../ng-relax/ng-relax.module';
import { ColorPickerModule } from 'ngx-color-picker';

import { CoursemanagementRoutingModule } from './coursemanagement-routing.module';
import { CurriculumtypeComponent } from './curriculumtype/curriculumtype.component';
import { CurrcategoryComponent } from './currcategory/currcategory.component';
import { ListeditorComponent } from './listeditor/listeditor.component';

@NgModule({
  imports: [
    CommonModule,
    CoursemanagementRoutingModule,
    NgRelaxModule,
    ColorPickerModule
  ],
  declarations: [CurriculumtypeComponent, CurrcategoryComponent, ListeditorComponent]
})
export class CoursemanagementModule { }
