import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './Core/Core.module';
import { HomeModule } from './Home/Home.module';
import { TrainsModule } from './Trains/Trains.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from './Routes/Routes.module';
import { DataTablesModule } from 'angular-datatables';
import { SchedulesModule } from './Schedules/Schedules.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UsersModule } from './Accounts/Accounts.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),


    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    }),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

    CoreModule,
    TrainsModule,
    RoutesModule,
    HomeModule,
    SchedulesModule,
    UsersModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
