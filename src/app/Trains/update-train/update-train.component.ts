import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrainsService } from 'src/app/Core/Services/trains.service';
import { IAddTrain, ITrain } from 'src/app/Shared/Interfaces/ITrain';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html'
})
export class UpdateTrainComponent implements OnInit {

  UpdateTrainForm = new FormGroup({
    "name" : new FormControl(null,Validators.required),
    "firstClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)]),
    "secondClassSeats" : new FormControl(null,[Validators.required,Validators.min(10), Validators.max(1000)])
  });
  
  serverValidationErrors : string[] | null = null;
  id:number;
  
    constructor(private _trainService:TrainsService, private router:Router, private route : ActivatedRoute, private toastr:ToastrService) { }
  
    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
        this.id = params['id'];

        if(this.id<=0)
            this.router.navigateByUrl("/Home");
 
          this._trainService.getTrainById(this.id).subscribe((train)=>{
          this.UpdateTrainForm.patchValue(train)

        })
      })
    }
  
  
  
    onSubmitForm(){
      let train:IAddTrain = {
                name : this.UpdateTrainForm.get("name")?.value??null,
                firstClassSeats : this.UpdateTrainForm.get("firstClassSeats")?.value??0,
                secondClassSeats : this.UpdateTrainForm.get("secondClassSeats")?.value??0
      };  
  
      if(this.id<=0)
          return 

      this._trainService.UpdateTrain(this.id, train).subscribe((response)=>{
        this.toastr.info(`train ( ID : ${this.id} ) is updated successfully!` );
        this.UpdateTrainForm.reset();
        this.router.navigate(["/Trains"]);
      },(error) =>{
        this.serverValidationErrors = error.error.errors;
      })
  }
  
  
  isFieldValid(property:string){
  return (this.UpdateTrainForm.get(property)?.touched && this.UpdateTrainForm.get(property)?.invalid)? false:true;
  }
  
  isFormValid(){
    return (this.UpdateTrainForm.invalid)? false : true; 
  }

}
