import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-trains-table',
  templateUrl: './trains-table.component.html'
})
export class TrainsTableComponent implements OnInit {

trainsList : ITrain[];

  constructor(private _trainService : TrainsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllTrains();
  }

  getAllTrains(){
    this._trainService.getAllTrains().subscribe((trains)=>{
      this.trainsList = trains;
    })
  }

  deleteTrain(id:number){
    this._trainService.DeleteTrain(id).subscribe((response)=>{
      this.toastr.error(`train ${id} is removed successfully!` );
        
      this.getAllTrains();
    })
  }

}
