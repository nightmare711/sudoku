(this.webpackJsonpsudokupuzzlereact=this.webpackJsonpsudokupuzzlereact||[]).push([[0],{126:function(e,t,n){e.exports=n(163)},133:function(e,t,n){},156:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),l=n.n(o),i=(n(131),n(132),n(133),n(22)),c=n(34),u=n(35),s=n(41),f=n(40),m=n(33),d=n(10);function h(e,t){return Math.floor(Math.random()*(t-e))+e}var p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=Array.from(e[t],(function(e){return Number(e)}));if(n)return!r.includes(Number(n));var a=[];return r.forEach((function(e){a.includes(e)||a.push(e)})),a.length===e[t].length},b=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=0;r<9;r++)if(Number(e[r][t])===Number(n))return!1;return!0},v=function(e,t,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=3*parseInt(t/3),o=3*parseInt(n/3),l=a;l<a+3;l++)for(var i=o;i<o+3;i++)if(Number(e[l][i])===Number(r))return!1;return!0},y=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return!!(v(e,t,n,r)&&b(e,n,r)&&p(e,t,r))},g=function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(!y(e,t,n))return!1;return!0},E=function(e,t){var n,r;"Beginner"===t?(n=1,r=1):"Easy"===t?(n=3,r=3):"Normal"===t?(n=4,r=6):"Hard"===t&&(n=7,r=10);for(var a=0;a<e.length;a+=1)for(var o=h(n,r),l=0,i=[0,1,2,3,4,5,6,7,8];l<o;){var c=h(0,i.length);e[a].splice(i[c],1,null),i.splice(c,1),l+=1}},C=function(){for(var e=[],t=0;t<9;t++){for(var n=[],r=0;r<9;r++)n.push(null);e.push(n)}return e},O=y,N=g,j=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},k=function e(t,n){for(var r=function(r){for(var a=function(a){if(null===t[r][a])return n.forEach((function(o){if(y(t,r,a,o)){if(t[r][a]=o,e(t,n),g(t))return t;t[r][a]=null}})),{v:{v:t}}},o=0;o<9;o++){var l=a(o);if("object"===typeof l)return l.v}},a=0;a<9;a++){var o=r(a);if("object"===typeof o)return o.v}},S=n(88),w=n.n(S),B=n(118),T=n(30),D=(n(156),function(e,t,n,r,a,o){for(var l=0;l<t.length;l++)for(var i=0;i<n.length;i++)e["".concat(t[l]," ").concat(n[i])]=r?o:a}),G=n(8),R=n(9);function I(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return I=function(){return e},e}function q(){var e=Object(G.a)(["\n  border-top: ",";\n  border-left: ",";\n  color: ",";\n  opacity: ",";\n"]);return q=function(){return e},e}var P=R.a.button(q(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),K={SquareBorderTopLeft:P,DisabledTopLeft:Object(R.a)(P)(I())};function x(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return x=function(){return e},e}function L(){var e=Object(G.a)(["\n  border-top: ",";\n  border-right: ",";\n  color: ",";\n  opacity: ",";\n"]);return L=function(){return e},e}var M=R.a.button(L(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),z={SquareBorderTopRight:M,DisabledTopRight:Object(R.a)(M)(x())};function Y(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return Y=function(){return e},e}function A(){var e=Object(G.a)(["\n  border-top: ",";\n  color: ",";\n  opacity: ",";\n"]);return A=function(){return e},e}var U=R.a.button(A(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),H={SquareBorderTop:U,DisabledTop:Object(R.a)(U)(Y())};function F(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return F=function(){return e},e}function J(){var e=Object(G.a)(["\n  border-bottom: ",";\n  border-left: ",";\n  color: ",";\n  opacity: ",";\n"]);return J=function(){return e},e}var W=R.a.button(J(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),X={SquareBorderBottomLeft:W,DisabledBottomLeft:Object(R.a)(W)(F())};function Q(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return Q=function(){return e},e}function V(){var e=Object(G.a)(["\n  border-bottom: ",";\n  border-right: ",";\n  color: ",";\n  opacity: ",";\n"]);return V=function(){return e},e}var Z=R.a.button(V(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),$={SquareBorderBottomRight:Z,DisabledBottomRight:Object(R.a)(Z)(Q())};function _(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return _=function(){return e},e}function ee(){var e=Object(G.a)(["\n  border-bottom: ",";\n  color: ",";\n  opacity: ",";\n"]);return ee=function(){return e},e}var te=R.a.button(ee(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),ne={SquareBorderBottom:te,DisabledBottom:Object(R.a)(te)(_())};function re(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(G.a)(["\n  border-left: ",";\n  color: ",";\n  opacity: ",";\n"]);return ae=function(){return e},e}var oe=R.a.button(ae(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),le={SquareBorderLeft:oe,DisabledLeft:Object(R.a)(oe)(re())};function ie(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(G.a)(["\n  border-right: ",";\n  color: ",";\n  opacity: ",";\n"]);return ce=function(){return e},e}var ue=R.a.button(ce(),(function(e){return"0.2em ".concat(e.borderColor," solid")}),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),se={SquareBorderRight:ue,DisabledRight:Object(R.a)(ue)(ie())};function fe(){var e=Object(G.a)(["\n  &&& {\n    cursor: not-allowed;\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(G.a)(["\n  color: ",";\n  opacity: ",";\n"]);return me=function(){return e},e}var de=R.a.button(me(),(function(e){return e.modify?null:"#fff"}),(function(e){return null!==e.children?.65:1})),he={noBorder:de,DisabledNoBorder:Object(R.a)(de)(fe())},pe=function(e,t,n,r){return a.a.createElement(e,{onClick:n,className:"square light",modify:!0,borderColor:r},t)},be=function(e,t,n,r){return a.a.createElement(e,{onClick:n,className:"square danger",borderColor:r},t)},ve=function(e,t,n){return a.a.createElement(e,{className:"square primary",borderColor:n},t)},ye={edit:!1,valid:!0},ge=[0,3,6],Ee=[2,5,8],Ce=[1,4,7],Oe=function(e){var t={};return D(t,ge,ge,e,K.SquareBorderTopLeft,K.DisabledTopLeft),D(t,ge,Ee,e,z.SquareBorderTopRight,z.DisabledTopRight),D(t,Ee,ge,e,X.SquareBorderBottomLeft,X.DisabledBottomLeft),D(t,Ee,Ee,e,$.SquareBorderBottomRight,$.DisabledBottomRight),D(t,ge,Ce,e,H.SquareBorderTop,H.DisabledTop),D(t,Ee,Ce,e,ne.SquareBorderBottom,ne.DisabledBottom),D(t,Ce,ge,e,le.SquareBorderLeft,le.DisabledLeft),D(t,Ce,Ee,e,se.SquareBorderRight,se.DisabledRight),t},Ne=function(e,t){return function(e,t){var n;return(n={},Object(T.a)(n,"0 0","blue"),Object(T.a)(n,"3 3","blue"),Object(T.a)(n,"6 6","blue"),Object(T.a)(n,"0 3","yellow"),Object(T.a)(n,"3 6","yellow"),Object(T.a)(n,"6 0","yellow"),n)["".concat(e," ").concat(t)]}(e,t)||"#c700ff"},je=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleKeyPress=function(){var e=Object(B.a)(w.a.mark((function e(t){var n,a,o,l,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.props,a=n.row,o=n.col,l=n.grid,i=t.key,Number(i)!==Number(l[a][o])&&(O(l,a,o,i)?r.setState({valid:!0}):r.setState({valid:!1})),"Backspace"===t.key||"Delete"===t.key?r.props.pressKey(null,a,o):(r.props.pressKey(t.key,a,o),r.handleClick());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleClick=function(){r.setState((function(){return{edit:!r.state.edit}}))},r.state=ye,r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.col,r=e.number,o=3*parseInt(t/3),l=3*parseInt(n/3),i=Ne(o,l),c=Oe()["".concat(t," ").concat(n)]||he.noBorder,u=Oe(!0)["".concat(t," ").concat(n)]||he.DisabledNoBorder;return!1===this.props.modify?ve(u,r,i):this.state.edit?a.a.createElement(d.d,{autoFocus:!0,onBlur:this.handleClick,type:"text",pattern:"[0-9]*",inputMode:"numeric",onKeyDown:this.handleKeyPress,className:"square",value:null!==this.props.number?this.props.number:""}):this.state.valid||null===this.props.number?pe(c,r,this.handleClick,i):be(c,r,this.handleClick,i)}}]),n}(a.a.Component),ke=function(e){var t=e.cells,n=void 0===t?[]:t,r=e.rowNum,o=e.grid,l=e.handleKeyPress;return a.a.createElement("div",{className:"sudoku-row"},n.map((function(e,t){return function(e,t,n,r,o){var l=t;return null===l||"string"===typeof l?a.a.createElement(je,{key:"".concat(n," ").concat(r),number:l,pressKey:o,row:n,col:r,grid:e,modify:!0}):a.a.createElement(je,{key:"".concat(n," ").concat(r),row:n,col:r,number:l,modify:!1})}(o,e,r,t,l)})))},Se=n(90),we=n.n(Se),Be=n(48),Te=n.n(Be),De=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).generateBoard=function(e){var t=C();k(t,j([1,2,3,4,5,6,7,8,9])),E(t,r.props.difficulty),r.setState({grid:t},(function(){return e(r.state.grid)}))},r.interval=null,r.state={grid:[],displayError:!1,beginTimer:0,timeUntilDismissed:3},r.handleKeyPress=r.handleKeyPress.bind(Object(m.a)(r)),r.showInvalidKeyPress=r.showInvalidKeyPress.bind(Object(m.a)(r)),r.handleTimeChange=r.handleTimeChange.bind(Object(m.a)(r)),r.clearInterval=r.clearInterval.bind(Object(m.a)(r)),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.populateGameGrid;this.generateBoard(e)}},{key:"componentDidUpdate",value:function(e,t){var n=this,r=this.props,a=r.newGame,o=r.populateGameGrid,l=r.difficulty,i=r.solvedGrid,c=r.solvedButton,u=this.state.grid;we()(e,this.props)?we()(t.grid,u)||this.props.setCom(N(this.state.grid),(function(){return o(n.state.grid)})):e.difficulty!==l||!0===a?(this.props.setCom(!1),this.generateBoard(o)):!0===c&&this.setState({grid:i})}},{key:"showInvalidKeyPress",value:function(){this.clearInterval(),this.setState({displayError:!0,beginTimer:0,timeUntilDismissed:3}),this.interval=setInterval(this.handleTimeChange,1e3)}},{key:"handleTimeChange",value:function(){this.state.beginTimer<this.state.timeUntilDismissed-1?this.setState(Object(i.a)({},this.state,{},{beginTimer:this.state.beginTimer+1})):(this.setState(Object(i.a)({},this.state,{},{displayError:!1})),this.clearInterval())}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.interval),this.interval=null}))},{key:"handleKeyPress",value:function(e,t,n){var r=Te()(this.state.grid);if(null===e)r[t].splice(n,1,e),this.setState({grid:r});else{-1===[1,2,3,4,5,6,7,8,9].indexOf(parseInt(e))?this.showInvalidKeyPress():(r[t].splice(n,1,e),this.setState({grid:r}))}}},{key:"render",value:function(){var e,t=this;this.state.displayError&&(e=a.a.createElement("div",{className:"alertConstraint"},a.a.createElement(d.a,{theme:"danger",open:this.state.displayError},"Must type a number between 1 and 9")));var n=this.state.grid;return this.props.complete&&this.props.pause(),a.a.createElement("div",{className:"sudoku"},e,a.a.createElement("div",{className:"winCondition"},this.props.complete?"You have successfully solved the sudoku!":"You are not done yet!"),n.map((function(e,r){return a.a.createElement(ke,{key:r,grid:n,cells:e,rowNum:r,handleKeyPress:t.handleKeyPress})})))}}]),n}(a.a.Component),Ge=n(66),Re=n(122),Ie=a.a.createContext(),qe=n(168),Pe=n(169),Ke=n(123),xe=n(172);n(160);var Le=function(){var e,t,n=Object(r.useContext)(Ie),o=function(e){n.setName(e.target.value)},l=Object(r.useState)(""),i=Object(Ge.a)(l,2),c=i[0],u=i[1],s=Object(Re.useTimer)(),f=s.time,m=s.start,d=s.pause,h=s.reset;return s.isRunning,e=""!=c?a.a.createElement("h5",null,"Xin Ch\xe0o! ",a.a.createElement("b",null," ",c," ")):null,t=n.complete?a.a.createElement(qe.a,{variant:"outline-light",onClick:function(){var e={player:c,time:f};fetch("https://webapp-a9efe.firebaseio.com/player.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/JSON"}}).then((function(e){alert("Successfully")})).catch((function(e){console.log(e)}))}},"Record"):null,a.a.createElement("div",{className:"PlayerName"},e,a.a.createElement("div",{className:"enterForm"},""==c?a.a.createElement(Pe.a,{id:"inputF",className:"mb-3",onChange:o},a.a.createElement(Ke.a,{placeholder:"Your Name...","aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})):a.a.createElement(Pe.a,{id:"inputF",className:"mb-3",onChange:o},a.a.createElement(Pe.a.Prepend,null,a.a.createElement(Pe.a.Text,{id:"inputGroup-sizing-default"},"Player's Name")),a.a.createElement(xe.a.Control,{type:"text",placeholder:c,readOnly:!0})),""==c?a.a.createElement(qe.a,{variant:"outline-light",onClick:function(){""!=n.name&&(m(),u(n.name),n.setControlTime({pause:d,reset:h,start:m}))}},"Submit"):null,t),""!=c?a.a.createElement("div",{className:"Time"},a.a.createElement("p",null,"Elapsed time: ",f)):null)},Me=n(170);n(162);var ze=function(){var e=Object(r.useState)([]),t=Object(Ge.a)(e,2),n=t[0],o=t[1],l=[];return Object(r.useEffect)((function(){fetch("https://webapp-a9efe.firebaseio.com/player.json").then((function(e){return e.json()})).then((function(e){var t=0;for(var n in e)t++,l.push({id:n,player:e[n].player,time:e[n].time});for(var r=0;r<t;r++)for(var a=0;a<t;a++)if(l[r].time<l[a].time){var i=l[r];l[r]=l[a],l[a]=i}o(l)})).catch((function(e){console.log(e)}))})),a.a.createElement("div",{className:"Rank"},a.a.createElement(Me.a,{striped:!0,bordered:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,"Player's Name"),a.a.createElement("th",null,"Time"))),a.a.createElement("tbody",null,n.map((function(e,t){return a.a.createElement("tr",null,a.a.createElement("td",null,t+1),a.a.createElement("td",null,e.player),a.a.createElement("td",null,e.time))})))))},Ye=n(171),Ae=[1,2,3,4,5,6,7,8,9],Ue=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).setControlTime=function(e){r.setState(Object(i.a)({},r.state,{submit:!0,controlTime:{pause:e.pause,reset:e.reset,start:e.start}}))},r.setName=function(e){r.setState(Object(i.a)({},r.state,{name:e}))},r.changeDifficulty=function(e){r.setState((function(){return{difficulty:e}}))},r.newGameAccepted=function(){r.setState((function(){return{newGame:!0,openNewGame:!r.state.openNewGame}})),r.state.controlTime.reset(),r.state.controlTime.start()},r.handleDifficultyClick=function(){r.setState((function(){return{openDifficulty:!r.state.openDifficulty}}))},r.handleCreditsClick=function(){r.setState((function(){return{openCredits:!r.state.openCredits}}))},r.handleRulesClick=function(){r.setState((function(){return{openRules:!r.state.openRules}}))},r.handleNewGameClick=function(){r.setState((function(){return{openNewGame:!r.state.openNewGame}}))},r.helpButton=function(){r.setState(Object(i.a)({},r.state,{openSolve:!0}))},r.handleSudokuSolver=function(){var e=Te()(r.state.grid),t=Te()(r.state.grid);t=t.map((function(e){return e.map((function(e){return"string"===typeof e?null:e}))})),e=e.map((function(e){return e.map((function(e){return"string"===typeof e?null:e}))})),k(t,Ae);for(var n=0,a=0;a<9&&!(n>0);a++)for(var o=0;o<9;o++){var l=parseInt(10*Math.random()-1),c=parseInt(10*Math.random()-1);if(null===e[l][c]){n++,e[l][c]=t[l][c];break}}r.setState(Object(i.a)({},r.state,{count:r.state.count-1,openSolve:!1,grid:e,solvedButton:!0}))},r.populateGameGrid=function(e){r.setState({grid:e,solvedButton:!1,newGame:!1})},r.setCom=function(e){r.setState(Object(i.a)({},r.state,{complete:e}))},r.noSolve=function(){r.setState(Object(i.a)({},r.state,{openSolve:!1}))},r.changeName=function(){r.setState({submit:!1,name:""})},r.state={openCredits:!1,openDifficulty:!1,openRules:!1,openNewGame:!1,difficulty:"Normal",newGame:!1,solvedButton:!1,grid:[],copyGrid:[],name:"",submit:!1,controlTime:{pause:function(){},reset:function(){},start:function(){}},complete:!1,count:3,openSolve:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(Ie.Provider,{value:{name:this.state.name,setName:this.setName,submit:this.state.submit,setControlTime:this.setControlTime,controlTime:this.state.controlTime,complete:this.state.complete}},a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-title"},a.a.createElement("p",{className:"title"},"SUDOKU!")),this.state.submit?a.a.createElement("div",{className:"game-board"},a.a.createElement(De,{difficulty:this.state.difficulty,newGame:this.state.newGame,populateGameGrid:this.populateGameGrid,solvedButton:this.state.solvedButton,solvedGrid:this.state.grid,pause:this.state.controlTime.pause,complete:this.state.complete,setCom:this.setCom})):null,a.a.createElement(Le,null),a.a.createElement(ze,null),a.a.createElement(d.c,{className:"dr-example-container"},a.a.createElement(d.i,null,a.a.createElement(d.b,null,a.a.createElement(qe.a,{onClick:this.handleDifficultyClick,className:"navBar"},"Difficulty")),a.a.createElement(d.b,null,this.state.submit?a.a.createElement(qe.a,{onClick:this.helpButton,className:"navBar"},"Solve"):a.a.createElement(qe.a,{className:"navBar"},"Solve")),a.a.createElement(d.b,null,a.a.createElement(qe.a,{onClick:this.handleRulesClick,className:"navBar"},"How To Play")),a.a.createElement(d.b,null,a.a.createElement(qe.a,{onClick:this.handleNewGameClick,className:"navBar"},"New Game")))),a.a.createElement(d.f,{open:this.state.openDifficulty,toggle:this.handleDifficultyClick},a.a.createElement(d.h,null,"Change Difficulty"),a.a.createElement(d.g,null,a.a.createElement(d.e,{checked:"Beginner"===this.state.difficulty,onChange:function(){e.changeDifficulty("Beginner")}},"Beginner"),a.a.createElement(d.e,{checked:"Easy"===this.state.difficulty,onChange:function(){e.changeDifficulty("Easy")}},"Easy"),a.a.createElement(d.e,{checked:"Normal"===this.state.difficulty,onChange:function(){e.changeDifficulty("Normal")}},"Normal"),a.a.createElement(d.e,{checked:"Hard"===this.state.difficulty,onChange:function(){e.changeDifficulty("Hard")}},"Hard"),a.a.createElement(qe.a,{onClick:this.handleDifficultyClick},"Accept"))),a.a.createElement(d.f,{open:this.state.openRules,toggle:this.handleRulesClick},a.a.createElement(d.h,null,"Welcome to Sudoku!"),a.a.createElement(d.g,null,a.a.createElement("div",{className:"rulesText"},a.a.createElement("p",null,"1. Only one number from 1-9 is allowed on each row",a.a.createElement("br",null)),a.a.createElement("p",null,"2. Only one number from 1-9 is allowed on each column",a.a.createElement("br",null)),a.a.createElement("p",null,"3. Only one number from 1-9 is allowed in each grid",a.a.createElement("br",null)),a.a.createElement("p",null,"The goal of the game is to find the missing numbers in the grid such that all three of these conditions are satisfied and if they are then you have successfully completed the puzzle.",a.a.createElement("br",null)),a.a.createElement("p",null,"If not, then you must backtrack and find out which numbers are inserted incorrectly.",a.a.createElement("br",null)),a.a.createElement("p",null,"You will know if the number is inserted incorrectly when the box is highlighted red.",a.a.createElement("br",null))),a.a.createElement(qe.a,{onClick:this.handleRulesClick},"Got it!"))),a.a.createElement(d.f,{open:this.state.openNewGame,toggle:this.handleNewGameClick},a.a.createElement(d.g,null,a.a.createElement("div",{className:"newGameText"},"Are you sure?",a.a.createElement("br",null)),a.a.createElement("div",{className:"flexButtons"},a.a.createElement(qe.a,{onClick:this.newGameAccepted},"Yes"),a.a.createElement(qe.a,{onClick:this.handleNewGameClick},"No")))),a.a.createElement(d.f,{open:this.state.openSolve,toggle:this.noSolve},a.a.createElement(d.g,null,a.a.createElement("div",{className:"newGameText"},0!=this.state.count?a.a.createElement("p",null,"Are you sure? You have ",this.state.count," times",a.a.createElement("br",null)):a.a.createElement(Ye.a,{variant:"danger"},"I can't help you from now!!")),a.a.createElement("div",{className:"flexButtons"},0!=this.state.count?a.a.createElement(qe.a,{onClick:this.handleSudokuSolver},"Yes"):a.a.createElement(qe.a,{onClick:this.noSolve},"No"),a.a.createElement(qe.a,{onClick:this.noSolve},"No"))))))}}]),n}(a.a.Component);l.a.render(a.a.createElement(Ue,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.8d76d9fc.chunk.js.map