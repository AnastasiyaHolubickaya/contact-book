(this["webpackJsonpcontacts-book"]=this["webpackJsonpcontacts-book"]||[]).push([[0],{102:function(t,e,n){},103:function(t,e,n){},11:function(t,e,n){t.exports={container:"form_container__2JRGn",btnAddField:"form_btnAddField__3hJin",form:"form_form__3gXI2",spanForm:"form_spanForm__tIRrt",bForm:"form_bForm__28U-W",bForm_edit:"form_bForm_edit__DAtZU",formSummaryError:"form_formSummaryError__20Pyq",form_edit:"form_form_edit__TsKUO"}},209:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(45),o=n.n(a),r=n(22),i=(n(102),n(46)),s=n(47),l=n(50),d=n(49),j=n(5),b=(n(103),n(69)),m=n.n(b),u=n(35),O=n.n(u),f=n(95),h=n.n(f),_=n(1),v=function(t){var e=t.value,n=t.onClick;return Object(_.jsx)("div",{children:Object(_.jsxs)("button",{className:h.a.btn,onClick:n,children:[" ",e," "]})})},x=function(t){var e=t.contact,n=t.id,c=t.showModal,a=function(t){localStorage.removeItem(t),localStorage.setItem(t,JSON.stringify(n))};return Object(_.jsxs)("div",{className:O.a.block,children:[Object(_.jsx)("div",{className:O.a.image,children:void 0===e.img?Object(_.jsx)("img",{src:"img/user.png",alt:""}):Object(_.jsx)("img",{src:"img/".concat(e.img),alt:""})}),Object(_.jsx)("div",{className:O.a.name,children:Object(_.jsx)("span",{children:e.name})}),Object(_.jsxs)("div",{className:O.a.btn_group,children:[Object(_.jsxs)(r.b,{to:"/detail/".concat(n),children:[" ",Object(_.jsx)(v,{value:"\u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435",onClick:function(){return a("id")}})]}),Object(_.jsx)(v,{value:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onClick:function(){c(!0),a("removeId")},children:"delete contact"})]})]})},p=n(11),g=n.n(p),C=n(10),k=n(73),N=n(36),S=n.n(N),M=["input","meta"],A=["input","meta"],E=function(t){var e=t.children,n=t.meta,c=n.touched,a=n.error,o=c&&a;return Object(_.jsxs)("div",{className:o?S.a.error:void 0,children:[e,Object(_.jsx)("br",{}),o&&Object(_.jsx)("span",{className:S.a.spanError,children:a})]})},w=function(t){var e=t.input,n=(t.meta,Object(k.a)(t,M));return Object(_.jsxs)(E,Object(C.a)(Object(C.a)({},t),{},{children:[" ",Object(_.jsx)("input",Object(C.a)(Object(C.a)(Object(C.a)({},e),n),{},{className:S.a.field}))]}))},F=function(t){var e=t.input,n=(t.meta,Object(k.a)(t,A));return Object(_.jsxs)(E,Object(C.a)(Object(C.a)({},t),{},{children:[" ",Object(_.jsx)("textarea",Object(C.a)(Object(C.a)(Object(C.a)({},e),n),{},{className:S.a.field}))]}))},I=function(t){if(!t)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044e"},y=function(t){if(void 0!==t&&!new RegExp(/^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z ]+$/i).test(t))return"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432"},T=function(t){if(void 0!==t&&!new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(t))return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"},R=function(t){if(void 0!==t&&new RegExp(/[^0-9.]/g).test(t))return"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440"},U=n(211),J=n(210),P=Object(J.a)({form:"addContact"})((function(t){var e=t.handleSubmit,n=t.error,c=t.activateAddMode;return Object(_.jsx)("div",{onClick:function(){return c(!1)},children:Object(_.jsxs)("form",{onClick:function(t){return t.stopPropagation()},onSubmit:e,className:g.a.form,children:[Object(_.jsx)("span",{className:g.a.spanForm,children:" \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 "}),Object(_.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(_.jsx)(U.a,{name:"name",component:w,validate:[I,y]}),Object(_.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(_.jsx)(U.a,{name:"email",component:w,validate:[T]}),Object(_.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(_.jsx)(U.a,{name:"phone",component:w,validate:[R]}),Object(_.jsx)("b",{className:g.a.bForm,children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441"}),Object(_.jsx)(U.a,{name:"address",component:F}),n&&Object(_.jsxs)("div",{className:g.a.formSummaryError,children:[" ",n]}),Object(_.jsx)(v,{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})),D=function(t){return{type:"SET_CONTACTS",contacts:t}},X=n(23),z=n.n(X),V=n(72),W=n.n(V),Z=function(t){var e=t.children,n=t.showModal,c=t.isModalActive;return Object(_.jsx)("div",{className:c?W()(z.a.modal,z.a.active):z.a.modal,onClick:function(){return n(!1)},children:Object(_.jsx)("div",{className:c?W()(z.a.modal_content,z.a.active):z.a.modal_content,onClick:function(t){return t.stopPropagation()},children:e})})},q=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).activateAddMode=function(t){c.setState({addMode:t})},c.onSubmit=function(t){D(function(t,e){var n=t;return n.push(e),n}(c.props.contacts,t)),c.activateAddMode(!1)},c.deleteContact=function(){var t=parseInt(localStorage.getItem("removeId"));D(function(t,e){var n=t;return n.splice(e,1),n}(c.props.contacts,t)),c.setState({isRemoveContact:!0}),c.showModal(!1)},c.showModal=function(t){c.setState({isModalActive:t})},c.state={addMode:!1,isRemoveContact:!1,isModalActive:!1},c}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(_.jsxs)("div",{className:m.a.container,children:[this.state.addMode?Object(_.jsx)(P,{onSubmit:this.onSubmit,activateAddMode:this.activateAddMode}):Object(_.jsxs)("div",{children:[this.props.contacts.map((function(e,n){return Object(_.jsx)(x,{contact:e,id:n,showModal:t.showModal},n.toString())})),Object(_.jsx)(v,{value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",onClick:function(){return t.activateAddMode(!0)}})]}),Object(_.jsxs)(Z,{showModal:this.showModal,isModalActive:this.state.isModalActive,children:[Object(_.jsx)("p",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442?"}),Object(_.jsxs)("div",{className:m.a.btn_group,children:[Object(_.jsx)(v,{value:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:this.deleteContact}),Object(_.jsx)(v,{value:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return t.showModal(!1)}})]})]})]})}}]),n}(c.Component),H=n(16),K=n(28),Y=n.n(K),$=Object(J.a)({form:"editContact"})((function(t){var e=t.handleSubmit,n=t.error,c=t.activateEditMode,a=t.keys,o=t.showModal;return Object(_.jsxs)("div",{className:g.a.container,onClick:function(){return c(!1)},children:[Object(_.jsxs)("form",{onClick:function(t){return t.stopPropagation()},onSubmit:e,className:g.a.form,children:[Object(_.jsx)("span",{className:g.a.spanForm,children:" \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 "}),a.map((function(t,e){return Object(_.jsxs)("div",{className:g.a.form_edit,children:[Object(_.jsx)("b",{className:g.a.bForm_edit,children:t}),Object(_.jsx)(U.a,{name:t,component:"address"===t?F:w,validate:"name"===t?[I,y]:"phone"===t?[R]:"email"===t?[T]:[]}),Object(_.jsx)("button",{onClick:function(){return function(t){o(!0),localStorage.removeItem(t),localStorage.setItem("field",t)}(t)},children:"X"})]},e.toString())})),n&&Object(_.jsxs)("div",{className:g.a.formSummaryError,children:[" ",n]}),Object(_.jsx)(v,{value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(_.jsx)(v,{onClick:function(){return c(!1)},value:"\u043e\u0442\u043c\u0435\u043d\u0430"})]})})),B=function(t){var e=t.contacts,n=Object(c.useState)(!1),a=Object(H.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(!1),l=Object(H.a)(s,2),d=l[0],j=l[1],b=parseInt(localStorage.getItem("id")),m=Object.keys(e[b]),u=function(t){i(t)},O=function(t){j(t)};return Object(_.jsxs)("div",{className:Y.a.container,children:[o?Object(_.jsx)($,{activateEditMode:u,keys:m,initialValues:e[b],onSubmit:function(t){D(function(t,e,n){var c=t;return c[e]=n,c}(e,b,t)),u(!1)},showModal:O}):Object(_.jsxs)("div",{children:[function(t,e){for(var n=[],c=0;c<=e.length;c++)n.push(Object(_.jsx)("div",{className:Y.a.block,children:"img"===e[c]?Object(_.jsx)("div",{className:Y.a.image_block,children:Object(_.jsx)("img",{src:"../img/".concat(t[e[c]]),alt:""})}):Object(_.jsxs)("div",{className:Y.a.info_block,children:[Object(_.jsx)("span",{children:e[c]}),Object(_.jsx)("span",{children:t[e[c]]})]})},c.toString()));return n}(e[b],m),Object(_.jsx)(v,{value:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:function(){return u(!0)}}),Object(_.jsx)(r.b,{to:"/",children:Object(_.jsx)(v,{value:"\u043e\u0442\u043c\u0435\u043d\u0430"})})]}),Object(_.jsxs)(Z,{showModal:O,isModalActive:d,children:[Object(_.jsx)("p",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u0435?"}),Object(_.jsxs)("div",{className:Y.a.btn_group,children:[Object(_.jsx)(v,{value:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){O(!1);var t=localStorage.getItem("field");null!==t&&(e[b]=function(t,e){var n=t;return delete n[e],n}(e[b],t)),D(e)}}),Object(_.jsx)(v,{value:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){return O(!1)}})]})]})]})},G=n(19),L=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("header",{}),Object(_.jsx)("main",{children:Object(_.jsxs)(j.c,{children:[Object(_.jsx)(j.a,{path:"/",element:Object(_.jsx)(q,{contacts:this.props.contacts})}),Object(_.jsx)(j.a,{path:"/detail/:contactId",element:Object(_.jsx)(B,{contacts:this.props.contacts})}),Object(_.jsx)(j.a,{path:"*",element:Object(_.jsx)("div",{children:" 404 not found "})})]})})]})}}]),n}(c.Component),Q=Object(G.b)((function(t){return{contacts:t.app.contacts,idContact:t.app.idContact}}),{})(L),tt=n(7),et={contacts:[{img:"user.png",name:"Vlad Holt",email:"jhgh@jhg.kjl",phone:123456,address:"USA"}],idContact:0},nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(C.a)(Object(C.a)({},t),{},{contacts:e.contacts});case"SET_ID_CONTACT":return Object(C.a)(Object(C.a)({},t),{},{idContact:e.id});default:return t}},ct=n(212),at=Object(tt.b)({app:nt,form:ct.a}),ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||tt.c,rt=Object(tt.d)(at,ot());o.a.render(Object(_.jsx)(r.a,{children:Object(_.jsx)(G.a,{store:rt,children:Object(_.jsx)(Q,{})})}),document.getElementById("root"))},23:function(t,e,n){t.exports={modal:"modal_modal__MgAwY",active:"modal_active__137m3",modal_content:"modal_modal_content__Z-fKo"}},28:function(t,e,n){t.exports={container:"detail_container__3eup-",block:"detail_block__1d_T-",info_block:"detail_info_block__2AlnM"}},35:function(t,e,n){t.exports={block:"card_block__3Um1b",name:"card_name__24MFk",btn_group:"card_btn_group__1m0AW"}},36:function(t,e,n){t.exports={field:"formControls_field__1YJiq",error:"formControls_error__1btax",spanError:"formControls_spanError__2zFFS"}},69:function(t,e,n){t.exports={container:"home_container__1F6Hy",btn_group:"home_btn_group__2UQEz"}},95:function(t,e,n){t.exports={btn:"button_btn__1TP5W"}}},[[209,1,2]]]);
//# sourceMappingURL=main.2ef30b78.chunk.js.map