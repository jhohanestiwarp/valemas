import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookAndFeelRepositoryImpl } from './infraestructure/repositories/lookAndFeel.repository.impl';
import { LookAndFeelRepository } from './core/repositories/lookAndFeel.repository';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/material.module';
import { SharedModule } from './modules/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { SystemManagementComponent } from './modules/shared/components/System-Management/component/system-management/system-management.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    MatIconModule,
  ],
  providers: [
    { provide: LookAndFeelRepository, useClass: LookAndFeelRepositoryImpl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
