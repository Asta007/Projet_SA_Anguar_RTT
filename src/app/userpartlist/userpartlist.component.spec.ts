import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpartlistComponent } from './userpartlist.component';

describe('UserpartlistComponent', () => {
  let component: UserpartlistComponent;
  let fixture: ComponentFixture<UserpartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
