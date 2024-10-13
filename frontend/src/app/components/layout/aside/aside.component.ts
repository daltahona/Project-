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

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Empleados',
        icon: 'pi pi-users',
        routerLink: '/empleados'
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-building',
        routerLink: '/proveedores'
      },
      {
        label: 'Detalle Productos',
        icon: 'pi pi-qrcode',
        routerLink: '/detalle-productos'
      },
      {
        label: 'Categorias',
        icon: 'pi pi-tag',
        routerLink: '/categorias'
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-qrcode',
        routerLink: '/tipo_Productos'
      },
      {
        label: 'Productos',
        icon: 'pi pi-shopping-bag',
        routerLink: '/productos'
      }
    ];

    this.activeItem = this.items && this.items[0];
  }

  onActiveItemChange(event: any) {
    const menuItem = event.item;
    this.activeItem = menuItem;
    if (menuItem.routerLink) {
      this.router.navigate([menuItem.routerLink], { replaceUrl: true });
      document.body.classList.add('animate');
      setTimeout(() => {
        console.log('Se eliminó la clase animate');
        document.body.classList.remove('animate');
      }, 500);
    }
  }
}

