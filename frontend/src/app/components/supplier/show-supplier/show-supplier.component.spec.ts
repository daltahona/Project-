import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSupplierComponent } from './show-supplier.component';

describe('ShowSupplierComponent', () => {
  let component: ShowSupplierComponent;
  let fixture: ComponentFixture<ShowSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSupplierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
