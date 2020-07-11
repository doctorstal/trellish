import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './modules/login/auth.guard';


const loginModule = () => import('./modules/login/login.module').then(x => x.LoginModule);
const boardModule = () => import('./modules/board/board.module').then(x => x.BoardModule);

const routes: Routes = [
    { path: '', loadChildren: boardModule, canActivate: [AuthGuard] },
    { path: 'auth', loadChildren: loginModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
