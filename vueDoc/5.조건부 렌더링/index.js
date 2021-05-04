
var app11 = new Vue({
  el: '#app-11',
  data:{
    awesome: true,
    message: "내용"
  }
})

var app12 = new Vue({
el: '#app-12',
data:{
  ok: true
}
})
var app13 = new Vue({
el: '#app-13',
data:{
  ok: true
}
})

var app14 = new Vue({
  el: '#app-14',
  data:{
      loginType: 'username'
  },
  methods:{
      changeType: function(){
          this.loginType==='username'?this.loginType='email':this.loginType='username'
      }
  }
})

var app15 = new Vue({
  el: '#app-15',
  data:{
      loginType: 'username'
  },
  methods:{
      changeType: function(){
          this.loginType==='username'?this.loginType='email':this.loginType='username'
      }
  }
})
