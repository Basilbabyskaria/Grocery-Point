import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'',redirectTo:'/admin',pathMatch:'full'},
  // {path:'',component:CustomersComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
