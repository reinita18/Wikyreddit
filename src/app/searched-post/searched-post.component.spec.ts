import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPostComponent } from './searched-post.component';

describe('SearchedPostComponent', () => {
  let component: SearchedPostComponent;
  let fixture: ComponentFixture<SearchedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
