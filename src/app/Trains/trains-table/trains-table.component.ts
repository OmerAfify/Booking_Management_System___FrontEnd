import { Component, OnInit } from '@angular/core';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-trains-table',
  templateUrl: './trains-table.component.html',
  styleUrls: ['./trains-table.component.scss']
})
export class TrainsTableComponent implements OnInit {

trainsList : ITrain[];

  constructor(private _trainService : TrainsService) { }

  ngOnInit(): void {
    this.getAllTrains();
  }

  getAllTrains(){
    this._trainService.getAllTrains().subscribe((trains)=>{
      this.trainsList = trains;
    })
  }

}
