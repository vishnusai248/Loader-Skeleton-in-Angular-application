import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonComponentComponent } from './skeleton-component.component';

describe('SkeletonComponentComponent', () => {
  let component: SkeletonComponentComponent;
  let fixture: ComponentFixture<SkeletonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
