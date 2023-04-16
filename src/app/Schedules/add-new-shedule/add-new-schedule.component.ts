import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { IAddTrain } from 'src/app/Shared/Interfaces/ITrain';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-schedule',
  templateUrl: './add-new-schedule.component.html'
 
})
export class AddNewScheduleComponent implements OnInit {

// AddNewTrainForm = new FormGroup({
//   "name" : new FormControl(null,Validators.required),
//   "firstClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)]),
//   "secondClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)])
// });

// serverValidationErrors : string[] | null = null;

//   constructor(private _trainService:TrainsService, private router:Router, private toastr:ToastrService) { }

   ngOnInit(): void {
   }



//   onSubmitForm(){
//     let train:IAddTrain = {
//               name : this.AddNewTrainForm.get("name")?.value??null,
//               firstClassSeats : this.AddNewTrainForm.get("firstClassSeats")?.value??0,
//               secondClassSeats : this.AddNewTrainForm.get("secondClassSeats")?.value??0
//  };  

//     this._trainService.AddNewTrain(train).subscribe((response)=>{
    
//       this.AddNewTrainForm.reset();
//       this.router.navigate(["/Trains"]);
//       this.toastr.success("Train is added successfully!")
//     },(error) =>{
//       this.serverValidationErrors = error.error.errors;
//     })
// }


// isFieldValid(property:string){
// return (this.AddNewTrainForm.get(property)?.touched && this.AddNewTrainForm.get(property)?.invalid)? false:true;
// }

// isFormValid(){
//   return (this.AddNewTrainForm.invalid)? false : true; 
// }

}
