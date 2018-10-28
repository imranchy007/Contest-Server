(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(e,t,s){"use strict";s.r(t);var i=s(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This project consists of several discrete software components, which are as follows:")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("All of the components of the project are deployed using Docker. Docker is a tool which containerizes software into small, light-weight virtual machines. Each of our primary components are deployed in their own Docker container.")]),e._v(" "),s("p",[e._v("Theses docs focus primarily on the Flask webapp for User/Team Registration, but details for deploying Domjudge can be found in the "),s("a",{attrs:{href:"#deployment"}},[e._v("Deployment")]),e._v(" section below. The repository for those Docker images can be found "),s("a",{attrs:{href:"https://github.com/FSU-ACM/Docker-Domjudge",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("The webapp is written in Python 3 (previously Python 2) using the Flask web microframework. Flask allows Python to act as an interactive web server which can dynamically render webpage templates, manage user sessions via secure cookies, and integrate with additional libraries to extend functionality. Some of the libraries we use include:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("DOMjudge is an automated judging system for running programming contests such as ACM's ICPC. Domjudge comes in two components: the Domserver and the Judgehosts.")]),e._v(" "),s("p",[e._v("Deploying the Domjudge components with Docker has several key advantages:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("A comprehensive list of to-do items is available on this project's "),s("a",{attrs:{href:"https://github.com/fsu-acm/Contest-Server/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github Issues page"),s("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Registration Webapp")]),this._v(" "),t("li",[this._v("Domjudge Contest Server")]),this._v(" "),t("li",[this._v("Domjudge Judgehosts")]),this._v(" "),t("li",[this._v("MongoDB & MariaDB databases")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("User & Team Registration\n"),s("ul",[s("li",[e._v("Quick Registration of an entire team")]),e._v(" "),s("li",[e._v("Solo registration for individual participants")]),e._v(" "),s("li",[e._v("Team management features (add/remove members, rename)")])])]),e._v(" "),s("li",[e._v("Domjudge Integration\n"),s("ul",[s("li",[e._v("Simple deployment of Domserver & Judgehosts with Docker")]),e._v(" "),s("li",[e._v("Easy scaling of Judgehost instances")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How it Works")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"registration-webapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registration-webapp","aria-hidden":"true"}},[this._v("#")]),this._v(" Registration Webapp")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("MongoEngine: A Object Document Manager which provides an API to the MongoDB database.")]),e._v(" "),s("li",[e._v("WTForms: A form creation and validation framework.")]),e._v(" "),s("li",[e._v("Jinja 2: A templating language bundled with Flask.")]),e._v(" "),s("li",[e._v("Node.js: A Javascript runtime environment.")]),e._v(" "),s("li",[e._v("Sass: A preprocessed stylesheet language.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The webapp depends on the "),t("code",[this._v("db")]),this._v(" service in the Docker Compose config which runs the MongoDB database.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"domjudge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domjudge","aria-hidden":"true"}},[this._v("#")]),this._v(" Domjudge")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Script complex installation process via Dockerfile")]),this._v(" "),t("li",[this._v("Easily scale and redeploy Judgehosts")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[this._v("# Scaling judgehosts")]),this._v("\ndocker-compose scale judgehost"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("4\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Domsserver depends on the "),t("code",[this._v("domdb")]),this._v(" service in the Docker Compose config which runs the MariaDB database.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"to-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-do","aria-hidden":"true"}},[this._v("#")]),this._v(" To Do")])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);