import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { SchedulesService } from 'src/app/Core/Services/schedules.services';
import { ISchedule } from 'src/app/Shared/Interfaces/ISchedule';

@Component({
  selector: 'app-schedules-table',
  templateUrl: './schedules-table.component.html'
})
export class SchedulesTableComponent implements OnInit,OnDestroy {

schedulesList : ISchedule[];

scheduleIdToDelete:number;

dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _scheduleService : SchedulesService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  getAllSchedules(){
    this._scheduleService.getAllSchedules().subscribe((schedules)=>{
      this.schedulesList = schedules;
      this.dtTrigger.next();
    })
  }

  deleteSchedule(id:number){
    this._scheduleService.DeleteSchedule(id).subscribe((response)=>{
      this.toastr.error(`Schedule ${id} is removed successfully!` );
        
      this.getAllSchedules();
    })
  }

  onDeleteSelected(id:number){
    this.scheduleIdToDelete = id;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
