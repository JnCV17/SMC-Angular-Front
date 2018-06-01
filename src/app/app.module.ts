import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { SMCModule } from './smc/smc.module';

import { AppComponent } from './app.component';

import { ProgramsService } from './services/programs.service';
import { OutcomeService } from './services/outcome.service';
import { UserService } from './services/user.service';
import { PlanAssessmentService } from './services/plan-assessment.service';
import { AuthService } from './services/auth.service';
import { MethodService } from './services/method.service';

import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { AdminComponent } from './admin/admin.component';

import { SMCComponent } from './smc/smc.component';

import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SMCModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    MyDatePickerModule,
  ],
  providers: [ProgramsService,OutcomeService,PlanAssessmentService,UserService,AuthService,MethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
