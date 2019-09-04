import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrougeComponent } from './listrouge.component';

describe('ListrougeComponent', () => {
  let component: ListrougeComponent;
  let fixture: ComponentFixture<ListrougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
