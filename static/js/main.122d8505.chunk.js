(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/twitter-square.1fff4324.svg"},function(e,t,a){e.exports=a.p+"static/media/quote-left.ec012766.svg"},function(e,t,a){e.exports=a(30)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),i=a(1),u=a(2),s=a(4),l=a(3),m=a(5),h=(a(22),a(11)),f=a.n(h),b=a(12),p=a.n(b),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={quote:{}},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getRandomQuote",value:function(){var e=this;fetch("https://talaikis.com/api/quotes/random/").then(function(e){return e.json()}).then(function(t){e.setState({quote:t})}).catch(function(e){console.error(e)})}},{key:"shareOnTwitter",value:function(e){e.preventDefault();var t=e.target.parentNode.href;window.open(t,"Share","width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0")}},{key:"componentWillMount",value:function(){this.getRandomQuote()}},{key:"render",value:function(){var e=this.state.quote,t=e.quote,a=e.author;return c.a.createElement("div",{className:"Quote"},c.a.createElement("p",{className:"Quote__icon"},c.a.createElement("img",{src:p.a,alt:"Quote icon"})),c.a.createElement("p",{className:"Quote__text"},t),c.a.createElement("p",{className:"Quote__author"},"- ",a),c.a.createElement("button",{onClick:this.getRandomQuote.bind(this),className:"Quote__get-quote-btn"},"Get Another Quote"),c.a.createElement("a",{href:"https://twitter.com/intent/tweet?via=devHammed&text=".concat(t," - ").concat(a),onClick:this.shareOnTwitter.bind(this),className:"Quote__share-twitter-btn"},c.a.createElement("img",{src:f.a,alt:"Share on Twitter"})))}}]),t}(n.Component),O=(a(24),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"Header"},c.a.createElement("h1",{className:"Header__text"},"React Quotes Machine"))}}]),t}(n.Component)),j=(a(26),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"Footer"},"Made by ",c.a.createElement("a",{href:"https://devhammed.github.io",className:"Footer__link"},"Oyedele Hammed"))}}]),t}(n.Component)),v=(a(28),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null),c.a.createElement(d,null),c.a.createElement(j,null))}}]),t}(n.Component));o.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[13,2,1]]]);
//# sourceMappingURL=main.122d8505.chunk.js.map