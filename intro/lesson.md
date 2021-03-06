INTRODUCTION TO VUE
Front-End Frameworks
Welcome to Introduction to Vue! In this lesson, we will cover some of the most exciting features of Vue, discuss how they have changed the world of web development,
and see why Vue has become the popular front-end framework that it is today.

Before all of that, though, there is one preliminary question we're excited to answer. Perhaps you have heard Vue referred to as a "front-end framework."
But what is a front-end framework? And, for that matter, what is a front-end? Well, we've prepared a video to answer these important questions once and for all!


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Adding Vue
We hope you found our video insightful! In summary, front-end frameworks aim to fix the following issues in front-end web development:

Long development times
Difficult bug fixes and updates
Slow page rendering
In this lesson, we will be introducing some of the features that allow Vue to tackle these issues.
This lesson will give you a taste for programming in Vue. Everything covered will be covered in more depth in later lessons,
so don't worry if you don't feel like you're absorbing it all right away!

The first thing you'll need to do to begin using any front-end framework is to add the framework to your project.
You can import Vue by adding a script tag inside the head of your project's HTML file:

script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer>script
Above we load the current version of Vue, hosted by the Vue team, directly into your project.
We use the defer attribute on the script tag to make sure that the page is loaded and ready to hook up to Vue before we actually load Vue.

    Even at this preliminary step, the Vue team has found ways to shorten your development time.
Many front-end frameworks, like React and Angular, have difficult setup processes that can make starting a project a hassle.
The Vue team recognized that many complex front-end features aren't useful until late in the front-end learning journey (or sometimes at all). As a result, they offered this simple alternative that provides most of Vue's features to developers quickly and easily.

    Note: This lesson will be using cutting edge browser features. If you are experiencing technical issues at any point during the lesson,
we suggest you download and use the most up-to-date version of Google Chrome to potentially fix these issues.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

INTRODUCTION TO VUE
Creating Vue Apps
Our project now has access to the Vue library. This gives us access to all of the code that will allow us to make Vue apps, web front-ends built using Vue, but doesn't actually create one for us. We now need to write the code to actually make a Vue app.

Vue makes it easy to make a new app by exporting a class called Vue. Much like any other JavaScript class, we create instances of this class using the new keyword. Each of these Vue instances is a fully-functioning Vue app. Let's look at an example:

// app.js
const app = new Vue({});
By invoking the Vue class constructor with the new keyword, we create a new instance of the Vue class which we name app.
The Vue constructor can set many properties on our Vue app when it is called. However, unlike many constructors,
the Vue class does not take each of these properties as separate arguments. Rather, it only takes one argument.

Vue apps require a lot of information — information that will differ greatly from app to app. To accommodate this,
the Vue constructor doesn't attempt to take in each piece of information as its own parameter. This would require developers to keep careful track of which order arguments were expected in,
making it difficult to add properties or make changes.

Instead, the Vue constructor takes in only one object, called the options object. Each piece of information the Vue app needs to function
is added to the options object as a key-value pair. This means that developers can easily update or add information in the Vue app by just looking for the correct key in the options object.

We will see this in practice in the following exercises as we add information to our options object.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

el
In making a new Vue app, we gain access to all of the powerful features Vue has to offer. However, we don't necessarily want all of our HTML to have access to these features. We need to specify to our Vue app which portion of our HTML we want to gain access to our Vue app's logic.

We do this by adding a key-value pair to the Vue app's options object. We add a key called el, standing for HTML element, with a value of a CSS selector as a string that will target an element in our HTML and give it access to our Vue app's functionality.

// app.js
const app = new Vue({
el: '#app'
});
In the above example, we wanted an HTML element with an ID of app to gain access to our Vue app's functionality.
We added an el key to the options object and made the value '#app', a CSS selector that will target an element with an ID, #, of app.

<!-- index.html -->
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
    <script src="./js/app.js" defer></script>
</head>
<body>
<div id="app">
    <!-- Vue App HTML Code -->
