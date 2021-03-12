import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleLeft, faAngleRight, faCog, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { ToggleService } from '../@core/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // initialize icons
  faAngleDown = faAngleDown;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faCog = faCog;
  faLaughWink = faLaughWink;
  faTachometerAlt = faTachometerAlt;

  // private properties
  private _shownMenu: string = '';

  /**
   * constructor
   * @param {ToggleService} toggleService manage components toggle visibility
   */
  constructor(
    public toggleService: ToggleService
  ) { } // constructor

  /**
   * component initialization
   */
  ngOnInit(): void {
  } // ngOnInit

  /**
   * shows the given menu
   * @param {string} menu menu to be shown
   */
  showMenu(menu: string) {
    if (this.isMenuShown(menu)) {
      this._shownMenu = '';
    } else {
      this._shownMenu = menu;
    }
  } // showMenu

  /**
   * checks if given menu is shown
   * @param {string} menu menu to ckeck
   * @returns {boolean} true if menu is visible, false otherwise
   */
  isMenuShown(menu: string): boolean {
    return this._shownMenu == menu;
  } // isMenuShown

  /**
   * toggle sidebar visibility
   * switch sidebar from visible to hidden
   */
  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  } // toggleSidebar

} // SidebarComponent
