(window["webpackJsonpsimple-hangman"]=window["webpackJsonpsimple-hangman"]||[]).push([[0],{10:function(e,t,r){e.exports=r(15)},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(9),s=r.n(o),c=r(7),i=r(6),l=r(1),u=r(2),p=r(4),d=r(3),h=r(5),b=["Hello","Goodbye","Rock","Paper","Scissors"],f={alphaContainer:{maxWidth:"500px"},btn:{padding:"4px",fontSize:"1.3em"}},O=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e,t){e.target.disabled=!0,r.props.onClick(t)},r}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this,t=[],r=function(r){var n=String.fromCharCode(r);t.push(a.a.createElement("button",{onClick:function(t){return e.handleClick(t,n)},style:f.btn},n))},n=65;n<91;n++)r(n);return a.a.createElement("div",{style:f.alphaContainer},t)}}]),t}(n.Component),y={height:"10px",width:"180px",margin:"1px",textAlign:"center",fontSize:"12px"};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object(c.a)(Array(this.props.count).keys()).map(function(t){return e.props.isWinner?a.a.createElement("div",{style:g({},y,{backgroundColor:"green",border:"1px solid green"})},++t):t<e.props.usedGuesses?a.a.createElement("div",{style:g({},y,{backgroundColor:e.props.color,border:"1px solid ".concat(e.props.color)})},++t):a.a.createElement("div",{style:g({},y,{border:"1px solid black"})},++t)});return a.a.createElement("div",null,"GUESSES:",t)}}]),t}(n.Component),v={display:"inline-block",margin:"5px",fontSize:"2em"},w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isShown?this.props.letter:"_";return a.a.createElement("div",{style:v},e)}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.word.split(""),t=this.props.showLetters;return a.a.createElement("div",null,e.map(function(e){var r=e.toUpperCase(),n=t.includes(r);return a.a.createElement(w,{letter:r,isShown:n})}))}}]),t}(n.Component);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var k={display:"flex",flexDirection:"row",maxWidth:"800px",margin:"0 auto",justifyContent:"center"},P={wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({minHeight:"100px"},k),main:{textAlign:"center",width:"60%",padding:"10px",background:"#aaa"}};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach(function(t){Object(i.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var G=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).defaultState={word:"",color:"red",correctGuesses:0,guessedLetters:[],tries:8,key:1,isWinner:!1},r.state=r.defaultState,r.componentDidMount=function(){return r.resetState()},r.resetState=function(){r.setState(C({},r.defaultState,{key:Math.floor(999*Math.random())}),function(){return r.getWord()})},r.getWord=function(){r.setState({word:b[Math.floor(Math.random()*b.length)]})},r.handleGameLoss=function(){alert("GAME OVER! :( YOU LOSE :("),r.resetState()},r.handleGameWin=function(){r.setState({color:"green",isWinner:!0},function(){return alert("WINNER WINNER WINNER!!!")})},r.checkGameStatus=function(){console.log(r.state),r.state.word.length===r.state.correctGuesses?r.handleGameWin():r.state.tries===r.state.guessedLetters.length&&r.handleGameLoss()},r.handleGuess=function(e){var t=r.state.word.toUpperCase().match(new RegExp(e,"g")),n=t?t.length:0;console.log(n),r.setState({guessedLetters:[e].concat(Object(c.a)(r.state.guessedLetters)),correctGuesses:r.state.correctGuesses+n},function(){return r.checkGameStatus()})},r}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:P.wrapper},a.a.createElement(j,{isWinner:this.state.isWinner,count:this.state.tries,usedGuesses:this.state.guessedLetters.length,color:this.state.color})),a.a.createElement("div",{style:k},a.a.createElement("div",{style:P.main},a.a.createElement(E,{word:this.state.word,showLetters:this.state.guessedLetters}),a.a.createElement(O,{key:this.state.key,onClick:this.handleGuess}))),a.a.createElement("div",{style:C({},k,{marginTop:"10px"})},a.a.createElement("button",{disabled:!this.state.isWinner,onClick:this.resetState},"RESET GAME")))}}]),t}(n.Component);s.a.render(a.a.createElement(G,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f7aca6a6.chunk.js.map