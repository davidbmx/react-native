(window.webpackJsonp=window.webpackJsonp||[]).push([[395,119,129,320],{1033:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1057),i=t(1036),c=function(){var e=Object(i.useLocation)().pathname;return e.endsWith("/")?r.a.createElement(i.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?r.a.createElement(i.Redirect,{to:e.slice(0,-5)}):null};a.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(l.a,e))}},1079:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(1035),i=t(64),c=t.n(i);function m(e){var a=e.sidebar;if(0===a.items.length)return null;var t=null;return r.a.createElement("div",{className:c.a.sidebar},r.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){var a=e.permalink.split("/")[2],n=t!==a?r.a.createElement("h4",{className:c.a.sidebarItemTitle},a):null;return t=a,r.a.createElement(r.a.Fragment,null,n,r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title)))}))))}},490:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1033),i=t(1116),c=t(1035),m=t(1079);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,s=a.allTagsPath,u=a.name,o=a.count;return r.a.createElement(l.a,{title:'Posts tagged "'+u+'"',description:'Blog | Tagged "'+u+'"',wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,o," ",function(e,a){return e>1?a+"s":a}(o,"post"),' tagged with "',u,'"'),r.a.createElement(c.a,{href:s},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}}}]);