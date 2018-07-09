import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbEditComponent } from './fb-edit.component';

describe('FbEditComponent', () => {
  let component: FbEditComponent;
  let fixture: ComponentFixture<FbEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
