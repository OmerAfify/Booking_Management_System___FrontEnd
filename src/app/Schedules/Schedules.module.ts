import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulesTableComponent } from './shedules-table/schedules-table.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { AddNewScheduleComponent } from './add-new-shedule/add-new-schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    SchedulesTableComponent,
    AddNewScheduleComponent
   ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forChild([{path:"Schedules", component:SchedulesTableComponent},
     {path:"AddSchedule", component:AddNewScheduleComponent},
     //{path:"UpdateTrain/:id", component:UpdateTrainComponent}
    ])
  ],
  exports : [RouterModule]
})
export class SchedulesModule { }
