import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonHeaderComponent } from './common-header.component';

describe('CommonHeaderComponentComponent', () => {
  let component: CommonHeaderComponent;
  let fixture: ComponentFixture<CommonHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
