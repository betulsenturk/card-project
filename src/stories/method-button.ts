import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('method-button')
class MethodButton extends LitElement {
  static styles = css`
    span{
      font-size: 1.5rem;
      color: #757575;
    }

    .method{
      background-color: white;
      border: 0px;
      border-radius: 50%;
      font-size:1.5rem;
      width:40px;
      height: 40px;
      padding: 8px;
      background-position: center;
      transition: background 0.6s;
    }

    .method:hover{
      background-color: #f3f6f9;
      border-radius: 50%;
      width:40px;
      height: 40px;
      background: #f3f6f9 radial-gradient(circle, transparent 1%, #ededed 1%) center/15000%;
    }

    .method:active {
      background-color: #f3f6f9;
      background-size: 100%;
      transition: background 0s;
    }

    .method-text{
      width: 313px;
      transform:translate(-93px,0px);
      padding: 0px 16px 16px 16px;
    }
    .method-text#small{
      width: 272px;
      transform:translate(-100px,0px);
    }
    .method-text#large{
      width: 415px;
      transform:translate(-110px,0px);
    }
    p{
      display: none;
      margin: 0px 0px 16px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938em;
      text-align: justify;
      color: #212121;
    }
    .small{
      font-size: 0.875rem;
    }
    .medium{
      font-size: 1rem;
    }
    .large{
      font-size: 1.25rem;
    }

    .show{
      display:block;
    }
  `;

  @property({type:Boolean}) clicked = false;
  @property() text !:string;
  @property() size !: string;
  
  render(){ 
    const arrowDown = 
      html`
        <span>
          <?xml version="1.0" ?><svg height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z" style="fill:#757575"/>
          <path d="M0-.75h48v48h-48z" fill="none"/></svg>
        </span>
      `;
    
    const arrowUp = html`
      <span>
        <?xml version="1.0" ?><svg height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" style="fill:#757575"/>
        <path d="M0 0h48v48h-48z" fill="none"/></svg>
      </span>
      `;

    return html`
        <button type="button" class="method" @click="${() => this.clicked = !this.clicked}">
            ${!this.clicked ? 
            html`
              ${arrowDown}
            ` : 
            html`
              ${arrowUp}
            `
            }
        </button>
        
        <div class="method-text" id="${this.size}">
          <p class="${this.clicked ? "show" : ""} ${this.size}">${this.text}</p>
        </div>
    `
  } 
}