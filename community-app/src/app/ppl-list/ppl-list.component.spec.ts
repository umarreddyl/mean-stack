import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PplListComponent } from './ppl-list.component';

describe('PplListComponent', () => {
  let component: PplListComponent;
  let fixture: ComponentFixture<PplListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PplListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
