import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { SpinerComponent } from './spiner/spiner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './share/header/header.component';



@NgModule({
  declarations: [LandingComponent, DeskboardComponent, SpinerComponent, PagenotfoundComponent, HeaderComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    MaterialModule,
    NgbModule,


  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingModule { }
