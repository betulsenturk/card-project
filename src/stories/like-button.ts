import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('like-button')
class LikeButton extends LitElement {
  static styles = css`
    span{
        font-size: 1.5rem;
        color: #757575;
    }

    .like{
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

    .like:hover{
        background-color: #f3f6f9;
        border-radius: 50%;
        width:40px;
        height: 40px;
        background: #f3f6f9 radial-gradient(circle, transparent 1%, #ededed 1%) center/15000%;
    }

    .like:active {
        background-color: #f3f6f9;
        background-size: 100%;
        transition: background 0s;
      }
    
  `;

  @property({type:Boolean}) liked = false;
  @property() likedColor = "red";
  @property() unlikedColor = "#757575"

  render(){ 
    return html`
        <button type="button" class="like"
         @click="${() => this.liked = !this.liked}">
            <span>
              <?xml version="1.0" ?>
              <svg height="100%" id="Layer_1"  version="1.1" viewBox="0 0 425 425" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path transform="translate(-40, -40)" d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" style="fill:${this.liked ? this.likedColor : this.unlikedColor}"/>
              </svg>
            </span>
        </button>
      `
  } 
}