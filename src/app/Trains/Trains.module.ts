import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsTableComponent } from './trains-table/trains-table.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { AddNewTrainComponent } from './add-new-train/add-new-train.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrainsTableComponent,
    AddNewTrainComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:"Trains", component:TrainsTableComponent},
     {path:"AddTrain", component:AddNewTrainComponent}])
  ],
  exports : [RouterModule]
})
export class TrainsModule { }
