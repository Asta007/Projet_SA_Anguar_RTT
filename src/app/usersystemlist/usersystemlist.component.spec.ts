import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersystemlistComponent } from './usersystemlist.component';

describe('UsersystemlistComponent', () => {
  let component: UsersystemlistComponent;
  let fixture: ComponentFixture<UsersystemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersystemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersystemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
