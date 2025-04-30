import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {path:'',component: LandingComponent},
    { path: 'signup', component: SignupComponent },
    {path:'**',redirectTo:''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
