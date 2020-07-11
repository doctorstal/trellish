import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {BoardRoutingModule} from './board-routing.module';
import { ColumnsComponent } from './columns/columns.component';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './card/card.component';
import {ColumnPipe} from '../../column.pipe';



@NgModule({
  declarations: [LayoutComponent, ColumnsComponent, ColumnComponent, CardComponent, ColumnPipe],
  imports: [
    CommonModule,
    BoardRoutingModule,
  ]
})
export class BoardModule { }
