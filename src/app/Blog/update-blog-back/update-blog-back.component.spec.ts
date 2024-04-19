import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogBackComponent } from './update-blog-back.component';

describe('UpdateBlogBackComponent', () => {
  let component: UpdateBlogBackComponent;
  let fixture: ComponentFixture<UpdateBlogBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlogBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlogBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
