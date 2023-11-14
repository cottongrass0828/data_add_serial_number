(function(){"use strict";var e={8726:function(e,n,r){var t=r(3862),l=r(3396);function i(e,n){const r=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(r)}var a=r(89);const o={},s=(0,a.Z)(o,[["render",i]]);var u=s,d=r(2483),c=r(7139);const b={class:"p-4"},m=(0,l._)("div",{class:"text-3xl text-green-500 font-bold mb-3"},"Step 1",-1),p={class:"flex"},f={class:"border-2 border-dashed border-black p-2 mb-2 mr-2"},h=(0,l._)("div",{class:"text-xl"},"上傳 JSON",-1),g={class:"border-2 border-dashed border-black p-2 mb-2 mr-2"},_=(0,l._)("div",{class:"text-xl"},"上傳 Excel",-1),v=(0,l._)("div",{class:"p-4 text-3xl text-green-500 font-bold"},"Step 2",-1),x=(0,l._)("div",{class:"text-xl px-4"},"產品項目",-1),y={class:"grid grid-cols-3 gap-2"},w={class:"border-r-2 border-dashed border-blue-500 px-2"},k=["onUpdate:modelValue"],O={class:"px-2 grow"},S={key:0,class:"label_group"},C=["for"],N=["id","value","name","onUpdate:modelValue"],J={key:0},D=(0,l._)("div",{class:"text-3xl text-green-500 font-bold my-3 px-4"},"Step 3",-1);function U(e,n,r,i,a,o){const s=(0,l.up)("SearchComponent");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",b,[m,(0,l._)("div",p,[(0,l._)("div",f,[h,(0,l._)("input",{type:"file",id:"selectFiles",onChange:n[0]||(n[0]=(...e)=>o.onJSONFileChange&&o.onJSONFileChange(...e)),onclick:"this.value=null;"},null,32)]),(0,l._)("div",g,[_,(0,l._)("input",{type:"file",class:"mb-2",onChange:n[1]||(n[1]=(...e)=>o.onFileChange&&o.onFileChange(...e)),onclick:"this.value=null;"},null,32)])])]),v,x,(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.menuJSON.items,((n,r)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,c.C_)(["p-2 border-2 border-black rounded m-2 flex",{"bg-red-200":void 0===n.serial_number||""===n.serial_number}]),key:r},[(0,l._)("div",w,[(0,l._)("div",null,"id: "+(0,c.zw)(n.id),1),(0,l._)("div",null,[(0,l.Uk)("serial_number: "),(0,l.wy)((0,l._)("input",{type:"text",class:(0,c.C_)(["border",{"border-red-500":void 0===n.serial_number||""===n.serial_number}]),"onUpdate:modelValue":e=>n.serial_number=e},null,10,k),[[t.nr,n.serial_number]])]),(0,l._)("div",null,"title: "+(0,c.zw)(n.title.translations.en),1)]),(0,l._)("div",O,[e.dbJSON.length>0?((0,l.wg)(),(0,l.iD)("div",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.dbJSON.filter((e=>n.title.translations.en.split("-").some((n=>e.name.includes(n))))),((e,i)=>((0,l.wg)(),(0,l.iD)("label",{class:"p-2 border block bg-white",key:i,for:e.serial_number+"_"+r},[(0,l.wy)((0,l._)("input",{type:"radio",id:e.serial_number+"_"+r,value:e.serial_number,name:`product_${r}`,"onUpdate:modelValue":e=>n.serial_number=e},null,8,N),[[t.G2,n.serial_number]]),(0,l.Uk)(" "+(0,c.zw)(e.serial_number)+"："+(0,c.zw)(e.name),1)],8,C)))),128)),0===e.dbJSON.filter((e=>n.title.translations.en.split("-").some((n=>e.name.includes(n))))).length?((0,l.wg)(),(0,l.iD)("div",J,[(0,l.Wm)(s,{searchtext:n.title.translations.en,dbJSON:e.dbJSON,onClickData:e=>{n.serial_number=e},index:r},null,8,["searchtext","dbJSON","onClickData","index"])])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])],2)))),128))]),D,(0,l._)("button",{class:"mx-4 mb-4 border border-black rounded p-2",onClick:n[2]||(n[2]=(...e)=>o.onClick&&o.onClick(...e))},"下載")],64)}var j=r(8394),F=r(7008),A=r.n(F);const q={class:"border-t-2 bg-blue-100 p-1"},z=["for"],V=["id","value","name"];function T(e,n,r,i,a,o){return(0,l.wg)(),(0,l.iD)("div",q,[(0,l.Uk)(" 搜尋： "),(0,l.wy)((0,l._)("input",{type:"text",class:"border mb-1 w-full","onUpdate:modelValue":n[0]||(n[0]=n=>e.search=n),onInput:n[1]||(n[1]=(...e)=>o.onChange&&o.onChange(...e))},null,544),[[t.nr,e.search]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.resultArray,((i,a)=>((0,l.wg)(),(0,l.iD)("label",{class:"p-2 border block bg-white",key:a,for:i.serial_number+"_s"+r.index},[(0,l.wy)((0,l._)("input",{type:"radio",id:i.serial_number+"_s"+r.index,value:i.serial_number,"onUpdate:modelValue":n[2]||(n[2]=n=>e.selected=n),onChange:n[3]||(n[3]=n=>e.$emit("clickData",e.selected)),name:`product_${r.index}`},null,40,V),[[t.G2,e.selected]]),(0,l.Uk)(" "+(0,c.zw)(i.serial_number)+"："+(0,c.zw)(i.name),1)],8,z)))),128))])}var $={emits:["clickData"],props:{index:{type:Number,required:!0},searchtext:{type:String},dbJSON:{type:Array,required:!0}},data:()=>({search:"",resultArray:[],selected:""}),methods:{onChange(e){this.resultArray=this.dbJSON.filter((n=>n.name.includes(e.target.value)))}},mounted(){this.search=this.searchtext}};const E=(0,a.Z)($,[["render",T]]);var H=E,Y=r(5941),Z={components:{SearchComponent:H},data:()=>({menuName:"",menuJSON:{},dbJSON:[]}),methods:{onJSONFileChange(e){const n=e.target.files?e.target.files:null;if(n.length<=0)return!1;const r=new FileReader;r.onload=e=>{const r=n.item(0).name.split(".")[0];this.menuName=r;const t=JSON.parse(e.target.result);this.menuJSON=t},r.readAsText(n.item(0))},onFileChange(e){const n=e.target.files?e.target.files[0]:null,r={"代號":{prop:"serial_number",type:String},"項目名稱":{prop:"name",type:String}};(0,j.Z)(n,{schema:r}).then((({rows:e,errors:n})=>{Y.log("errors:",n),this.dbJSON=e,this.$nextTick((()=>{document.querySelectorAll(".bg-red-200").forEach((e=>{e.querySelectorAll(".label_group label:first-child").forEach((e=>{e.click()}))}))}))}))},onClick(){0===document.querySelectorAll(".bg-red-200").length?A()(JSON.stringify(this.menuJSON),`${this.menuName}-merge.json`,"application/json"):alert("請確認是否有未填寫的 serial_number 項目")}},mounted(){}};const K=(0,a.Z)(Z,[["render",U]]);var G=K;const M=[{path:"/",name:"home",component:G}],P=(0,d.p7)({history:(0,d.r5)(),routes:M});var I=P,R=r(65),W=(0,R.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,t.ri)(u).use(W).use(I).mount("#app")}},n={};function r(t){var l=n[t];if(void 0!==l)return l.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,t,l,i){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],l=e[d][1],i=e[d][2];for(var o=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(o=!1,i<a&&(a=i));if(o){e.splice(d--,1);var u=l();void 0!==u&&(n=u)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,l,i]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var l,i,a=t[0],o=t[1],s=t[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(s)var d=s(r)}for(n&&n(t);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},t=self["webpackChunkmenu_add_exteranl_data"]=self["webpackChunkmenu_add_exteranl_data"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(8726)}));t=r.O(t)})();
//# sourceMappingURL=app.8984e574.js.map