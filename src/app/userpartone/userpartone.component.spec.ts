import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpartoneComponent } from './userpartone.component';

describe('UserpartoneComponent', () => {
  let component: UserpartoneComponent;
  let fixture: ComponentFixture<UserpartoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpartoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
