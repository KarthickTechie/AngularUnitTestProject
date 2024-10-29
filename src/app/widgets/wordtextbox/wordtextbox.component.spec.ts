import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtextboxComponent } from './wordtextbox.component';

describe('WordtextboxComponent', () => {
  let component: WordtextboxComponent;
  let fixture: ComponentFixture<WordtextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordtextboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordtextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
