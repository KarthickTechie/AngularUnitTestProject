import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLendComponent } from './dashboard-lend.component';

describe('DashboardLendComponent', () => {
  let component: DashboardLendComponent;
  let fixture: ComponentFixture<DashboardLendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardLendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
