import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDynamicFormComponent } from './create-dynamic-form.component';

describe('CreateDynamicFormComponent', () => {
  let component: CreateDynamicFormComponent;
  let fixture: ComponentFixture<CreateDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDynamicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
