import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreoptionsComponent } from './moreoptions.component';

describe('MoreoptionsComponent', () => {
  let component: MoreoptionsComponent;
  let fixture: ComponentFixture<MoreoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreoptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
