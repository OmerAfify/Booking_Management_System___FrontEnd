import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { UsersTableComponent } from './users-table/users-table.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    UsersTableComponent,
    AddNewUserComponent,
   ],
  imports: [
    CommonModule,
    CoreModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    DataTablesModule,


    RouterModule.forChild([{path:"Accounts", component:UsersTableComponent},
     {path:"AddAccount", component:AddNewUserComponent}
//     {path:"UpdateTrain/:id", component:UpdateTrainComponent}
])
  ],
  exports : [RouterModule]
})
export class UsersModule { }
