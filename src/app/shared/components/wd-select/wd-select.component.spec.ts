import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdSelectComponent } from './wd-select.component';

describe('WdSelectComponent', () => {
  let component: WdSelectComponent;
  let fixture: ComponentFixture<WdSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WdSelectComponent]
    });
    fixture = TestBed.createComponent(WdSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
