import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ImageRecognitionService {
	BASE_URL = 'https://2pfwj7aw0a.execute-api.us-west-2.amazonaws.com/hackathon/rekognition';
	constructor(private http: HttpClient) {}

	getImageData() {
		return this.http.get(this.BASE_URL, {
			params: {
				key: 'test.jpg'
			}
		});
	}
}
