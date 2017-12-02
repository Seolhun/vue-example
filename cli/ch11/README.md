# Vue Cli Getting started 11

[Vue-Cli Github](https://github.com/vuejs/vue-cli)

---
### Handling Router

1. Vuex
    - To manage Vue.state or methods result in common.
    - Vue의 데이터의 상태를 편리하게 관리
2. Vuex State
    - Vuex.state is that Saving data or methods state from vue. 
    - Vue의 데이터 상태를 저장하는 객체
3. Vuex Getters
    - Vuex.getters is that Getting Vuex.state or Vuex.state methods easily.
    - Vuex의 Vuex.state data 혹은 methods에 쉽게 접근하여 가져오는 객체
4. Vuex Mutations
    - Vuex.mutations is That defining method to change Vuex.state.
    - Vuex.state 동괴화하여 상태의 변이를 관리하는 메소드를 정의 또는 변이 발생 시 작동되는 Method를 정의하는 객체
        - commit
            - 변이 핸들러를 직접 호출 할 수는 없습니다.
            - 변이 핸들러를 호출하려면 해당 타입과 함께 store.commit 을 호출해야합니다.
            - Example
                ```javascript
                methods: {
                    increment () {
                        this.$store.commit('increment')
                    }
                }
                ```
5. Vuex Actions
    - Vuex.actions is that changing Vuex.state or methods on async.
    - Vuex의 state 상태를 비동기로 변이를 일으킬 수 있는 Action Method를 정의하는 객체
    - 액션은 변이와 유사합니다. 몇가지 다른 점은,
        - 상태를 변이시키는 대신 액션으로 변이에 대한 커밋을 합니다.
        - 작업에는 임의의 비동기 작업이 포함될 수 있습니다.
        - 돌연변이는 동기적 이어야 한다는 것을 기억하십니까? 액션은 그렇지 않습니다. 액션 내에서 비동기 작업을 수행 할 수 있습니다.
        - Example
            ```javascript
            actions: {
              incrementAsync ({ commit }) {
                setTimeout(() => {
                  commit('increment')
                }, 1000)
              }
            }
            ```
    
6. Separate Files to show simply.
7. Declare Alias to use simply.
