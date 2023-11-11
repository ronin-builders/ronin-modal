import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { styles } from './styles';
import { View } from '../../types';
import { set, sub } from '../../store';
import { isMobile } from '../../utils/mobile';

import '../views/main-view/index';
import '../views/qr-code-view/index';
import '../views/extension-view/index';
import '../views/mobile-view/index';
import { Connector, connectW3, getW3 } from '@w3vm/core';
import { WALLETCONNECT_ID } from '../../w3vm/constants';

@customElement('routes-modal')
export class RotesModal extends LitElement {

  static styles = styles;

  @state() protected _view: View = 'main';

  protected unsubscribe: (()=>void);

  private async _handleView(newView: View) {
    this._view = newView
  }

  close(){
    set.open(false)
  }

  constructor(){
    super()
    this.unsubscribe = sub.view(this._handleView.bind(this))
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.unsubscribe()
  }

  getCurrentView() {
    if(isMobile()){
      const connector = getW3.connectors().find(({ id })=> id === WALLETCONNECT_ID) as Connector
      connectW3({ connector })
      return html`<mobile-view></mobile-view>`
    }
    switch(this._view){
      case 'account': 
        return html`Account View`
      case 'main':
        return html`<main-view></main-view>`
      case 'qr-code':
        return html`<qr-code></qr-code>`
      case 'extension':
        return html`<extension-view></extension-view>`
      default:
        throw new Error('View is not defined - ronin-modal')
    }
  }


  render() {
    return html`${this.getCurrentView()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "routes-modal": RotesModal;
  }
}