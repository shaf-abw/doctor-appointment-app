import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = 'http://localhost:8080/api/doctors'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Fetch doctor details by userId
  getDoctorDetailsByUserId(userId: string): Observable<Doctor> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<Doctor>(url);
  }

  // Fetch doctor details by userId
  getDoctorDetailsById(id: number): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Doctor>(url);
  }

  // Save new doctor details
  saveDoctorDetails(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  // Update existing doctor details
  updateDoctorDetails(
    doctorId: number | undefined,
    doctor: Doctor
  ): Observable<Doctor> {
    const url = `${this.apiUrl}/${doctorId}`;
    return this.http.put<Doctor>(url, doctor);
  }
}
