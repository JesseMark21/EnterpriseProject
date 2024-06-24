(()=>{"use strict";var e={38:(e,a,t)=>{var r=t(751),s=t(641),n=t(953),i=t(220);const o={class:"navbar"},u={__name:"App",setup(e){return(e,a)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("header",o,[(0,s.Lk)("nav",null,[(0,s.bF)((0,n.R1)(i.Wk),{to:"/",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1}),(0,s.bF)((0,n.R1)(i.Wk),{to:"/about",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Favorites")])),_:1})])]),(0,s.Lk)("main",null,[(0,s.bF)((0,n.R1)(i.Tp))])],64))}};var l=t(262);const c=(0,l.A)(u,[["__scopeId","data-v-c67c5910"]]),v=c;var d=t(33),p=t(278);const m={class:"restaurant-card"},h={class:"image-container"},f=["src"],k={class:"overlay"},y={class:"restaurant-name"},g={key:0},b={key:1},_={class:"restaurant-info"},C={__name:"RestaurantCard",props:{imageSrc:{type:String,required:!0},restaurantName:{type:String,required:!0},dishName:{type:String,required:!0},dish:{type:Object,required:!0}},setup(e){const a=(0,p.Pj)(),t=e,r=(e,t)=>{const r=n(e,t);r?(e.restaurantName=t,a.dispatch("removeFromFavorites",e)):(e.restaurantName=t,a.dispatch("addToFavorites",e))},n=(e,t)=>(e.restaurantName=t,a.getters.isDishFavorite(e)),i=()=>{const e={title:`Check out this dish: ${t.dishName}`,text:`I found this dish at ${t.restaurantName} and thought you might like it!`,url:t.restaurantLink};navigator.share?navigator.share(e).catch(console.error):alert("Sharing is not supported in this browser.")};return(a,t)=>((0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("div",h,[(0,s.Lk)("img",{src:`https://jessemark21.github.io/img/${e.imageSrc}`,alt:"Restaurant Image",class:"restaurant-image"},null,8,f),(0,s.Lk)("div",k,[(0,s.Lk)("h2",y,(0,d.v_)(e.restaurantName),1),(0,s.Lk)("button",{class:"favorite-btn",onClick:t[0]||(t[0]=a=>r(e.dish,e.restaurantName))},[n(e.dish,e.restaurantName)?((0,s.uX)(),(0,s.CE)("span",g,"X")):((0,s.uX)(),(0,s.CE)("span",b,"+"))])])]),(0,s.Lk)("div",_,[(0,s.Lk)("h3",null,(0,d.v_)(e.dishName),1),(0,s.Lk)("button",{onClick:i},"Share")])]))}},E=(0,l.A)(C,[["__scopeId","data-v-22a568e8"]]),F=E;var L=t(335);const X="https://enterpriseproject-production.up.railway.app";async function w(){try{const e=await L.A.get(`${X}/api/data`);return e.data}catch(e){throw console.error("Error fetching restaurants:",e),e}}const O={class:"filter-bar"},R={class:"selected-filters"},j=["onClick"],A={key:0},S={key:1},I={key:2},K={__name:"Home",setup(e){const a=(0,n.KR)(""),t=(0,n.KR)([]),i=(0,n.KR)(null),o=(0,n.KR)(!0),u=(0,n.KR)(null),l=async()=>{try{o.value=!0,i.value=await w()}catch(e){u.value="Failed to fetch restaurants. Please try again later."}finally{o.value=!1}},c=e=>e.filter((e=>t.value.every((a=>e.description.toLowerCase().includes(a.toLowerCase()))))),v=()=>{""===a.value.trim()||t.value.includes(a.value.trim())||(t.value.push(a.value.trim()),a.value="")},p=e=>{t.value.splice(e,1)};return(0,s.sV)(l),(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",O,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onKeyup:(0,r.jR)(v,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,a.value]]),(0,s.Lk)("button",{onClick:v},"Add")]),(0,s.Lk)("div",R,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.value,((e,a)=>((0,s.uX)(),(0,s.CE)("span",{key:a,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>p(a)},"x",8,j)])))),128))]),o.value?((0,s.uX)(),(0,s.CE)("div",S," Loading... ")):((0,s.uX)(),(0,s.CE)("div",A,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container restaurant"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c(e.dishes),(a=>((0,s.uX)(),(0,s.CE)("div",{key:a.name,class:"container card"},[(0,s.bF)(F,{"image-src":a.image_url,"restaurant-name":e.name,"dish-name":a.name,dish:a},null,8,["image-src","restaurant-name","dish-name","dish"])])))),128))])))),128))])),u.value?((0,s.uX)(),(0,s.CE)("p",I,(0,d.v_)(u.value),1)):(0,s.Q3)("",!0)]))}},N=(0,l.A)(K,[["__scopeId","data-v-4cec95aa"]]),D=N,T={__name:"HomeView",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(D))}},V=T,W=V,x={class:"filter-bar"},P={class:"selected-filters"},M=["onClick"],$={key:0,class:"no-favorites"},q={key:1,class:"container restaurant"},H={__name:"Favorites",setup(e){const a=(0,n.KR)(""),t=(0,n.KR)([]),i=(0,p.Pj)(),o=(0,s.EW)((()=>{const e=i.state.favoriteDishes;return 0===t.value.length?e:e.filter((e=>t.value.every((a=>e.description.toLowerCase().includes(a.toLowerCase())))))})),u=()=>{""===a.value.trim()||t.value.includes(a.value.trim())||(t.value.push(a.value.trim()),a.value="")},l=e=>{t.value.splice(e,1)};return(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",x,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onKeyup:(0,r.jR)(u,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,a.value]]),(0,s.Lk)("button",{onClick:u},"Add")]),(0,s.Lk)("div",P,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.value,((e,a)=>((0,s.uX)(),(0,s.CE)("span",{key:a,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>l(a)},"x",8,M)])))),128))]),0===o.value.length?((0,s.uX)(),(0,s.CE)("div",$," No favorite dishes found. ")):((0,s.uX)(),(0,s.CE)("div",q,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container card"},[((0,s.uX)(),(0,s.Wv)(F,{key:e.name,"restaurant-name":e.restaurantName,"dish-name":e.name,dish:e,"image-src":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},null,8,["restaurant-name","dish-name","dish"]))])))),128))]))]))}},J=(0,l.A)(H,[["__scopeId","data-v-67ab1180"]]),U=J,Q={__name:"FavoritesView",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(U))}},z=Q,B=z,G=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:B}],Y=(0,i.aE)({history:(0,i.LA)("/"),routes:G}),Z=Y,ee=(0,p.y$)({state:{favoriteDishes:[]},mutations:{ADD_TO_FAVORITES(e,a){e.favoriteDishes.push(a)},REMOVE_FROM_FAVORITES(e,a){e.favoriteDishes=e.favoriteDishes.filter((e=>e!==a))}},actions:{addToFavorites({commit:e},a){e("ADD_TO_FAVORITES",a)},removeFromFavorites({commit:e},a){e("REMOVE_FROM_FAVORITES",a)}},getters:{isDishFavorite:e=>a=>e.favoriteDishes.some((e=>e.name===a.name&&e.restaurantName===a.restaurantName)),getFavoriteDishes:e=>e.favoriteDishes}}),ae=ee,te=(0,r.Ef)(v);te.use(ae),te.use(Z),te.mount("#app")}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.m=e,(()=>{var e=[];t.O=(a,r,s,n)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,s,n]=e[c],o=!0,u=0;u<r.length;u++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](r[u])))?r.splice(u--,1):(o=!1,n<i&&(i=n));if(o){e.splice(c--,1);var l=s();void 0!==l&&(a=l)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}})(),(()=>{t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};t.O.j=a=>0===e[a];var a=(a,r)=>{var s,n,[i,o,u]=r,l=0;if(i.some((a=>0!==e[a]))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(u)var c=u(t)}for(a&&a(r);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},r=self["webpackChunkenterprise_project"]=self["webpackChunkenterprise_project"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})();var r=t.O(void 0,[504],(()=>t(38)));r=t.O(r)})();
//# sourceMappingURL=app.0398d5e4.js.map