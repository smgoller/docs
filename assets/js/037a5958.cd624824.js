"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[913],{2968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(5893),i=n(1151);const r={sidebar_position:2},d="Environment Variables",l={id:"self-hosting/environment-variables",title:"Environment Variables",description:"Here are all the additional variables you can define in the .env file for setting up a self-hosted instance:",source:"@site/docs/self-hosting/environment-variables.md",sourceDirName:"self-hosting",slug:"/self-hosting/environment-variables",permalink:"/self-hosting/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/linkwarden/docs/blob/main/docs/self-hosting/environment-variables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/self-hosting/installation"}},o={},a=[{value:"Digital Ocean Spaces/AWS S3 Settings",id:"digital-ocean-spacesaws-s3-settings",level:2},{value:"SMTP Settings",id:"smtp-settings",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(t.p,{children:["Here are all the additional variables you can define in the ",(0,s.jsx)(t.code,{children:".env"})," file for setting up a self-hosted instance:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PAGINATION_TAKE_COUNT"}),(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"The numbers of Links to fetch every time you reach to the bottom of the webpage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"STORAGE_FOLDER"}),(0,s.jsx)(t.td,{children:"/data"}),(0,s.jsx)(t.td,{children:"The folder to store your Screenshot's, PDF's, and profile photos."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTOSCROLL_TIMEOUT"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"The amount of time to wait for the website to be archived (in seconds)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NEXT_PUBLIC_DISABLE_REGISTRATION"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"If set to true, registration willl be disabled."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"digital-ocean-spacesaws-s3-settings",children:"Digital Ocean Spaces/AWS S3 Settings"}),"\n",(0,s.jsxs)(t.p,{children:["Digital Ocean Spaces uses AWS S3 behind the scene, so you can also choose to store your ",(0,s.jsx)(t.code,{children:"STORAGE_FOLDER"})," files in Digital Ocean Spaces or Amazon S3:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PAGINATION_TAKE_COUNT"}),(0,s.jsx)(t.td,{children:"20"}),(0,s.jsx)(t.td,{children:"The numbers of Links to fetch every time you reach to the bottom of the webpage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"STORAGE_FOLDER"}),(0,s.jsx)(t.td,{children:"/data"}),(0,s.jsx)(t.td,{children:"The folder to store your Screenshot's, PDF's, and profile photos."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTOSCROLL_TIMEOUT"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"The amount of time to wait for the website to be archived (in seconds)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NEXT_PUBLIC_DISABLE_REGISTRATION"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"If set to true, registration willl be disabled."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"smtp-settings",children:"SMTP Settings"}),"\n",(0,s.jsx)(t.p,{children:"The variables you need to configure to enable password recovery without admin interfering, email verification, etc..."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NEXT_PUBLIC_EMAIL_PROVIDER"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"If set to true, email will be enabled and you'll need to define the next two variables below."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EMAIL_FROM"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"The email that will send the verification emails."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"EMAIL_SERVER"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsxs)(t.td,{children:["That sensitive string that starts with ",(0,s.jsx)(t.code,{children:"smtp://..."})," ."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var s=n(7294);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);