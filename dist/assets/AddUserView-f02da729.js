import{_ as c,u as p,o as f,c as _,a as e,w as i,v as n,p as h,d as w}from"./main-eaf72974.js";const b={setup(){return{usersStore:p()}},data(){return{user:{firstName:null,lastName:null,username:null,email:null,password:null}}},async created(){},methods:{ValidateForm(){this.user.firstName==""||this.user.firstName==null?alert("Please add a first name."):this.user.lastName==""||this.user.lastName==null?alert("Please add a last name."):this.user.username==""||this.user.username==null?alert("Please add a username."):this.user.password==""||this.user.password==null?alert("Please add a password."):this.user.email==""||this.user.email==null?alert("Please add an email address."):this.ValidateEmail()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.Submit():(console.log(this.user.email),alert("Please enter a valid email address"))},Submit(){var l=new Date;let s=("0"+l.getDate()).slice(-2),m=("0"+(l.getMonth()+1)).slice(-2);var t=l.getFullYear()+"-"+m+"-"+s;const u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.user.username,password:this.user.password,first_name:this.user.firstName,last_name:this.user.lastName,email:this.user.email,current_date:t})};var a="/api/users/add";fetch(a,u).then(function(r){return r.json()}).then(function(r){console.log(r),r.notification=="username already taken"||r.notification=="email already taken"?alert(r.notification):(alert(r.notification),this.usersStore.getUsers(),window.location.href="../")})}}},o=l=>(h("data-v-5e492497"),l=l(),w(),l),v={class:"container user-form my-1"},y=o(()=>e("h1",null,"Create Account",-1)),N={class:"mb-3"},S=o(()=>e("label",{for:"first_name",class:"form-label"},"First Name",-1)),V={class:"mb-3"},U=o(()=>e("label",{for:"last_name",class:"form-label"},"Last Name",-1)),g={class:"mb-3"},x=o(()=>e("label",{class:"form-label"},"Username",-1)),P={class:"mb-3"},k=o(()=>e("label",{class:"form-label"},"Password",-1)),D={class:"mb-3"},E=o(()=>e("label",{class:"form-label"},"Email address",-1));function F(l,s,m,d,t,u){return f(),_("div",v,[y,e("div",N,[S,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t.user.firstName=a),type:"text",class:"form-control"},null,512),[[n,t.user.firstName]])]),e("div",V,[U,i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t.user.lastName=a),type:"text",class:"form-control"},null,512),[[n,t.user.lastName]])]),e("div",g,[x,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>t.user.username=a),type:"text",class:"form-control"},null,512),[[n,t.user.username]])]),e("div",P,[k,i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>t.user.password=a),type:"password",class:"form-control"},null,512),[[n,t.user.password]])]),e("div",D,[E,i(e("input",{"onUpdate:modelValue":s[4]||(s[4]=a=>t.user.email=a),type:"email",class:"form-control"},null,512),[[n,t.user.email]])]),e("button",{class:"btn btn-dark",onClick:s[5]||(s[5]=a=>u.ValidateForm())},"Submit")])}const A=c(b,[["render",F],["__scopeId","data-v-5e492497"]]);export{A as default};
