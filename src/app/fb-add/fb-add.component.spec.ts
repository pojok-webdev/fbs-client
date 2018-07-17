import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbAddComponent } from './fb-add.component';

describe('FbAddComponent', () => {
  let component: FbAddComponent;
  let fixture: ComponentFixture<FbAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
