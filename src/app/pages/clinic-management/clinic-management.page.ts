import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  createOutline,
  homeOutline,
  locateOutline,
  locationOutline,
  mapOutline,
  trashOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-clinic-management',
  templateUrl: './clinic-management.page.html',
  styleUrls: ['./clinic-management.page.scss'],
})
export class ClinicManagementPage implements OnInit {
  clinicForm: FormGroup;
  appointmentTimes: string[] = [];
  selectedIndex: number = -1; // Index of the time being edited
  clinics: any[] = [
    {
      name: 'John Clinic',
      address1: '147, Sheikul Akbar Street',
      address2: 'Melapalyam',
      city: 'Tirunelveli',
      state: 'Tamilnadu',
      appointmentTimes: '06:30 PM, 07:00 PM, 07:30 PM, 08:00 PM, 08:30 PM',
    },
  ]; // Replace 'any' with a proper type if you have a clinic model

  constructor(private fb: FormBuilder) {
    addIcons({
      homeOutline,
      locationOutline,
      mapOutline,
      calendarOutline,
      locateOutline,
      createOutline,
      trashOutline,
    });
    this.clinicForm = this.fb.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      appointmentTimes: this.fb.array([]),
    });
  }

  ngOnInit() {
    // Load existing clinics if needed
  }

  // Function to present the popover when label is clicked
  presentPopover(ev: Event, index: number) {
    this.selectedIndex = index;
  }

  // Function to handle the time change from the popover
  onPopoverTimeChange(event: any) {
    const selectedTime = event.detail.value;
    if (this.selectedIndex >= 0) {
      this.appointmentTimes[this.selectedIndex] = selectedTime;
    }
  }

  // Add a new time slot
  addTime() {
    this.appointmentTimes.push('12:00'); // Add default time value initially
  }

  // Remove a selected time slot
  removeTime(index: number) {
    this.appointmentTimes.splice(index, 1);
  }

  // Handle the change in time selection
  onTimeChange(index: number, event: any) {
    if (event.detail?.value) {
      this.appointmentTimes[index] = event.detail?.value;
    }
  }

  // Submit form
  addClinic() {
    if (this.clinicForm.valid) {
      const clinicData = {
        ...this.clinicForm.value,
        appointmentTimes: this.appointmentTimes,
      };
      console.log('Clinic Data:', clinicData);
      // Add your submit logic here
    }
  }

  editClinic(clinic: any) {
    this.clinicForm.patchValue(clinic);
    // You can implement additional logic to save the edited clinic back to the list
  }

  saveClinic() {
    // Logic to update the clinic in the clinics array
  }
}