</div>
</body>
In this example, we wrote the HTML that will be turned into a Vue app. Then, in the <head> we imported the file containing the JavaScript from the previous example that will turn the HTML #app <div> element into a Vue app.

    Note: We must import our Vue app code after the <script> that loads Vue.js. Otherwise, we would not yet have access to the Vue library in app.js, making it impossible to create a Vue app. This is also why we add defer to both elements — to ensure Vue has fully loaded when we go to make our Vue app.

        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    INTRODUCTION TO VUE
    Data
    Now that we've transformed our HTML into a Vue app, we're ready to make the magic happen!

        An essential feature all front-end frameworks must accomplish is rendering and updating dynamic data. Information like the number of likes on a social media post may change at any second. Front-end frameworks must make it easy to display these types of dynamic data and automatically update them for users as soon as they change.

        To display dynamic information we need:

        A place to store the data we will be displaying
    A syntax for displaying that information
    Let's tackle the first point.

    As mentioned in the last exercise, everything our Vue app needs should be provided on the options object when the Vue app is created. Therefore, all of our dynamic data will need to be specified in our options object at a property called data.

        const app = new Vue({
        el: '#app',
        data: {
            username: 'Michael'
        }
    });
    In this example, we added the data property to our options object. Apps need to display many pieces of dynamic data. To accommodate this, the value of .data is an object as well. Every piece of data will be added to the .data object as a key-value pair. In this case, we only added one piece of data called username with a value of 'Michael'.

        Note: In most apps, your code would likely get this data from a database (to find out what the user's actual name is), but for this lesson, we will hard-code some of our starting data for simplicity.

        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    INTRODUCTION TO VUE
    Templates
    As a reminder, we need the following tools to display dynamic information in our Vue app:

        A place to store the data we will be displaying
    A syntax for displaying that information
    We now know that we store our dynamic information on the .data attribute of our Vue app options object, but how do we display that information if it potentially will keep changing values?

        Vue makes use of templating meaning that the developer specifies certain content in our HTML isn't meant to be displayed literally but rather substituted out with the appropriate data from the app. We specify which content inside our HTML should be substituted by surrounding it in two layers of curly brackets, like so:

    <div id="app">
        <h2>Hello, {{ username }}</h2>
    </div>
    In this example, {{ username }} will be filled in with the value of username from the Vue app's .data object when the page is rendered to the user. If the value of username changes, the value displayed to the user will be changed as well.

    This type of HTML code, where dynamic data is stubbed out, is called a template. Templates contain all of the hard-coded information displayed on the site but specify places where dynamic information needs to be filled in.

    Using curly brackets for templating in HTML was popularized by a framework called mustache. As a result, curly braces in templates are often called "mustaches." Whenever you want to display information from the Vue app's data, you wrap the name of the .data property in two sets of mustaches (curly brackets) and the expression will be replaced with the Vue data information for the end user to see.

    This is far easier to read and write than trying to write vanilla JavaScript that selects specific HTML elements and updates their content dynamically. Using the .data attribute and mustache templates is yet another way Vue makes front-end web development faster to write, easier to read, and less error-prone.

        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    INTRODUCTION TO VUE
    Directives
    Let's check out one of Vue's coolest features: directives.

        Directives are custom HTML attributes built into Vue that accomplish incredibly complex, common front-end operations using barely any code.

        For example, one very common front-end need is to conditionally display elements. Let's say we only want to show a login button if a user isn't already logged in. We can add a v-if directive as an attribute to HTML elements like so:

        <button v-if="userIsLoggedIn">Log Out</button>
    <button v-if="!userIsLoggedIn">Log In</button>
    v-if acts an awful lot like JavaScript if - it will only display the HTML element it is on if the v-if statement returns true. In this case, it will check our .data for a value of userIsLoggedIn. Then it will only display our "Log Out" button if userIsLoggedIn is true and will only display our "Log In" button if it is false.

        Another complex, common front-end need is to render an array of items identically. We can use v-for as an attribute, like so:

        <ul>
    <li v-for="todo in todoList">{{ todo }}</li>
    </ul>
    Bam, just like that v-for will iterate through every item in our .data's todoList array, create a variable called todo containing each succesive array element, and create an li displaying each element in the list. Even if a new item is added to the list, the list will be re-rendered instantly to display that new item.

    One more super cool directive is v-model. v-model can be added to any form field and hooked up to our Vue app's data. Modifying the form field will then automatically modify the specified Vue app data!

    <input v-model="username" />
        The above input field will display the current value of username on the Vue app's data object and will change the value of username if the user modifies the value in the field. That's some complicated JavaScript implemented perfectly with very little code.

        As you may have noticed, every built-in Vue directive starts with v-. There are too many for us to cover in this lesson, however you can view a list of them all here. Just know that if there isn't a directive that does what you need — you can even make your own!

    Directives make complex front-end code easy to write, easy to read, and optimized for great site performance.

        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    INTRODUCTION TO VUE
    Components
    It is incredibly common to re-use complex elements throughout a front-end web app. For example, every post on Instagram or Facebook needs to look the same but contain different information. Additionally, they need to look the same on many different pages within the site and on many different devices. To make this easier, Vue has added the ability to create custom, reusable HTML elements called components.

        When creating a component, you provide a template that should be rendered whenever the component is used in HTML. You then specify which pieces of dynamic information, called props, the component can receive to fill in this template. When used in your HTML code, props look like normal HTML attributes, you add them to the opening tag of the component HTML element with a name and a value.

        Once you've created your component, you can then use it throughout your site just like any other HTML element. This means no copy/pasting of HTML code, no need to make the same change in multiple places across your site, and no potentially broken or misstyled elements.

    Knowing how and when to make components is a slightly more advanced topic, so we won't cover it in depth. However, that doesn't mean we can't play around with them right now. Let's check one out!
    
    