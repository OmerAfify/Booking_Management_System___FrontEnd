import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesService } from 'src/app/Core/Services/routes.service';
import { IAddRoute } from 'src/app/Shared/Interfaces/IRoute';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html'
})
export class UpdateRouteComponent implements OnInit {

  UpdateRouteForm = new FormGroup({
    "departure" : new FormControl(null,Validators.required),
    "arrival" : new FormControl(null,Validators.required)
    });
  
  serverValidationErrors : string[] | null = null;
  id:number;
  
    constructor(private _routeService:RoutesService, private router:Router, private route : ActivatedRoute, private toastr:ToastrService) { }
  
    ngOnInit(): void {
        this.route.params.subscribe((params:Params)=>{
        this.id = params['id'];

        if(this.id<=0)
            this.router.navigateByUrl("/Home");
 
          this._routeService.getRouteById(this.id).subscribe((route)=>{
          this.UpdateRouteForm.patchValue(route)

        })
      })
    }
  
  
  
    onSubmitForm(){
      let route:IAddRoute = {
                departure : this.UpdateRouteForm.get("departure")?.value??null,
                arrival : this.UpdateRouteForm.get("arrival")?.value??null,
                  
              };  
  
      if(this.id<=0)
          return 

      this._routeService.UpdateRoute(this.id,route).subscribe((response)=>{
        this.toastr.info(`Route ( ID : ${this.id} ) is updated successfully!` );
        this.UpdateRouteForm.reset();
        this.router.navigate(["/Routes"]);
      },(error) =>{
        this.serverValidationErrors = error.error.errors;
      })
  }
  
  
  isFieldValid(property:string){
  return (this.UpdateRouteForm.get(property)?.touched && this.UpdateRouteForm.get(property)?.invalid)? false:true;
  }
  
  isFormValid(){
    return (this.UpdateRouteForm.invalid)? false : true; 
  }

}
