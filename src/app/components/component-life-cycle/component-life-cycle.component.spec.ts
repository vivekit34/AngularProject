import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifeCycleComponent } from './component-life-cycle.component';

describe('ComponentLifeCycleComponent', () => {
  let component: ComponentLifeCycleComponent;
  let fixture: ComponentFixture<ComponentLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifeCycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
