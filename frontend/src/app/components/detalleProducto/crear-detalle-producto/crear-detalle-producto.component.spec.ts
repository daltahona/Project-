import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetalleProductoComponent } from './crear-detalle-producto.component';

describe('CrearDetalleProductoComponent', () => {
  let component: CrearDetalleProductoComponent;
  let fixture: ComponentFixture<CrearDetalleProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDetalleProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
