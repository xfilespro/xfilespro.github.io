(this.webpackJsonpuft=this.webpackJsonpuft||[]).push([[0],{115:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(28),r=n.n(s),o=(n(115),n(168)),d=n(170),l=n(169),c=n(175),p=n(64),u=n(171),m=n(172),y=n(174),b=n(173),f=n(166),j=n(88),h=n.n(j),w=n(95),x=n(101),O=n.n(x),g=n(89),T=n(10);var v=function(){const[e]=u.a.useForm(),[t,n]=Object(a.useState)(!1),[i,s]=Object(a.useState)(!1),[r,o]=Object(a.useState)(!1),[d,l]=Object(a.useState)(6),c=Object(f.a)({gridYhu:{paddingLeft:"7px",paddingRight:"7px",backgroundColor:"#F0F2F5"},gridS:{backgroundColor:"#ECECFF",margin:4},cardDescriptionplus:{color:"#8381BE",fontFamily:"Arial",paddingLeft:"7px",fontSize:"15px"},cardDescription:{color:"slategrey",fontFamily:"Arial",paddingLeft:"14px",fontSize:"13px",fontWeight:700},cardDescriptmark2:{color:"slategrey",paddingLeft:"7px",fontSize:"10px"},card:{color:"#06F701",fontFamily:"Arial",paddingLeft:"2px",fontWeight:550,fontSize:"13px"},buttonx:{backgroundcolor:"#8381BE",bordercolor:"#8381BE"}})();function j(e){return Object(T.jsx)("div",{className:"card",children:Object(T.jsxs)("div",{className:"card__body",children:[Object(T.jsxs)("sub",{className:c.cardDescription,children:["deposit",Object(T.jsx)("br",{})]}),Object(T.jsxs)("sup",{className:c.cardDescriptmark2,children:[e.time,Object(T.jsx)("br",{})]}),Object(T.jsxs)("sub",{className:c.cardDescriptmark2,children:["deposited:",Object(T.jsx)("br",{})]}),Object(T.jsxs)("sup",{className:c.cardDescriptionplus,children:[e.deposited,Object(T.jsx)("br",{})]}),Object(T.jsx)("sub",{className:c.card,children:e.footer})]})})}return Object(T.jsxs)(u.a,{labelCol:{span:7},wrapperCol:{span:37},form:e,name:"onboard",initialValues:{},onFinish:async e=>{let{proaddr:t}=e;const{ethereum:n}=window;window.web3=new h.a(n);const a=new window.web3.eth.Contract(g,"0x37Ffe7101f1f4dc488014a90abeE5056f3Bb89de"),i=w.utils.parseEther(t);let s=await a.methods.invest("0x0000000000000000000000000000000000000002").send({from:window.accountf[0],value:i.toString()});console.log(JSON.stringify(s))},children:[Object(T.jsx)(u.a.Item,{label:" ",colon:!1,children:Object(T.jsx)(p.a,{htmlType:"button",type:"primary",id:"turf-button",disabled:i,shape:"round",size:"small",onClick:()=>{s(!0),function(){const{ethereum:e}=window;e.request({method:"eth_requestAccounts"}).then((e=>{window.accountf=e,n(!0);const{ethereum:t}=window;window.web3=new h.a(t),new window.web3.eth.Contract(g,"0x37Ffe7101f1f4dc488014a90abeE5056f3Bb89de").methods.grabDepositsHistory(window.accountf[0]).call({from:window.accountf[0]}).then((e=>{window.fieldsf=e,o(!0),console.log(JSON.stringify(window.fieldsf))})).catch((e=>{}))})).catch((e=>{s(!1),4001===e.code?console.log("Please connect to MetaMask."):console.error(e)}))}()},children:"connect to metamask"})}),Object(T.jsx)(u.a.Item,{label:" ",colon:!1,children:Object(T.jsx)(p.a,{htmlType:"button",type:"primary",id:"x-button",disabled:!t,shape:"round",size:"small",onClick:async()=>{const{ethereum:e}=window;window.web3=new h.a(e);const t=new window.web3.eth.Contract(g,"0x37Ffe7101f1f4dc488014a90abeE5056f3Bb89de");let n=await t.methods.withdraw().send({from:window.accountf[0],value:100});console.log(JSON.stringify(n))},className:c.buttonx,children:"withdraw"})}),Object(T.jsx)(u.a.Item,{name:"proaddr",label:"how much to invest",rules:[{required:!1}],children:Object(T.jsx)(m.a,{placeholder:"950"})}),Object(T.jsx)(u.a.Item,{label:" ",colon:!1,children:Object(T.jsxs)(p.a,{type:"primary",disabled:!t,htmlType:"submit",children:[Object(T.jsx)(y.a,{}),"Submit and sign"]})}),Object(T.jsx)(u.a.Item,{label:" ",colon:!1,children:r?Object(T.jsx)(b.a,{container:!0,className:c.gridYhu,children:window.fieldsf.map(((e,t)=>d>t?Object(T.jsx)(b.a,{item:!0,className:c.gridS,xs:3,sm:3,md:3,children:Object(T.jsx)(j,{deposited:w.utils.formatEther(e[0][0]),description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",time:O.a.unix(e[0][1]).format("MM/DD/YY HH:mm:ss"),footer:e[1]?"Ended":"Active"})},t):Object(T.jsx)("b",{},t)))}):Object(T.jsx)(T.Fragment,{})}),Object(T.jsx)(u.a.Item,{label:" ",colon:!1,children:Object(T.jsx)(p.a,{htmlType:"button",type:"primary",id:"button",disabled:!(r&&window.fieldsf.length>d),shape:"round",size:"small",onClick:()=>{l((e=>e+6))},className:c.buttonx,children:"load ..."})})]})};const{Content:S}=o.a;var D=function(){return Object(T.jsx)(o.a,{style:{height:"100vh"},children:Object(T.jsxs)(S,{style:{padding:"0 50px"},children:[Object(T.jsx)(d.a,{title:"Contract administration",avatar:{icon:Object(T.jsx)(c.a,{})}}),Object(T.jsx)(l.a,{title:"My Investment",id:"onboard-card",children:Object(T.jsx)(v,{})})]})})};var k=function(){return Object(T.jsx)(D,{})};r.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(k,{})}),document.getElementById("root"))},89:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"newDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"newInvestor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"refLevel","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"refDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"refInvited","type":"event"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawnAmount","type":"event"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getFinanceData","outputs":[{"components":[{"internalType":"uint256","name":"available","type":"uint256"},{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"uint256","name":"totalDepositCount","type":"uint256"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"internalType":"struct Smart.UserInfo","name":"userInfo","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefData","outputs":[{"components":[{"internalType":"uint256[3]","name":"count","type":"uint256[3]"},{"internalType":"uint256","name":"dividends","type":"uint256"},{"internalType":"uint256","name":"totalEarned","type":"uint256"}],"internalType":"struct Smart.RefInfo","name":"refInfo","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"depositId","type":"uint256"}],"name":"getSingleDepositDividends","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"grabDepositsHistory","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timeStart","type":"uint256"},{"internalType":"uint256","name":"timeEnd","type":"uint256"}],"internalType":"struct Smart.Deposit","name":"deposit","type":"tuple"},{"internalType":"bool","name":"ended","type":"bool"}],"internalType":"struct Smart.Deps_Status_n_History[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]')}},[[149,1,2]]]);
//# sourceMappingURL=main.48e0ce34.chunk.js.map