import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEventsComponent } from './reg-events.component';

describe('RegEventsComponent', () => {
  let component: RegEventsComponent;
  let fixture: ComponentFixture<RegEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
