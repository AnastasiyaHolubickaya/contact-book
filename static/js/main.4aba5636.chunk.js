(this["webpackJsonpcontacts-book"]=this["webpackJsonpcontacts-book"]||[]).push([[0],{102:function(t,e,n){},103:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(45),o=n.n(a),r=n(22),i=(n(102),n(46)),s=n(47),l=n(50),d=n(49),j=n(5),b=(n(103),n(70)),u=n.n(b),m=n(35),O=n.n(m),f=n(95),h=n.n(f),x=n(1),_=function(t){var e=t.value,n=t.onClick;return Object(x.jsx)("div",{children:Object(x.jsxs)("button",{className:h.a.btn,onClick:n,children:[" ",e," "]})})},v=function(t){var e=t.contact,n=t.id,c=t.showModal,a=function(t){localStorage.removeItem(t),localStorage.setItem(t,JSON.stringify(n))};return Object(x.jsxs)("div",{className:O.a.block,children:[Object(x.jsx)("div",{className:O.a.image,children:void 0===e.img?Object(x.jsx)("img",{src:"img/user.png",alt:""}):Object(x.jsx)("img",{src:"img/".concat(e.img),alt:""})}),Object(x.jsx)("div",{className:O.a.name,children:Object(x.jsx)("span",{children:e.name})}),Object(x.jsxs)("div",{className:O.a.btn_group,children:[Object(x.jsxs)(r.b,{to:"/detail/".concat(n),children:[" ",Object(x.jsx)(_,{value:"\u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435",onClick:function(){return a("id")}})]}),Object(x.jsx)(_,{value:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onClick:function(){c(!0),a("removeId")},children:"delete contact"})]})]})},p=n(7),g=n.n(p),C=n(11),k=n(74),N=n(36),S=n.n(N),M=["input","meta"],A=["input","meta"],w=function(t){var e=t.children,n=t.meta,c=n.touched,a=n.error,o=c&&a;return Object(x.jsxs)("div",{className:o?S.a.error:void 0,children:[e,Object(x.jsx)("br",{}),o&&Object(x.jsx)("span",{className:S.a.spanError,children:a})]})},E=function(t){var e=t.input,n=(t.meta,Object(k.a)(t,M));return Object(x.jsxs)(w,Object(C.a)(Object(C.a)({},t),{},{children:[" ",Object(x.jsx)("input",Object(C.a)(Object(C.a)(Object(C.a)({},e),n),{},{className:S.a.field}))]}))},F=function(t){var e=t.input,n=(t.meta,Object(k.a)(t,A));return Object(x.jsxs)(w,Object(C.a)(Object(C.a)({},t),{},{children:[" ",Object(x.jsx)("textarea",Object(C.a)(Object(C.a)(Object(C.a)({},e),n),{},{className:S.a.field}))]}))},I=function(t){if(!t)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"},y=function(t){if(void 0!==t&&!new RegExp(/^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z ]+$/i).test(t))return"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432"},T=function(t){if(void 0!==t&&!new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(t))return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"},R=function(t){if(void 0!==t&&new RegExp(/[^0-9.]/g).test(t))return"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440"},Z=function(t){if(void 0!==t&&!new RegExp(/^[A-Z0-9._]+[:]+[A-Z0-9._]+$/i).test(t))return"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0448\u0430\u0431\u043b\u043e\u043d \u0442\u0438\u043f\u0430  email:test@test.com"},P=n(211),U=n(210),J=Object(U.a)({form:"addContact"})((function(t){var e=t.handleSubmit,n=t.error,c=t.activateAddMode;return Object(x.jsxs)("div",{onClick:function(){return c(!1)},children:[Object(x.jsxs)("form",{onClick:function(t){return t.stopPropagation()},onSubmit:e,className:g.a.form,children:[Object(x.jsx)("span",{className:g.a.spanForm,children:" \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 "}),Object(x.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(x.jsx)(P.a,{name:"name",component:E,validate:[I,y]}),Object(x.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(x.jsx)(P.a,{name:"email",component:E,validate:[T]}),Object(x.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(x.jsx)(P.a,{name:"phone",component:E,validate:[R]}),Object(x.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"}),Object(x.jsx)(P.a,{name:"address",component:F}),n&&Object(x.jsxs)("div",{className:g.a.formSummaryError,children:[" ",n]}),Object(x.jsx)(_,{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(x.jsx)(_,{onClick:function(){return c(!1)},value:"\u043e\u0442\u043c\u0435\u043d\u0430"})]})})),W=function(t){return{type:"SET_CONTACTS",contacts:t}},D=n(23),V=n.n(D),X=n(73),z=n.n(X),$=function(t){var e=t.children,n=t.showModal,c=t.isModalActive;return Object(x.jsx)("div",{className:c?z()(V.a.modal,V.a.active):V.a.modal,onClick:function(){return n(!1)},children:Object(x.jsx)("div",{className:c?z()(V.a.modal_content,V.a.active):V.a.modal_content,onClick:function(t){return t.stopPropagation()},children:e})})},q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).activateAddMode=function(t){c.setState({addMode:t})},c.onSubmit=function(t){W(function(t,e){var n=t;return n.push(e),n}(c.props.contacts,t)),c.activateAddMode(!1)},c.deleteContact=function(){var t=parseInt(localStorage.getItem("removeId"));W(function(t,e){var n=t;return n.splice(e,1),n}(c.props.contacts,t)),c.setState({isRemoveContact:!0}),c.showModal(!1)},c.showModal=function(t){c.setState({isModalActive:t})},c.state={addMode:!1,isRemoveContact:!1,isModalActive:!1},c}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:u.a.container,children:[this.state.addMode?Object(x.jsx)(J,{onSubmit:this.onSubmit,activateAddMode:this.activateAddMode}):Object(x.jsxs)("div",{children:[this.props.contacts.map((function(e,n){return Object(x.jsx)(v,{contact:e,id:n,showModal:t.showModal},n.toString())})),Object(x.jsx)(_,{value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onClick:function(){return t.activateAddMode(!0)}})]}),Object(x.jsxs)($,{showModal:this.showModal,isModalActive:this.state.isModalActive,children:[Object(x.jsx)("p",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442?"}),Object(x.jsxs)("div",{className:u.a.btn_group,children:[Object(x.jsx)(_,{value:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:this.deleteContact}),Object(x.jsx)(_,{value:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return t.showModal(!1)}})]})]})]})}}]),n}(c.Component),H=n(14),K=n(28),Y=n.n(K),B=Object(U.a)({form:"addNewField"})((function(t){var e=t.handleSubmit,n=t.error,c=t.showModalWithForm;return Object(x.jsx)("div",{onClick:function(){return c(!1)},children:Object(x.jsxs)("form",{onClick:function(t){return t.stopPropagation()},onSubmit:e,className:g.a.form,children:[Object(x.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f"}),Object(x.jsx)(P.a,{name:"text",component:E,validate:[Z]}),Object(x.jsxs)("div",{className:g.a.btn_group,children:[Object(x.jsx)(_,{value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(x.jsx)(_,{value:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return c(!1)}})]}),n&&Object(x.jsxs)("div",{className:g.a.formSummaryError,children:[" ",n]})]})})})),G=Object(U.a)({form:"editContact"})((function(t){var e=t.handleSubmit,n=t.error,a=t.activateEditMode,o=t.keys,r=t.showModal,i=t.id,s=t.contacts,l=Object(c.useState)(!1),d=Object(H.a)(l,2),j=d[0],b=d[1],u=function(t){b(t)};return Object(x.jsxs)("div",{className:g.a.container,onClick:function(){return a(!1)},children:[Object(x.jsxs)("form",{onClick:function(t){return t.stopPropagation()},onSubmit:e,className:g.a.form,children:[Object(x.jsx)("span",{className:g.a.spanForm,children:" \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 "}),o.map((function(t,e){return Object(x.jsxs)("div",{className:g.a.form_edit,children:[Object(x.jsx)("b",{className:g.a.bForm_edit,children:t}),Object(x.jsx)(P.a,{name:t,component:"address"===t?F:E,validate:"name"===t?[I,y]:"phone"===t?[R]:"email"===t?[T]:[]}),Object(x.jsx)("button",{onClick:function(){return function(t){r(!0),localStorage.removeItem(t),localStorage.setItem("field",t)}(t)},children:"X"})]},e.toString())})),n&&Object(x.jsxs)("div",{className:g.a.formSummaryError,children:[" ",n]}),Object(x.jsxs)("div",{className:g.a.btn_group,children:[Object(x.jsx)(_,{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(x.jsx)(_,{onClick:function(){return a(!1)},value:"\u043d\u0430\u0437\u0430\u0434"})]})]}),Object(x.jsxs)("div",{onClick:function(t){return t.stopPropagation()},children:[Object(x.jsx)(_,{value:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u0435",onClick:function(){return u(!0)}}),Object(x.jsx)($,{showModal:u,isModalActive:j,children:Object(x.jsx)(B,{showModalWithForm:u,onSubmit:function(t){var e=t.text.split(":");s[i]=function(t,e){return t[e[0]]=e[1]}(s[i],e),W(s),u(!1)}})})]})]})})),L=function(t){var e=t.contacts,n=Object(c.useState)(!1),a=Object(H.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(!1),l=Object(H.a)(s,2),d=l[0],j=l[1],b=parseInt(localStorage.getItem("id")),u=Object.keys(e[b]),m=function(t){i(t)},O=function(t){j(t)};return Object(x.jsxs)("div",{className:Y.a.container,children:[o?Object(x.jsx)(G,{activateEditMode:m,keys:u,initialValues:e[b],onSubmit:function(t){W(function(t,e,n){var c=t;return c[e]=n,c}(e,b,t)),m(!1)},showModal:O,id:b,contacts:e}):Object(x.jsxs)("div",{children:[function(t,e){for(var n=[],c=0;c<=e.length;c++)n.push(Object(x.jsx)("div",{className:Y.a.block,children:"img"===e[c]?Object(x.jsx)("div",{className:Y.a.image_block,children:Object(x.jsx)("img",{src:"../img/".concat(t[e[c]]),alt:""})}):Object(x.jsxs)("div",{className:Y.a.info_block,children:[Object(x.jsx)("span",{children:e[c]}),Object(x.jsx)("span",{children:t[e[c]]})]})},c.toString()));return n}(e[b],u),Object(x.jsx)(_,{value:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:function(){return m(!0)}}),Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)(_,{value:"\u043e\u0442\u043c\u0435\u043d\u0430"})})]}),Object(x.jsxs)($,{showModal:O,isModalActive:d,children:[Object(x.jsx)("p",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u0435?"}),Object(x.jsxs)("div",{className:Y.a.btn_group,children:[Object(x.jsx)(_,{value:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){O(!1);var t=localStorage.getItem("field");null!==t&&(e[b]=function(t,e){var n=t;return delete n[e],n}(e[b],t)),W(e)}}),Object(x.jsx)(_,{value:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return O(!1)}})]})]})]})},Q=n(19),tt=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{}),Object(x.jsx)("main",{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",element:Object(x.jsx)(q,{contacts:this.props.contacts})}),Object(x.jsx)(j.a,{path:"/detail/:contactId",element:Object(x.jsx)(L,{contacts:this.props.contacts})}),Object(x.jsx)(j.a,{path:"*",element:Object(x.jsx)("div",{children:" 404 not found "})})]})})]})}}]),n}(c.Component),et=Object(Q.b)((function(t){return{contacts:t.app.contacts,idContact:t.app.idContact}}),{})(tt),nt=n(8),ct={contacts:[{img:"user.png",name:"Vlad Holt",email:"jhgh@jhg.kjl",phone:123456,address:"USA"}],idContact:0},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(C.a)(Object(C.a)({},t),{},{contacts:e.contacts});case"SET_ID_CONTACT":return Object(C.a)(Object(C.a)({},t),{},{idContact:e.id});default:return t}},ot=n(212),rt=Object(nt.b)({app:at,form:ot.a}),it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||nt.c,st=Object(nt.d)(rt,it());o.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(Q.a,{store:st,children:Object(x.jsx)(et,{})})}),document.getElementById("root"))},23:function(t,e,n){t.exports={modal:"modal_modal__MgAwY",active:"modal_active__137m3",modal_content:"modal_modal_content__Z-fKo"}},28:function(t,e,n){t.exports={container:"detail_container__3eup-",block:"detail_block__1d_T-",info_block:"detail_info_block__2AlnM"}},35:function(t,e,n){t.exports={block:"card_block__3Um1b",name:"card_name__24MFk",btn_group:"card_btn_group__1m0AW"}},36:function(t,e,n){t.exports={field:"formControls_field__1YJiq",error:"formControls_error__1btax",spanError:"formControls_spanError__2zFFS"}},7:function(t,e,n){t.exports={container:"form_container__2JRGn",btnAddField:"form_btnAddField__3hJin",form:"form_form__3gXI2",spanForm:"form_spanForm__tIRrt",bForm:"form_bForm__28U-W",bForm_edit:"form_bForm_edit__DAtZU",formSummaryError:"form_formSummaryError__20Pyq",form_edit:"form_form_edit__TsKUO",btn_group:"form_btn_group__V56ZI"}},70:function(t,e,n){t.exports={container:"home_container__1F6Hy",btn_group:"home_btn_group__2UQEz"}},95:function(t,e,n){t.exports={btn:"button_btn__1TP5W"}}},[[209,1,2]]]);
//# sourceMappingURL=main.4aba5636.chunk.js.map