/* 전역 컴포넌트 등록 */

// 등록
Vue.component('my-component', {
  template: '<div>사용자 정의 컴포넌트 입니다!</div>'
})

// 루트 인스턴스 생성
new Vue({
  el: '#example'
})
/*
Vue는 사용자 지정 태그 이름에 대해 [W3C 규칙]
(http://www.w3.org/TR/custom-elements/#concepts)을 적용하지 않습니다
 (모두 소문자이어야 하고 하이픈을 포함해야합니다). 그러나 이 규칙을 따르는 것이 좋습니다.
*/

/* 지역 컴포넌트 등록 */

var Child = {
  template: '<div>사용자 정의 컴포넌트 입니다!</div>'
}

new Vue({
  // ...
  components: {
    // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
    'my-component': Child
  }
})

/* data 는 반드시 함수여야합니다1 */

var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
  // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
  data: function () {
    return data
  }
})

new Vue({
  el: '#example-2'
})

/* data 는 반드시 함수여야합니다2 */


Vue.component('simple-counter2', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
  // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
  data: function () {
    return { counter: 0 }
  }
})

new Vue({
  el: '#example-3'
})

/** Props로 데이터 전달하기 */

Vue.component('child', {
  // props 정의
  props: ['message'],
  // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
  // vm의 this.message로 사용할 수 있습니다.
  template: '<span>{{ message }}</span>'
})

new Vue({
  el: '#example-4'
})

/** camelCase vs. kebab-case */

Vue.component('child2', {
  // JavaScript는 camelCase
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue({
  el: '#example-5',
  data: {
    parentMsg: ''
  }
})

/** 단방향 데이터 흐름 */

// check index.md

/** props 검증 */

Vue.component('example-4', {
  props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100
    },
    // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 사용자 정의 유효성 검사 가능
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)">\
    </span>\
  ',
  props: ['value'],
  methods: {
    // 값을 직접 업데이트하는 대신 이 메소드를 사용하여
    // 입력 값에 대한 서식을 지정하고 배치 할 수 있습니다
    
    updateValue: function (value) {
      console.log(value);
      var formattedValue = value
        // 공백을 제거합니다.
        .trim()
        // 소수 자릿수 2자리로 줄입니다
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 값이 아직 정규화 되지 않은 경우
      // 이를 수동으로 재정의하여 조건을 충족시킵니다.
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 입력 이벤트를 통해 숫자 값을 내보냅니다.
      //this.$emit('input', Number(formattedValue))
    }
  }
})

new Vue({
  el: '#example-6',
  data:{
    price: ''
  }
})

/** 동적 컴포넌트 */

var vm = new Vue({
  el: '#example-7',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})

// 원하는 경우 컴포넌트 객체에 직접 바인딩 할 수도 있습니다.
var Home = {
  template: '<p>Welcome home!</p>'
}

var vm = new Vue({
  el: '#example',
  data: {
    currentView: Home
  }
})  