import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactmeComponent } from './contactme/contactme.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'aboutme', component: AboutmeComponent},
  { path: 'work', component: WorkComponent},
  { path: 'contactme', component: ContactmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
