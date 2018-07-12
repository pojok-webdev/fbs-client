import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbFeeAddComponent } from './fb-fee-add.component';

describe('FbFeeAddComponent', () => {
  let component: FbFeeAddComponent;
  let fixture: ComponentFixture<FbFeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbFeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
