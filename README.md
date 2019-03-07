# <u>Vue.JS</u>

### 1. Vue Instances + Data and Methods.
- ##### HTML
~~~
<div id="vue-scope-area-1">
    <h1>{{message}}</h1>
    <p>{{ greet('Broooo') }}</p>
</div>
~~~

- ##### JS
~~~
<script>
    // vue instance will control a area in your page
    new Vue({
        el: "#vue-scope-area-1",
        data: {
            message: "Hello World..."
        },
        methods: {
            greet: function(name) {
                return `${this.message}  ${name}`
            }
        }
    })
</script>
~~~
<br />
<hr />

### 2. Property Binding in Vue with `v-bind`

- ##### HTML
~~~
<a v-bind:href="facebook" v-bind:target="target"> Facebook </a>
~~~

- ##### JS
~~~
new Vue({
    ...
    data: {
        facebook: "https://www.facebook.com",
        target: "_blank"
    }
})
~~~
<br />
<hr />

### 3. innerHTML in vue with  `v-html`

- ##### HTML
~~~
<p v-html="twitterLinkHtml"></p>
~~~

- ##### JS
~~~
new Vue({
    ...
    data: {
        ...
        twitterLinkHtml: "<a href='https://twitter.com'> Twitter </a>"
    }
})
~~~
<br />
<hr />

### 4. Event Binding in Vue

- ##### HTML
~~~
<div id="vue-scope-area-4">
    <h3>{{ number }}</h3>
    <button v-on:click="increment(10)">+10</button>
    <button @click="decrement(10)">-10</button>
</div>
~~~

- ##### JS
~~~
new Vue({
    el: "#vue-scope-area-4",
    data: {
        number: 0
    },
    methods: {
        increment: function(value) {
            this.number += value
        },
        decrement: function(value) {
            this.number -= value
        }
    }
})
~~~

#### 4.1 Event Modifiers [documentation](https://vuejs.org/v2/guide/events.html#Event-Modifiers)

- ##### HTML
~~~
 <!-- Method execute only once -->
<button @click.once="alertOnce">alert once</button>

<!-- Will prevent the default behaviour, will just alert and not navigate -->
<a @click.prevent="alertOnce" href="https://facebook.com">Will prevent default behaviour</a>
~~~

#### 4.2 Keyboard Modifiers

- ##### HTML
~~~
<!-- Keyboard Modifiers -->
<input @keydown.tab="tabPressed" placeholder="Test Tab Pressed">
<input @keyup.13="enterPressed" placeholder="Enter Pressed" />

<!-- Multiple Key Combinations -->
<input @keydown.alt.enter="enterPressed" placeholder="Enter with Alt Key" />

<!-- Exact - this will call functions only when you press the exact key or event -->
<input @keydown.65.exact="enterPressed" placeholder="Fire Only when tou just press enter" />
~~~
<br />
<hr />

### 5. Two way data binding with `v-model`
- ##### HTML
~~~
<div>
    <input v-model="message" />
    <h3> {{message}}</h3>
</div>
~~~

- ##### JS
~~~
new Vue({
    ...
    data: {
        ...
        message: ""
    }
})
~~~
<br />
<hr />

### 6. Computed Properties

- ##### HTML
~~~
<!-- Computed properties will watch for all the contributing data properties -->
<!-- Good when we want to show property update immediately -->
<div>
    <input v-model:value="message" />
    <h2> {{ message }} </h2>
    <h3>{{ reversedMessage }}</h3>
</div>
~~~

- ##### JS
~~~
// here soon as message was updated, it will change the reverseMessage property
new Vue({
    ...
    data: {
        message: "hiii there"
    },
    methods: {
        ...
    },
    computed: {
        reversedMessage: function() {
            return this.message.split(" ").reverse().join(" ");
        }
    }
})
~~~
- A better usage of computed property application is search filter, checkout the `post-search` application
<br />
<hr />

### 7. Class Binding
- ##### HTML
~~~
<button v-on:click="fill = !fill" > Toggle Fill </button>
<div class="box" v-bind:class="{blackbox: fill, whitebox: !fill}">
    ...
    ...
</div>
~~~
<br />
<hr />

### 8. Style Binding
~~~
<p v-bind:style="{fontWeight:isBold, fontSize: fontSize}"> Is Bold or Not <p>
~~~
<br />
<hr />

