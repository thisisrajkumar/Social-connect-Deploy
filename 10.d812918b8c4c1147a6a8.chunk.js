(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{f41abe73b1b113271f08:function(e,i,o){"use strict";o.r(i);var n,a=o("8af190b70a6bc55c6f1b"),t=o.n(a),r=o("c24e62f75b9371b3b158"),d=o.n(r),l=o("ab039aecd4a1d4fedc0e"),c=o("2aea235afd5c55b8b19b"),f=o.n(c),s=Object(l.defineMessages)({header:{id:"".concat("app.components.TimerComponent",".header"),defaultMessage:"This is the TimerComponent component!"}});function v(e,i,o,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,r=arguments.length-3;if(i||0===r||(i={children:void 0}),i&&t)for(var d in t)void 0===i[d]&&(i[d]=t[d]);else i||(i=t||{});if(1===r)i.children=a;else if(r>1){for(var l=new Array(r),c=0;c<r;c++)l[c]=arguments[c+3];i.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:i,_owner:null}}var b=v(f.a,{variant:"contained"},void 0,"Just wait for 15 sec..",v("b",{},void 0,"You will get register Link from your email")),m=v("b",{},void 0,"Just click you will get register Link"),p=v("b",{},void 0,"Or "),u=v("b",{},void 0,"Email ID");i.default=function(e){return v("div",{},void 0,t.a.createElement(l.FormattedMessage,s.header),!0===e.timerState.timerBoolean?v("div",{},void 0,v(d.a,{seconds:15,color:"#4C1C9B",alpha:.9,size:300,onComplete:e.timerComplete}),b):v("div",{},void 0,v("b",{},void 0,"If you does't get any mail. (",e.timerState.formData.email,")"),v(f.a,{variant:"contained",onClick:e.ResentRegLink},void 0,m),p," ",v(f.a,{variant:"contained",onClick:e.ResetSignup},void 0,"Signup with different ",u)))}}}]);