import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementhomeComponent } from './abonnementhome.component';

describe('AbonnementhomeComponent', () => {
  let component: AbonnementhomeComponent;
  let fixture: ComponentFixture<AbonnementhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
