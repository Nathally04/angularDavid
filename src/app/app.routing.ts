import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/homePage.component';
import { CustomerComponent } from './components/customer.component';
import { AttendantComponent } from './components/attendant.component';
import { EditComponent } from './components/edit.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'homePage', component: HomePageComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'attendant', component: AttendantComponent },
    { path: 'edit', component: EditComponent },
    { path: '**', component: HomePageComponent }
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);