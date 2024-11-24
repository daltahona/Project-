import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductDetailComponent } from './delete-product-detail.component';

describe('DeleteProductDetailComponent', () => {
  let component: DeleteProductDetailComponent;
  let fixture: ComponentFixture<DeleteProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
