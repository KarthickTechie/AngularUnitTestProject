import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertextComponent } from './countertext.component';

describe('CountertextComponent', () => {
  let component: CountertextComponent;
  let fixture: ComponentFixture<CountertextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountertextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
