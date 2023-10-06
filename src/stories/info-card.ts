import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './card-header';
import './card-image';
import './card-content';
import './card-footer';

@customElement('info-card')
export class Card extends LitElement {
  static styles =
    css`
      .card {
        width: var(--card-size, 345px);
        border: 1px solid white;
        border-radius: 4px;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
      }
    `
  
  @property()cardTitle!:string;
  @property()date!:string;
  @property()imgUrl!:string;
  @property()content!:string;
  @property()text!:string;
  @property()background!:string;

  render() {
    return html`
    <div class="card" style="background-color:${this.background}">

      <card-header 
      style="width: var(--card-size)"
      cardTitle=${this.cardTitle}
      date=${this.date}>
      </card-header>

      <card-image
      style="width: var(--card-size)"
      imgUrl= "${this.imgUrl ?? "src/blank.png"}">
      </card-image>

      <card-content
      content="${this.content}">
      </card-content>

      <card-footer 
      style="width: var(--card-size)"
      text="${this.text}">
      </card-footer>
    </div>
    
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'info-card': Card
  }
}
