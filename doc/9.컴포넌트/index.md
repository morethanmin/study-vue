단방향 데이터 흐름
모든 props는 하위 속성과 상위 속성 사이의 단방향 바인딩을 형성합니다. 상위 속성이 업데이트되면 하위로 흐르게 되지만 그 반대는 안됩니다. 이렇게하면 하위 컴포넌트가 실수로 부모의 상태를 변경하여 앱의 데이터 흐름을 추론하기 더 어렵게 만드는 것을 방지할 수 있습니다.

일반적으로 prop을 변경시키고 싶은 유혹을 불러 일으킬 수있는 두 가지 경우가 있습니다.

이 prop는 초기 값을 전달 하는데만 사용되며 하위 컴포넌트는 이후에 이를 로컬 데이터 속성으로 사용하기만 합니다.

prop는 변경되어야 할 원시 값으로 전달됩니다.

이러한 사용 사례에 대한 적절한 대답은 다음과 같습니다.

prop의 초기 값을 초기 값으로 사용하는 로컬 데이터 속성을 정의 하십시오.

`props: ['initialCounter'], data: function () { return { counter: this.initialCounter } }`
prop 값으로 부터 계산된 속성을 정의 합니다.

`props: ['size'], computed: { normalizedSize: function () { return this.size.trim().toLowerCase() } }`
