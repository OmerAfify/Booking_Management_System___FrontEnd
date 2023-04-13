import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainsTableComponent } from './trains-table/trains-table.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';



@NgModule({
  declarations: [
    TrainsTableComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([{path:"Trains", component:TrainsTableComponent}])
  ],
  exports : [RouterModule]
})
export class TrainsModule { }
