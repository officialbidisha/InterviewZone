import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Interviewee } from "./interviewee.model";

@Injectable({
  providedIn: "root"
})
export class IntervieweeService {
  private intervieweesUrl = "http://localhost:3000/interviewees";

  constructor(private http: HttpClient) {}

  getInterviewees(): Observable<Interviewee[]> {
    return this.http.get<Interviewee[]>(this.intervieweesUrl);
  }

  getIntervieweeById(payload: number): Observable<Interviewee> {
    return this.http.get<Interviewee>(`${this.intervieweesUrl}/${payload}`);
  }

  createInterviewee(payload: Interviewee): Observable<Interviewee> {
    return this.http.post<Interviewee>(this.intervieweesUrl, payload);
  }

  updateInterviewee(interviewee: Interviewee): Observable<Interviewee> {
    return this.http.patch<Interviewee>(
      `${this.intervieweesUrl}/${interviewee.id}`,
      interviewee
    );
  }

  deleteInterviewee(payload: number) {
    return this.http.delete(`${this.intervieweesUrl}/${payload}`);
  }
}
