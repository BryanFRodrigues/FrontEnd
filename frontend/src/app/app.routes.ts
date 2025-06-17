import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { IndividualComponent } from './pages/individual-component/individual-component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'individual-component', component : IndividualComponent}, 
];
