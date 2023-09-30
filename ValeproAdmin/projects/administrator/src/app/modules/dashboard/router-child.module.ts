import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SystemManagementComponent } from '../shared/components/System-Management/component/system-management/system-management.component';


const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'SystemManagement',component: SystemManagementComponent,
        children: [
          { path: 'Informacion general', component: SystemManagementComponent  },
          
        ]
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class RouterChildModule { }

