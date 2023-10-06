import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement,property,query} from 'lit/decorators.js';
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css?inline" ;
import {map} from 'lit/directives/map.js'

@customElement('menu-item')
class MenuItem extends LitElement {

    @query("#dropdown") dropdown!:any;

    static styles = [unsafeCSS(bootstrapcss),
    css`
        span{
            font-size: 1.5rem;
            color: #757575;
        }

        .dropbtn{
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

        .dropbtn:hover{
            background-color: #f3f6f9;
            border-radius: 50%;
            width:40px;
            height: 40px;
            background: #f3f6f9 radial-gradient(circle, transparent 1%, #ededed 1%) center/15000%;
        }

        .dropbtn:active {
            background-color: #f3f6f9;
            background-size: 100%;
            transition: background 0s;
          }

    
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 140px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
          
        .dropdown-content a {
            color: black;
            padding: 10px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {background-color: #ddd;}
          
        .show {display:block;}
        

    `];

    @property() clicked = false;
   /* 
    @property() links = 
        [{name: "Link 1", link: "#"},
         {name: "Link 2", link: "#"},
         {name: "Link 3", link: "#"}
        ];
*/
    @property({type:Array}) links = [];
    @property({type:Number}) numberOfLinks = 3;

    connectedCallback() {
        super.connectedCallback();
        this.fetchLinks().then((links) => {
          this.links = links;
        });
      }

  render() {
    const linkTemplates = [];
    for (let i=0; i<this.numberOfLinks ; i++) {
        linkTemplates.push(html`<a href= ${this.links[i].link}>${this.links[i].name}</a>`);
    }

    return html`
    <div class="dropdown">

        <button @click="${()=>this.clicked = !this.clicked}"
         type="button" class="dropbtn">
             <span><b>&#8942;</b></span>
        </button>

        <div id="dropdown" class="dropdown-content ${this.clicked ? "show" : ""}">

            ${linkTemplates}        
            
        </div>
    </div>    
    `;
  }
   fetchLinks() {
    return fetch("./src/stories/links.json")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }
}