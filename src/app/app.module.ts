import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';

// Forms handling
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AdminDashboardPage } from './pages/admin-dashboard/admin-dashboard.page';
import { DoctorDashboardPage } from './pages/doctor-dashboard/doctor-dashboard.page';
import { AppointmentBookingPage } from './pages/appointment-booking/appointment-booking.page';
import { ProfilePage } from './pages/profile/profile.page';
import { ClinicManagementPage } from './pages/clinic-management/clinic-management.page';
import { AppRoutingModule } from './app-routing.routes';
import { CommonHeaderComponent } from './components/common-header-component/common-header.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage, // Add all your pages here
    RegisterPage,
    AdminDashboardPage,
    DoctorDashboardPage,
    AppointmentBookingPage,
    ProfilePage,
    ClinicManagementPage,
    CommonHeaderComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Use IonicModule for root configuration
    AppRoutingModule,
    FormsModule, // Add FormsModule
    ReactiveFormsModule, // Add ReactiveFormsModule for reactive forms
  ],
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
