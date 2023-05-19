import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdButtonComponent } from './wd-button.component';

describe('WdButtonComponent', () => {
  let component: WdButtonComponent;
  let fixture: ComponentFixture<WdButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WdButtonComponent]
    });
    fixture = TestBed.createComponent(WdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
