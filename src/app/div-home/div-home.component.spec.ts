import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivHomeComponent } from './div-home.component';

describe('DivHomeComponent', () => {
  let component: DivHomeComponent;
  let fixture: ComponentFixture<DivHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
