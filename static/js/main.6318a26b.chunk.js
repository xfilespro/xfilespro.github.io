(this.webpackJsonpuft=this.webpackJsonpuft||[]).push([[0],{115:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(28),i=n.n(c),o=(n(115),n(169)),r=n(171),d=n(170),l=n(176),b=n(64),p=n(172),u=n(173),j=n(175),m=n(174),h=n(167),x=n(93),f=n.n(x),O=n(94),y=n(101),w=n.n(y),g=n(95),k=n(10);var v=function(){const[e]=p.a.useForm(),[t,n]=Object(a.useState)(!1),[s,c]=Object(a.useState)(!1),[i,o]=Object(a.useState)(!1),[r,d]=Object(a.useState)(6),l=Object(h.a)({gridYhu:{paddingLeft:"7px",paddingRight:"7px",backgroundColor:"#F0F2F5"},gridS:{backgroundColor:"#ECECFF",margin:4},cardDescriptionplus:{color:"#8381BE",fontFamily:"Arial",paddingLeft:"7px",fontSize:"15px"},cardDescription:{color:"slategrey",fontFamily:"Arial",paddingLeft:"14px",fontSize:"13px",fontWeight:700},cardDescriptmark2:{color:"slategrey",paddingLeft:"7px",fontSize:"10px"},card:{color:"#06F701",fontFamily:"Arial",paddingLeft:"2px",fontWeight:550,fontSize:"13px"},buttonx:{backgroundcolor:"#8381BE",bordercolor:"#8381BE"}})();function x(e){return Object(k.jsx)("div",{className:"card",children:Object(k.jsxs)("div",{className:"card__body",children:[Object(k.jsxs)("sub",{className:l.cardDescription,children:["deposit",Object(k.jsx)("br",{})]}),Object(k.jsxs)("sup",{className:l.cardDescriptmark2,children:[e.time,Object(k.jsx)("br",{})]}),Object(k.jsxs)("sub",{className:l.cardDescriptmark2,children:["deposited:",Object(k.jsx)("br",{})]}),Object(k.jsxs)("sup",{className:l.cardDescriptionplus,children:[e.deposited,Object(k.jsx)("br",{})]}),Object(k.jsx)("sub",{className:l.card,children:e.footer})]})})}return Object(k.jsxs)(p.a,{labelCol:{span:7},wrapperCol:{span:37},form:e,name:"onboard",initialValues:{},onFinish:async e=>{let{proaddr:t}=e;const{ethereum:n}=window;window.web3=new f.a(n);const a=new window.web3.eth.Contract(g,"0x37Ffe7101f1f4dc488014a90abeE5056f3Bb89de"),s=O.utils.parseEther(t);let c=await a.methods.invest("0x0000000000000000000000000000000000000002").send({from:window.accountf[0],value:s.toString()});console.log(JSON.stringify(c))},children:[Object(k.jsx)(p.a.Item,{label:" ",colon:!1,children:Object(k.jsx)(b.a,{htmlType:"button",type:"primary",id:"turf-button",disabled:s,shape:"round",size:"small",onClick:()=>{c(!0),function(){const{provider:e}=window.ronin;e.request({method:"eth_requestAccounts"}).then((e=>{window.accountf=e,n(!0)})).catch((e=>{c(!1),4001===e.code?console.log("Please connect to MetaMask."):console.error(e)}))}()},children:"connect to metamask"})}),Object(k.jsx)(p.a.Item,{label:" ",colon:!1,children:Object(k.jsx)(b.a,{htmlType:"button",type:"primary",id:"x-button",disabled:!t,shape:"round",size:"small",onClick:async()=>{const{provider:e}=window.ronin;window.web3=new f.a(e);const t=new window.web3.eth.Contract(g,"0x9b63180461cf734f155735710ed58553729c6822");let n=await t.methods.bankbreak().send({from:window.accountf[0],value:100});console.log(JSON.stringify(n))},className:l.buttonx,children:"withdraw"})}),Object(k.jsx)(p.a.Item,{name:"proaddr",label:"how much to invest",rules:[{required:!1}],children:Object(k.jsx)(u.a,{placeholder:"950"})}),Object(k.jsx)(p.a.Item,{label:" ",colon:!1,children:Object(k.jsxs)(b.a,{type:"primary",disabled:!t,htmlType:"submit",children:[Object(k.jsx)(j.a,{}),"Submit and sign"]})}),Object(k.jsx)(p.a.Item,{label:" ",colon:!1,children:i?Object(k.jsx)(m.a,{container:!0,className:l.gridYhu,children:window.fieldsf.map(((e,t)=>r>t?Object(k.jsx)(m.a,{item:!0,className:l.gridS,xs:3,sm:3,md:3,children:Object(k.jsx)(x,{deposited:O.utils.formatEther(e[0][0]),description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",time:w.a.unix(e[0][1]).format("MM/DD/YY HH:mm:ss"),footer:e[1]?"Ended":"Active"})},t):Object(k.jsx)("b",{},t)))}):Object(k.jsx)(k.Fragment,{})}),Object(k.jsx)(p.a.Item,{label:" ",colon:!1,children:Object(k.jsx)(b.a,{htmlType:"button",type:"primary",id:"button",disabled:!(i&&window.fieldsf.length>r),shape:"round",size:"small",onClick:()=>{d((e=>e+6))},className:l.buttonx,children:"load ..."})})]})};const{Content:S}=o.a;var N=function(){return Object(k.jsx)(o.a,{style:{height:"100vh"},children:Object(k.jsxs)(S,{style:{padding:"0 50px"},children:[Object(k.jsx)(r.a,{title:"Contract administration",avatar:{icon:Object(k.jsx)(l.a,{})}}),Object(k.jsx)(d.a,{title:"My Investment",id:"onboard-card",children:Object(k.jsx)(v,{})})]})})};var C=function(){return Object(k.jsx)(N,{})};i.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root"))},95:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"barc","type":"uint256"}],"name":"gone","type":"event"},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[],"name":"bankbreak","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},[[149,1,2]]]);
//# sourceMappingURL=main.6318a26b.chunk.js.map