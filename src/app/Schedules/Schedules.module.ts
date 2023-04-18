import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesTableComponent } from './shedules-table/schedules-table.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { AddNewScheduleComponent } from './add-new-shedule/add-new-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

 import { MatDatepickerModule } from '@angular/material/datepicker';

 import { MatInputModule } from '@angular/material/input';
 import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';

import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';


@NgModule({
  declarations: [
    SchedulesTableComponent,
    AddNewScheduleComponent,
    UpdateScheduleComponent
   ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    DataTablesModule,

     MatDatepickerModule,
     MatInputModule,
   
     NgxMatDatetimePickerModule,
     NgxMatNativeDateModule,

    RouterModule.forChild([{path:"Schedules", component:SchedulesTableComponent},
     {path:"AddSchedule", component:AddNewScheduleComponent},
     {path:"UpdateSchedule/:id", component:UpdateScheduleComponent}
    ])
  ],
  exports : [RouterModule]
})
export class SchedulesModule { }
