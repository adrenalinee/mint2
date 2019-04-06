import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialHttpClientComponent } from './ngx-material-http-client.component';

describe('NgxMaterialHttpClientComponent', () => {
  let component: NgxMaterialHttpClientComponent;
  let fixture: ComponentFixture<NgxMaterialHttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialHttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
