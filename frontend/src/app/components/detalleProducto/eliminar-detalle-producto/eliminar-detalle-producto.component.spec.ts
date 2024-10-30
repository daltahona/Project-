import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDetalleProductoComponent } from './eliminar-detalle-producto.component';

describe('EliminarDetalleProductoComponent', () => {
  let component: EliminarDetalleProductoComponent;
  let fixture: ComponentFixture<EliminarDetalleProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarDetalleProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
