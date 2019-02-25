
//We do this by adding a key-value pair to the Vue app's options object. We add a key called el, standing for HTML element,
// with a value of a CSS selector as a string that will target an element in our HTML and give it access to our Vue app's functionality.



// app.js
const app = new Vue({
    el: '#app'
});

// Added the data property. the .data is an object, some of this would be got from a database but this is just an example

const app = new Vue({
    el: '#app',
    data: {
        username: 'CoderInTraining',
        newTweet: '',
        tweets: [
            'Started learning to code today. Wish me luck!',
            'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
            'Today I start learning Vue. I got this.'
        ]
    }
});

// Directives kinda like an if statement. Will only display the element if the statement returns true

<button v-if="userIsLoggedIn">Log Out</button>
<button v-if="!userIsLoggedIn">Log In</button>

// This will iterate through every item and create a varaible called todo

<ul>
<li v-for="todo in todoList">{{ todo }}</li>
</ul>

// v-model can be added to any form field and hooked up to our app which is data
    // this will display the current value of username even if it is modified

<input v-model="username" />
