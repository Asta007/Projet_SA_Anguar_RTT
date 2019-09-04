import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepartenaireComponent } from './onepartenaire.component';

describe('OnepartenaireComponent', () => {
  let component: OnepartenaireComponent;
  let fixture: ComponentFixture<OnepartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
