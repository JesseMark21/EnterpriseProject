(()=>{"use strict";var e={522:(e,t,a)=>{var r=a(751),s=a(641),n=a(953),o=a(220);const i={class:"navbar"},u={__name:"App",setup(e){return(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("header",i,[(0,s.Lk)("nav",null,[(0,s.bF)((0,n.R1)(o.Wk),{to:"/",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1}),(0,s.bF)((0,n.R1)(o.Wk),{to:"/about",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Favorites")])),_:1})])]),(0,s.Lk)("main",null,[(0,s.bF)((0,n.R1)(o.Tp))])],64))}};var l=a(262);const c=(0,l.A)(u,[["__scopeId","data-v-c67c5910"]]),v=c;var d=a(33),m=a(278);const p={class:"restaurant-card"},h={class:"image-container"},f=["src"],k={class:"overlay"},b={class:"restaurant-name"},C={class:"restaurant-info"},_={__name:"RestaurantCard",props:{imageSrc:{type:String,required:!0},restaurantName:{type:String,required:!0},dishName:{type:String,required:!0}},setup(e){const t=e,a=(0,n.KR)(!1),r=((0,s.EW)((()=>a.value?"fas fa-star":"far fa-star")),()=>{const e={title:`Check out this dish: ${t.dishName}`,text:`I found this dish at ${t.restaurantName} and thought you might like it!`,url:t.restaurantLink};navigator.share?navigator.share(e).catch(console.error):alert("Sharing is not supported in this browser.")});return(t,a)=>((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("div",h,[(0,s.Lk)("img",{src:e.imageSrc,alt:"Restaurant Image",class:"restaurant-image"},null,8,f),(0,s.Lk)("div",k,[(0,s.Lk)("h2",b,(0,d.v_)(e.restaurantName),1)])]),(0,s.Lk)("div",C,[(0,s.Lk)("h3",null,(0,d.v_)(e.dishName),1),(0,s.Lk)("button",{onClick:r},"Share")])]))}},g=(0,l.A)(_,[["__scopeId","data-v-c59b7912"]]),F=g,E={class:"filter-bar"},y={class:"selected-filters"},L=["onClick"],w=["onClick"],R={key:0},O={key:1},X={__name:"TheWelcome",setup(e){const t=(0,n.KR)(""),a=(0,n.KR)([]),o=(0,n.KR)(null);fetch("https://testapi.io/api/jessedmark/restaurants").then((e=>e.json())).then((e=>o.value=e));const i=(0,m.Pj)(),u=e=>e.filter((e=>a.value.every((t=>e.description.toLowerCase().includes(t.toLowerCase()))))),l=()=>{""===t.value.trim()||a.value.includes(t.value.trim())||(a.value.push(t.value.trim()),t.value="")},c=e=>{a.value.splice(e,1)},v=(e,t)=>{const a=p(e,t);a?(e.restaurantName=t,i.dispatch("removeFromFavorites",e)):(e.restaurantName=t,i.dispatch("addToFavorites",e))},p=(e,t)=>(e.restaurantName=t,i.getters.isDishFavorite(e));return(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",E,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),onKeyup:(0,r.jR)(l,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,t.value]]),(0,s.Lk)("button",{onClick:l},"Add")]),(0,s.Lk)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>c(t)},"x",8,L)])))),128))]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container restaurant"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u(e.dishes),(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.name,class:"container card"},[(0,s.bF)(F,{"image-src":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg","restaurant-name":e.name,"dish-name":t.name},null,8,["restaurant-name","dish-name"]),(0,s.Lk)("button",{onClick:a=>v(t,e.name)},[p(t,e.name)?((0,s.uX)(),(0,s.CE)("span",R,"Remove from Favorites")):((0,s.uX)(),(0,s.CE)("span",O,"Add to Favorites"))],8,w)])))),128))])))),128))]))}},A=(0,l.A)(X,[["__scopeId","data-v-7bd2c680"]]),D=A,I={__name:"HomeView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(D))}},j=I,K=j,N=e=>((0,s.Qi)("data-v-0e82c51b"),e=e(),(0,s.jt)(),e),S={class:"filter-bar"},T={class:"selected-filters"},W=["onClick"],V={key:0,class:"no-favorites"},x={key:1,class:"container restaurant"},M=["onClick"],P=N((()=>(0,s.Lk)("span",null,"Remove from Favorites",-1))),q=[P],H={__name:"Favorites",setup(e){const t=(0,n.KR)(""),a=(0,n.KR)([]),o=(0,m.Pj)(),i=(0,s.EW)((()=>{const e=o.state.favoriteDishes;return 0===a.value.length?e:e.filter((e=>a.value.every((t=>e.description.toLowerCase().includes(t.toLowerCase())))))})),u=()=>{""===t.value.trim()||a.value.includes(t.value.trim())||(a.value.push(t.value.trim()),t.value="")},l=e=>{a.value.splice(e,1)},c=e=>{o.dispatch("removeFromFavorites",e)};return(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",S,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),onKeyup:(0,r.jR)(u,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,t.value]]),(0,s.Lk)("button",{onClick:u},"Add")]),(0,s.Lk)("div",T,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.value,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>l(t)},"x",8,W)])))),128))]),0===i.value.length?((0,s.uX)(),(0,s.CE)("div",V," No favorite dishes found. ")):((0,s.uX)(),(0,s.CE)("div",x,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container card"},[((0,s.uX)(),(0,s.Wv)(F,{key:e.name,"restaurant-name":e.restaurantName,"dish-name":e.name,"image-src":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},null,8,["restaurant-name","dish-name"])),(0,s.Lk)("button",{onClick:t=>c(e)},q,8,M)])))),128))]))]))}},$=(0,l.A)(H,[["__scopeId","data-v-0e82c51b"]]),J=$,U={__name:"AboutView",setup(e){return(e,t)=>((0,s.uX)(),(0,s.Wv)(J))}},G=U,Q=G,z=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:Q}],B=(0,o.aE)({history:(0,o.LA)("/"),routes:z}),Y=B,Z=(0,m.y$)({state:{favoriteDishes:[]},mutations:{ADD_TO_FAVORITES(e,t){console.log("ADDING DISH",t),e.favoriteDishes.push(t)},REMOVE_FROM_FAVORITES(e,t){e.favoriteDishes=e.favoriteDishes.filter((e=>e!==t)),console.log("FAVORITES",e.favoriteDishes)}},actions:{addToFavorites({commit:e},t){e("ADD_TO_FAVORITES",t)},removeFromFavorites({commit:e},t){e("REMOVE_FROM_FAVORITES",t)}},getters:{isDishFavorite:e=>t=>e.favoriteDishes.some((e=>e.name===t.name&&e.restaurantName===t.restaurantName)),getFavoriteDishes:e=>e.favoriteDishes}}),ee=Z,te=(0,r.Ef)(v);te.use(ee),te.use(Y),te.mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,s,n)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,s,n]=e[c],i=!0,u=0;u<r.length;u++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[u])))?r.splice(u--,1):(i=!1,n<o&&(o=n));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={524:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,[o,i,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(u)var c=u(a)}for(t&&t(r);l<o.length;l++)n=o[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkenterprise_project"]=self["webpackChunkenterprise_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[504],(()=>a(522)));r=a.O(r)})();
//# sourceMappingURL=app.fad42136.js.map