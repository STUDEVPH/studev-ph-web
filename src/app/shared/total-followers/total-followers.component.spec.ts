import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFollowersComponent } from './total-followers.component';

describe('TotalFollowersComponent', () => {
  let component: TotalFollowersComponent;
  let fixture: ComponentFixture<TotalFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalFollowersComponent]
    });
    fixture = TestBed.createComponent(TotalFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
