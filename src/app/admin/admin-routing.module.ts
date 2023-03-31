import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lookups',
    loadChildren: () => import('./lookups/lookups.module').then(m => m.LookupsModule),
    // canActivate: [AuthGuard], 
    // ACL: [AuthRole.Admin] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
