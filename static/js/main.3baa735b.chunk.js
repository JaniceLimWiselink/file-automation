(this["webpackJsonpfile-automation"]=this["webpackJsonpfile-automation"]||[]).push([[0],{49:function(e,t){},61:function(e,t,a){e.exports=a(81)},66:function(e,t,a){},72:function(e,t){},73:function(e,t){},77:function(e,t,a){e.exports=a.p+"static/media/Format.8dacd377.png"},79:function(e,t,a){e.exports=a.p+"static/media/logo.6938f8ff.jpg"},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(66),a(118)),c=a(112),s=a(115),p=a(120),m=a(116),u=a(30),d=a(117),f=a(15),h=a(7),g=a(23),b=Object(c.a)({grow:{flexGrow:1},linkContainer:{display:"flex"},link:{margin:"5px",padding:"10px 20px 10px 20px",backgroundColor:"#f8f8f8",color:"#434343",textDecoration:"none",borderRadius:"5px",transition:"0.5s",textTransform:"uppercase",fontSize:"1em",fontWeight:"bold","&:hover":{backgroundColor:"#d5d5d5",transition:"0.5s"}},root:{marginTop:"50px",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",height:"100%"},label:{fontWeight:"bold",fontSize:"20px",paddingTop:"5px",paddingBottom:"5px",width:"100%",textAlign:"left"},inputWrapper:{margin:"20px 0px"},input:{padding:"5px"},download:{backgroundColor:"darkorange",color:"white",width:"200px",height:"60px",borderRadius:"5px",fontSize:"1.1em",border:"none",transition:"1s",fontWeight:"bold",textTransform:"uppercase","&:hover":{backgroundColor:"#ff6500",transition:"1s"}},fileUploadContainer:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",width:"80%"},fileUploadWrapper:{flex:1,display:"flex",justifyContent:"center",flexDirection:"column",padding:"10px"},fileUpload:{height:"60px",backgroundColor:"white",border:"none"}}),v=a(121),y=function(){var e=b(),t=Object(n.useState)([]),a=Object(f.a)(t,2),o=a[0],l=(a[1],Object(n.useState)([])),i=Object(f.a)(l,2),c=i[0],s=i[1],p=function(e){if("number"===typeof e)return function(e){var t=Math.floor(e-25569),a=new Date(1e3*(86400*t));return new Date(a.getFullYear(),a.getDate()-1,a.getMonth()+1)}(e);var t=e.split("/");return new Date(t[2],t[0]-1,t[1])},m=function(e,t){e.preventDefault();var a=e.target.files[0],n=new FileReader;n.onload=function(e){1===t&&function(e){var t=h.read(e,{type:"binary"}),a=h.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),n=a[0];n.push("Committed Qty"),n.push("Commit ETA"),n.push("Balance Qty"),n.push("Balance Qty with Commit Qty "),s(n);for(var r=1;r<a.length;r++)"JIT"==a[r][5]&&(console.log(a[r]),a[r][3]=p(a[r][3]),a[r][12]=p(a[r][12]),a[r][15]=p(a[r][15]),o.push(a[r]))}(e.target.result)},n.readAsBinaryString(a)};return r.a.createElement("div",{className:e.root},r.a.createElement("span",{style:{fontSize:"30px",marginBottom:"30px",textAlign:"center",fontWeight:"bold"}},"Plexus Formatter"),r.a.createElement("div",{className:e.fileUploadContainer,style:{flexDirection:"row",width:"60%"}},r.a.createElement("div",{className:e.fileUploadWrapper},r.a.createElement("span",{className:e.label},"Raw File"),r.a.createElement(v.a,{onChange:function(e){return m(e,1)},type:"file",className:e.fileUpload})),r.a.createElement("div",{className:e.fileUploadWrapper},r.a.createElement("span",{className:e.label},"MPN List"),r.a.createElement(v.a,{onChange:function(e){return m(e,2)},type:"file",className:e.fileUpload}))),r.a.createElement("div",{style:{marginTop:"50px"}},r.a.createElement("button",{onClick:function(){return function(){for(var e=[],t=0;t<o.length;){for(var a=o[t][4],n=function(){var a={};o[t].forEach((function(e,t){a[c[t]]=e})),e.push(a),t++};t<o.length&&a==o[t][4];)n();e.push({}),e.push({})}var r=h.utils.json_to_sheet(e,{header:c});r["!ref"]=h.utils.encode_range({s:{r:0,c:0},e:{r:e.length+1,c:21}}),e.forEach((function(t,a){var n=a+2,o="",l="";if(0!=Object.keys(e[a]).length){0==a||0===Object.keys(e[a-1]).length&&0===Object.keys(e[a-2]).length?(o="H".concat(n,"+I").concat(n,"+O").concat(n,"-N").concat(n),l="H".concat(n,"+I").concat(n,"+O").concat(n,"+R").concat(n,"-N").concat(n)):(o="T".concat(n-1,"-N").concat(n,"+O").concat(n),l="U".concat(n-1,"-N").concat(n,"+O").concat(n,"+R").concat(n));var i=h.utils.encode_cell({r:n-1,c:19}),c=h.utils.encode_cell({r:n-1,c:20});r[i]={f:o},r[c]={f:l}}}));var l={Sheets:{data:r},SheetNames:["data"]},i=h.write(l,{bookType:"xlsx",type:"array"}),s=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.saveAs(s,"Data.xlsx")}()},className:e.download},"Download")))},x=a(20),E=function(){var e=b(),t=Object(n.useState)({EURO:1,USD:1}),a=Object(f.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)({}),c=Object(f.a)(i,2),s=c[0],p=(c[1],Object(n.useState)({})),m=Object(f.a)(p,2),u=m[0],d=(m[1],function(e,t){e.preventDefault();var a=e.target.files[0],n=new FileReader;n.onload=function(e){1===t?function(e){var t=h.read(e,{type:"binary"}),a=h.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1});l({EURO:a[3][2],USD:a[4][2]});for(var n=2;n<a[0].length;n++){var r=parseInt(a[0][n]);r in s||(s[r]={handlingCharge:a[1][n],markUp:a[2][n]})}for(var o=7;o<a.length&&void 0!==a[o][1];o++){var i=a[o][1],c=a[o][2],p=a[o][3],m=void 0===a[o][4]?"":a[o][4];0!=p&&(u[i]={brand:c,qty:p,remarks:m})}}(e.target.result):2===t?function(e){for(var t=h.read(e,{type:"binary"}),a=h.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),n=1;n<a.length&&void 0!==a[n][1];n++){var r=a[n][0],l=a[n][1],i=a[n][2],c=y(a[n][3]);r in u&&(null!=u[r].opoDate?(u[r].opoDate===c.getTime()&&u[r].opoPrice*o[u[r].opoCurr]<i*o[l]||u[r].opoDate<c.getTime())&&(u[r]=Object(x.a)(Object(x.a)({},u[r]),{},{opoCurr:l,opoPrice:i,opoDate:c})):u[r]=Object(x.a)(Object(x.a)({},u[r]),{},{opoCurr:l,opoPrice:i,opoDate:c}))}}(e.target.result):function(e){for(var t=h.read(e,{type:"binary"}),a=h.utils.sheet_to_json(t.Sheets[t.SheetNames[0]],{header:1}),n=1;n<a.length&&void 0!==a[n][1];n++){var r=a[n][1],l=a[n][2],i=a[n][3],c=y(a[n][0]);r in u&&(null!=u[r].grDate?(u[r].grDate===c.getTime()&&u[r].grPrice*o[u[r].grCurr]<i*o[l]||u[r].grDate<c.getTime())&&(u[r]=Object(x.a)(Object(x.a)({},u[r]),{},{grCurr:l,grPrice:i,grDate:c})):u[r]=Object(x.a)(Object(x.a)({},u[r]),{},{grCurr:l,grPrice:i,grDate:c}))}}(e.target.result)},n.readAsBinaryString(a)}),y=function(e){var t=Math.floor(e-25569),a=new Date(1e3*(86400*t));return new Date(a.getFullYear(),a.getMonth(),a.getDate())};return r.a.createElement("div",{className:e.root},r.a.createElement("span",{style:{fontSize:"30px",marginBottom:"30px",textAlign:"center",fontWeight:"bold"}},"Price Comparison Compiler"),r.a.createElement("div",{className:e.fileUploadContainer,style:{flexDirection:"row",width:"60%"}},r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"Stock Available"),r.a.createElement(v.a,{onChange:function(e){return d(e,1)},type:"file",className:e.fileUpload})),r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"Open Po Price List"),r.a.createElement(v.a,{onChange:function(e){return d(e,2)},type:"file",className:e.fileUpload})),r.a.createElement("div",{className:e.fileUploadWrapper,style:{width:"30%"}},r.a.createElement("span",{className:e.label},"Goods Received Price List"),r.a.createElement(v.a,{onChange:function(e){return d(e,3)},type:"file",className:e.fileUpload}))),r.a.createElement("div",{style:{marginTop:"50px"}},r.a.createElement("button",{onClick:function(){return function(){for(var e=[],t=Object.keys(u),a=["Line","MPN","Brand","Stock","Curr (GR)","Price (GR)","Curr (OPO)","Price (OPO)"],n=0;n<Object.keys(s);n++)a.push(Object.keys(s)[n]);for(var r=0;r<t.length;r++){var l={},i=t[r];l.Line=r+1,l.MPN=i,l.Brand=u[i].brand,l.Stock=u[i].qty,l["Curr (GR)"]=u[i].grCurr,l["Price (GR)"]=u[i].grPrice,l["Curr (OPO)"]=u[i].opoCurr,l["Price (OPO)"]=u[i].opoPrice;for(var c=u[i].grPrice*o[u[i].grCurr],p=u[i].opoPrice*o[u[i].opoCurr],m=c>p?c:p,d=0;d<Object.keys(s).length;d++){var f=Object.keys(s)[d],b=((1+1*s[f].markUp/100)*m*f+s[f].handlingCharge)/f;l[f]=isNaN(b)?"-":b}e.push(l)}var v={Sheets:{data:h.utils.json_to_sheet(e,{header:a})},SheetNames:["data"]},y=h.write(v,{bookType:"xlsx",type:"array"}),x=new Blob([y],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.saveAs(x,"Data.xlsx")}()},className:e.download},"Download")))},O=a(58),j=function(){var e=Object(n.useState)({}),t=Object(f.a)(e,2),o=t[0],l=t[1],i=Object(n.useState)({}),c=Object(f.a)(i,2),s=c[0],p=c[1],m=Object(n.useState)({}),u=Object(f.a)(m,2),d=u[0],y=u[1],x=Object(n.useState)(""),E=Object(f.a)(x,2),j=(E[0],E[1]),w=b(),N=function(e,t){e.preventDefault();var a=e.target.files[0],n=new FileReader;n.onload=function(e){!function(e,t){var a=h.read(e,{type:"binary"}),n=h.utils.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1});j(n[0][0]);for(var r=1;r<n[0].length;r++){var o=parseInt(n[0][r]);o in d||(d[o]=1)}y(d);for(var i={},c=1;c<n.length;c++){for(var s=n[c][0],m={},u=1;u<n[c].length;u++){var f=parseInt(n[0][u]),g=n[c][u];m[f]=g}i[s]=m}delete i[void 0],t?l(i):p(i)}(e.target.result,t)},n.readAsBinaryString(a)};return r.a.createElement("div",{className:w.root},r.a.createElement("span",{style:{fontSize:"30px",marginBottom:"30px",textAlign:"center",fontWeight:"bold"}},"Price Multiplier"),r.a.createElement("div",{className:w.fileUploadContainer,style:{flexDirection:"row",width:"60%"}},r.a.createElement("div",{className:w.fileUploadWrapper},r.a.createElement("span",{className:w.label},"File 1"),r.a.createElement(v.a,{onChange:function(e){return N(e,!0)},type:"file",className:w.fileUpload})),r.a.createElement("div",{className:w.fileUploadWrapper},r.a.createElement("span",{className:w.label},"File 2"),r.a.createElement(v.a,{onChange:function(e){return N(e,!1)},type:"file",disabled:0===Object.keys(o).length,className:w.fileUpload}))),r.a.createElement("section",{className:w.fileUploadContainer},r.a.createElement("span",{className:w.label},"Mark Up Value ",r.a.createElement("span",{style:{color:"red",fontSize:"13px"}},"(numbers/ decimal only)")),r.a.createElement("div",{className:0!==Object.keys(d).length&&w.inputWrapper},Object.keys(d).map((function(e){return r.a.createElement("div",{key:e,className:w.input},r.a.createElement("label",{style:{paddingRight:"10px"}},"Q - ",e),r.a.createElement("input",{type:"number",onChange:function(t){return function(e,t){var a=JSON.parse(JSON.stringify(d));0===e.toString().length?(a[t]=1,y(a)):(a[t]=parseFloat(e),y(a))}(t.target.value,e)},value:d[e]}))}))),0===Object.keys(d).length&&r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h4",{style:{color:"#333",textTransform:"uppercase",margin:"0px",opacity:"0.8"}},"[Multiplier fields will display once file is uploaded]")),r.a.createElement("button",{onClick:function(){return function(){if(0!==Object.keys(s).length)for(var e=Object.keys(o),t=Object.keys(s),a=e.concat(t),n=Object(O.a)(new Set(a)),r=Object.keys(d),l=0;l<n.length;l++){var i={};if(void 0===o[n[l]])for(var c=0;c<r.length;c++)i[r[c]]=s[n[l]][r[c]];else if(void 0===s[n[l]])for(var p=0;p<r.length;p++)i[r[p]]=o[n[l]][r[p]];else for(var m=0;m<r.length;m++){var u=o[n[l]],f=s[n[l]];void 0===u[r[m]]?i[r[m]]=f[r[m]]:void 0===f[r[m]]?i[r[m]]=u[r[m]]:i[r[m]]=u[r[m]]<f[r[m]]?u[r[m]]:f[r[m]]}o[n[l]]=i}for(var b=Object.keys(o),v=[],y=["MPN"],x=o[b[0]],E=0;E<Object.keys(x).length;E++)y.push(Object.keys(x)[E]);for(var j=0;j<b.length;j++){var w={};w.MPN=b[j];for(var N=o[b[j]],C=Object.keys(N),k=Object.values(N),S=0;S<C.length;S++)isNaN(parseFloat(k[S]))||(w[C[S]]=k[S]*d[C[S]]);v.push(w)}var D={Sheets:{data:h.utils.json_to_sheet(v,{header:y})},SheetNames:["data"]},U=h.write(D,{bookType:"xlsx",type:"array"}),P=new Blob([U],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});g.saveAs(P,"Data.xlsx")}()},className:w.download,disabled:0===Object.keys(o).length},"Download")),r.a.createElement("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}},r.a.createElement("h3",null,"Your Uploaded File ",r.a.createElement("span",{style:{fontWeight:"bold",color:"red",fontSize:"20px"}},"MUST")," follow the following format: "),r.a.createElement("img",{alt:"Sample Format",src:a(77),width:"80%",style:{borderRadius:"10px"}})))},w=a(57),N=a(56),C=a.n(N),k=a(55),S=a.n(k),D=[{path:"/file-automation/plexus",name:"Plexus Compiler",icon:r.a.createElement(w.a,{size:25,style:{color:"#fff"}}),component:y},{path:"/file-automation/compare",name:"Compare",icon:r.a.createElement(S.a,{size:25,style:{color:"#fff"}}),component:E},{path:"/file-automation/compile",name:"Compile",icon:r.a.createElement(C.a,{size:25,style:{color:"#fff"}}),component:j}],U=Object(c.a)((function(e){return{toolbar:e.mixins.toolbar,text:{fontFamily:"AirbnbCereal-Book",fontSize:15,color:"#fff"}}})),P=function(e){var t=U();return r.a.createElement("div",null,r.a.createElement("img",{alt:"Sample Format",src:a(79),width:"100%"}),r.a.createElement(s.a,null,D.map((function(e,a){return r.a.createElement(p.a,{key:e.name,component:u.b,to:e.path},r.a.createElement(m.a,null,e.icon),r.a.createElement(d.a,{className:t.text,style:{}},e.name))}))))},T=a(119),F=a(9),W=Object(c.a)((function(e){return{root:{display:"flex",fontFamily:"AirbnbCereal-Medium"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"#252e3e"},content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var _=function(){var e=W();return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null),r.a.createElement("nav",{className:e.drawer,"aria-label":"navigation-tabs"},r.a.createElement(T.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0},r.a.createElement(P,null))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/file-automation/plexus",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(F.a,{path:"/file-automation/compare",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(F.a,{path:"/file-automation/compile",render:function(){return r.a.createElement(j,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(u.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.3baa735b.chunk.js.map