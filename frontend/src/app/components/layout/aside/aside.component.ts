import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [TabMenuModule, ButtonModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Empleados', icon: 'pi pi-users', routerLink: '/empleados' },
      { label: 'Proveedores', icon: 'pi pi-building', routerLink: '/proveedores' },
      { label: 'Detalle Productos', icon: 'pi pi-qrcode', routerLink: '/detalle-productos' },
      { label: 'Categorías', icon: 'pi pi-tag', routerLink: '/categorias' },
      { label: 'Tipo Productos', icon: 'pi pi-qrcode', routerLink: '/tipo_Productos' },
      { label: 'Productos', icon: 'pi pi-shopping-bag', routerLink: '/productos' }
    ];
    this.activeItem = this.items[0]; // Establece el primer elemento activo por defecto
  }

  onActiveItemChange(event: any) {
    const menuItem = event.item;
    if (menuItem && menuItem.routerLink) {
      this.activeItem = menuItem;
      this.router.navigate([menuItem.routerLink], { replaceUrl: true });
    }
  }
}





