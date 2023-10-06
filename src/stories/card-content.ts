import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('card-content')
class CardContent extends LitElement {

  static styles = css`
    .content{
      padding: 16px;
    }
    
    p{
      margin:0px;
      font-family: "Roboto","Helvetica","Arial",sans-serif;
      font-weight: 400;
      font-size: var(--card-content-font-size, 0.875rem);
      line-height: 1.43;
      letter-spacing: 0.01071em;
      color:rgba(0, 0, 0, 0.6);
    }
    .small {
      font-size: 0.75rem;
    }

    .medium {
      font-size: 0.875rem;
    }

    .large {
      font-size: 1.25rem;
    }
  `

  @property() content!:string;
  @property() fontSize: string = 'medium';

  render() {
    return html`
      <div class="content">
        <p class="${this.fontSize}">${this.content}</p>
      </div>
    `;
  }
}