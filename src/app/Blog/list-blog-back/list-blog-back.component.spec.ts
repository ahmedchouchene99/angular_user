import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogBackComponent } from './list-blog-back.component';

describe('ListBlogBackComponent', () => {
  let component: ListBlogBackComponent;
  let fixture: ComponentFixture<ListBlogBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlogBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
