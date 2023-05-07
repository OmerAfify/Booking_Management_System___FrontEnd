import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../Core/Core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { UsersTableComponent } from './users-table/users-table.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    UsersTableComponent,
    AddNewUserComponent,
    UpdateUserComponent

   ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    DataTablesModule,


    RouterModule.forChild([{path:"Accounts", component:UsersTableComponent},
     {path:"AddAccount", component:AddNewUserComponent},
   {path:"UpdateUser/:email", component:UpdateUserComponent}
])
  ],
  exports : [RouterModule]
})
export class UsersModule { }
