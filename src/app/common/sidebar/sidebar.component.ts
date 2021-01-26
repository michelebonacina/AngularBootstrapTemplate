import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleLeft, faAngleRight, faCog, faLaughWink, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

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
  private shownMenu: String = '';

  // public properties
  public isSidebarToggled: Boolean = false;

  // constructor
  constructor() { } // constructor

  // component initialization
  ngOnInit(): void {
  } // ngOnInit

  // shows the given menu
  showMenu(menu: String) {
    if (this.isMenuShown(menu)) {
      this.shownMenu = '';
    } else {
      this.shownMenu = menu;
    }
  } // showMenu

  // checks if given menu is shown
  isMenuShown(menu: String): boolean {
    return this.shownMenu == menu;
  } // isMenuShowed

} // SidebarComponent
