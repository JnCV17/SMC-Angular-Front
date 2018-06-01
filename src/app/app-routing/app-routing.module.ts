import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './../admin/admin.component';
import { SMCComponent } from './../smc/smc.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'auth/signin', pathMatch: 'full' },
      { path: 'smc', component: SMCComponent },
      { path:'**',pathMatch:'full',redirectTo:'home'}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
