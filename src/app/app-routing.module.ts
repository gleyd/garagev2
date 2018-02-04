import { UserComponent } from "./Modules/user/Components/user/user.component";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from "./Modules/car/Components/car/car.component";
import { WorkComponent } from "./Modules/work/Components/work/work.component";


const routes: Routes = [

  { path: 'user', component: UserComponent },
  { path: 'car', component: CarComponent },
  { path: 'work', component: WorkComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestaRoutingModule { }
