import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadiserviceAddComponent } from './padiservice-add.component';

describe('PadiserviceAddComponent', () => {
  let component: PadiserviceAddComponent;
  let fixture: ComponentFixture<PadiserviceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadiserviceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadiserviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
