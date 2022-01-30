import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbeneficiaryComponent } from './viewallbeneficiary.component';

describe('ViewallbeneficiaryComponent', () => {
  let component: ViewallbeneficiaryComponent;
  let fixture: ComponentFixture<ViewallbeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbeneficiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
