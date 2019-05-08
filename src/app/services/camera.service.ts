import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CameraService {
	BASE_URL = 'https://2pfwj7aw0a.execute-api.us-west-2.amazonaws.com/hackathon/hackaton-data';
	constructor(private http: HttpClient) {}

	getCameraData(): Observable<any> {
		return this.http.get<Observable<any>>(this.BASE_URL);
	}
}
