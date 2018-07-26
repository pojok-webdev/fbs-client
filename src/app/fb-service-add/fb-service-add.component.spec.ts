import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbServiceAddComponent } from './fb-service-add.component';

describe('FbServiceAddComponent', () => {
  let component: FbServiceAddComponent;
  let fixture: ComponentFixture<FbServiceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbServiceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
