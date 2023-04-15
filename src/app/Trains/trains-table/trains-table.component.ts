import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-trains-table',
  templateUrl: './trains-table.component.html'
})
export class TrainsTableComponent implements OnInit,OnDestroy {

trainsList : ITrain[];

trainIdToDelete:number;

dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _trainService : TrainsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllTrains();
  }

  getAllTrains(){
    this._trainService.getAllTrains().subscribe((trains)=>{
      this.trainsList = trains;
      this.dtTrigger.next();
    })
  }

  deleteTrain(id:number){
    this._trainService.DeleteTrain(id).subscribe((response)=>{
      this.toastr.error(`train ${id} is removed successfully!` );
        
      this.getAllTrains();
    })
  }

  onDeleteSelected(id:number){
    this.trainIdToDelete = id;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
