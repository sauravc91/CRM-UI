import {Routes} from '@angular/router';
import { Pg1Component } from '../components/pg1/pg1.component';
import { Pg2Component } from '../components/pg2/pg2.component';

export const routes: Routes = [
    { path: 'pg1', component: Pg1Component },
    { path: 'pg2', component: Pg2Component }
];
