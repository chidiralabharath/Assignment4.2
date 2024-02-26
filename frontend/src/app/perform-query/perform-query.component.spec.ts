import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformQueryComponent } from './perform-query.component';

describe('PerformQueryComponent', () => {
  let component: PerformQueryComponent;
  let fixture: ComponentFixture<PerformQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
