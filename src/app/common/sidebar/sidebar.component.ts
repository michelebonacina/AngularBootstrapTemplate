// librerie
import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleLeft, faAngleRight, faCog, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

// moduli applicativi
import { ToggleService } from '../@core/toggle.service';
import { MENU_ITEMS } from './@config/sidebar-menu.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // inizializza le icone
  faAngleDown = faAngleDown;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faCog = faCog;
  faLaughWink = faLaughWink;
  faTachometerAlt = faTachometerAlt;

  // proprietà private
  private _shownMenu: string = '';

  // proprietà pubbliche
  menuItems = MENU_ITEMS;

  /**
   * crea un nuovo componente
   * @param {ToggleService} toggleService gestore della visibilità dei componenti
   */
  constructor(
    public toggleService: ToggleService
  ) { } // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {
  } // ngOnInit

  /**
   * visualizza il menu specificato
   * @param {string} menu menu da visualizzare
   */
  showMenu(menu: string) {
    if (this.isMenuShown(menu)) {
      this._shownMenu = '';
    } else {
      this._shownMenu = menu;
    }
  } // showMenu

  /**
   * controlla se il menu specificato è quello da visualizzare
   * @param {string} menu menu da controllare
   * @returns {boolean} true se il menu è visibile, false altrimenti
   */
  isMenuShown(menu: string): boolean {
    return this._shownMenu == menu;
  } // isMenuShown

  /**
   * inverte le visibilità della sidebar
   * se la sidebar è visibile la nasconde, se nascosta la visalizza
   */
  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  } // toggleSidebar

} // SidebarComponent
