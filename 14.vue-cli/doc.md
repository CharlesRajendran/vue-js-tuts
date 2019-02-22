#### Basic Vue Cli Usage
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


##### Important files in the created project
- main.js 
  - like the module file in angular, which is the main file
- App.vue
  - way of creating reusable components, main component
- Component Folder
  - A folder for custom components

##### What's is going on in the basic application
1. Main.js file will be invoked and that has a vue instance that will render to the div (id = app) in the index.html, and the component that will be rendered is `App.vue`

~~~
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
~~~

1. **App.Vue** file, `App.Vue` file is also another way of using `Vue.components` 
    -   It has a template, and a data section
~~~
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
~~~
-   `App.vue` has another component included, and that is `HelloWorld.vue` component, which is in the component directory
    -   Important thing to note here is, you need to import and declare it in order to use it, 
        -   to declare either you can
            -   do it locally (like in the below example)
            -   globally (in the main.js)
~~~
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>
~~~

~~~
// globally declaring a component in the main.js file, so any component can use that reusable component.
import Ninja from './components/ninja';
Vue.component('ninja', Ninja)

// then we can use the above component like `<ninja></ninja>`
~~~

2. `HelloWorld.vue`, component, have the same structure as App.vue, but if you look at the style, it has a attribute like `scoped` in the style tag, which indicates these styles only available for that component (like the concept of virtual dom)

~~~
<style scoped>
h3 {
  margin: 40px 0 0;
}
...
</style>
~~~


3. `props`, this is to get the values as attributes for components, similar to property binding in angular, [docs](https://vuejs.org/v2/guide/components-props.html)
~~~
<!-- HelloWorld Component -->
<template>
  <div>
    My name is {{ msg }}
  </div>
</template>

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String
    }
  },
};
~~~
- we can use this as properties 
~~~
<!-- App Component -->
<HelloWorld msg="Charles"/>
~~~

- If we are using data properties as the value for the attribute then we have to use v-bind
~~~
<!-- App Component -->
<HelloWorld v-bind:msg="name"/>

<script>
new Vue({
  data: {
    name: "Charles"
  }
})
</script>
~~~

4. Reference Types vs Primitive Types properties
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
In the above scenario, when I tried to change the `msg` property it will only change the current elements  `msg` property and not the second HelloWorld Tag
<img src="https://github.com/CharlesRajendran/vue-js-tuts/blob/master/images/primitive-properties.JPG" />


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

<img src="https://github.com/CharlesRajendran/vue-js-tuts/blob/master/images/reference-properties.JPG" />
- **Always remember, mutating a property is not recomended**

5. Event Binding
   -  Using event bindgin we can actually achive the reference property behaviour to primitive properties, by setting the parents data property
~~~
<!-- HelloWorld Component -->
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

~~~
<!-- App Component -->
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

6. Event Bus
- This is some what similar to the broadcasting of angular
  - Created the event bus object in main.js file, and export it.
~~~
// Main.js file
export const eBus = new Vue();
~~~
  - Emit the event with the imported event bus object
~~~
// HelloWorld.vue
<button v-on:click="emitEvent()">Emit Event</button>
...
...
<script>
import { eBus } from '../main';
...
...
methods: {
  emitEvent() {
    eBus.$emit('EventBus', 'Event Emitted Bro...');
  },
},
~~~
  - Watch for the events in other components
~~~
// Second.vue
created() {
    eBus.$on('EventBus', (eventData) => {
      this.received = eventData;
    });
  },
~~~
