import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFunctionComponent } from './hello-function.component';

describe('HelloFunctionComponent', () => {
  let component: HelloFunctionComponent;
  let fixture: ComponentFixture<HelloFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
