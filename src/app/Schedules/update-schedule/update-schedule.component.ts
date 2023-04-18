import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesService } from 'src/app/Core/Services/routes.service';
import { SchedulesService } from 'src/app/Core/Services/schedules.services';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { IRoute } from 'src/app/Shared/Interfaces/IRoute';
import { IAddSchedule } from 'src/app/Shared/Interfaces/ISchedule';
import { IAddTrain, ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html'
})
export class UpdateScheduleComponent implements OnInit {

  UpdateScheduleForm = new FormGroup({
    "date" : new FormControl(null,Validators.required),
    "trainId" : new FormControl(null,Validators.required),
    "routeId" : new FormControl(null,Validators.required),
    "firstClassPrice" : new FormControl(null,[Validators.required,Validators.min(1), Validators.max(10000)]),
    "secondClassPrice" : new FormControl(null,[Validators.required,Validators.min(1), Validators.max(10000)]),
  });
  
  trainsList : ITrain[];
  routesList : IRoute[];

  minDate= new Date();
  maxDate= new Date(this.minDate.getFullYear()+1,this.minDate.getMonth(), this.minDate.getDate());
  
  
  serverValidationErrors : string[] | null = null;
  id:number;
  
    constructor(private _trainService:TrainsService,private _routeService:RoutesService,private _scheduleService: SchedulesService, 
      private router:Router, private route : ActivatedRoute, private toastr:ToastrService) { }
  
    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
        this.id = params['id'];

        this._trainService.getAllTrains().subscribe((trains)=>{this.trainsList = trains});
        this._routeService.getAllRoutes().subscribe((routes)=>{this.routesList = routes});

        if(this.id<=0)
            this.router.navigateByUrl("/Home");

        this._scheduleService.getScheduleById(this.id).subscribe((schedule)=>{
        this.UpdateScheduleForm.patchValue(schedule)

        })
      })
    }
  
    onSubmitForm(){
    
      if(this.id<=0)
      return 

      let schedule:IAddSchedule = {
                trainId : this.UpdateScheduleForm.get("trainId")?.value??1,
                routeId : this.UpdateScheduleForm.get("routeId")?.value??1,
                date : this.UpdateScheduleForm.get("date")?.value??null,
                firstClassPrice: this.UpdateScheduleForm.get("firstClassPrice")?.value ?? 10,
                secondClassPrice: this.UpdateScheduleForm.get("secondClassPrice")?.value ?? 10,
      }
  
      this._scheduleService.UpdateSchedule(this.id,schedule).subscribe((response)=>{
        this.toastr.info(`Schedule ( ID : ${this.id} ) is updated successfully!` );
        this.UpdateScheduleForm.reset();
        this.router.navigate(["/Schedules"]);
    },(error) =>{
          if(error.error.errors)
              this.serverValidationErrors = error.error.errors; 
            }
        )
  
     }
  
  
  
  isFieldValid(property:string){
  return (this.UpdateScheduleForm.get(property)?.touched && this.UpdateScheduleForm.get(property)?.invalid)? false:true;
  }
  
  isFormValid(){
    return (this.UpdateScheduleForm.invalid)? false : true; 
  }

}
