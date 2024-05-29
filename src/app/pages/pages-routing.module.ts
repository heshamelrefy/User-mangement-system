import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../shared/routers/appRouters';
import { userGuard } from '../core/guards/user.guard';
import { adminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {path:appRoutes.homePage.adminView,
    loadChildren:()=> import('./admin-view/admin-view.module').then((m)=> m.AdminViewModule),
    canActivate:[adminGuard]},
  {path:appRoutes.homePage.userView,
    loadChildren:()=> import('./user-view/user-view.module').then((m)=> m.UserViewModule),
    canActivate:[userGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
