(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,e,s){"use strict";s.r(e);var n=s(0),o=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WELL, NOT SO FAST...")]),t._v(" "),s("p",[t._v("See the "),s("router-link",{attrs:{to:"/guide/deployment.html"}},[t._v("deployment guide")]),t._v(" for more details on deploying to Bastion.")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"easy-to-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#easy-to-deploy","aria-hidden":"true"}},[this._v("#")]),this._v(" Easy to deploy")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# Download the code")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/FSU-ACM/Contest-Server.git\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Copy in your config")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" /your/docker/.env ./.env\n"),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" /your/flask/production.py ./config/production.py\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Build the images")]),t._v("\ndocker-compose build\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# Deploy the suite")]),t._v("\ndocker-compose up -d\n")])])])}],!1,null,null,null);o.options.__file="README.md";e.default=o.exports}}]);