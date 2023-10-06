import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('card-image')
class CardImage extends LitElement {
  static styles= css`
    img{
      width: var(--card-size, 345px);
      height: 194px;
    }
  `
  @property() imgUrl!:string;

  render() {
    return html`
      <img src="${this.imgUrl}" alt="image">
    `;
  }
}