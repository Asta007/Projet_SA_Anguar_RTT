import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecompteComponent } from './onecompte.component';

describe('OnecompteComponent', () => {
  let component: OnecompteComponent;
  let fixture: ComponentFixture<OnecompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
