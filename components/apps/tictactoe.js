class appTictactoe extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open'}); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        @import url(https://fonts.googleapis.com/css?family=Pacifico|Lato);

        :host html, :host body, :host div, :host span, :host applet, :host object, :host iframe,
        :host h1, :host h2, :host h3, :host h4, :host h5, :host h6, :host p, :host blockquote, :host pre,
        :host a, :host abbr, :host acronym, :host address, :host big, :host cite, :host code,
        :host del, :host dfn, :host em, :host img, :host ins, :host kbd, :host q, :host s, :host samp,
        :host small, :host strike, :host strong, :host sub, :host sup, :host tt, :host var,
        :host b, :host u, :host i, :host center,
        :host dl, :host dt, :host dd, :host ol, :host ul, :host li,
        :host fieldset, :host form, :host label, :host legend,
        :host table, :host caption, :host tbody, :host tfoot, :host thead, :host tr, :host th, :host td,
        :host article, :host aside, :host canvas, :host details, :host embed, 
        :host figure, :host figcaption, :host footer, :host header, :host hgroup, 
        :host menu, :host nav, :host output, :host ruby, :host section, :host summary,
        :host time, :host mark, :host audio, :host video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: middle;
          
          -webkit-user-select: none; /* Chrome/Safari */        
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* IE10+ */
        
          /* Rules below not implemented in browsers yet */
          -o-user-select: none;
          user-select: none;
        }
        
        :host body{
          font-family : lato,sans;
        }
        
        :host div.head h1{
          color:#444;
          font-size : 4em;
          margin : 30px auto;
          text-align : center;
        }
        
        :host .curs{
          font-family: 'Pacifico',serif;
        }
        
        :host .wrap{
          position:relative;
          margin:auto;
          margin-top: 40px;
          width : 400px;
          
        }
        
        :host .row{
          text-align:center;
          margin : 10px auto;
        }
        
        :host div.pop-up h3{
          text-align:center;
          padding-top: 5px;
          color: #444;
        }
        
        :host .inline{
          display:inline-block;
          margin:10px 5px;
          text-align:center;  
        }
        
        :host .big{
          font-size:2em;
          margin : 30px auto;
        }
        
        :host #sub{
          color: #888;
        }
        
        :host .el,.el-s,.el-o{
          display: inline-block;
          height:110px;
          width:110px;
          font-size : 4.5em;
          background-color : #61b2a3;
          border-radius:20px;
          margin: auto 5px;
          color: #f8f8f8;
        }
        :host .el i,.el-s i,.el-o i{
          padding-bottom: 8px;
        }
        :host .el-o{
          margin-right: 20px;
        }
        :host .screen{
          display:none;
          background-color:rgba(10,10,10,0.6);
          position:fixed;
          width: 100%;
          height : 100%;
          top : 0;
        }
        
        :host .pop-up{
          position:absolute;
          width : 400px;
          height : 175px;
          border-radius: 20px;
          background-color:#fff;
          margin: 0 auto;
          top  : 250px;
          left : 50%;
          margin-left: -200px;
          box-shadow: 0px 5px 5px -2px rgba(20,20,20, 0.4);
          display:none;
        }
        
        :host .win{
          background-color: #E6382B;
        }
        
        :host .tie{
          background-color: #a5bcae;
        }
        
        :host .free{
          cursor : pointer;
          background-color: #71A299;
        }
        
        :host .free:hover{
          background-color : #61b2a3;
        }
        
        /* Scaling for Mobile */
        @media screen and (max-width: 450px){
        
          :host .head {
            display:none;
          }
          :host .wrap {
            top: 30px;
            
            -moz-transform: scale(0.7);
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
            
            -webkit-transform-origin: 0 0;
            -moz-transform-origin: 0 0;
            transform-origin: 0 0;
            
            left: 50%;
            margin-left: -140px;
          }
          
          :host .pop-up {
            
            top: 100px;
            -moz-transform: scale(0.7);
            -webkit-transform: scale(0.7);
            transform: scale(0.7);
            
            -webkit-transform-origin: 0 0;
            -moz-transform-origin: 0 0;
            transform-origin: 0 0;
            
            left: 50%;
            margin-left: -140px;
          }
        }
        
        :host .txt {
          position: relative;
          top: 5px;
        }
      </style>

      <div class="head"><h1 class="curs">Tic Tac Toe</h1></div>
      <div class="wrap">
        <div class="row r0">
          <div id='n0' class="el c0 d1"></div>
          <div id='n1' class="el c1"></div>
          <div id='n2' class="el c2 d2"></div>
        </div>
        <div class="row r1">
          <div id='n3' class="el c0"></div>
          <div id='n4' class="el c1 d1 d2"></div>
          <div id='n5' class="el c2"></div>
        </div>
        <div class="row r2">
          <div id='n6' class="el c0 d2"></div>
          <div id='n7' class="el c1"></div>
          <div id='n8' class="el c2 d1"></div>
        </div>
      </div>

      <div class="screen"></div>
        
      <div class="console pop-up">
        <div class="row">
          <div class="el-o"></i></div>
          <h3 class="big inline out">WINS!</h3>
        </div>
        <h3 id="sub">click inside to play again</h3>
      </div>

      <div class="select pop-up">
        <h3>PLEASE SELECT:</h3>
        <div class="row">
          <div id='x' class="el-s free"><i class="fa fa-times txt"></i></div>
          <h3 class='inline'>OR</h3>
          <div id ='o' class="el-s free"><i class="fa fa-circle-o txt"></i></div>
        </div>
      </div>
    `;
  }

}

customElements.define('os-app-tictactoe', appTictactoe);