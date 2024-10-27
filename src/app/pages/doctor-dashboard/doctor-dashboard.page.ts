import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  barbellOutline,
  bodyOutline,
  callOutline,
  createOutline,
  documentOutline,
  mailOutline,
  waterOutline,
} from 'ionicons/icons';
import { Doctor } from 'src/app/models/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.page.html',
  styleUrls: ['./doctor-dashboard.page.scss'],
  providers: [HttpClient, DatePipe],
})
export class DoctorDashboardPage implements OnInit {
  editMode: boolean = false;
  // Sample doctor data
  doctor!: Doctor;

  // doctorBloodGroup: string = 'O+';
  // doctorHeight: number = 175;
  // doctorWeight: number = 70;

  constructor(
    private router: Router,
    private doctorService: DoctorService,
    private datePipe: DatePipe
  ) {
    addIcons({
      createOutline,
      documentOutline,
      waterOutline,
      bodyOutline,
      barbellOutline,
      arrowForwardOutline,
      mailOutline,
      callOutline,
    });
  }

  ngOnInit() {
    this.getDoctorDetails();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  // Getter to format date
  get formattedDate(): string {
    return this.datePipe.transform(this.doctor.dob, 'dd-MM-yyyy') || '';
  }

  onDateChange(event: any) {
    const selectedDate = event.detail.value;
    this.doctor.age = this.calculateAge(selectedDate);
    this.doctor.dob = this.formatDateString(selectedDate);
  }

  formatDateString(dateString: string): string {
    let date = new Date(dateString);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
      '0' + date.getDate()
    ).slice(-2)}`;
  }

  calculateAge(birthdate: string): number {
    let birthDate = new Date(birthdate); // Parse the birthdate
    let today = new Date(); // Current date

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    // If the current month is before the birth month or it's the same month but the current day is before the birth day, subtract one year from the age
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  getDoctorDetails() {
    this.doctorService.getDoctorDetailsById(9).subscribe((response: Doctor) => {
      console.log('Doctor details', response);
      this.doctor = response;
    });
  }

  // Save new doctor details
  saveDoctorDetails() {
    console.log('Updated Doctor Details:', this.doctor);
    this.editMode = false; // Exit edit mode after saving
    if (this.doctor?.id) {
      this.updateDoctorDetails(this.doctor?.id);
    } else {
      this.doctorService
        .saveDoctorDetails(this.doctor)
        .subscribe((response: Doctor) => {
          console.log('Doctor details Saved', response);
          this.doctor = response;
        });
    }
  }

  // Update doctor details
  updateDoctorDetails(doctorId: number | undefined) {
    this.doctorService
      .updateDoctorDetails(this.doctor?.id, this.doctor)
      .subscribe((response: Doctor) => {
        console.log('Doctor details updated', response);
        this.doctor = response;
      });
  }
}
