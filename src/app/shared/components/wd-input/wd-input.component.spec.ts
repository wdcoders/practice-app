import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdInputComponent } from './wd-input.component';

describe('WdInputComponent', () => {
  let component: WdInputComponent;
  let fixture: ComponentFixture<WdInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WdInputComponent]
    });
    fixture = TestBed.createComponent(WdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
