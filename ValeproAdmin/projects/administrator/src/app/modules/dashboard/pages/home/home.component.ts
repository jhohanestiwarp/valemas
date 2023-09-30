import { Component, Input, HostListener } from '@angular/core';
import { menuNavList } from '../../../shared/utils/menuNavList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  menuNav = menuNavList;
  bienvenidoText = 'Bienvenido(a), Nombre';

  isMenuInserted = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth()
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 730;
  }

  setIsMenuInserted(value: boolean): void {
   this.isMenuInserted = value;
   }

  toggleSubMenu(item: any): void {
    item.subMenuVisible = !item.subMenuVisible;
   }
}
