import{_ as c,r as p,o as u,c as m,a as t,w as l,v as r,b as f,p as _,d as b,e as v,f as g}from"./main-a5852c53.js";const h={data(){return{username:null,password:null}},mounted(){let e=document.createElement("script");e.setAttribute("src","https://accounts.google.com/gsi/client"),document.head.appendChild(e)},methods:{LoginAttempt(){const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})};var a="/api/login-attempt";fetch(a,e).then(function(s){return s.json()}).then(function(s){s.account=="authorized"?p.push({name:"home"}):s.account=="wrong-password"?alert("wrong password"):alert("no account")})}}},o=e=>(_("data-v-b1171fe3"),e=e(),b(),e),w={class:"login-page"},y={class:"form-signin my-1"},x=o(()=>t("img",{class:"mb-4",src:v,alt:"",width:"250",height:"250"},null,-1)),q=o(()=>t("div",{id:"g_id_onload","data-client_id":"309231279221-r46j4e6utpo00t2292rlpgmeifu3foob.apps.googleusercontent.com","data-context":"signin","data-ux_mode":"popup","data-login_uri":"/api/google-login-attempt","data-auto_prompt":"false"},null,-1)),S=o(()=>t("div",{class:"g_id_signin","data-type":"standard","data-shape":"rectangular","data-theme":"filled_blue","data-text":"signin_with","data-size":"large","data-logo_alignment":"left"},null,-1)),O={class:"mb-3 mt-3 text-start"},V=o(()=>t("label",{for:"username",class:"form-label"},"Username",-1)),k={class:"mb-3 text-start"},L=o(()=>t("label",{for:"password",class:"form-label"},"Password",-1)),T=o(()=>t("p",null," ",-1)),z=o(()=>t("p",{class:"text-center"},[g("Don't have an account? "),t("a",{href:"create-account"},"Sign up")],-1)),A=f('<div class="mt-3 fixed-bottom" style="background-color:#0a659a;color:#fcfeca;border-color:#0a659a;" data-v-b1171fe3><div class="accordion" id="accordionExample" data-v-b1171fe3><div data-v-b1171fe3><button style="background-color:#0f3a53;color:#fcfeca;" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-b1171fe3> Test Logins </button><div id="collapseOne" style="border-color:#0a659a;" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" data-v-b1171fe3><div class="accordion-body" data-v-b1171fe3><div class="row" data-v-b1171fe3><div class="col" data-v-b1171fe3><h3 style="font-size:14pt;" data-v-b1171fe3>Student</h3><p data-v-b1171fe3>username: &quot;test-student&quot;</p><p data-v-b1171fe3>password : &quot;password&quot;</p><p data-v-b1171fe3>Or, create your own account!</p></div><div class="col" data-v-b1171fe3><h3 style="font-size:14pt;" data-v-b1171fe3>Admin</h3><p data-v-b1171fe3>username: &quot;test-admin&quot;</p><p data-v-b1171fe3>password : &quot;password&quot;</p></div></div></div></div></div></div></div>',1);function E(e,a,s,I,n,i){return u(),m("div",w,[t("div",y,[x,q,S,t("div",O,[V,l(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=d=>n.username=d),placeholder:"Username",class:"form-control",required:""},null,512),[[r,n.username]])]),t("div",k,[L,l(t("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=d=>n.password=d),placeholder:"Password",class:"form-control",required:""},null,512),[[r,n.password]])]),t("button",{type:"submit",onClick:a[2]||(a[2]=d=>i.LoginAttempt()),class:"btn btn-dark"},"Login"),T,z]),A])}const U=c(h,[["render",E],["__scopeId","data-v-b1171fe3"]]);export{U as default};
