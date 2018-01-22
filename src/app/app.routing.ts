import { UserComponent } from "./Modules/user/Components/user/user.component";
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: 'user', component: UserComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
