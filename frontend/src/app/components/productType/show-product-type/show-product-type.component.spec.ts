import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductTypeComponent } from './show-product-type.component';

describe('ShowProductTypeComponent', () => {
  let component: ShowProductTypeComponent;
  let fixture: ComponentFixture<ShowProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProductTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
