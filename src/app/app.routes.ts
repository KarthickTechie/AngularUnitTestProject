import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeadinboxComponent } from './components/leadinbox/leadinbox.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { authGuard } from './guards/auth.guard';
import { LeaddetailComponent } from './components/leaddetail/leaddetail.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    {path:'tasks',component:TasksComponent},
    {path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{
    path:'home',
    component:HomeComponent,
    children:[
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
            path:'reports',
            component:ReportsComponent
        },
        {
            path:'',
            pathMatch:'full',
            redirectTo:'dashboard'
        }
    ]
},
{
path:'leadinbox/:id',
component:LeaddetailComponent
},
{
path:'leadinbox',
component:LeadinboxComponent,
canActivate:[authGuard]
},
{
path:'',
pathMatch:'full',
redirectTo:'home'
},
{
    path:'**',
    component:PagenotfoundComponent
}];
