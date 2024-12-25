"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[369],{4182:(e,s,i)=>{i.r(s),i.d(s,{ProjectListing:()=>b,ProjectListings:()=>u,default:()=>y});var n=i(6540),a=i(6347),r=i(4164),t=i(8774),l=i(6025),c=i(4586),o=i(781),d=i(3914),h=i(6188),x=i(7875);const m={projectPageHeader:"projectPageHeader_YTeS",projectItem:"projectItem___un",projectItemButton:"projectItemButton_CuAo",directory:"directory_sHAu",projectItemBackButton:"projectItemBackButton_g1Ck"},j=[];var p=i(4848);function g(e){let s,{category:i,size:n="1x"}=e;switch(i){case"Project":default:s=h.A4h;break;case"Open Source Tool":s=h.nsx;break;case"Website":s=x.EKY;break;case"Game":s=h.Rbk}return(0,p.jsx)(d.g,{alt:i,size:n,icon:s})}function u(){return(0,p.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-0",children:j.map((e=>(0,p.jsx)("div",{id:e.title,className:"bg-secondary-800 hover:bg-secondary-900 transition rounded-lg overflow-hidden",children:(0,p.jsxs)(t.A,{to:(0,l.Ay)(e.slug),className:"block h-full text-white hover:text-white no-underline hover:no-underline",children:[e.imageUrl?(0,p.jsx)("div",{className:"overflow-hidden h-40 md:h-48",children:(0,p.jsx)("img",{src:(0,l.Ay)(e.imageUrl),alt:e.title})}):(0,p.jsx)("div",{className:"alternate"==e.bgColor?"overflow-hidden bg-danger h-40 md:h-48":"overflow-hidden bg-success h-40 md:h-48",children:(0,p.jsx)("h2",{className:"m-3 inline-block",children:e.title})}),(0,p.jsxs)("div",{className:"pt-4 px-4",children:[(0,p.jsx)("h3",{className:"mb-1",children:e.title}),(0,p.jsx)("p",{className:"text-s mb-2 text-secondary-500",children:e.period}),(0,p.jsx)("p",{children:e.subtitle}),(0,p.jsx)("p",{className:"text-primary-default font-bold",children:"Read more"})]})]})},e.title+"-card")))})}function b(e){const s=e.projectItem;return(0,p.jsxs)("div",{className:(0,r.A)("text--center margin-bottom--xl px-4",m.projectItem),children:[(0,p.jsx)(t.A,{to:(0,l.Ay)("/projects"),children:(0,p.jsx)("button",{className:"border-0 rounded py-2 px-4 mb-2 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer",children:"Back"})}),(0,p.jsx)("h1",{children:s.title}),(0,p.jsx)("h2",{children:s.subtitle}),s.imageUrl&&(0,p.jsx)("img",{src:(0,l.Ay)(s.imageUrl),alt:s.title}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{children:[(0,p.jsx)(g,{category:s.category})," ",s.category]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(d.g,{alt:"Calendar",icon:h.okg})," ",s.period]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(d.g,{alt:"Code",icon:h.jTw})," ",s.tech]}),s.team&&(0,p.jsxs)("li",{children:[(0,p.jsx)(d.g,{alt:"Team",icon:h.gdJ})," ",s.team.map(((e,i)=>(0,p.jsxs)("span",{children:[e.link&&(0,p.jsx)("a",{href:e.link,children:e.name}),!e.link&&e.name,i<s.team.length-1?", ":""]},i)))]})]}),(0,p.jsx)("b",{children:"Description"}),(0,p.jsx)("div",{children:s.description}),s.links&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("b",{children:"Links"}),(0,p.jsx)("ul",{children:s.links.map(((e,s)=>(0,p.jsx)("li",{children:(0,p.jsxs)("a",{href:e.link,children:[(0,p.jsx)(d.g,{alt:"Link",icon:h.CQO})," ",e.name]})},s)))})]})]}),(0,p.jsx)(t.A,{to:(0,l.Ay)("/projects"),children:(0,p.jsx)("button",{className:"border-0 rounded py-2 px-4 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer",children:"More projects"})})]})}function v(){return(0,p.jsx)("section",{className:m.directory,children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h3",{children:"Continue exploring?"}),(0,p.jsxs)("nav",{className:"pagination-nav",children:[(0,p.jsx)("div",{className:"pagination-nav__item",children:(0,p.jsxs)(t.A,{className:"pagination-nav__link",to:(0,l.Ay)("blog/"),children:[(0,p.jsx)("div",{className:"pagination-nav__sublabel",children:"Read"}),(0,p.jsx)("div",{className:"pagination-nav__label",children:"My blog"})]})}),(0,p.jsx)("div",{className:"pagination-nav__item pagination-nav__item--next",children:(0,p.jsxs)("a",{className:"pagination-nav__link",href:(0,l.Ay)("pdf/resume.pdf"),children:[(0,p.jsx)("div",{className:"pagination-nav__sublabel",children:"Download"}),(0,p.jsx)("div",{className:"pagination-nav__label",children:"My resume"})]})})]})]})})}function y(){const e=(0,c.A)(),{siteConfig:s={}}=e,[i,r]=(0,n.useState)(!1),[t,l]=(0,n.useState)(!1),[d,h]=(0,n.useState)(j[0]),x=(0,a.zy)();return(0,n.useEffect)((()=>{!function(){let e;x.hash&&(e=j.find((e=>e.slug==x.hash))),e?(h(e),l(!0),window.scrollTo(0,0)):l(!1),r(!0)}()})),(0,p.jsxs)(o.A,{title:"Projects",description:s.tagline,children:[(0,p.jsx)("header",{className:m.projectPageHeader,children:(0,p.jsx)("h2",{className:"border-0 border-b-4 border-solid border-success",children:"My projects"})}),i&&(0,p.jsxs)("main",{children:[(0,p.jsx)("div",{className:"py-6 md:py-12",children:(0,p.jsxs)("div",{className:"my-0 mx-auto max-w-7xl",children:[!t&&(0,p.jsx)(u,{}),t&&(0,p.jsx)(b,{projectItem:d})]})}),(0,p.jsx)(v,{})]})]})}}}]);