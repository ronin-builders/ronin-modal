import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { styles } from './styles';
import { set, sub } from '../../store';

import '../views/main-view/index';
import '../views/qr-code-view/index';
import '../views/extension-view/index';
import './routes';
import { isMobile } from '../../utils/mobile';
import { classMap } from 'lit/directives/class-map.js';

@customElement('ronin-modal')
export class RoninModal extends LitElement {

  static styles = styles;

  @property()
  classes = { deskCard: true, mobileCard: false };

  @state() protected _open: boolean = false;

  protected unsub_open: ()=>void;

  protected _handleOpen(open: boolean){
    this._open = open
    document.body.style.position = open ? "fixed" : "static";
    document.body.style.overflowY = open ? "scroll" : "unset";
    document.body.style.top = open ? "0" : "unset";
    document.body.style.bottom = open ? "0" : "unset";
    document.body.style.right = open ? "0" : "unset";
    document.body.style.left = open ? "0" : "unset";
  }

  close(){
    set.open(false)
  }

  constructor(){
    super()
    this.unsub_open = sub.open(this._handleOpen.bind(this))

    const mobile = isMobile()
    this.classes = { deskCard: !mobile, mobileCard: mobile }

    // Font Family
    const fontEl = document.createElement('link');
    fontEl.rel = 'stylesheet';
    fontEl.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fontEl);
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.unsub_open()
  }

  render() {
    if(!this._open) return

    return html`
      <div id="container" @click="${this.close}" >
        <div class="${classMap(this.classes)}" @click="${(e: Event)=>e.stopPropagation()}" >
          <routes-modal></routes-modal>
        </div>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ronin-modal": RoninModal;
  }
}