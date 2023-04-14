import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesService } from 'src/app/Core/Services/routes.service';
import { IAddRoute } from 'src/app/Shared/Interfaces/IRoute';

@Component({
  selector: 'app-add-new-route',
  templateUrl: './add-new-route.component.html'
 
})
export class AddNewRouteComponent implements OnInit {

  AddNewRouteForm = new FormGroup({
  "departure" : new FormControl(null,Validators.required),
  "arrival" : new FormControl(null,Validators.required)
 });

serverValidationErrors : string[] | null = null;

  constructor(private _routesService:RoutesService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }



  onSubmitForm(){
    let route :IAddRoute = {
              departure : this.AddNewRouteForm.get("departure")?.value??null,
              arrival  : this.AddNewRouteForm.get("arrival")?.value??null,
 };  

    this._routesService.AddNewRoute(route).subscribe((response)=>{
    
      this.AddNewRouteForm.reset();
      this.router.navigate(["/Routes"]);
      this.toastr.success("Route is added successfully!")
    },(error) =>{
      this.serverValidationErrors = error.error.errors;
    })
}


isFieldValid(property:string){
return (this.AddNewRouteForm.get(property)?.touched && this.AddNewRouteForm.get(property)?.invalid)? false:true;
}

isFormValid(){
  return (this.AddNewRouteForm.invalid)? false : true; 
}

}
