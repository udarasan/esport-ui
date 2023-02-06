import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgandclansComponent } from './organdclans.component';

describe('OrgandclansComponent', () => {
  let component: OrgandclansComponent;
  let fixture: ComponentFixture<OrgandclansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgandclansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgandclansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
