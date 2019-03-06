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

### 7. Class Binding
- ##### HTML
~~~
<button v-on:click="fill = !fill" > Toggle Fill </button>
<div class="box" v-bind:class="{blackbox: fill, whitebox: !fill}">
    ...
    ...
</div>
~~~

### 8. Style Binding
~~~
<p v-bind:style="{fontWeight:isBold, fontSize: fontSize}"> Is Bold or Not <p>
~~~

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

