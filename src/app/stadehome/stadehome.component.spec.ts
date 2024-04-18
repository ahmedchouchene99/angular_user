import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadehomeComponent } from './stadehome.component';

describe('StadehomeComponent', () => {
  let component: StadehomeComponent;
  let fixture: ComponentFixture<StadehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
