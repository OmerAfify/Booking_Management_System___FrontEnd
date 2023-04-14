import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsTableComponent } from './trains-table/trains-table.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { AddNewTrainComponent } from './add-new-train/add-new-train.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateTrainComponent } from './update-train/update-train.component';



@NgModule({
  declarations: [
    TrainsTableComponent,
    AddNewTrainComponent,
    UpdateTrainComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:"Trains", component:TrainsTableComponent},
     {path:"AddTrain", component:AddNewTrainComponent},
     {path:"UpdateTrain/:id", component:UpdateTrainComponent}])
  ],
  exports : [RouterModule]
})
export class TrainsModule { }
