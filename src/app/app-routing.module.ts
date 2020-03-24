import { HomeComponent } from './lib/home/home.component';
import { ProjectDetailComponent } from './lib/project-detail/project-detail.component';
import { PageNotFoundComponent } from './lib/page-not-found/page-not-found.component';
import { FormComponent } from './lib/form/form.component';
import { ProjectsComponent } from './lib/projects/projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    // children: [
    //   {
    //     path: 'overview',
    //     component: ProjectOverviewComponent
    //   }
    // ]
  },
  { path: 'contacts', component: FormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProjectsComponent,
  FormComponent,
  PageNotFoundComponent,
  ProjectDetailComponent
];
