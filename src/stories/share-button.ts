import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css?inline" ;

@customElement('share-button')
class ShareButton extends LitElement {
  static styles = [unsafeCSS(bootstrapcss),
    css`
      span{
        font-size: 1.5rem;
        color: #757575;
      }

      .share{
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

      .share:hover{
        background-color: #f3f6f9;
        border-radius: 50%;
        width:40px;
        height: 40px;
        background: #f3f6f9 radial-gradient(circle, transparent 1%, #ededed 1%) center/15000%;
      }

      .share:active {
        background-color: #f3f6f9;
        background-size: 100%;
        transition: background 0s;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 130px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        text-align: left;
        border-radius: 10px;
        border: 1px solid gray;
      }
        
      .dropdown-content a {
        color: black;
        padding: 5px 16px;
        text-decoration: none;
        display: block;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
      }

      a:first-child:hover{
        border-radius: 10px 10px 0px 0px;
      }

      a:last-child:hover{
        border-radius: 0px 0px 10px 10px;
      }

      .show {display:block;}
 
  `];

  @property({type:Boolean}) clicked = false;
  @property() clickedColor = "#007acc";

  render(){ 
    return html`
      <div class="dropdown">
        <button type="button"  class="share" @click=${()=>this.clicked = !this.clicked}>
            <span>
              <?xml version="1.0" ?>
              <svg  transform="translate(0, -3)" preserveAspectRatio="xMidYMid meet" viewBox="0 0 17 17" height="100%" id="svg2" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs4"/>
              <g id="layer1" transform="translate(0,-1036.3622)">
                <path d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z" id="path2985" style="fill:${this.clicked ? this.clickedColor : '#757575'};fill-opacity:1;stroke:none;" transform="matrix(0.84528301,0,0,0.84528301,33.943395,1042.1773)"/>
                <path d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z" id="path2985-1" style="fill:${this.clicked ? this.clickedColor : '#757575'};fill-opacity:1;stroke:none" transform="matrix(0.84528301,0,0,0.84528301,33.943395,1052.1773)"/>
                <path d="m -22.410713,-3.3303571 a 2.3660715,2.3660715 0 1 1 -4.732143,0 2.3660715,2.3660715 0 1 1 4.732143,0 z" id="path2985-1-7" style="fill:${this.clicked ? this.clickedColor : '#757575'};fill-opacity:1;stroke:none" transform="matrix(0.84528301,0,0,0.84528301,23.943395,1047.1773)"/>
                <path d="M 13,3 3,8 13,13" id="path3791" style="fill:none;stroke:${this.clicked ? this.clickedColor : '#757575'};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(0,1036.3622)"/></g>
              </svg>
            </span>
        </button>

        <div id="dropdown" class="dropdown-content ${this.clicked ? "show" : ""}">

            <a href="#">
              <span>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                <svg height="24px" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z" style="fill:#fff;fill-rule:nonzero;"/></g>
                </svg>
              </span>
              Facebook
            </a>

            <a href="#">
              <span>
                <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.0//EN'  'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'>
                <svg enable-background="new 0 0 32 32" height="24px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z" fill="#55ACEE"/><g/><g/><g/><g/><g/><g/>
                </svg>
              </span>
              Twitter
            </a>

            <a href="#">
              <span>
                <?xml version="1.0" ?>
                <svg id="Layer_1" width="24px" height="24px" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
                    .st0{fill:url(#SVGID_1_);} .st1{fill:#FFFFFF;}</style>
                    <g><linearGradient gradientTransform="matrix(16.0027 -27.7174 27.7174 16.0027 -878.9595 -482.2268)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="-1.206969e-06" x2="1" y1="32" y2="32">
                      <stop offset="0" style="stop-color:#FEC053"/>
                      <stop offset="0.327" style="stop-color:#F2203E"/>
                      <stop offset="0.648" style="stop-color:#B729A8"/>
                      <stop offset="1" style="stop-color:#5342D6"/></linearGradient>
                      <path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0z"/>
                      <path class="st1" d="M20.7,6h-9.5C8.3,6,6,8.4,6,11.4v9.2c0,2.9,2.3,5.3,5.3,5.4h9.5c2.9,0,5.3-2.4,5.3-5.4v-9.2   C26,8.4,23.7,6,20.7,6z M24.2,20.5c0,2-1.6,3.7-3.7,3.7h-9.1c-2,0-3.7-1.7-3.6-3.7v-9c0-2,1.6-3.7,3.6-3.7h9.1c2,0,3.7,1.7,3.7,3.7   V20.5z"/>
                      <path class="st1" d="M16,10.9c-2.8-0.1-5.2,2.2-5.2,5c-0.1,2.8,2.2,5.2,5,5.2s5.2-2.2,5.2-5l0-0.1C21.1,13.2,18.8,10.9,16,10.9z    M16,19.3c-1.8,0-3.3-1.4-3.4-3.2c0-1.8,1.4-3.3,3.2-3.4s3.3,1.4,3.4,3.2l0,0.1C19.3,17.8,17.8,19.3,16,19.3z"/>
                      <path class="st1" d="M21.3,9.4c0.6,0,1.1,0.5,1.1,1.2s-0.5,1.2-1.1,1.2s-1.1-0.5-1.1-1.2S20.7,9.4,21.3,9.4z"/></g>
                </svg>
              </span>
              Instagram
            </a>
            
        </div>
      </div>  
    `
  } 
}