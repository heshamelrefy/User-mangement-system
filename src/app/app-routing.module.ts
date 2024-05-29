import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './shared/routers/appRouters';
import { NotFoundComponent } from './extrapages/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { userGuard } from './core/guards/user.guard';
import { adminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path:'',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule,
    ),
    canActivate: [authGuard]
  },
  { path:appRoutes.auth.login,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule,
    ),
    // canActivate: [authGuard]
  },
  // { path:'',
  //   loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule,
  //   ),
  //   canActivate: [permissionsGuard]
  // },
  { path:'**',
    component:NotFoundComponent,
    // canActivate: [permissionsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
