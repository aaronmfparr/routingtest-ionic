import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404 } from './404.page';

describe('HellPage', () => {
  let component: Page404;
  let fixture: ComponentFixture<Page404>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404 ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