### 9. Vue Conditionals `(v-if, v-else-if, v-else)`
- ##### HTML
~~~
<h1 v-if="show == 0">Show Red</h1>
<h1 v-else-if="show == 1">Show Yellow</h1>
<h1 v-else="show == 2">Show Green</h1>
~~~

#### 9.1 `v-show` to control the display property of the element

- ##### HTML
~~~
<h1 v-show="show == 0">Show Red</h1>
~~~
<br />
<hr />

### 10. Iteration with `v-for`

##### 10.1 Basic
- ##### HTML
~~~
<ul>
    <li v-for="founder in founders">
        {{founder.company}} - {{founder.name}}
    </li>
</ul>
~~~

- ##### JS
~~~
new Vue({
    ...
    data: {
        ...
        founders: [ 
            {name: "Mark Zuckerberg", company: "Facebook"},
            {name: "Bill Gates", company: "Microsoft"},
            {name: "Jackma", company: "Alibaba"},
            {name: "Jeff Bezos", company: "Amazon"}
        ]
    }
})
~~~

##### 10.2 With Index
- ##### HTML
~~~
<li v-for="(founder, index) in founders">
    {{index +1 }}. {{founder.name}} founded {{founder.company}}
</li>
~~~

###### Note: If we want to ignore a containing element we can use `template` tag
~~~
<!-- If you want not to have a container div kind of element -->
<template v-for="founder in founders">
    <h3>{{founder.name}}</h3>
    <p>{{founder.company}}</p>
</template>
~~~
<br />
<hr />

### 11. Working with multiple instances and sharing/modifiying data between each other
- ##### JS
~~~
<script>
    let instance1 = new Vue({
        el: "#vue-instance-1",
        data: {
            name: "Charles"
        },
        ...
    })

    let instance2 = new Vue({
        el: "#vue-instance-2",
        ...
        methods: {
            changeInstant1Prop: function() {
                instance1.name = "Dilip"
            }
        }
    })
</script>
~~~

- ##### HTML
~~~
<div id="vue-instance-1">
    <h1>{{ topicFunc() }}</h1>
    <div>
        Name is : {{name}}
    </div>
</div>

<div id="vue-instance-2">
    <button @click="changeInstant1Prop()"> Change Name</button>
</div>
~~~
<br />
<hr />

### 12. Vue components
~~~
let nameComponent = Vue.component('my-name', {
    template: '<h2> {{ firstname }}</h2>',
    data: function() {
        return {
            firstname: "Charles"
        }
    },
    methods: {

    }
})
~~~
<br />
<hr />

### 13. Access DOM element properites with `$refs` (equivalent to angular `template variable`)
- ##### HTML
~~~
<input ref="input-name" v-on:keyup="printName()" />
~~~

- ##### JS
~~~
let instance1 = new Vue({
    ...
    methods: {
        printName: function() {
            // Get all the references
            console.log(this.$refs)

            // Take the input from input-name
            let name = this.$refs["input-name"].value;

            // Print it to the span
            this.$refs["display-name"].innerHTML = name;
        }
    },
    ...
})
~~~
<br />
<hr />

### 14. Basic Vue Cli Usage
[Vue Cli Documentation](https://cli.vuejs.org/guide/)

- Vue CLI is used to for rapid vue development
- Attach library to our application
- webpack integrated for bundling and loading modules

##### Installing Vue Cli
Old: `npm install -g vue-cli`
New: `npm install -g @vue/cli`
Vue UI : `npm install -g @vue/ui`

##### Creating Vue Project
- New Way : `vue create <project-name>`
  - Then we can manually customize our project like linting, preset, and etc

- Old way : `vue init <template-name> <project-name>`
    - `vue init webpack basic-vue-app`
<br />
<hr />

### 15. Basic Vue Application Overview
1. **Main.js** file will be invoked and that has a vue instance that will render to the div (id = app) in the index.html, and the component that will be rendered is `App.vue`

~~~
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
~~~

2. **App.Vue** file, main/root component file.
    -   It has a template, script and a style section
<br />
<hr />

### 16. Registering a new component (Use `HelloWorld` Component)

#### App.vue file 
~~~
<template>
  <div id="app">
    ...
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
~~~

##### Local Register
  1. Import the file
  2. Add it to the `component` section in the script section.
~~~
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  ...
  components: {
    HelloWorld,
  },
};
</script>
~~~

