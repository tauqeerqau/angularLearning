import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCode } from './my-code';

describe('MyCode', () => {
  let component: MyCode;
  let fixture: ComponentFixture<MyCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
