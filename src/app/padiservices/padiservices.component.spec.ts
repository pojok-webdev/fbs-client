import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadiservicesComponent } from './padiservices.component';

describe('PadiservicesComponent', () => {
  let component: PadiservicesComponent;
  let fixture: ComponentFixture<PadiservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadiservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadiservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
