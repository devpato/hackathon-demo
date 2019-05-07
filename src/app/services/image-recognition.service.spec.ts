import { TestBed } from '@angular/core/testing';

import { ImageRecognitionService } from './image-recognition.service';

describe('ImageRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageRecognitionService = TestBed.get(ImageRecognitionService);
    expect(service).toBeTruthy();
  });
});
