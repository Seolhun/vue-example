# Vue Study In Incheon - Day 1.

- Author : [SeolHun](https://github.com/Seolhun)
- IDE : SublimeText3 or Webstorm
- Version : Vue 2.5.3
- Started Date : 2017.11.09
---
## To do List 

#### Presentation
1. Build Example & Explanation
    1. Computed Properties and Watchers
    2. Class and Style Bindings
    3. Conditional Rendering
    4. List Rendering
    5. Event Handling
    6. Form Input Bindings

#### Project    
2. Build To do list using Local Storage.
    - To do List(Read, Write, Update, Delete)

---
#### Vue Summary with examples
1. Presentation 1
    1. Computed Properties and Methods
        1. The end result same, but computed method is cached.
            - 최종 결과에 대해 두가지 접근 방식은 서로 동일합니다. 하지만 차이점은 **계산된 속성은 종속성에 따라 캐시된다는 것** 입니다. 
        
    2. Computed Properties and Watchers
        1. 대부분의 경우 계산된 속성이 더 적합하지만 사용자 정의 감시자가 필요한 경우가 있습니다.
        - 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용합니다.
        
2. Presentation 2
    1. Binding HTML Classes
        1. v-bind:class 디렉티브는 일반 class 속성과 공존할 수 있습니다. 
        2. Object, Array, 3항식 등 다양한 방법으로 클레스를 바인딩 할 수 있습니다.
        3. 아래 예제를 확인해봅시다.
        
        ```html
        data: {
            isActive: true,
            hasError: false
        },
        <!-- 1. Binding classes-->
        <!-- Input -->
        <div class="static"
             v-bind:class="{ active: isActive, 'text-danger': hasError }"
        ></div>
        <!-- Output -->
        <div class="static active"></div>
 
        <!-- 2. Binding object-->
        data: {
           classObject: {
               active: true,
               'text-danger': true
           }
        }
        <!-- Input -->
        <div v-bind:class="classObject"></div>
        <!-- Output -->
        <div class="active text-danger"></div>
 
        <!-- 3. Binding objects using Array-->
        data: {
 			activeClass: 'active',
 			successClass: 'text-success'
        }
        <!-- Input -->
        <div v-bind:class="[activeClass, successClass]"></div>
        <!-- Output -->        
        <div class="active text-success"></div>
 
        <!-- 4. Binding classes using Ternary operator-->
        <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
        ```
        
    2. Binding Attribute with Components
        1. Component를 생성한 후에도 class를 바인딩 할 수 있습니다
        ```html
        <my-component
            v-bind:class="classObject"
            :message="message"
            :name="name"
        >
        </my-component>
 
        Vue.component('my-component', {
            props: ['message', 'name'],
            template: '<div class="text-info"><h1>{{ message }}, {{ name }}</h1></div>',
        })
 
        data: {
 			classObject: {
 				active: true,
 				'text-right': true
 			},
            message: 'Hello',
            name: 'Vue Study'
        }
        ```
        
    3. Binding HTML Style
        1. Style css의 Attribute 값을 사용하는 것 외에는 Binding Classes와 Vue 문법은 일치합니다
        2. Class와 다른 점은 Stlye 문법이므로 간단히 1개의 예제만 보겠습니다
        ```html
        <!-- 1. Binding object-->
        data: {
 			styleObject: {
 				color: 'red',
 				fontSize: '15px'
 			}
        }
        <!-- Input -->
        <div v-bind:style="styleObject">
            <p>Hello, Binding Styles</p>
        </div>
 
        <!-- Output -->
        <div style="color: red; font-size: 25px;">
           <p>Hello, Binding Styles</p>
        </div>
        ``` 

3. Presentation 3
    1. Conditional Rendering
        1. v-if, v-else, 
        2. v-else-if
            - v-else-if는 2.1.0부터 새롭게 추가됨.
            - v-else-if는 여러개를 사용하여 다양한 조건을 적용시킬 수 있습니다
            ```html
            <div v-if="type === 'A'">
              A
            </div>
            <div v-else-if="type === 'B'">
              B
            </div>
            <div v-else-if="type === 'C'">
              C
            </div>
            ```
        2. Controlling Reusable Elements with key
        
        3. v-show
            - v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
            - **v-show는 <template> 구문을 지원하지 않으며 v-else와도 작동하지 않습니다.**
            - 비교해보면, v-show는 훨씬 단순합니다. CSS 기반 토글만으로 초기 조건에 관계 없이 엘리먼트가 항상 렌더링 됩니다.
            
        4. v-if vs v-show
        - v-if는 조건부 블럭 안의 이벤트 리스너와 자식 컴포넌트가 토글하는 동안 적절하게 제거되고 다시 만들어지기 때문에 **진짜 조건부 렌더링 입니다**
        - if와 차이점은 v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. 
        - v-if는 또한 게으릅니다 초기 렌더링에서 조건이 거짓인 경우 아무것도 하지 않습니다.
            - **아무것도 하지 않는 다는 것은 DOM에 존재하지 않기 때문에 그렇습니다** 
            - 조건 블록이 처음으로 참이 될 때 까지 렌더링 되지 않습니다.
        ```html
        <!-- 아래 예제를 보시면 style="display:none;" 을 보실 수 있습니다. -->
        <div class="row">
           <div class="col-sm-12">
               <div class="col-sm-12 text-success" style="display: none;">
                   <h3>You can see me When condition is "true"</h3>
               </div> 
               <div class="col-sm-12 text-success" style="">
                   <h5>Search v-show element using Browser dev tools. can find it.</h5></div> <hr> <!----> <div class="col-sm-12 text-danger"><h5>Search v-if element using Browser dev tools. never find it.</h5>
               </div>
           </div> 
        </div>
        ```
         
        5. v-if and v-for
        - v-for는 v-if와 함께 사용하는 경우, v-if보다 높은 우선순위를 갖습니다.
            - **이러한 이유는 v-for로 해당 데이터와 조건을 비교하여 Rendering 할지 말지를 결정해야 하기 떄문입니다**

4. Presentation 4
    1. 
    2. 

5. Presentation 5
    1. 
    2. 

6. Presentation 6
    1. 
    2.  