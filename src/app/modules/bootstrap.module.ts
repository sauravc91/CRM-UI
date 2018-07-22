import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
      BsDropdownModule,
      TooltipModule,
      ModalModule
  ]
})
export class AppBootstrapModule {}