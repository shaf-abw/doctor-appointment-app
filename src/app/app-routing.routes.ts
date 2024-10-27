import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DoctorDashboardPage } from './pages/doctor-dashboard/doctor-dashboard.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ClinicManagementPage } from './pages/clinic-management/clinic-management.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AppointmentBookingPage } from './pages/appointment-booking/appointment-booking.page';
import { AdminDashboardPage } from './pages/admin-dashboard/admin-dashboard.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardPage,
  },
  {
    path: 'doctor-dashboard',
    component: DoctorDashboardPage,
  },
  {
    path: 'book-appointment',
    component: AppointmentBookingPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
  },
  {
    path: 'clinic-management',
    component: ClinicManagementPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
