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
      { label: 'Employees', icon: 'pi pi-users', routerLink: '/employees' },
      { label: 'Suppliers', icon: 'pi pi-building', routerLink: '/suppliers' },
      { label: 'Product Details', icon: 'pi pi-qrcode', routerLink: '/product_details' },
      { label: 'Categories', icon: 'pi pi-tag', routerLink: '/categories' },
      { label: 'Product Types', icon: 'pi pi-qrcode', routerLink: '/product_types' },
      { label: 'Products', icon: 'pi pi-shopping-bag', routerLink: '/products' }      
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





