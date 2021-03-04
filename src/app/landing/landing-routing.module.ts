import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpinerComponent } from './spiner/spiner.component';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [{ path: '', component: DeskboardComponent }, {path:'404', component: PagenotfoundComponent},  {path: '**', redirectTo: '/404'} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
