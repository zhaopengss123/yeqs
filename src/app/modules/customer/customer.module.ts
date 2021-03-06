import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRelaxModule } from '../../ng-relax/ng-relax.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { PotentialComponent } from './potential/potential.component';
import { NewinformationComponent } from './newinformation/newinformation.component';
import { NointentionComponent } from './nointention/nointention.component';
import { PreviewCustomerComponent } from './preview/preview.component';
import { GetMobileDirective } from './get-mobile.directive';
import { NewinformationCanDeactivate } from './newinformation/newinfomation.guard';
import { ListComponent } from './list/list.component';
import { PaycardComponent } from './paycard/paycard.component';
import { UpdateComponent } from './list/update/update.component';
import { AppointComponent } from './list/appoint/appoint.component';
import { ConsumptionsComponents } from './settlement/consumptions/consumptions.component';
import { ConsumptionComponent } from './list/consumption/consumption.component';
import { ConstructionComponent } from './list/construction/construction.component';
import { AddIntegralComponent } from './list/add-integral/add-integral.component';
import { ExchangeComponent } from './list/exchange/exchange.component';
import { ImportComponent } from './list/import/import.component';
import { SettlementComponent } from './settlement/settlement.component';
import { AlbumComponent } from './list/album/album.component';
import { ViserModule } from 'viser-ng';
import { UpclassComponent } from './settlement/upclass/upclass.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgRelaxModule,
    ViserModule
  ],
  declarations: [PotentialComponent, NewinformationComponent, NointentionComponent, ConsumptionsComponents, PreviewCustomerComponent, GetMobileDirective, ListComponent, PaycardComponent, AlbumComponent, AppointComponent, ConsumptionComponent, ConstructionComponent, AddIntegralComponent, ExchangeComponent, ImportComponent, SettlementComponent, UpdateComponent, UpclassComponent],
  providers: [NewinformationCanDeactivate],
  exports: [ PreviewCustomerComponent, GetMobileDirective ],
  entryComponents: [AppointComponent, ConstructionComponent, ConsumptionComponent, ConsumptionsComponents,  UpdateComponent, AddIntegralComponent, ExchangeComponent, ImportComponent, AlbumComponent]
})
export class CustomerModule { }
