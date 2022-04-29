import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodlogyComponent } from './methodlogy.component';

describe('MethodlogyComponent', () => {
  let component: MethodlogyComponent;
  let fixture: ComponentFixture<MethodlogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodlogyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodlogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
