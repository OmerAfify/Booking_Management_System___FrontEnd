import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddNewRouteComponent } from './add-new-route/add-new-route.component';
import { RoutesTableComponent } from './routes-table/routes-table.component';
import { UpdateRouteComponent } from './update-route/update-route.component';
import { CoreModule } from '../Core/Core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RoutesTableComponent,AddNewRouteComponent,UpdateRouteComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
     RouterModule.forChild([{path:"Routes", component:RoutesTableComponent},
    {path:"AddRoute", component:AddNewRouteComponent},
    {path:"UpdateRoute/:id", component:UpdateRouteComponent}])
 ],
 exports : [RouterModule]
})
export class RoutesModule { }
