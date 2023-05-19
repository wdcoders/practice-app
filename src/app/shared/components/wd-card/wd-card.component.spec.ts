import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdCardComponent } from './wd-card.component';

describe('WdCardComponent', () => {
  let component: WdCardComponent;
  let fixture: ComponentFixture<WdCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WdCardComponent]
    });
    fixture = TestBed.createComponent(WdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