##### Global Register - So all the components can use this component
- We need to register this component in the main.js file
~~~
import Ninja from './components/ninja';
Vue.component('ninja', Ninja)
~~~
<br />
<hr />

### 17. Scoped styles
In components, you will have a style section, if you want to have your styles only specific to that component, then you have to use a scope style attribute.
- ex - 
~~~
<style scoped>
h3 {
  margin: 40px 0 0;
}
...
</style>
~~~
<br />
<hr />

### 18. Props (inputs in angular)
- `props`, this is to get the values as attributes for components, similar to component attribute (inputs) in angular([Documentation](https://vuejs.org/v2/guide/components-props.html)).

##### HelloWorld.vue
~~~
<template>
  <div>
    My name is {{ msg }}
  </div>
</template>

export default {
  ....
  props: {
    msg: {
      type: String
    }
  },
};
~~~
- we can use this as properties in other components.
~~~
<HelloWorld msg="Charles"/>
~~~

- If we are using data properties as the value for the attribute then we have to use `v-bind`
~~~
<HelloWorld v-bind:msg="name"/>

<script>
new Vue({
  data: {
    name: "Charles"
  }
})
</script>
~~~
<br />
<hr />

### 19. Reference Types vs Primitive Types Props
#### Primitive Types

- string, number, boolean type properties are primitive type properties
  - These type of properties will not be shared among differnt components
~~~
  // App.vue file
  <HelloWorld msg="Charles"/>
  <HelloWorld msg="Charles"/>
~~~

~~~
  // HelloWorld.vue file
  <button v-on:click="changeMessage()">Change Message</button>
  ...
  ...
   methods: {
    changeMessage() {
      this.msg = 'Dilip';
    },
  },
~~~
In the above scenario, when I tried to change the `msg` property it will only change the current `HelloWorld` elements  `msg` property and not the second HelloWorld Tag

<img style="border: 2px solid black" src="https://github.com/CharlesRajendran/vue-js-tuts/blob/master/images/primitive-properties.JPG" />

#### Reference Types
- Arrays, Objects are reference properties, which means, that property is shared among all the components, if you change one it will update in other places aswell, since we are actually passing just a reference to the actual property.

~~~
// App.vue
<HelloWorld v-bind:legends="legends" />
<HelloWorld v-bind:legends="legends" />
...
...
data() {
  return {
    legends: [
      'Steve',
      'Bill',
      'Mark',
      'Sundar',
      'Elon',
    ],
  };
},
~~~

~~~
// HelloWorld.vue
<button v-on:click="changeMessage()">Change Message</button>
My Fav Legends:
<ul>
  <li v-for="l in legends"> {{ l }}</li>
</ul>
...
...
methods: {
  changeMessage() {
    this.legends.push('Siraj');
  },
},
~~~

<img style="border: 2px solid black" src="https://github.com/CharlesRajendran/vue-js-tuts/blob/master/images/reference-properties.JPG" />

- **Always remember, mutating a property is not recomended**

#### Using event binding to achieve the reference property behaviour in the primitive type property.

##### HelloWorld.vue
~~~
<button v-on:click="changeMessage()">Change Message</button>
Text is change : {{message}}
...
...
methods: {
  changeMessage() {
    this.$emit('onmsgchanged', 'Changed Bro...');
  },
},
~~~
##### App.vue
~~~
<HelloWorld v-bind:message="msg" v-on:onmsgchanged="changeParent($event)" />
<HelloWorld v-bind:message="msg" v-on:onmsgchanged="changeParent($event)" />
...
...
 methods: {
  changeParent(e) {
    this.msg = e;
  },
},
~~~
<br />
<hr />

### 20. Event Bus
- This is some what similar to the **broadcasting** of AngularJS

##### Process
- Create the event bus object in main.js file, and export it.
~~~
export const eBus = new Vue();
~~~
- Emit the event with the imported event bus object (HelloWorld.vue)
~~~
<button v-on:click="emitEvent()">Emit Event</button>
...
<script>
import { eBus } from '../main';
...
methods: {
  emitEvent() {
    eBus.$emit('EventBus', 'Event Emitted Bro...');
  },
},
~~~
- Watch for the events in other components (Other.vue)
~~~
created() {
    eBus.$on('EventBus', (eventData) => {
      this.received = eventData;
    });
  },
~~~
<br />
<hr />

### 21. Lifecycle Hooks ([Documentation]('https://vuejs.org/v2/api/#Options-Lifecycle-Hooks'))

- There are number of different life cycle hooks in vue.
1. ##### beforeCreate
 -  Immediately after the instance has been initialized, before data observation and event/watcher setup.
<br />

2. ##### created
- After the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: 
  - data observation
  - computed properties 
  - methods
  - watch/event callbacks.
  -  not `$el`, since the document is not mounted
<br />

3. ##### beforeMount
- before the mounting begins: the `render` function is about to be called for the first time.
<br />

4. ##### mounted
- Called after the instance has been mounted, where el is replaced by the newly created `vm.$el`
- Note that mounted does not guarantee that all child components have also been mounted. If you want to wait until the entire view has been rendered, you can use `vm.$nextTick` inside of mounted.
<br />

5. ##### beforeUpdate
- Called when data changes, before the DOM is patched. 
- This is a good place to access the existing DOM before an update, `e.g. to remove manually added event listeners.`
<br />

6. ##### updated
- Called after a data change causes the virtual DOM to be re-rendered and patched.
- The component’s DOM will have been updated when this hook is called, so you can perform DOM-dependent operations here. 
 - However, in most cases you should avoid changing state inside the hook. To react to state changes, it’s usually better to use a `computed property` or `watcher` instead.
<br />

7. ##### activated
- Called when a kept-alive(it will cache the components) component is activated.
  - [Build-in component keep-alive](https://vuejs.org/v2/api/#keep-alive)
  - [Dynamic component keep-alive](https://vuejs.org/v2/guide/components.html#keep-alive)
<br />

8. ##### deactivated
- Called when a kept-alive component is deactivated.
<br />

9. ##### beforeDestroy
- Called right before a Vue instance is destroyed. 
- At this stage the instance is still fully functional.
<br />

10. ##### destroyed
  - Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed.
<br />

11. ##### errorCaptured
- Called when an error from any descendent component is captured. 
- The hook receives three arguments: 
  - the error, 
  - the component instance that triggered the error, 
  - a string containing information on where the error was captured.
- ##### Ex
~~~
export default {
  name: 'Second',
  ...
  created() {
    ...
  },
};
~~~
<br />
<hr />

22. ### Slots ([Documentation](https://vuejs.org/v2/guide/components-slots.html))

- It is kind of like a placeholder, which can accept whatever we pass from the other side.
    - for example, let's say we have many forms in our application, and all the forms follow kind of the same structure, like a header, bunch of fields, and a footer. Here we can have 3 slots, and can say what we need to put here from the place where this component is used. 
  
  - In 2.6.0, we introduced a new unified syntax (the v-slot directive) for named and scoped slots.
    - It replaces the slot and slot-scope attributes, which are now deprecated. [read](https://vuejs.org/v2/guide/components-slots.html#Deprecated-Syntax)

#### Example 1: Basic
##### FormSlot.vue
~~~
<template>
    <div>
        <h1>This is normal</h1>
        <slot></slot>
    </div>
</template>
~~~
##### App.vue
~~~
<div id="app">
  <FormSlot>This will be slot text</FormSlot>
  <FormSlot>This is another slot implementation</FormSlot>
</div>
~~~
**output**
<img style="border: 2px solid black" src="https://github.com/CharlesRajendran/vue-js-tuts/blob/master/images/slot.JPG" />

<br />

#### Example 2: Multiple Slots
##### FormSlot.vue
~~~
<template>
    <div>
        <h1>This is normal</h1>
        <h3>Name</h3>
        <slot name="name"></slot>
        <h3>Age</h3>
        <slot name="age"></slot>
    </div>
</template>
~~~
##### App.vue
~~~
<FormSlot>
  <h4 slot="name">Charles</h4>
  <h4 slot="age">26</h4>
</FormSlot>
~~~
<br />

- ##### Note: Also we can use this syntax aswell. `v-slot:<slot-name>`
  - but it needs to be inside `template` tag
~~~
<FormSlot>
  <template v-slot:name>
    <h4>Dilip</h4>
  </template>
  
  <h4 slot="age">26</h4>
</FormSlot>
~~~
<br />
<hr />

