(function(t){function e(e){for(var a,o,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return u.p+"js/"+({routes:"routes"}[t]||t)+"."+{routes:"8c4fda52","chunk-1b24dcba":"c7baf7d9","chunk-2d0e53e2":"61f12c22","chunk-2d0f0070":"2853e4a8","chunk-2d217689":"d67d1021"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={routes:1,"chunk-1b24dcba":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({routes:"routes"}[t]||t)+"."+{routes:"20cf2bf0","chunk-1b24dcba":"ae1b08d6","chunk-2d0e53e2":"31d6cfe0","chunk-2d0f0070":"31d6cfe0","chunk-2d217689":"31d6cfe0"}[t]+".css",r=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01dc":function(t,e,n){},"365c":function(t,e,n){"use strict";var a={};n.r(a),n.d(a,"login",(function(){return h})),n.d(a,"getLogado",(function(){return v})),n.d(a,"getNome",(function(){return g})),n.d(a,"getUsuarioTemPermissao",(function(){return b})),n.d(a,"reiniciarSenha",(function(){return k})),n.d(a,"redefinirSenha",(function(){return w}));var o={};n.r(o),n.d(o,"atualizarConta",(function(){return A})),n.d(o,"criarConta",(function(){return D})),n.d(o,"criarTransacao",(function(){return x})),n.d(o,"criarMovimentacao",(function(){return y})),n.d(o,"getMinhasMovimentacoes",(function(){return S})),n.d(o,"getMovimentacoesPorCliente",(function(){return P})),n.d(o,"getMovimentacoes",(function(){return T})),n.d(o,"getConta",(function(){return M})),n.d(o,"getContasPorCliente",(function(){return O})),n.d(o,"getGanhosPorCliente",(function(){return L})),n.d(o,"getListaContas",(function(){return V})),n.d(o,"getMinhasContas",(function(){return U})),n.d(o,"getMeuResumo",(function(){return $})),n.d(o,"getEvolucaoCapital",(function(){return R})),n.d(o,"getSaldoMesAMes",(function(){return C})),n.d(o,"getRelatorio",(function(){return B})),n.d(o,"shortMonth",(function(){return _})),n.d(o,"processarMovimentacao",(function(){return E}));var r={};n.r(r),n.d(r,"prioridades",(function(){return F})),n.d(r,"enviarEmail",(function(){return N}));var i={};n.r(i),n.d(i,"getCotacaoUSDaBRL",(function(){return G}));var c={};n.r(c),n.d(c,"menu",(function(){return z}));var u={};n.r(u),n.d(u,"atualizarCadastro",(function(){return Y})),n.d(u,"Estados",(function(){return H})),n.d(u,"getCadastro",(function(){return J})),n.d(u,"getUsuario",(function(){return K})),n.d(u,"getListaUsuarios",(function(){return W})),n.d(u,"novaSenha",(function(){return Q})),n.d(u,"novoUsuario",(function(){return X}));var s={};n.r(s),n.d(s,"upload",(function(){return nt})),n.d(s,"download",(function(){return at})),n.d(s,"addUpload",(function(){return et}));n("6762"),n("2fdb");var l=n("bc3a"),d=n.n(l),f="https://bluecapitalapp.herokuapp.com",p=n("c0d6"),m=d.a.create({baseURL:f});m.interceptors.request.use((function(t){return p["a"].getters.token&&(t.headers["Authorization"]="Bearer ".concat(p["a"].getters.token)),t})),m.interceptors.response.use((function(t){var e=t.headers["Server-Command"];return e&&(e.includes("lose-token")?(console.log("oi mundo, eu perdi o token :x"),p["a"].commit("clearToken")):e.includes("refresh-token")&&(console.log("oi mundo, eu necessito novo token :|"),m.get("/login/refresh").then((function(){})).catch((function(){})))),t.data.token?p["a"].commit("setToken",t.data.token.token):console.log("DEBUG: Não veio token. Implemente refresh ou remova essa linha."),t}),(function(t){return 401==t.response.status&&window.getApp.$emit("APP_LOGOUT","Você foi desconectado"),Promise.reject(t)}));var h=function(t,e,n){var a={login:t,senha:e};m.post("/login",a).then((function(t){n(null,!0)})).catch((function(t){401===t.response.status?n(null,!1):n(t)}))},v=function(){if(p["a"].getters.token)return!0},g=function(){if(p["a"].getters.token)return p["a"].getters.nome},b=function(t){var e=p["a"].getters.permissao;return""==t||!t||("Operador"==t?"Operador"==e||"Admin"==e:"Admin"==t?"Admin"==e:(console.error("Permissão desconhecida: ".concat(t)),!1))},k=function(t,e,n){var a={login:t,email:e};m.post("/login/reiniciar-senha",a).then((function(t){n(null,!0)})).catch((function(t){401===t.response.status?n(null,!1):n(t)}))},w=function(t,e,n){var a={pwtoken:t,novaSenha:e};m.post("/login/redefinir-senha",a).then((function(t){n(null,!0)})).catch((function(t){401===t.response.status?n(null,!1):n(t)}))},_=(n("6d67"),["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]),C=_.map((function(t,e){return{"Mês":t,Saldo:Math.round(5e4*Math.pow(1+.13*Math.random(),e))/100}}));function A(t,e){m.delete("conta/".concat(t._id)).then((function(t){200==t.status?e(null,!0):e(t)})).catch((function(t){e(t)}))}var y=function(t){return new Promise((function(e,n){m.post("/movimentacao",t).then((function(t){200==t.status?e(!0):n(t)})).catch((function(t){return n(t)}))}))},P=function(t,e){return new Promise((function(n,a){m.get("/".concat(t,"/movimentacoes"),{params:e}).then((function(t){return n(t.data)})).catch((function(t){return a(t)}))}))},S=function(t){return new Promise((function(e,n){var a=p["a"].getters.idUsuario;P(a,t).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))},T=function(t){return new Promise((function(e,n){m.get("/movimentacoes",{params:t}).then((function(t){return e(t.data)})).catch((function(t){return n(t)}))}))},E=function(t,e){return new Promise((function(n,a){m.post("/movimentacao/processar",{idMovimentacao:t,acao:e}).then((function(t){return n(t.data)})).catch((function(t){return a(t)}))}))};function D(t,e){m.post("/conta",{conta:t}).then((function(t){200==t.status?e(null,!0):e(t)})).catch((function(t){e(t)}))}function x(t,e){m.post("conta/".concat(t.conta),{transacao:t}).then((function(t){200==t.status?e(null,!0):e(t)})).catch((function(t){e(t)}))}function M(t,e){m.get("/conta/".concat(t)).then((function(t){e(null,t.data)})).catch((function(t){e(t)}))}function O(t,e){m.get("/".concat(t,"/contas")).then((function(t){e(null,t.data)})).catch((function(t){e(t)}))}function L(t,e){m.get("/".concat(t,"/resumo_ganhos")).then((function(t){e(null,t.data)})).catch((function(t){e(t)}))}function V(t){m.get("/conta").then((function(e){t(null,e.data)})).catch((function(e){t(e)}))}function U(t){var e=p["a"].getters.idUsuario;O(e,t)}function $(t){var e=p["a"].getters.idUsuario;m.get("/".concat(e,"/resumo_contas")).then((function(e){t(null,e.data)})).catch((function(e){t(e)}))}function R(t){var e=p["a"].getters.idUsuario;m.get("/".concat(e,"/evolucao_capital")).then((function(e){t(null,e.data)})).catch((function(e){t(e)}))}function B(t,e,n){var a={dInicio:t,dFim:e};m.post("/relatorio",a).then((function(t){n(null,t.data)})).catch((function(t){n(t)}))}var F=["Baixa","Média","Alta","Urgente"],N=function(t,e,n,a){var o={assunto:t,prioridade:e,mensagem:n};m.post("/contato/enviar-email",o).then((function(t){a(null,!!t)})).catch((function(t){a(t)}))},G=function(t){var e=d.a.create();e.get("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,BRL").then((function(e){t(null,e)})).catch((function(e){console.log(e),401===e.response.status?t(null,!1):t(e)}))},I=[{header:"Cliente"},{title:"Home",group:"apps",icon:"home",name:"ClienteHome"},{title:"Investimentos",group:"apps",icon:"account_balance_wallet",name:"ClienteInvestimentos"},{title:"Movimentações",group:"apps",icon:"swap_horizontal_circle",name:"ClienteMovimentacoes"},{title:"Cadastro",group:"apps",icon:"account_circle",name:"ClienteCadastro"},{title:"Contato",group:"apps",icon:"email",name:"ClienteContato"}],j=[{header:"Operador"},{title:"Transacões",group:"apps",icon:"money",name:"OperadorTransacoes"},{title:"Clientes",group:"apps",icon:"account_box",name:"OperadorClientes"},{title:"Contas",group:"apps",icon:"account_balance",name:"OperadorContas"}],q=[{header:"Administrador"},{title:"Visão Geral",group:"apps",icon:"dashboard",name:"AdminDashboard"},{title:"Usuários",group:"apps",icon:"assignment_ind",name:"AdminUsuarios"},{title:"Movimentações",group:"apps",icon:"swap_horizontal_circle",name:"AdminMovimentacoes"}],z=function(){var t=I;return b("Operador")&&(t=t.concat(j)),b("Admin")&&(t=t.concat(q)),t},Y=function(t,e){var n={usuario:t};m.put("/usuario",n).then((function(t){e(null,t.data)})).catch((function(t){e(t)}))},H=["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"],J=function(t){var e=p["a"].getters.idUsuario;m.get("/usuario/".concat(e)).then((function(e){t(null,e.data)})).catch((function(e){t(e)}))},K=function(t,e){m.get("/usuario/".concat(t)).then((function(t){e(null,t.data)})).catch((function(t){e(t)}))},W=function(t){m.get("/usuario").then((function(e){t(null,e.data)})).catch((function(e){t(e)}))},Q=function(t,e,n){var a={senha:t,senhaNova:e};m.post("/usuario/alterar-senha",a).then((function(t){n(null,!0)})).catch((function(t){n(t)}))},X=function(t,e){var n={usuario:t};m.post("/usuario",n).then((function(t){e(null,t)})).catch((function(t){e(t)}))},Z=n("19de"),tt=n.n(Z),et=function(t,e){return new Promise((function(n,a){var o=new FormData;o.append("document",t),m.post("".concat(e,"/upload"),o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){return n(t.data)})).catch((function(t){return a(t)}))}))},nt=function(t){return new Promise((function(e,n){var a=new FormData;a.append("document",t),m.post("/upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))},at=function(t){return new Promise((function(e,n){m.get("/download/".concat(t.arquivoId),{responseType:"blob"}).then((function(n){var a=new Blob([n.data]);tt()(a,t.nome),e(a)})).catch((function(t){return n(t)}))}))};e["a"]={Auth:a,Contato:r,Conta:o,Cotacao:i,Menu:c,Usuario:u,Upload:s}},"42f9":function(t,e,n){"use strict";n("ecc5")},"4fcb":function(t,e,n){"use strict";n("01dc")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71"),r=n("a722");n("da64"),n("83b1");a["a"].use(o["a"],{components:{VLayout:r["a"]},theme:{primary:"#171C29",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"fa4"});n("d5e8"),n("7f10"),n("84b4"),n("d25f"),n("78ce");var i={install:function(t){t.mixin({methods:{normalizaData:function(t){return new Date(t).toLocaleDateString("pt-br")},textToClipboard:function(t){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e)},subData:function(t){var e=new Date(t)-Date.now();return Math.ceil(e/864e5)}}}),t.filter("currency",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BRL";return t.toLocaleString("pt-BR",{style:"currency",currency:e})})),t.filter("cut",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return t?t.length<=e?t:t.substring(0,e)+"...":""})),t.filter("sec2date",(function(t){if(!t)return"...";var e=Math.abs(t)/36e5,n=60*(e-Math.trunc(e)),a=Math.floor(60*(n-Math.trunc(n)));return n=Math.floor(n),e=Math.floor(e),"".concat(e<10?"0":"").concat(e,":").concat(n<10?"0":"").concat(n,":").concat(a<10?"0":"").concat(a)})),t.filter("origem2icon",(function(t){switch(t){case"E-mail":return"mdi-email";case"Telefone":return"mdi-phone";case"Skype":return"mdi-skype";case"Whatsapp":return"mdi-whatsapp";default:return"mdi-dots-horizontal"}})),t.filter("str2date",(function(t){if(null==t)return"...";var e=new Date(t),n=e.getHours(),a=e.getMinutes(),o=e.getSeconds();return(n>9?"":"0")+n+":"+(a>9?"":"0")+a+":"+(o>9?"":"0")+o})),t.filter("str2calendar",(function(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth(),o=e.getDate();return(o>9?"":"0")+o+"/"+(a>9?"":"0")+a+"/"+n})),t.filter("str2datetime",(function(e,n){return t.prototype.$moment(e).format(n)})),t.filter("checkVoid",(function(t){return t&&""!==t?t:"?"})),t.filter("bytes2human",(function(t){var e,n=parseFloat(t);return n<1e3?e="B":n<1e6?(t=(t/1e3).toFixed(1),e="KB"):(t=(t/1e6).toFixed(1),e="MB"),"".concat(t," ").concat(e)})),t.filter("jsonPretty",(function(t){return JSON.stringify(t)})),t.prototype.$stylizePrevisao=function(e){var n=t.prototype.$moment,a=n().format("YYYY-MM-DD");return e=n(e).format("YYYY-MM-DD"),e===a?"red--text":a>e?"text-decoration-line-through red--text":""}}},c=n("bc3a"),u=n.n(c),s=n("716b"),l=n.n(s),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"appRoot"}},[t.$route.meta.public?[n("transition",[n("keep-alive",[n("router-view",{key:t.$route.fullpath})],1)],1)]:[n("v-app",{staticClass:"app",attrs:{id:"inspire"}},[n("app-drawer",{staticClass:"app--drawer"}),n("app-toolbar",{staticClass:"app--toolbar"}),n("v-content",[n("page-header"),n("div",{staticClass:"page-wrapper"},[n("router-view")],1),n("v-footer",{staticClass:"white pa-3 app--footer",attrs:{height:"auto"}},[n("span",{staticClass:"caption"},[t._v("Blue Capital © "+t._s((new Date).getFullYear()))])])],1),n("app-fab")],1)],n("v-snackbar",{attrs:{timeout:3e3,bottom:"",right:"",color:t.snackbar.color},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:"",icon:""},nativeOn:{click:function(e){t.snackbar.show=!1}}},[n("v-icon",[t._v("close")])],1)],1)],2)},f=[],p=(n("7f7f"),n("ac6a"),n("f3e2"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{id:"appDrawer","mini-variant":t.mini,fixed:"",touchless:"",dark:t.$vuetify.dark,app:"",width:"260"},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-toolbar",{attrs:{color:"white"}},[n("img",{staticClass:"mx-auto",staticStyle:{"border-radius":"0.3em"},attrs:{src:t.computeLogo,height:"45",alt:"EKO"}})]),n("vue-perfect-scrollbar",{staticClass:"drawer-menu--scroll",attrs:{settings:t.scrollSettings}},[n("v-list",{attrs:{dense:"",expand:""}},[t._l(t.menus,(function(e,a){return[e.items?n("v-list-group",{key:e.name,attrs:{group:e.group,"prepend-icon":e.icon,"no-action":"no-action"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title)+" asdf")])],1)],1),t._l(e.items,(function(a,o){return[a.items?n("v-list-group",{key:a.name,attrs:{group:a.group,"sub-group":"sub-group"}},[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(a.title))])],1)],1),t._l(a.children,(function(a,o){return n("v-list-tile",{key:o,attrs:{to:t.genChildTarget(e,a),href:a.href,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(a.title))])],1)],1)}))],2):n("v-list-tile",{key:o,attrs:{to:t.genChildTarget(e,a),href:a.href,disabled:a.disabled,target:a.target,ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[n("span",[t._v(t._s(a.title))])])],1),a.action?n("v-list-tile-action",[n("v-icon",{class:[a.actionClass||"success--text"]},[t._v(t._s(a.action))])],1):t._e()],1)]}))],2):e.header?n("v-subheader",{key:a},[t._v(t._s(e.header))]):e.divider?n("v-divider",{key:a}):n("v-list-tile",{key:e.name,attrs:{to:e.href?null:{name:e.name},href:e.href,ripple:"ripple",disabled:e.disabled,target:e.target,rel:"noopener",light:"","active-class":"primary lighten-5","exact-active-class":"black"}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v("\n              "+t._s(e.icon)+"\n            ")])],1):t._e(),n("v-list-tile-content",[t._v("\n            "+t._s(e.title)+"\n          ")])],1)]}))],2)],1)],1)}),m=[],h=n("365c"),v=n("9d63"),g=n.n(v),b={name:"app-drawer",components:{VuePerfectScrollbar:g.a},props:{expanded:{type:Boolean,default:!0}},data:function(){return{mini:!1,drawer:!0,menus:h["a"].Menu.menu(),scrollSettings:{maxScrollbarLength:160}}},computed:{computeGroupActive:function(){return!0},computeLogo:function(){return"/static/logo.svg"},sideToolbarColor:function(){return this.$vuetify.options.extra.sideNav}},created:function(){var t=this;window.getApp.$on("APP_DRAWER_TOGGLED",(function(){t.drawer=!t.drawer}))},methods:{genChildTarget:function(t,e){if(console.log(t),!e.href)return e.component?{name:e.component}:{name:"".concat(t.group,"/").concat(e.name)}}}},k=b,w=(n("42f9"),n("2877")),_=n("6544"),C=n.n(_),A=n("ce7e"),y=n("132d"),P=n("8860"),S=n("56b0"),T=n("ba95"),E=n("40fe"),D=n("5d23"),x=n("f774"),M=n("e0c7"),O=n("71d9"),L=Object(w["a"])(k,p,m,!1,null,null,null),V=L.exports;C()(L,{VDivider:A["a"],VIcon:y["a"],VList:P["a"],VListGroup:S["a"],VListTile:T["a"],VListTileAction:E["a"],VListTileContent:D["a"],VListTileTitle:D["c"],VNavigationDrawer:x["a"],VSubheader:M["a"],VToolbar:O["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"primary",fixed:"",dark:"",app:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3"}),n("v-toolbar-side-icon",{on:{click:function(e){return e.stopPropagation(),t.handleDrawerToggle(e)}}}),n("v-spacer"),n("v-menu",{attrs:{"offset-y":"",origin:"center center","nudge-bottom":10,transition:"scale-transition"}},[n("v-btn",{attrs:{slot:"activator",flat:"",large:""},slot:"activator"},[n("span",{staticClass:"font-weight-regular text-capitalize",staticStyle:{"margin-right":"0.6em"}},[t._v(t._s(t.user.name))]),n("v-avatar",{attrs:{icon:"",flat:"",size:"30px"}},[n("v-icon",{attrs:{medium:""}},[t._v("account_circle")])],1)],1),n("v-list",{staticClass:"pa-0"},t._l(t.items,(function(e,a){return n("v-list-tile",{key:a,attrs:{to:e.href?null:{name:e.name},href:e.href,ripple:"ripple",disabled:e.disabled,target:e.target,rel:"noopener"},on:{click:e.click}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},$=[],R={name:"app-toolbar",data:function(){return{items:[{icon:"perm_identity",href:"/#/cadastro",title:"Meu Cadastro",click:function(t){}},{icon:"fullscreen_exit",href:"#",title:"Logout",click:function(t){window.getApp.$emit("APP_LOGOUT")}}],user:{name:h["a"].Auth.getNome()},cotacaoBrl:1,pegouCotacao:!1}},computed:{toolbarColor:function(){return this.$vuetify.options.extra.mainNav}},created:function(){this.getCotacaoUSDaBRL()},methods:{getCotacaoUSDaBRL:function(){var t=this;h["a"].Cotacao.getCotacaoUSDaBRL((function(e,n){e?console.log(e):(t.cotacaoBrl=n.data.rates.BRL,t.pegouCotacao=!0)}))},handleDrawerToggle:function(){window.getApp.$emit("APP_DRAWER_TOGGLED")}}},B=R,F=n("8212"),N=n("8336"),G=n("e449"),I=n("9910"),j=n("706c"),q=n("2a7f"),z=Object(w["a"])(B,U,$,!1,null,null,null),Y=z.exports;C()(z,{VAvatar:F["a"],VBtn:N["a"],VIcon:y["a"],VList:P["a"],VListTile:T["a"],VListTileAction:E["a"],VListTileContent:D["a"],VListTileTitle:D["c"],VMenu:G["a"],VSpacer:I["a"],VToolbar:O["a"],VToolbarSideIcon:j["a"],VToolbarTitle:q["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"fab",small:"",dark:"dark",fixed:"fixed",bottom:"bottom",right:"right",color:"red"},on:{click:t.toTop}},[n("v-icon",[t._v("keyboard_arrow_up")])],1)],1)},J=[],K={name:"app-fab",data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300}},toTop:function(){this.$router.push({hash:""}),this.$vuetify.goTo(0)}}},W=K,Q=n("0789"),X=Object(w["a"])(W,H,J,!1,null,null,null),Z=X.exports;C()(X,{VBtn:N["a"],VFabTransition:Q["b"],VIcon:y["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"align-center layout px-4 pt-4 app--page-header",attrs:{row:""}})},et=[],nt=(n("7514"),{data:function(){return{title:""}},computed:{breadcrumbs:function(){var t=this,e=[];return h["a"].Menu.menu().forEach((function(n){if(n.items){var a=n.items.find((function(e){return e.component===t.$route.name}));a&&(e.push(n.title),e.push(a.title),t.title=a.title)}else n.name===t.$route.name&&(t.title=n.title,e.push(n.title))})),e}},methods:{refresh:function(){location.reload()}}}),at=nt,ot=Object(w["a"])(at,tt,et,!1,null,null,null),rt=ot.exports;C()(ot,{VLayout:r["a"]});var it=n("c0a4"),ct=n.n(it),ut=(n("a481"),n("c0d6")),st=[{name:"APP_LOGIN_SUCCESS",callback:function(t){this.$router.push({path:"/home"})}},{name:"APP_LOGIN_FAILED",callback:function(t){this.snackbar={show:!0,color:"orange",text:"Usuário ou senha incorretos"}}},{name:"APP_GENERIC_WARNING",callback:function(t){this.snackbar={show:!0,color:"orange",text:t}}},{name:"APP_GENERIC_SUCCESS",callback:function(t){this.snackbar={show:!0,color:"green",text:t}}},{name:"APP_BACKEND_ERROR",callback:function(t){this.snackbar={show:!0,color:"red",text:"Falha na solicitação. Informe o administrador do sistema."}}},{name:"APP_LOGOUT",callback:function(t){ut["a"].commit("clearToken");var e="green",n="Desconectado com sucesso";t&&(e="orange",n=t),this.snackbar={show:!0,color:e,text:n},this.$router.replace({path:"/login"})}},{name:"APP_PAGE_LOADED",callback:function(t){}},{name:"APP_AUTH_FAILED",callback:function(t){this.$router.push("/login"),this.$message.error("O token de acesso expirou")}},{name:"APP_BAD_REQUEST",callback:function(t){this.$message.error(t)}},{name:"APP_ACCESS_DENIED",callback:function(t){this.$message.error(t),this.$router.push("/forbidden")}},{name:"APP_RESOURCE_DELETED",callback:function(t){this.$message.success(t)}},{name:"APP_RESOURCE_UPDATED",callback:function(t){this.$message.success(t)}}],lt={components:{AppDrawer:V,AppToolbar:Y,AppFab:Z,PageHeader:rt},data:function(){return{themeColor:"primary",sideBarOption:"light",colors:ct.a,expanded:!0,rightDrawer:!1,snackbar:{show:!1,text:"",color:""}}},watch:{sideBarOption:{handler:function(t){this.$vuetify.dark="dark"===t},immediate:!0}},computed:{},created:function(){var t=this;st.forEach((function(e){t.$on(e.name,e.callback)})),window.getApp=this},methods:{openThemeSettings:function(){this.$vuetify.goTo(0),this.rightDrawer=!this.rightDrawer}}},dt=lt,ft=(n("4fcb"),n("7496")),pt=n("549c"),mt=n("553a"),ht=n("2db4"),vt=Object(w["a"])(dt,d,f,!1,null,"244107e2",null),gt=vt.exports;C()(vt,{VApp:ft["a"],VBtn:N["a"],VContent:pt["a"],VFooter:mt["a"],VIcon:y["a"],VSnackbar:ht["a"]});n("759f"),n("a5d8");var bt=n("323e"),kt=n.n(bt),wt=n("8c4f"),_t=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return n.e("routes").then(n.bind(null,"9703"))}},{path:"/redefinirSenha",meta:{public:!0},name:"RedefinirSenha",component:function(){return n.e("routes").then(n.bind(null,"21da"))}},{path:"/403",meta:{public:!0},name:"AccessDenied",component:function(){return n.e("routes").then(n.bind(null,"1569"))}},{path:"/500",meta:{public:!0},name:"ServerError",component:function(){return n.e("routes").then(n.bind(null,"dda8"))}},{path:"/login",meta:{public:!0},name:"Login",component:function(){return n.e("routes").then(n.bind(null,"a55b"))}},{path:"/",meta:{},name:"Root",redirect:{name:"ClienteHome"}},{path:"/home",meta:{requiresAuth:!0},name:"ClienteHome",component:function(){return n.e("routes").then(n.bind(null,"b8e2"))}},{path:"/investimentos",meta:{requiresAuth:!0},name:"ClienteInvestimentos",component:function(){return n.e("routes").then(n.bind(null,"a849"))}},{path:"/movimentacoes",meta:{requiresAuth:!0},name:"ClienteMovimentacoes",component:function(){return n.e("routes").then(n.bind(null,"300c"))}},{path:"/cadastro",meta:{requiresAuth:!0},name:"ClienteCadastro",component:function(){return n.e("routes").then(n.bind(null,"d33c"))}},{path:"/contato",meta:{requiresAuth:!0},name:"ClienteContato",component:function(){return n.e("routes").then(n.bind(null,"32fb"))}},{path:"/op-transacoes",meta:{requiresAuth:!0,permissao:"Operador"},name:"OperadorTransacoes",component:function(){return n.e("routes").then(n.bind(null,"4427"))}},{path:"/op-clientes",meta:{requiresAuth:!0,permissao:"Operador"},name:"OperadorClientes",component:function(){return n.e("routes").then(n.bind(null,"c111"))}},{path:"/op-contas",meta:{requiresAuth:!0,permissao:"Operador"},name:"OperadorContas",component:function(){return n.e("routes").then(n.bind(null,"0570"))}},{path:"/adm-dashboard",meta:{requiresAuth:!0,permissao:"Admin"},name:"AdminDashboard",component:function(){return n.e("routes").then(n.bind(null,"0a6e"))}},{path:"/adm-usuarios",meta:{requiresAuth:!0,permissao:"Admin"},name:"AdminUsuarios",component:function(){return n.e("routes").then(n.bind(null,"d075"))}},{path:"/adm-movimentacoes",meta:{requiresAuth:!0,permissao:"Admin"},name:"AdminMovimentacoes",component:function(){return n.e("routes").then(n.bind(null,"6fbd"))}}];a["a"].use(wt["a"]);var Ct=new wt["a"]({base:"/",mode:"hash",linkActiveClass:"active",routes:_t});Ct.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))?h["a"].Auth.getLogado()?(kt.a.start(),n()):n({path:"/login",query:{redirect:t.fullPath}}):(kt.a.start(),n())})),Ct.afterEach((function(t,e){kt.a.done()}));var At=Ct,yt=n("7bb1");a["a"].config.productionTip=!1,a["a"].prototype.$http=u.a,a["a"].use(l.a,{precision:2}),a["a"].use(yt["a"]),a["a"].use(i),new a["a"]({router:At,store:ut["a"],render:function(t){return t(gt)}}).$mount("#app")},"83b1":function(t,e,n){},c0d6:function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62"),r=n("bfa9"),i=n("04e1"),c=n.n(i);a["a"].use(o["a"]);var u=new r["a"]({key:"vuex",storage:window.localStorage});e["a"]=new o["a"].Store({state:{token:null},mutations:{setToken:function(t,e){t.token=e},clearToken:function(t){t.token=null}},actions:{},getters:{nome:function(t){return t.token?c()(t.token).nome:null},idUsuario:function(t){return t.token?c()(t.token)._id:null},permissao:function(t){return t.token?c()(t.token).permissao:null},token:function(t){return t.token}},plugins:[u.plugin]})},ecc5:function(t,e,n){}});
//# sourceMappingURL=app.0d02a2bc.js.map