var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 메소드는 `methods` 객체 안에 정의합니다
  methods: {
    greet: function (event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert('Hello ' + this.name + '!')
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 또한 JavaScript를 이용해서 메소드를 호출할 수 있습니다.
example2.greet() // => 'Hello Vue.js!'

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
new Vue({
  el: '#example-4',
  methods: {
    warn: function (message, event) {
      // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)
    }
  }
})