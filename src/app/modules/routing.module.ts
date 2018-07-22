import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule} from './app.module';
import { RouterModule} from '@angular/router';
import { routes } from '../routes/routeConfig';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }