import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicEditComponent } from './pic-edit.component';

describe('PicEditComponent', () => {
  let component: PicEditComponent;
  let fixture: ComponentFixture<PicEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
