import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpartajoutComponent } from './userpartajout.component';

describe('UserpartajoutComponent', () => {
  let component: UserpartajoutComponent;
  let fixture: ComponentFixture<UserpartajoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpartajoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpartajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
