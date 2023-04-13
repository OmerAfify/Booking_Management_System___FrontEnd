import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent, FooterComponent, SideBarComponent]
})
export class CoreModule { }
