import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglerService {

  private _showSidebar: boolean = false;
  private _sidebarChanged = new EventEmitter<boolean>();

  /**
   * crea un nuovo service
   */
  constructor() {
  } // constructor

  /**
   * restituisce l'emitter dello stato della sidebar
   * ogni volta che lo stato della sidebar cambia, viene emesso un evento
   * @returns {EventEmitter} emitter dello stato della sidebar
   */
  public get sidebarChanged(): EventEmitter<boolean> {
    // TODO sostituire con observable
    return this._sidebarChanged;
  } // get sidebarChanged

  /**
   * imposta la visibilità della sidebar
   * @param {boolean} show true se la sidebar è visibile, false altrimenti
   */
  public set showSidebar(show: boolean) {
    this._showSidebar = show;
    this.sidebarChanged.emit(this._showSidebar);
  } // get showSidebar

  /**
   * inverte le visibilità della sidebar
   * se la sidebar è visibile la nasconde, se nascosta la visualizza
   */
  public toggleSidebar() {
    this.showSidebar = !this._showSidebar;
  } // toggleSidebar

} // TogglerService
