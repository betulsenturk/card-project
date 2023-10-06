import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css?inline" ;

import './like-button';
import './share-button';
import './method-button';

@customElement('card-footer')
class CardFooter extends LitElement {
  static styles = [unsafeCSS(bootstrapcss),
    css`

    .container{
      width: var(--card-size, 345px);
    }
    .row{
      margin:8px;
    }

    span{
      font-size: 1.5rem;
      color: #757575;
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

    `];

  @property()text !: string;
  @property()size !: string;

  render() {
    return html`
      <div class="container p-0 ${this.size}">
        <div class="row text-center">

          <div class="col p-0">
            <like-button></like-button>
          </div> 

          <div class="col p-0">
            <share-button></share-button>
          </div>   

          <div class="col ${this.size == "small" ? "col-8" : "col-9"} p-0 text-end">
            <method-button size="${this.size}" text="${this.text}"></method-button>
          </div>  

        </div>
      </div>
    
    `;
  }
}