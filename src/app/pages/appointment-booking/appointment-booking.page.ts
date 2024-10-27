import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.page.html',
  styleUrls: ['./appointment-booking.page.scss'],
})
export class AppointmentBookingPage implements OnInit {
  bookingForm: FormGroup;
  doctors = [
    {
      id: 1,
      name: 'Doctor',
    },
  ]; // Fetch doctors from API

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      doctorId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  bookAppointment() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    }
  }

  ngOnInit() {}
}
