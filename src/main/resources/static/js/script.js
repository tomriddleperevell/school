(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				throw new Error("Cannot find module '" + o + "'");
			}

			var f = n[o] = {
				exports: {}
			};
			t[o][0].call(f.exports, function (e) {
				var n = t[o][1][e];
				return s(n ? n : e);
			}, f, f.exports, e, t, n, r);
		}

		return n[o].exports;
	}

	var i = typeof require == "function" && require;

	for (var o = 0; o < r.length; o++) s(r[o]);

	return s;
})({
	1: [function (require, module, exports) {
		/*import {login} from 'js/login';
		import {getU}
		import {wall} from 'js/wall';
		import {profile} from 'js/profile';*/
		// var login = require('js/login');
		// console.log(login);
		// console.log(wall());
		// console.log(profile());
		// import {getUsernameFromLocalStorage} from "./js/friendRequests.js"
		const Navigo = require('navigo');

		var router = new Navigo("http://localhost:8080/", true, '#!');
		var appDiv = document.getElementById('main');

		function importJs(name) {
			//debugger;
			var head = document.getElementsByTagName('BODY')[0];
			var fileref = document.createElement('script');
			fileref.setAttribute("type", "text/javascript");
			fileref.setAttribute("id", name + "_js");
			fileref.setAttribute("src", "./js/" + name + ".js");
			head.appendChild(fileref);
		}

		function importCss(name) {
			var head = document.getElementsByTagName('HEAD')[0]; // Create new link Element

			var link = document.createElement('link'); // set the attributes for link element

			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.id = name + "_css";
			link.href = name + '.css'; // Append link element to HTML head

			head.appendChild(link);
		}

		function removeCssAndJs() {
			var login_sheet = document.getElementById("login_css");

			if (login_sheet) {
				login_sheet.disabled = true;
				login_sheet.parentNode.removeChild(login_sheet);
			}

			var login_js = document.getElementById("login_js");

			if (login_js) {
				login_js.disabled = true;
				login_js.parentNode.removeChild(login_js);
			}

			var homepage_sheet = document.getElementById("homepage_css");

			if (homepage_sheet) {
				homepage_sheet.disabled = true;
				homepage_sheet.parentNode.removeChild(homepage_sheet);
			}

			var homepage_js = document.getElementById("homepage_js");

			if (homepage_js) {
				homepage_js.disabled = true;
				homepage_js.parentNode.removeChild(homepage_js);
			}

			var friendRequest_sheet = document.getElementById("friendRequest_css");

			if (friendRequest_sheet) {
				friendRequest_sheet.disabled = true;
				friendRequest_sheet.parentNode.removeChild(friendRequest_sheet);
			}

			var friendRequest_js = document.getElementById("friendRequest_js");

			if (friendRequest_js) {
				friendRequest_js.disabled = true;
				friendRequest_js.parentNode.removeChild(friendRequest_js);
			}

			var signUp_sheet = document.getElementById("signUp_css");

			if (signUp_sheet) {
				signUp_sheet.disabled = true;
				signUp_sheet.parentNode.removeChild(signUp_sheet);
			}

			var signUp_js = document.getElementById("signUp_js");

			if (signUp_js) {
				signUp_js.disabled = true;
				signUp_js.parentNode.removeChild(signUp_js);
			}

			var wall_sheet = document.getElementById("wall.css");

			if (wall_sheet) {
				wall_sheet.disabled = true;
				wall_sheet.parentNode.removeChild(wall_sheet);
			}

			var wall_js = document.getElementById("wall.js");

			if (wall_js) {
				wall_js.disabled = true;
				wall_js.parentNode.removeChild(wall_js);
			}
		}

		router.on({
			'login': function () {
				console.log('shemovedi444');
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						appDiv.innerHTML = this.responseText; // router.navigate("/homepage");

						importCss('login');
						importJs('login');
						console.log("yeeeeh");
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "login.html", true);
				xhttp.send();
			},
			'friendRequests/': function () {
				console.log('friendRequests');
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('friendRequests');
						importJs('friendRequests');
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "friendRequests.html", true);
				xhttp.send();
			},
			'homepage/:username': function () {
				console.log('homepage');
				console.log('shemovedi');
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('homepage');
						importJs('homepage');
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "homepage.html", true);
				xhttp.send();
			},
			'homepage': function () {
				console.log('homepage');
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('homepage');
						importJs('homepage');
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "homepage.html", true);
				xhttp.send();
			},
			'signUp': function () {
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('signUp');
						importJs('SignUp');
						console.log("in sign up");
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "signUp.html", true);
				xhttp.send();
			},
			'wall': function () {
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('wall');
						importJs('wall');
						console.log("wall");
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "wall.html", true);
				xhttp.send();
			},
			'groupCreate': function () {
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('GroupCreate');
						importJs('groupCreate');
						console.log("groupCreate");
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "GroupCreate.html", true);
				xhttp.send();
			},
			'allGroups': function () {
				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						console.log(this.responseText);
						appDiv.innerHTML = this.responseText;
						removeCssAndJs();
						importCss('Groups');
						importJs('groups');
						console.log("group");
					} else if (this.readyState == 4) {
						alert("some error happend");
					}
				};

				xhttp.open("GET", "Groups.html", true);
				xhttp.send();
			}
		}).resolve();

		function callLogin() {
			var user = localStorage.getItem("user");

			if (!user) {
				window.location.href = "#!/login";
			}
		}

		callLogin();
	}, {
		"navigo": 2
	}],
	2: [function (require, module, exports) {
		!function (e, t) {
			"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Navigo = t();
		}(this, function () {
			"use strict";

			var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e;
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
			};

			function t() {
				return !("undefined" == typeof window || !window.history || !window.history.pushState);
			}

			function n(e, n, o) {
				this.root = null, this._routes = [], this._useHash = n, this._hash = void 0 === o ? "#" : o, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !n && t(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", e ? this.root = n ? e.replace(/\/$/, "/" + this._hash) : e.replace(/\/$/, "") : n && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks();
			}

			function o(e) {
				return e instanceof RegExp ? e : e.replace(/\/+$/, "").replace(/^\/+/, "^/");
			}

			function i(e) {
				return e.replace(/\/$/, "").split("/").length;
			}

			function s(e, t) {
				return i(t) - i(e);
			}

			function r(e, t) {
				return function (e) {
					return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map(function (t) {
						var i = function (e) {
									var t = [];
									return {
										regexp: e instanceof RegExp ? e : new RegExp(e.replace(n.PARAMETER_REGEXP, function (e, o, i) {
											return t.push(i), n.REPLACE_VARIABLE_REGEXP;
										}).replace(n.WILDCARD_REGEXP, n.REPLACE_WILDCARD) + n.FOLLOWED_BY_SLASH_REGEXP, n.MATCH_REGEXP_FLAGS),
										paramNames: t
									};
								}(o(t.route)),
								s = i.regexp,
								r = i.paramNames,
								a = e.replace(/^\/+/, "/").match(s),
								h = function (e, t) {
									return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function (e, n, o) {
										return null === e && (e = {}), e[t[o]] = decodeURIComponent(n), e;
									}, null) : null;
								}(a, r);

						return !!a && {
							match: a,
							route: t,
							params: h
						};
					}).filter(function (e) {
						return e;
					});
				}(e, t)[0] || !1;
			}

			function a(e, t) {
				var n = t.map(function (t) {
							return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0];
						}),
						i = o(e);
				return n.length > 1 ? n.reduce(function (e, t) {
					return e.length > t.length && (e = t), e;
				}, n[0]) : 1 === n.length ? n[0] : i;
			}

			function h(e, n, o) {
				var i,
						s = function (e) {
							return e.split(/\?(.*)?$/)[0];
						};

				return void 0 === o && (o = "#"), t() && !n ? s(e).split(o)[0] : (i = e.split(o)).length > 1 ? s(i[1]) : s(i[0]);
			}

			function u(t, n, o) {
				if (n && "object" === (void 0 === n ? "undefined" : e(n))) {
					if (n.before) return void n.before(function () {
						(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (t(), n.after && n.after(o));
					}, o);
					if (n.after) return t(), void (n.after && n.after(o));
				}

				t();
			}

			return n.prototype = {
				helpers: {
					match: r,
					root: a,
					clean: o,
					getOnlyURL: h
				},
				navigate: function (e, t) {
					var n;
					return e = e || "", this._usePushState ? (n = (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/")).replace(/([^:])(\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", n), this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e), this;
				},
				on: function () {
					for (var t = this, n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];

					if ("function" == typeof o[0]) this._defaultHandler = {
						handler: o[0],
						hooks: o[1]
					};else if (o.length >= 2) {
						if ("/" === o[0]) {
							var r = o[1];
							"object" === e(o[1]) && (r = o[1].uses), this._defaultHandler = {
								handler: r,
								hooks: o[2]
							};
						} else this._add(o[0], o[1], o[2]);
					} else "object" === e(o[0]) && Object.keys(o[0]).sort(s).forEach(function (e) {
						t.on(e, o[0][e]);
					});
					return this;
				},
				off: function (e) {
					return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (t, n) {
						return n.handler !== e && t.push(n), t;
					}, []), this;
				},
				notFound: function (e, t) {
					return this._notFoundHandler = {
						handler: e,
						hooks: t
					}, this;
				},
				resolve: function (e) {
					var n,
							o,
							i = this,
							s = (e || this._cLoc()).replace(this._getRoot(), "");

					this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));

					var a = function (e) {
								return e.split(/\?(.*)?$/).slice(1).join("");
							}(e || this._cLoc()),
							l = h(s, this._useHash, this._hash);

					return !this._paused && (this._lastRouteResolved && l === this._lastRouteResolved.url && a === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (o = r(l, this._routes)) ? (this._callLeave(), this._lastRouteResolved = {
						url: l,
						query: a,
						hooks: o.route.hooks,
						params: o.params,
						name: o.route.name
					}, n = o.route.handler, u(function () {
						u(function () {
							o.route.route instanceof RegExp ? n.apply(void 0, o.match.slice(1, o.match.length)) : n(o.params, a);
						}, o.route.hooks, o.params, i._genericHooks);
					}, this._genericHooks, o.params), o) : this._defaultHandler && ("" === l || "/" === l || l === this._hash || function (e, n, o) {
						if (t() && !n) return !1;
						if (!e.match(o)) return !1;
						var i = e.split(o);
						return i.length < 2 || "" === i[1];
					}(l, this._useHash, this._hash)) ? (u(function () {
						u(function () {
							i._callLeave(), i._lastRouteResolved = {
								url: l,
								query: a,
								hooks: i._defaultHandler.hooks
							}, i._defaultHandler.handler(a);
						}, i._defaultHandler.hooks);
					}, this._genericHooks), !0) : (this._notFoundHandler && u(function () {
						u(function () {
							i._callLeave(), i._lastRouteResolved = {
								url: l,
								query: a,
								hooks: i._notFoundHandler.hooks
							}, i._notFoundHandler.handler(a);
						}, i._notFoundHandler.hooks);
					}, this._genericHooks), !1));
				},
				destroy: function () {
					this._routes = [], this._destroyed = !0, this._lastRouteResolved = null, this._genericHooks = null, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange));
				},
				updatePageLinks: function () {
					var e = this;
					"undefined" != typeof document && this._findLinks().forEach(function (t) {
						t.hasListenerAttached || (t.addEventListener("click", function (n) {
							if ((n.ctrlKey || n.metaKey) && "a" == n.target.tagName.toLowerCase()) return !1;
							var o = e.getLinkPath(t);
							e._destroyed || (n.preventDefault(), e.navigate(o.replace(/\/+$/, "").replace(/^\/+/, "/")));
						}), t.hasListenerAttached = !0);
					});
				},
				generate: function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							n = this._routes.reduce(function (n, o) {
								var i;
								if (o.name === e) for (i in n = o.route, t) n = n.toString().replace(":" + i, t[i]);
								return n;
							}, "");

					return this._useHash ? this._hash + n : n;
				},
				link: function (e) {
					return this._getRoot() + e;
				},
				pause: function () {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this._paused = e, this._historyAPIUpdateMethod = e ? "replaceState" : "pushState";
				},
				resume: function () {
					this.pause(!1);
				},
				historyAPIUpdateMethod: function (e) {
					return void 0 === e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e, e);
				},
				disableIfAPINotAvailable: function () {
					t() || this.destroy();
				},
				lastRouteResolved: function () {
					return this._lastRouteResolved;
				},
				getLinkPath: function (e) {
					return e.getAttribute("href");
				},
				hooks: function (e) {
					this._genericHooks = e;
				},
				_add: function (t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					return "string" == typeof t && (t = encodeURI(t)), this._routes.push("object" === (void 0 === n ? "undefined" : e(n)) ? {
						route: t,
						handler: n.uses,
						name: n.as,
						hooks: o || n.hooks
					} : {
						route: t,
						handler: n,
						hooks: o
					}), this._add;
				},
				_getRoot: function () {
					return null !== this.root ? this.root : (this.root = a(this._cLoc().split("?")[0], this._routes), this.root);
				},
				_listen: function () {
					var e = this;
					if (this._usePushState) window.addEventListener("popstate", this._onLocationChange);else if ("undefined" != typeof window && "onhashchange" in window) window.addEventListener("hashchange", this._onLocationChange);else {
						var t = this._cLoc(),
								n = void 0,
								o = void 0;

						(o = function () {
							n = e._cLoc(), t !== n && (t = n, e.resolve()), e._listeningInterval = setTimeout(o, 200);
						})();
					}
				},
				_cLoc: function () {
					return "undefined" != typeof window ? void 0 !== window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : o(window.location.href) : "";
				},
				_findLinks: function () {
					return [].slice.call(document.querySelectorAll("[data-navigo]"));
				},
				_onLocationChange: function () {
					this.resolve();
				},
				_callLeave: function () {
					var e = this._lastRouteResolved;
					e && e.hooks && e.hooks.leave && e.hooks.leave(e.params);
				}
			}, n.PARAMETER_REGEXP = /([:*])(\w+)/g, n.WILDCARD_REGEXP = /\*/g, n.REPLACE_VARIABLE_REGEXP = "([^/]+)", n.REPLACE_WILDCARD = "(?:.*)", n.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", n.MATCH_REGEXP_FLAGS = "", n;
		});
	}, {}]
}, {}, [1]);