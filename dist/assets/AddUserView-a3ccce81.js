import{_ as c,u as p,l as f,o as _,c as h,a as e,w as o,v as n,k as b,j as w,f as v,p as N,d as y}from"./main-93ed520d.js";const V={setup(){return{usersStore:p()}},data(){return{user:{firstName:null,lastName:null,username:null,email:null,password:null}}},async created(){},methods:{ValidateForm(){this.user.firstName==""||this.user.firstName==null?alert("Please add a first name."):this.user.lastName==""||this.user.lastName==null?alert("Please add a last name."):this.user.username==""||this.user.username==null?alert("Please add a username."):this.user.password==""||this.user.password==null?alert("Please add a password."):this.user.email==""||this.user.email==null?alert("Please add an email address."):this.ValidateEmail()},ValidateEmail(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)?this.Submit():alert("Please enter a valid email address")},Submit(){var l=new Date;let t=("0"+l.getDate()).slice(-2),d=("0"+(l.getMonth()+1)).slice(-2);var a=l.getFullYear()+"-"+d+"-"+t;const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.user.username,password:this.user.password,first_name:this.user.firstName,last_name:this.user.lastName,email:this.user.email,current_date:a})};var u="/users/api/add";fetch(u,i).then(function(s){return s.json()}).then(s=>{s.notification=="username already taken"||s.notification=="email already taken"?alert(s.notification):(alert(s.notification),this.usersStore.getUsers(),this.$router.push("/"))})}}},r=l=>(N("data-v-607a1c45"),l=l(),y(),l),S={class:"container user-form my-1"},x=r(()=>e("h1",null,"Create Account",-1)),k={class:"mb-3"},U=r(()=>e("label",{for:"first_name",class:"form-label"},"First Name",-1)),P={class:"mb-3"},g=r(()=>e("label",{for:"last_name",class:"form-label"},"Last Name",-1)),C={class:"mb-3"},j=r(()=>e("label",{class:"form-label"},"Username",-1)),D={class:"mb-3"},E=r(()=>e("label",{class:"form-label"},"Password",-1)),F={class:"mb-3"},I=r(()=>e("label",{class:"form-label"},"Email address",-1)),T={class:"d-flex justify-content-between"};function A(l,t,d,m,a,i){const u=f("router-link");return _(),h("div",S,[x,e("div",k,[U,o(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>a.user.firstName=s),type:"text",class:"form-control"},null,512),[[n,a.user.firstName]])]),e("div",P,[g,o(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>a.user.lastName=s),type:"text",class:"form-control"},null,512),[[n,a.user.lastName]])]),e("div",C,[j,o(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>a.user.username=s),type:"text",class:"form-control"},null,512),[[n,a.user.username]])]),e("div",D,[E,o(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>a.user.password=s),type:"password",class:"form-control"},null,512),[[n,a.user.password]])]),e("div",F,[I,o(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>a.user.email=s),type:"email",class:"form-control"},null,512),[[n,a.user.email]])]),e("div",T,[b(u,{class:"btn btn-dark",to:"/"},{default:w(()=>[v(" Cancel ")]),_:1}),e("button",{class:"btn btn-dark",onClick:t[5]||(t[5]=s=>i.ValidateForm())},"Submit")])])}const O=c(V,[["render",A],["__scopeId","data-v-607a1c45"]]);export{O as default};