import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css?inline" ;

import './menu-item';
import './avatar-icon';


@customElement('card-header')
class CardHeader extends LitElement {
  static styles = [unsafeCSS(bootstrapcss),
    css`
      .container{
        width: var(--card-size, 345px);
      }
      img {
        width: 40px;
        height: 40px;
      }

      .avatar{
        margin-right: 16px;
      }

      .row{
        margin:16px;
      }

      p{
        margin:0px;
        color: #212121;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
      }

      .grey{
        color: rgba(0, 0, 0, 0.6);
      }

      .menu{
        position:relative;
      }

      menu-item{
        position:absolute;
        right:0px;
      }
      .small{
        width: 300px;
      }
      .medium{
        width: 345px;
      }
      .large{
        width: 450px;
      }

      .small p{
        font-size: 0.75rem;
      }
      .medium p{
        font-size: 0.875rem;
      }

      .large p{
        font-size: 1rem;
      }


    `]; 

  @property()cardTitle!:string;
  @property()date!:string;
  @property()size!:string;

  render() {
    return html`
    
      <div class="container p-0 ${this.size}">
        <div class="row">

          <div class="col p-0 avatar">
            <avatar-icon size="${this.size}" alt="Shrimp and Chorizo Paella"></avatar-icon>
          </div>  

          <div class="col p-0 col-8 title">
            <p>${this.cardTitle}</p>
            <p class="grey">${this.date}</p>
          </div>  

          <div class="col p-0 menu">
            <menu-item></menu-item>
          </div>  

        </div>
      </div>
    `;
  }
}
