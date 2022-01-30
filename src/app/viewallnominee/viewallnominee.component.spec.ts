import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallnomineeComponent } from './viewallnominee.component';

describe('ViewallnomineeComponent', () => {
  let component: ViewallnomineeComponent;
  let fixture: ComponentFixture<ViewallnomineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallnomineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallnomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
