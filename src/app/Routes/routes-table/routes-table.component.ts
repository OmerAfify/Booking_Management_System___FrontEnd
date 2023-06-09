import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { RoutesService } from 'src/app/Core/Services/routes.service';
import { IRoute } from 'src/app/Shared/Interfaces/IRoute';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html'
})
export class RoutesTableComponent implements OnInit {

routesList : IRoute[];

dtOptions: DataTables.Settings = {
destroy:true,
retrieve:true
};
dtTrigger: Subject<any> = new Subject<any>();

routeIdToDelete:number;

  constructor(private _routeService : RoutesService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllRoutes();
  }

  getAllRoutes(){
    this._routeService.getAllRoutes().subscribe((routes)=>{
      this.routesList = routes;  
      this.dtTrigger.next();
    })
  }

  deleteRoute(id:number){
    this._routeService.DeleteRoute(id).subscribe((response)=>{
      this.toastr.error(`Route ${id} is removed successfully!` );
        
      this.getAllRoutes();
    })
  }

  onDeleteSelected(id:number){
    this.routeIdToDelete = id;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
