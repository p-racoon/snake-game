(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),l=a.n(o),s=(a(12),a(1));function c(e){return n.a.createElement("div",{className:"row score-board "},n.a.createElement("div",{className:"col text-center"},n.a.createElement("h4",null,n.a.createElement("span",{className:"badge badge-pill badge-dark m-2"},e.playerName||"Player Name"),n.a.createElement("span",{className:"badge badge-pill badge-dark m-2"},"Score:",e.score||"0"))))}var i=a(2),m=a(3);a(14);function u(e){var t=e.pixelHeight||"20px",a=e.pixelWidth||"20px";return n.a.createElement("div",{className:e.pixelType,style:{height:t,width:a}},e.key)}function d(e){var t=e.gridSize,a=e.apple,r=e.isSnake;return n.a.createElement("div",{className:""},Object(m.a)(Array(t)).map(function(e,o){return n.a.createElement("div",{className:"game-row ",key:o},Object(m.a)(Array(t)).map(function(e,t){return n.a.createElement("div",{className:"",key:o+"_"+t},n.a.createElement(u,{pixelType:a.x===o&&a.y===t?" apple ":r(o,t)?"snake":"square"}))}))}))}function y(e){return n.a.createElement("div",null,"PLAYING"===e.isPlaying?n.a.createElement("p",{className:"text-muted"},"Press 'Q' to Quit, or 'P' to pause the game."):"ENDED"===e.isPlaying?n.a.createElement("div",{class:"card border-danger mb-3"},n.a.createElement("div",{class:"card-header"},"Well Done! #Sarcasm"),n.a.createElement("div",{class:"card-body"},n.a.createElement("h4",{class:"card-title "},"WormHearted Lord. ",e.playerName),n.a.createElement("p",{class:"card-text"},"No. of Seconds Survived: ",e.score))):"PAUSED"===e.isPlaying?n.a.createElement("p",{className:"text-muted"},"\"Press 'Space Bar' or 'Enter' to Continue\""):"NOTSTARTED"===e.isPlaying?n.a.createElement("p",{className:"text-muted"},"\"Press 'Space Bar' or 'Enter' to Start\""):n.a.createElement("p",{className:"text-muted"}))}function h(e){return n.a.createElement("div",{className:"row buttons"},n.a.createElement("div",{className:"col-3"},n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){e.endGame()}},"Quit"),n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){"PLAYING"===e.isPlaying?e.stopGame():"PAUSED"===e.isPlaying||"ENDED"===e.isPlaying||"NOTSTARTED"===e.isPlaying?e.startGame():(alert("lojaojfij"),console.log(e))}}," >  / | | ")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.setVelocity({x:-1,y:0})}},"W \u2191")," ",n.a.createElement("br",null),n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.setVelocity({x:0,y:-1})}},"A \u2190"),n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.setVelocity({x:1,y:0})}},"S \u2193"),n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.setVelocity({x:0,y:1})}},"D \u2192")),n.a.createElement("div",{className:"col-3"},n.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.reverseDirection()}},"Reverse")))}var E=[{x:10,y:6},{x:10,y:7},{x:10,y:8},{x:10,y:9},{x:10,y:10}],p={x:10,y:10},b=4,g=null,f={x:0,y:1},v=20,N={x:Math.floor(Math.random()*v),y:Math.floor(Math.random()*v)},w=0,x=2,k="forward";function S(e){v=e.gridSize;var t=Object(r.useState)("NOTSTARTED"),a=Object(s.a)(t,2),o=a[0],l=a[1],m=Object(r.useState)({x:0,y:1}),u=Object(s.a)(m,2)[1],S=Object(r.useState)({x:10,y:10}),j=Object(s.a)(S,2)[1],P=Object(r.useState)({x:Math.floor(Math.random()*e.gridSize),y:Math.floor(Math.random()*e.gridSize)});Object(s.a)(P,2)[1];return Object(r.useEffect)(function(){return document.addEventListener("keydown",D),function(){document.removeEventListener("keydown",D)}},[]),Object(r.useEffect)(function(){window.scrollTo(0,0)},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"game-board d-flex justify-content-center "},n.a.createElement("div",{className:"mb-4"},n.a.createElement(c,{playerName:e.playerName,score:w.toFixed(2)}),n.a.createElement(y,{score:w.toFixed(2),playerName:e.playerName,isPlaying:o}),n.a.createElement(d,{gridSize:e.gridSize,apple:N,isSnake:T}))),n.a.createElement(h,{isPlaying:o,startGame:M,stopGame:I,setVelocity:A,reverseDirection:C,endGame:W}),n.a.createElement("hr",null),n.a.createElement("div",{className:"row instructions text-center"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"How to Play?"),n.a.createElement("p",null,"Acid Rain is killing the worms, every 2 seconds a part of the worm dies, you have to be quick.",n.a.createElement("br",null),"Press 'Space' or 'Enter' to start the game.",n.a.createElement("br",null),"Press 'Escape' or 'P' to Pause the game. ",n.a.createElement("br",null),"Use the Arrow Keys, or (WASD) to guide the worm.",n.a.createElement("br",null),"This is not a snake game it's a worm game, worms do not bite themselves( Actually neither do snakes, but anyways), so making them bite their own tails won't kill the worms.",n.a.createElement("br",null),"And, Earthworms can eat form either of their heads, so just press the 'R' key to change the eating mouth",n.a.createElement("br",null),"It is a race against time."))));function D(e){!function(e,t,a,r,n,o,l){switch(e.code){case"Space":case"Enter":e.preventDefault(),t();break;case"Escape":a();break;case"KeyA":case"ArrowLeft":e.preventDefault(),n({x:0,y:-1});break;case"KeyW":case"ArrowUp":e.preventDefault(),n({x:-1,y:0});break;case"KeyD":case"ArrowRight":e.preventDefault(),n({x:0,y:1});break;case"KeyS":case"ArrowDown":e.preventDefault(),n({x:1,y:0});break;case"KeyR":o();break;case"KeyQ":l()}}(e,M,I,0,A,C,W)}function A(e){f=e,u(e)}function O(){w+=.1,x-=.1;var t=p.x+f.x,a=p.y+f.y;0==w&&e.setWormMessage("Feed Me, Its Dinner Time Already"),10==w&&e.setWormMessage("Woohoo! You are proving yourself to be worthy!!"),20==w&&e.setWormMessage("Holy Gaga, in the 20-20 league!!"),30==w&&e.setWormMessage("Poocho Satra, You know where your apples are"),t<0?t=e.gridSize-1:t>e.gridSize-1&&(t=0),a<0?a=e.gridSize-1:a>e.gridSize-1&&(a=0),j({x:t,y:a}),p={x:t,y:a},T(t,a),"forward"===k?E.push({x:t,y:a}):E.unshift({x:t,y:a}),E.length>b&&(E="forward"===k?Object(i.takeRight)(E,b):Object(i.take)(E,b)),N.x===t&&N.y===a&&(b+=1,N={x:Math.floor(Math.random()*e.gridSize),y:Math.floor(Math.random()*e.gridSize)}),x<=0&&(x=2,b<=1&&W(),b-=1)}function M(){l("PLAYING"),E=[{x:10,y:6},{x:10,y:7},{x:10,y:8},{x:10,y:9},{x:10,y:10}],p={x:10,y:10},b=5,g=null,f={x:0,y:1},v=20,N={x:Math.floor(Math.random()*v),y:Math.floor(Math.random()*v)},w=0,g=setInterval(O,100)}function I(){clearInterval(g),g=null,l("PAUSED")}function W(){I(),l("ENDED")}function C(){p="forward"===k?Object(i.take)(E)[0]:Object(i.takeRight)(E)[0],f={x:-1*f.x,y:-1*f.y},k="forward"===k?"reverse":"forward"}function T(e,t){return!!E.find(function(a){return a.x===e&&a.y===t})}}function j(e){var t=Object(r.useState)("Got It!"),a=Object(s.a)(t,2),o=a[0],l=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"display-4"},"Instructions"),n.a.createElement("p",{className:"lead"},"EarthWorm- \"I used to be happy this time of the year. Every time it rained I got to meet my introverted Cousins, as the rains would push them out of their homes. We used to have a feast roaming and chugging up. Things have changed now, the water stings, and food is nowhere to be found. This time it is just me. I guess I am the last one. We have been forced to have an apples only diet, but we don't know where these apples are, guide us to the apples, before the stinging ends forever. At this dire hour you are our only hope ",e.playerName,'. Do this and you will find your place in one of my 5 Hearts. You are our last hope, help us!!"'),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,"Acid Rain is killing the worms, every 2 seconds a part of the worm dies, you have to be quick.",n.a.createElement("br",null),"Press 'Space' or 'Enter' to start the game.",n.a.createElement("br",null),"Press 'Escape' or 'P' to Pause the game. ",n.a.createElement("br",null),"Use the Arrow Keys, or (WASD) to guide the worm.",n.a.createElement("br",null),"This is not a snake game it's a worm game, worms do not bite themselves( Actually neither do snakes, but anyways), so making them bite their own tails won't kill the worms.",n.a.createElement("br",null),"And, Earthworms can eat form either of their heads, so just press the 'R' key to change the eating mouth",n.a.createElement("br",null),"It is a race against time.",n.a.createElement("br",null)),n.a.createElement("p",{className:"lead "},n.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:function(){return l("Seriously! I hope you got this! Counting on you")},onDoubleClick:function(){return e.setInstructionDivVisibile(!1)}},o),"Seriously! I hope you got this! Counting on you"===o?n.a.createElement("span",{className:"text-muted"},n.a.createElement("br",null),"(Double Click to Enter :)"):null),n.a.createElement("p",{className:"text-muted"},"(Click on the Apple & worm image on top Read instructions again)"))}a(15);l.a.render(n.a.createElement(function(){var e=Object(r.useState)("Feed Me Right Now"),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)(!0),c=Object(s.a)(l,2),i=c[0],m=c[1],u=Object(r.useState)("GuestUser"+Math.floor(1e3*Math.random())),d=Object(s.a)(u,2),y=d[0],h=d[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"}),n.a.createElement("div",{className:"col-1"},n.a.createElement("img",{src:"./apple-e-worm.png",alt:"apple-earthworm",className:"worm-icon img-fluid rounded mx-auto d-block",onClick:function(){return m(!i)}})),n.a.createElement("div",{className:"col-5 "},n.a.createElement("div",{className:"card border-primary mt-3 p-2"},n.a.createElement("h2",{className:""},a),n.a.createElement("h5",{className:""},"-EarthWorm"))),n.a.createElement("div",{className:"col-3"})),i?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col "},n.a.createElement("div",{className:"jumbotron m-2"},n.a.createElement("div",{className:"form-group row text-center"},n.a.createElement("div",{className:"col"}),n.a.createElement("label",{className:"col-sm-4 col-form-label",htmlFor:"playerName"},"Please Enter Your Name, Wormhearted Saviour"),n.a.createElement("input",{type:"text",className:"col-sm-3 form-control",placeholder:y,id:"playerName",maxLength:"15",value:y,onChange:function(e){return h(e.target.value)},onFocus:function(e){return e.target.select()}}),n.a.createElement("div",{className:"col"})),n.a.createElement(j,{playerName:y,setInstructionDivVisibile:m})))):n.a.createElement(S,{gridSize:20,playerName:y,setWormMessage:o}))))},null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.018a9113.chunk.js.map