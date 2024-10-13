import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProveedorComponent } from './mostrar-proveedor.component';

describe('MostrarProveedorComponent', () => {
  let component: MostrarProveedorComponent;
  let fixture: ComponentFixture<MostrarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
