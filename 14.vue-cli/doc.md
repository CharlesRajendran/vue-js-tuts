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
