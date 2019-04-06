import { TestBed } from '@angular/core/testing';

import { NgxMaterialHttpClientService } from './ngx-material-http-client.service';

describe('NgxMaterialHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaterialHttpClientService = TestBed.get(NgxMaterialHttpClientService);
    expect(service).toBeTruthy();
  });
});
