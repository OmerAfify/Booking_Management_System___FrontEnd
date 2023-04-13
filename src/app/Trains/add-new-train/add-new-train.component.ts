import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { IAddTrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-add-new-train',
  templateUrl: './add-new-train.component.html',
  styleUrls: ['./add-new-train.component.scss']
})
export class AddNewTrainComponent implements OnInit {

AddNewTrainForm = new FormGroup({
  "name" : new FormControl(null,Validators.required),
  "firstClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)]),
  "secondClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)])
});

serverValidationErrors : string[] | null = null;

  constructor(private _trainService:TrainsService, private router:Router) { }

  ngOnInit(): void {
  }



  onSubmitForm(){
    let train:IAddTrain = {
              name : this.AddNewTrainForm.get("name")?.value??null,
              firstClassSeats : this.AddNewTrainForm.get("firstClassSeats")?.value??0,
              secondClassSeats : this.AddNewTrainForm.get("secondClassSeats")?.value??0
 };  

    this._trainService.AddNewTrain(train).subscribe((response)=>{
      //notification of added successfully !
      this.AddNewTrainForm.reset();
      this.router.navigate(["/Trains"]);
    },(error) =>{
      this.serverValidationErrors = error.error.errors;
    })
}


isFieldValid(property:string){
return (this.AddNewTrainForm.get(property)?.touched && this.AddNewTrainForm.get(property)?.invalid)? false:true;
}

isFormValid(){
  return (this.AddNewTrainForm.invalid)? false : true; 
}

}
