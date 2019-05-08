import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CameraService } from 'src/app/services/camera.service';
import { ImageRecognitionService } from 'src/app/services/image-recognition.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.sass' ]
})
export class HomeComponent implements OnInit {
	$cameraData: Observable<any[]>;
	$recognitionData: Observable<any>;
	constructor(private cameraService: CameraService, private recognitionService: ImageRecognitionService) {}

	ngOnInit() {}

	OnGetCameraData(): void {
		this.$cameraData = this.cameraService.getCameraData();
	}

	OnGetImageData(): void {
		this.$recognitionData = this.recognitionService.getImageData();
	}
}
