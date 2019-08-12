import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleuploadmediaComponent } from './multipleuploadmedia.component';

describe('MultipleuploadmediaComponent', () => {
  let component: MultipleuploadmediaComponent;
  let fixture: ComponentFixture<MultipleuploadmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleuploadmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleuploadmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
