import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersystemajoutComponent } from './usersystemajout.component';

describe('UsersystemajoutComponent', () => {
  let component: UsersystemajoutComponent;
  let fixture: ComponentFixture<UsersystemajoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersystemajoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersystemajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
