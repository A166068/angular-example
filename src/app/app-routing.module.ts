import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegrationsComponent } from 'src/app/integrations/integrations.component';
import { HomeComponent } from 'src/app/home/home.component';
import { DataSourceComponent } from 'src/app/data-source/data-source.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'data-source', component: DataSourceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
