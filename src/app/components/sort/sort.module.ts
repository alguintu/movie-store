import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortComponent } from './sort.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ SortComponent ],
  declarations: [ SortComponent ]
})
export class SortModule { }