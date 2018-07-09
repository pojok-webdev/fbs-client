import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsComponent } from './fbs.component';

describe('FbsComponent', () => {
  let component: FbsComponent;
  let fixture: ComponentFixture<FbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
