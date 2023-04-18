import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { scheduled } from 'rxjs';
import { RoutesService } from 'src/app/Core/Services/routes.service';
import { SchedulesService } from 'src/app/Core/Services/schedules.services';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { IAddRoute, IRoute } from 'src/app/Shared/Interfaces/IRoute';
import { IAddSchedule } from 'src/app/Shared/Interfaces/ISchedule';
import { ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-add-new-schedule',
  templateUrl: './add-new-schedule.component.html'
 
})
export class AddNewScheduleComponent implements OnInit {

 
  minDate= new Date();
  maxDate= new Date(this.minDate.getFullYear()+1,this.minDate.getMonth(), this.minDate.getDate());
  
 AddNewScheduleForm = new FormGroup({
  "date" : new FormControl(null,Validators.required),
  "trainId" : new FormControl(null,Validators.required),
  "routeId" : new FormControl(null,Validators.required),
  "firstClassPrice" : new FormControl(null,[Validators.required,Validators.min(1), Validators.max(10000)]),
  "secondClassPrice" : new FormControl(null,[Validators.required,Validators.min(1), Validators.max(10000)]),
});


trainsList : ITrain[];
routesList : IRoute[];

serverValidationErrors : string[] | null = null;

   constructor(private _trainService:TrainsService, private _routeService:RoutesService,
        private _scheduleService: SchedulesService,private router:Router, private toastr:ToastrService) { }

   ngOnInit(): void {
    this.getAllTrains();
    this.getAllRoutes();
   }

   getAllTrains(){
    this._trainService.getAllTrains().subscribe((trains)=>{this.trainsList = trains;})
   }

   getAllRoutes(){
    this._routeService.getAllRoutes().subscribe((trains)=>{this.routesList = trains;})
   }


   onSubmitForm(){
    console.log(this.AddNewScheduleForm.value);

    let schedule:IAddSchedule = {
              trainId : this.AddNewScheduleForm.get("trainId")?.value??1,
              routeId : this.AddNewScheduleForm.get("routeId")?.value??1,
              date : this.AddNewScheduleForm.get("date")?.value??null,
              firstClassPrice: this.AddNewScheduleForm.get("firstClassPrice")?.value ?? 10,
              secondClassPrice: this.AddNewScheduleForm.get("secondClassPrice")?.value ?? 10,
    }


    this._scheduleService.AddNewSchedule(schedule).subscribe((response)=>{
      this.AddNewScheduleForm.reset();
      this.router.navigate(["/Schedules"]);
      this.toastr.success("Schedule is added successfully!")
    },(error) =>{
        if(error.error.errors)
            this.serverValidationErrors = error.error.errors; 
          }
      )

   }


isFieldValid(property:string){
return (this.AddNewScheduleForm.get(property)?.touched && this.AddNewScheduleForm.get(property)?.invalid)? false:true;
}

isFormValid(){
  return (this.AddNewScheduleForm.invalid)? false : true; 
}

}
