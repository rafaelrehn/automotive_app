import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPowerComponent } from './icon-power/icon-power.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [IconPowerComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    IconPowerComponent,
    LogoComponent
  ]
})
export class IconsModule { }
