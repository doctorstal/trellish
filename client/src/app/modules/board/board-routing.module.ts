import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ColumnsComponent} from './columns/columns.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
          {path: '', component: ColumnsComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
