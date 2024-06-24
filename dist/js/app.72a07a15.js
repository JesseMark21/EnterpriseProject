(()=>{"use strict";var e={533:(e,a,t)=>{var r=t(751),s=t(641),n=t(953),i=t(220);const o={class:"navbar"},u={__name:"App",setup(e){return(e,a)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("header",o,[(0,s.Lk)("nav",null,[(0,s.bF)((0,n.R1)(i.Wk),{to:"/",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Home")])),_:1}),(0,s.bF)((0,n.R1)(i.Wk),{to:"/about",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Favorites")])),_:1})])]),(0,s.Lk)("main",null,[(0,s.bF)((0,n.R1)(i.Tp))])],64))}};var l=t(262);const c=(0,l.A)(u,[["__scopeId","data-v-c67c5910"]]),v=c;var d=t(33);const p={class:"restaurant-card"},m={class:"image-container"},h=["src"],f={class:"overlay"},k={class:"restaurant-name"},g={key:0},y={key:1},b={class:"restaurant-info"},_={__name:"RestaurantCard",props:{imageSrc:{type:String,required:!0},restaurantName:{type:String,required:!0},dishName:{type:String,required:!0},dish:{type:Object,required:!0}},setup(e){const a=e,t=(e,a)=>{const t=r(e,a);t?(e.restaurantName=a,i.dispatch("removeFromFavorites",e)):(e.restaurantName=a,i.dispatch("addToFavorites",e))},r=(e,a)=>(e.restaurantName=a,i.getters.isDishFavorite(e)),n=()=>{const e={title:`Check out this dish: ${a.dishName}`,text:`I found this dish at ${a.restaurantName} and thought you might like it!`,url:a.restaurantLink};navigator.share?navigator.share(e).catch(console.error):alert("Sharing is not supported in this browser.")},i=useStore();return(a,i)=>((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("div",m,[(0,s.Lk)("img",{src:`https://jessemark21.github.io/img/${e.imageSrc}`,alt:"Restaurant Image",class:"restaurant-image"},null,8,h),(0,s.Lk)("div",f,[(0,s.Lk)("h2",k,(0,d.v_)(e.restaurantName),1),(0,s.Lk)("button",{class:"favorite-btn",onClick:i[0]||(i[0]=r=>t(e.dish,a.restaurant.name))},[r(e.dish,a.restaurant.name)?((0,s.uX)(),(0,s.CE)("span",g,"Remove from Favorites")):((0,s.uX)(),(0,s.CE)("span",y,"Add to Favorites"))])])]),(0,s.Lk)("div",b,[(0,s.Lk)("h3",null,(0,d.v_)(e.dishName),1),(0,s.Lk)("button",{onClick:n},"Share")])]))}},E=(0,l.A)(_,[["__scopeId","data-v-0fff6a7e"]]),C=E;var F=t(335);const L="https://enterpriseproject-production.up.railway.app";async function R(){try{const e=await F.A.get(`${L}/api/data`);return console.log("RESPONSE",e),e.data}catch(e){throw console.error("Error fetching restaurants:",e),e}}const O={class:"filter-bar"},w={class:"selected-filters"},X=["onClick"],S={key:0},A={key:1},D={key:2},I={__name:"Home",setup(e){const a=(0,n.KR)(""),t=(0,n.KR)([]),i=(0,n.KR)(null),o=(0,n.KR)(!0),u=(0,n.KR)(null),l=async()=>{try{o.value=!0,i.value=await R(),console.log("RESTAURANTS:",i.value)}catch(e){u.value="Failed to fetch restaurants. Please try again later."}finally{o.value=!1}},c=e=>e.filter((e=>(console.log("dish src",e.image_url),t.value.every((a=>e.description.toLowerCase().includes(a.toLowerCase())))))),v=()=>{""===a.value.trim()||t.value.includes(a.value.trim())||(t.value.push(a.value.trim()),a.value="")},p=e=>{t.value.splice(e,1)};return(0,s.sV)(l),(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",O,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onKeyup:(0,r.jR)(v,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,a.value]]),(0,s.Lk)("button",{onClick:v},"Add")]),(0,s.Lk)("div",w,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.value,((e,a)=>((0,s.uX)(),(0,s.CE)("span",{key:a,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>p(a)},"x",8,X)])))),128))]),o.value?((0,s.uX)(),(0,s.CE)("div",A," Loading... ")):((0,s.uX)(),(0,s.CE)("div",S,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container restaurant"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c(e.dishes),(a=>((0,s.uX)(),(0,s.CE)("div",{key:a.name,class:"container card"},[(0,s.bF)(C,{"image-src":a.image_url,"restaurant-name":e.name,"dish-name":a.name,dish:a},null,8,["image-src","restaurant-name","dish-name","dish"])])))),128))])))),128))])),u.value?((0,s.uX)(),(0,s.CE)("p",D,(0,d.v_)(u.value),1)):(0,s.Q3)("",!0)]))}},j=(0,l.A)(I,[["__scopeId","data-v-79924a49"]]),N=j,T={__name:"HomeView",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(N))}},K=T,V=K;var W=t(278);const x={class:"filter-bar"},P={class:"selected-filters"},M=["onClick"],$={key:0,class:"no-favorites"},q={key:1,class:"container restaurant"},H={__name:"Favorites",setup(e){const a=(0,n.KR)(""),t=(0,n.KR)([]),i=(0,W.Pj)(),o=(0,s.EW)((()=>{const e=i.state.favoriteDishes;return 0===t.value.length?e:e.filter((e=>t.value.every((a=>e.description.toLowerCase().includes(a.toLowerCase())))))})),u=()=>{""===a.value.trim()||t.value.includes(a.value.trim())||(t.value.push(a.value.trim()),a.value="")},l=e=>{t.value.splice(e,1)};return(e,n)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",x,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onKeyup:(0,r.jR)(u,["enter"]),placeholder:"Add filter"},null,544),[[r.Jo,a.value]]),(0,s.Lk)("button",{onClick:u},"Add")]),(0,s.Lk)("div",P,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.value,((e,a)=>((0,s.uX)(),(0,s.CE)("span",{key:a,class:"selected-filter"},[(0,s.eW)((0,d.v_)(e)+" ",1),(0,s.Lk)("button",{onClick:e=>l(a)},"x",8,M)])))),128))]),0===o.value.length?((0,s.uX)(),(0,s.CE)("div",$," No favorite dishes found. ")):((0,s.uX)(),(0,s.CE)("div",q,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.name,class:"container card"},[((0,s.uX)(),(0,s.Wv)(C,{key:e.name,"restaurant-name":e.restaurantName,"dish-name":e.name,dish:e,"image-src":"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},null,8,["restaurant-name","dish-name","dish"]))])))),128))]))]))}},U=(0,l.A)(H,[["__scopeId","data-v-67ab1180"]]),J=U,G={__name:"FavoritesView",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(J))}},Q=G,z=Q,B=[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:z}],Y=(0,i.aE)({history:(0,i.LA)("/"),routes:B}),Z=Y,ee=(0,W.y$)({state:{favoriteDishes:[]},mutations:{ADD_TO_FAVORITES(e,a){console.log("ADDING DISH",a),e.favoriteDishes.push(a)},REMOVE_FROM_FAVORITES(e,a){e.favoriteDishes=e.favoriteDishes.filter((e=>e!==a)),console.log("FAVORITES",e.favoriteDishes)}},actions:{addToFavorites({commit:e},a){e("ADD_TO_FAVORITES",a)},removeFromFavorites({commit:e},a){e("REMOVE_FROM_FAVORITES",a)}},getters:{isDishFavorite:e=>a=>e.favoriteDishes.some((e=>e.name===a.name&&e.restaurantName===a.restaurantName)),getFavoriteDishes:e=>e.favoriteDishes}}),ae=ee,te=(0,r.Ef)(v);te.use(ae),te.use(Z),te.mount("#app")}},a={};function t(r){var s=a[r];if(void 0!==s)return s.exports;var n=a[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.m=e,(()=>{var e=[];t.O=(a,r,s,n)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,s,n]=e[c],o=!0,u=0;u<r.length;u++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](r[u])))?r.splice(u--,1):(o=!1,n<i&&(i=n));if(o){e.splice(c--,1);var l=s();void 0!==l&&(a=l)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}})(),(()=>{t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};t.O.j=a=>0===e[a];var a=(a,r)=>{var s,n,[i,o,u]=r,l=0;if(i.some((a=>0!==e[a]))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(u)var c=u(t)}for(a&&a(r);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},r=self["webpackChunkenterprise_project"]=self["webpackChunkenterprise_project"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})();var r=t.O(void 0,[504],(()=>t(533)));r=t.O(r)})();
//# sourceMappingURL=app.72a07a15.js.map