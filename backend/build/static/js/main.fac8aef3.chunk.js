(this["webpackJsonpstock-watcher"]=this["webpackJsonpstock-watcher"]||[]).push([[0],{24:function(n,t,e){n.exports=e(37)},37:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(13),c=e.n(o),i=e(8),u=e(3),l=e(20),s=e(12),d=e.n(s),f=e(15),p=function(){return{type:"START_STOCK_LOAD"}},b=function(n){return function(){var t=Object(f.a)(d.a.mark((function t(e){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/stocks/".concat(n));case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,e({type:"FETCH_STOCK",payload:a||{}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}()},m=e(9),k=Object(i.c)({input:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_CHANGE":return t.payload;default:return n}},stock:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_STOCK_LOAD":return Object(m.a)(Object(m.a)({},n),{},{loading:!0});case"STOP_STOCK_LOAD":return Object(m.a)(Object(m.a)({},n),{},{loading:!1});case"FETCH_STOCK":return Object(m.a)(Object(m.a)({},t.payload),{},{loading:!1});default:return n}},stocksList:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL_STOCKS":return t.payload;default:return n}}}),h=e(4),v=e(5),g=e(7),O=e(6),y=e(1),j=e(2);function E(){var n=Object(y.a)(["\n  background-color: ",";\n  padding: 0.75rem 2rem;\n  border-radius: ",";\n  border: none;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background-color: #f3f3f3;\n    color: black;\n    cursor: pointer;\n  }\n"]);return E=function(){return n},n}function S(){var n=Object(y.a)(["\n  background-color: #f3f3f3;\n  color: ",";\n  padding: 0.75rem 1rem;\n  border-radius: ",";\n  margin: 1.5rem 0.5rem 0.5rem;\n  text-align: center;\n  border: none;\n"]);return S=function(){return n},n}var w=j.b.input(S(),"#312D33","7px"),C=j.b.button(E(),"#666685","7px"),x=function(n){Object(g.a)(e,n);var t=Object(O.a)(e);function e(){var n;Object(h.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=t.call.apply(t,[this].concat(a))).onInputChange=function(t){(0,n.props.updateInput)(t.target.value.toUpperCase())},n.onButtonClick=function(){var t=n.props.startStockLoad;n.props.fetchStock(n.props.input),t()},n.onKeyDown=function(t){if(13===t.keyCode){var e=n.props.startStockLoad;n.props.fetchStock(n.props.input),e()}},n}return Object(v.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(w,{onChange:this.onInputChange,onKeyDown:this.onKeyDown,placeholder:"Enter stock ticker",value:this.props.input}),a.a.createElement(C,{onClick:this.onButtonClick},"Search"))}}]),e}(a.a.Component),_=Object(u.b)((function(n){return{input:n.input}}),{updateInput:function(n){return{type:"INPUT_CHANGE",payload:n}},fetchStock:b,startStockLoad:p})(x);function T(){var n=Object(y.a)(["\n  padding: 0.25rem 1rem;\n  margin: 0.5rem;\n  border-radius: ",";\n  cursor: pointer;\n  background: #f3f3f3;\n  color: black;\n  display: inline-block;\n  transition: all 0.2s ease;\n\n  &:hover {\n    background: ",";\n  }\n"]);return T=function(){return n},n}function L(){var n=Object(y.a)(["\n  // background: ",";\n  margin: 1rem 0;\n  padding: 1rem 3rem;\n  text-align: left;\n  border-top: 3px dashed ",";\n  border-bottom: 3px dashed ",";\n"]);return L=function(){return n},n}var A=j.b.div(L(),"#383F45","#41454F","#41454F"),D=j.b.li(T(),"7px","#666685"),F=function(n){Object(g.a)(e,n);var t=Object(O.a)(e);function e(){var n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=t.call.apply(t,[this].concat(o))).onStockClick=function(t){var e=n.props,r=e.fetchStock,a=e.startStockLoad;r(t),a()},n.renderList=function(){var t=n.props.stocks;if(t&&!(t.length<=0))return t.map((function(t){return a.a.createElement(D,{key:t._id,onClick:function(){return n.onStockClick(t.ticker)}},t.ticker)}))},n.renderFrequentStocks=function(){var t=n.props.stocks;return!t||t.length<=0?"":a.a.createElement(A,null,a.a.createElement("h3",null,"Users' most frequently viewed stocks"),a.a.createElement("ul",null,n.renderList()))},n}return Object(v.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.fetchAllStocks)()}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderFrequentStocks())}}]),e}(a.a.Component),K=Object(u.b)((function(n){return{stocks:n.stocksList}}),{fetchAllStocks:function(n){return function(){var n=Object(f.a)(d.a.mark((function n(t){var e,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/stocks/");case 3:return e=n.sent,n.next=6,e.json();case 6:r=n.sent,t({type:"FETCH_ALL_STOCKS",payload:r||{}}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()},fetchStock:b,startStockLoad:p})(F),I=e(16);function H(){var n=Object(y.a)(["\n  border-left: 4px solid ",";\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 80%;\n  margin: 0 auto;\n  th,\n  td {\n    padding: 0.5rem 1rem;\n  }\n\n  @media screen and (max-width: 1024px) {\n    thead {\n      display: none;\n    }\n    tr {\n      display: block;\n    }\n    td:nth-child(odd) {\n      background: ",";\n    }\n    td {\n      display: block;\n      text-align: right;\n    }\n    td::before {\n      content: attr(data-label);\n      float: left;\n    }\n  }\n"]);return H=function(){return n},n}var N=j.b.table(H(),"#666685","#45414F"),P=function(n){return a.a.createElement("div",null,function(n){if(n&&!(n.length<=0)){var t=Object.entries(n).slice(0,7),e=t.map((function(n){var t=Object(I.a)(n,2),e=t[0];t[1];return a.a.createElement("th",{key:e},e)})),r=t.map((function(n){var t=Object(I.a)(n,2),e=t[0],r=t[1];return a.a.createElement("td",{"data-label":e,key:e},r)}));return a.a.createElement(N,null,a.a.createElement("thead",null,a.a.createElement("tr",null,e)),a.a.createElement("tbody",null,a.a.createElement("tr",null,r)))}}(n.entries))};function U(){var n=Object(y.a)(["\n  &,\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.5s infinite linear;\n\n  @-webkit-keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n"]);return U=function(){return n},n}var R=j.b.div(U()),q=function(){return a.a.createElement(R,null)};function B(){var n=Object(y.a)(["\n  margin: 0.75rem 0;\n"]);return B=function(){return n},n}var M=j.b.p(B()),Z=function(n){Object(g.a)(e,n);var t=Object(O.a)(e);function e(){return Object(h.a)(this,e),t.apply(this,arguments)}return Object(v.a)(e,[{key:"renderStock",value:function(){var n=this.props.stock,t=n.ticker,e=n.views,r=n.data;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(M,null,"Ammount of searches for ",t,": ",e),a.a.createElement(M,null,"Price from last 7 days:"),a.a.createElement(P,{entries:r}))}},{key:"render",value:function(){var n=this.props.stock;return a.a.createElement("div",null,n.loading?a.a.createElement(q,null):n.data?this.renderStock():"")}}]),e}(a.a.Component),z=Object(u.b)((function(n){return{stock:n.stock}}),{})(Z);function G(){var n=Object(y.a)(["\n  text-align: center;\n"]);return G=function(){return n},n}function J(){var n=Object(y.a)(["\n  width: 90%;\n  padding: 2rem;\n  text-align: center;\n"]);return J=function(){return n},n}function X(){var n=Object(y.a)(["\n  body {\n    background-color: ",";\n  }\n  * {\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    border-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return X=function(){return n},n}var V=Object(j.a)(X(),"#303037"),Q=j.b.div(J()),W=j.b.div(G()),Y=function(n){Object(g.a)(e,n);var t=Object(O.a)(e);function e(){return Object(h.a)(this,e),t.apply(this,arguments)}return Object(v.a)(e,[{key:"render",value:function(){return a.a.createElement(W,null,a.a.createElement(V,null),a.a.createElement(_,null),a.a.createElement(K,null),a.a.createElement(Q,null,a.a.createElement(z,null)))}}]),e}(a.a.Component),$=Object(u.b)(null,{})(Y),nn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,tn=Object(i.e)(k,nn(Object(i.a)(l.a)));c.a.render(a.a.createElement(u.a,{store:tn},a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fac8aef3.chunk.js.map