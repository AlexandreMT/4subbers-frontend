import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitSubtitleComponent } from './split-subtitle.component';

describe('SplitSubtitleComponent', () => {
  let component: SplitSubtitleComponent;
  let fixture: ComponentFixture<SplitSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
