import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';
import { menuNavList } from '../../utils/menuNavList';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  mobileQuery: MediaQueryList;

  isMenuInserted = false;

  menuNav = menuNavList;
  isMobile = false;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 63.9em)');
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isMenuInserted =
      this.mobileQuery.matches &&
      window.innerWidth <= 730 &&
      window.innerWidth >= 651;
    // this.sendIsMenuInsertedToHome(); // Llama a la función cuando cambie el ancho de la pantalla
    this.isMobile = window.innerWidth <= 730;
  }

  toggleSubMenu(item: any): void {
    item.subMenuVisible = !item.subMenuVisible;
    // Verificar si el ítem es "Gestión de programas" y ajustar la visibilidad del submenu "Secciones"
    if (item.name === "Gestión de programas" && item.subMenuVisible) {
      const seccionesSubMenu = item.subMenu.find((subItem: { name: string; }) => subItem.name === "Secciones");
      if (seccionesSubMenu) {
        seccionesSubMenu.subMenuVisible = true;
      }
    }
  }
  
  //Método para enviar el valor de isMenuInserted al componente superior (HomeComponent)
  sendIsMenuInsertedToHome() {
    //Verifica si el componente superior (HomeComponent) tiene la función setIsMenuInserted
    if (typeof this.menuInsertedCallback === 'function') {
      this.menuInsertedCallback(this.isMenuInserted);
    }
  }
  menuInsertedCallback(isMenuInserted: boolean) {
    throw new Error('Method not implemented.');
  }
}
