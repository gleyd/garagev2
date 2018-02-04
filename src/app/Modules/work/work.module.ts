import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWorkComponent } from './Components/add-work/add-work.component';
import { ListWorkComponent } from './Components/list-work/list-work.component';
import { WorkComponent } from './Components/work/work.component';
import { FormsModule } from '@angular/forms';
import { WorkService } from './Services/work.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [WorkService],
  declarations: [AddWorkComponent, ListWorkComponent, WorkComponent]
})
export class WorkModule { }
