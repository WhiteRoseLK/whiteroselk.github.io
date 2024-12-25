"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[309],{5787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),s=t(8453);const o={title:"HashiCorp Vault Associate 002",author:"Mathieu Bannwarth"},a=void 0,i={id:"formations/2024-09-09-HashiCorp-Vault",title:"HashiCorp Vault Associate 002",description:"What is Vault ?",source:"@site/docs/formations/2024-09-09-HashiCorp-Vault.md",sourceDirName:"formations",slug:"/formations/2024-09-09-HashiCorp-Vault",permalink:"/docs/formations/2024-09-09-HashiCorp-Vault",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"HashiCorp Vault Associate 002",author:"Mathieu Bannwarth"},sidebar:"docsSidebar",previous:{title:"PiHole DNS et Ad block",permalink:"/docs/homelab/2024-05-31-PiHole"}},l={},c=[{value:"What is Vault ?",id:"what-is-vault-",level:2},{value:"Vault HA Cluster",id:"vault-ha-cluster",level:2},{value:"Protection",id:"protection",level:2},{value:"Token",id:"token",level:2},{value:"Token Accessors",id:"token-accessors",level:2},{value:"Cubbyhole",id:"cubbyhole",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-is-vault-",children:"What is Vault ?"}),"\n",(0,r.jsx)(n.p,{children:"Vault manage Secrets and Protect Sensitive Data like :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Username and passwords"}),"\n",(0,r.jsx)(n.li,{children:"Certificates"}),"\n",(0,r.jsx)(n.li,{children:"API Keys"}),"\n",(0,r.jsx)(n.li,{children:"Encryption Keys"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Vault has 3 Interfaces :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CLI (Machines and Humans)"}),"\n",(0,r.jsx)(n.li,{children:"UI (Humans)"}),"\n",(0,r.jsx)(n.li,{children:"API (Machines)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Everything in Vault could be do with API."}),"\n",(0,r.jsx)(n.p,{children:"Token Generation :\nA user authenticated to Vault with Username & Password or TLS Certificate or else.\nVault Generate a Token who is valid for 4 Hours (TTL)"}),"\n",(0,r.jsx)(n.p,{children:"Token Usage :\nSomeone try to retrieve Data from a Path:\nVault verify :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Token is Valid"}),"\n",(0,r.jsx)(n.li,{children:"Token is not Expired"}),"\n",(0,r.jsx)(n.li,{children:"Token has Permission"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If each verification is OK => Vault return the requested data.\nWe present our token, We don't authenticate again."}),"\n",(0,r.jsx)(n.h2,{id:"vault-ha-cluster",children:"Vault HA Cluster"}),"\n",(0,r.jsx)(n.p,{children:"To join Vault Cluster :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator raft join VAULT_URL\n"})}),"\n",(0,r.jsx)(n.p,{children:"After joining, we need to unseal the Vault with :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator unseal\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can list each node in the HA with :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator raft list-peers\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can step-down a vault to transfer the leadership to another HA member with :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator step-down\n"})}),"\n",(0,r.jsx)(n.h2,{id:"protection",children:"Protection"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Master Key"})," encrypt the ",(0,r.jsx)(n.strong,{children:"Encryption Key"})," who encrypt ",(0,r.jsx)(n.strong,{children:"Data"})]}),"\n",(0,r.jsx)(n.h2,{id:"token",children:"Token"}),"\n",(0,r.jsx)(n.p,{children:"List number of token valid :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault list auth/token/accessors\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Periodic Token"}),"\nRoot and sudo have the ability to generate periodic token."]}),"\n",(0,r.jsx)(n.p,{children:"Periodic token have a TTL but no max TTL"}),"\n",(0,r.jsx)(n.p,{children:"This token may live infinitely if they are renew before TTL expiration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault token create -period=24h\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Service Token with Use Limits"}),"\nWhen we need to limit the number of request coming to Vault from a particular token."]}),"\n",(0,r.jsx)(n.p,{children:"Use limit token expire at the end of their last use or at the end of their TTL."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault token create -use-limit=2\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Orphan Token"}),"\nRoot and sudo have the ability to generate orphan token."]}),"\n",(0,r.jsx)(n.p,{children:"Orphan are not children of their parent so they do not expire when their parent does."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault token create -orphan\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CIDR-Bound Token"}),"\nCan be used to restrict a token to be used by a specific host or within a certain network block."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Batch Token"}),"\nIf we need a token who can be replicated to all other Vault Clusters or if we need to reduce the overhead of storage when creating a large number of tokens."]}),"\n",(0,r.jsx)(n.p,{children:"We can configure Auth Method to generate a specific type of token."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Vault token","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["capabilities","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Look at Metadata"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["create","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create a token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["lookup","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Show token information globally or in a particular path"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["renew","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Renew a token"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["revoke","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Revoke a token"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Root token need to be revoke after each use.\nTo create a new root token we can create one when login with another root token :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault token create\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or we can create root token with a quorum of unseal key :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator generate-root -init\n"})}),"\n",(0,r.jsx)(n.p,{children:"Get the OTP code.\nuse recovery key with :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vault operator generate-root\n"})}),"\n",(0,r.jsx)(n.p,{children:"At the end we get the Encrypted root token."}),"\n",(0,r.jsx)(n.p,{children:"To decode the root token :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'vault operator generate-root -opt="OTP" -decode="ENCRYPTED_ROOT_TOKEN"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Finally we got a root token."}),"\n",(0,r.jsx)(n.h2,{id:"token-accessors",children:"Token Accessors"}),"\n",(0,r.jsx)(n.p,{children:"Token Accessors can be use for limited action like :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Revoke a token"}),"\n",(0,r.jsx)(n.li,{children:"Renew a token"}),"\n",(0,r.jsx)(n.li,{children:"Lookup token capability"}),"\n",(0,r.jsx)(n.li,{children:"Lookup token properties"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We cannot use token accessors to authenticated through Vault."}),"\n",(0,r.jsx)(n.p,{children:"Default TTL for token is 32 days"}),"\n",(0,r.jsx)(n.h2,{id:"cubbyhole",children:"Cubbyhole"}),"\n",(0,r.jsx)(n.p,{children:"Cubbyhole is enable by default and cannot be disable.\nIt is a personnal store for each token\nEach token have its own cubbyhole.\nCubbyhole expire when token expire"}),"\n",(0,r.jsx)(n.p,{children:"To wrap a secret just add -wrap-ttl= to the command"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);