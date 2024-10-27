import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from '../models/clinic.model';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class ClinicService {
  private apiUrl = 'https://localhost:8080/api/clinics'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all clinics
  getClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(this.apiUrl);
  }

  // Fetch a clinic by ID
  getClinicById(id: number): Observable<Clinic> {
    return this.http.get<Clinic>(`${this.apiUrl}/${id}`);
  }

  // Add a new clinic
  addClinic(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(this.apiUrl, clinic);
  }

  // Update an existing clinic
  updateClinic(id: number, clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(`${this.apiUrl}/${id}`, clinic);
  }

  // Delete a clinic by ID
  deleteClinic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
