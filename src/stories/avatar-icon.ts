import { LitElement, html, css } from 'lit';

import { customElement, property} from 'lit/decorators.js';

@customElement('avatar-icon')
class Avatar extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;
      color:white;

    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .small {
        width: 34px;
        height: 34px;
        font-size: 17px;
        line-height: 34px;
      }
      
      .medium {
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
      }
      
      .large {
        width: 45px;
        height: 45px;
        font-size: 23px;
        line-height: 45px;
      }
  `;

  @property({ type: String }) src: string;
  @property({ type: String }) alt: string;
  @property({ type: String }) backgroundColor: string;
  @property({ type: String }) defaultIcon: string;
  @property() size !: string;

  constructor() {
    super();
    this.src = '';
    this.alt = '';
    this.backgroundColor = 'green';
    this.defaultIcon = 'https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg';
  }

  
  render() {
    const showDefaultIcon = !this.src && !this.alt;

    return html`
      ${showDefaultIcon
        ? html`
            <div class="${this.size ? this.size : "medium"}">
              <img  src=${this.defaultIcon} alt="Default Icon" />
            </div>
          `
        : this.src
        ? html`
          <div class="${this.size ? this.size : "medium"}">
            <img  src=${this.src} alt=${this.alt} />
          </div>
          `
        : html`
          <div class="${this.size ? this.size : "medium"}">
            <div
              style=${`background-color: ${this.backgroundColor}; width: 100%; height: 100%;`}
            >
              ${this.alt ? this.alt.charAt(0).toUpperCase() : ''}
            </div>
          </div>
          `}
    `;
  }
}

