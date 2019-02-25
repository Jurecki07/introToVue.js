
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
        username: 'Michael'
    }
});

