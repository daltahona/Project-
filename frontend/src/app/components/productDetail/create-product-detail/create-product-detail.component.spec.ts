import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductDetailComponent } from './create-product-detail.component';

describe('CreateProductDetailComponent', () => {
  let component: CreateProductDetailComponent;
  let fixture: ComponentFixture<CreateProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
