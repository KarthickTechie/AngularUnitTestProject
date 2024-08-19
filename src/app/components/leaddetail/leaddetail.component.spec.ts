import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaddetailComponent } from './leaddetail.component';

describe('LeaddetailComponent', () => {
  let component: LeaddetailComponent;
  let fixture: ComponentFixture<LeaddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaddetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
