import{_ as f,o as v,c as b,a as i,b as p,p as _,d as y}from"./main-2d0db13e.js";const w={setup(){},data(){return{}},created(){},methods:{ValidateForm(){let e=document.getElementById("first_name").value,a=document.getElementById("last_name").value,s=document.getElementById("username").value,n=document.getElementById("password").value,d=document.getElementById("email").value;e==""||e==null?alert("Please add a first name."):a==""||a==null?alert("Please add a last name."):s==""||s==null?alert("Please add a username."):n==""||n==null?alert("Please add a password."):d==""||d==null?alert("Please add an email address."):this.ValidateEmail()},ValidateEmail(){let e=document.getElementById("email").value;/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?this.Submit():alert("Please enter a valid email address")},Submit(){let e=document.getElementById("first_name").value,a=document.getElementById("last_name").value,s=document.getElementById("username").value,n=document.getElementById("password").value,d=document.getElementById("email").value;var t=new Date;let o=("0"+t.getDate()).slice(-2),r=("0"+(t.getMonth()+1)).slice(-2);var m=t.getFullYear()+"-"+r+"-"+o;const c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:n,first_name:e,last_name:a,email:d,current_date:m})};var u="/users/api/create-account";fetch(u,c).then(function(l){return l.json()}).then(function(l){l.notification=="username already exists"||l.notification=="email address already exists"?alert(l.notification):l.notification=="account created"&&(alert(l.notification),window.location.href="../")})}}},g=e=>(_("data-v-f2a557b1"),e=e(),y(),e),h={class:"login-page"},E={class:"container form-signin my-1"},B=p('<h1 data-v-f2a557b1>Create Account</h1><div class="mb-3" data-v-f2a557b1><label for="first_name" class="form-label" data-v-f2a557b1>First Name</label><input id="first_name" type="text" class="form-control" data-v-f2a557b1></div><div class="mb-3" data-v-f2a557b1><label for="last_name" class="form-label" data-v-f2a557b1>Last Name</label><input id="last_name" type="text" class="form-control" data-v-f2a557b1></div><div class="mb-3" data-v-f2a557b1><label class="form-label" data-v-f2a557b1>Username</label><input id="username" type="text" class="form-control" data-v-f2a557b1></div><div class="mb-3" data-v-f2a557b1><label class="form-label" data-v-f2a557b1>Password</label><input id="password" type="password" class="form-control" data-v-f2a557b1></div>',5),I={class:"mb-3"},V=g(()=>i("label",{class:"form-label"},"Email address",-1));function x(e,a,s,n,d,t){return v(),b("div",h,[i("div",E,[B,i("div",I,[V,i("input",{id:"email",type:"email",class:"form-control",onBlur:a[0]||(a[0]=(...o)=>t.ValidateEmail&&t.ValidateEmail(...o))},null,32)]),i("button",{class:"btn btn-dark",onClick:a[1]||(a[1]=o=>t.ValidateForm())},"Submit")])])}const P=f(w,[["render",x],["__scopeId","data-v-f2a557b1"]]);export{P as default};