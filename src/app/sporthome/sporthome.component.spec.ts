import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SporthomeComponent } from './sporthome.component';

describe('SporthomeComponent', () => {
  let component: SporthomeComponent;
  let fixture: ComponentFixture<SporthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SporthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SporthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
