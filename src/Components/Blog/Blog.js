import React from "react";
import {FaHandPointRight} from "react-icons/fa";

const Blog = () => {
  return (
        <div className="min-h-screen p-10">
            <h1 className="text-center text-4xl font-light text-white mb-5">BLOG</h1>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl flex gap-2 items-center font-medium">
                <FaHandPointRight className="text-sky-700"></FaHandPointRight>
                <h1>What are the different ways to manage a state in a React application?</h1>
                </div>
                <div className="collapse-content">
                <p>useState is the first tool you should reach for to manage state in your components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                <p>useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl flex gap-2 items-center font-medium">
                <FaHandPointRight className="text-sky-700"></FaHandPointRight>
                <h1>How does prototypical inheritance work?</h1>
                </div>
                <div className="collapse-content">
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                <img className="my-4 rounded-3xl" src='https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png' alt="proto-type"/>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl flex gap-2 items-center font-medium">
                <FaHandPointRight className="text-sky-700"></FaHandPointRight>
                <h1>What is a unit test? Why should we write unit tests?</h1>
                </div>
                <div className="collapse-content">
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title flex gap-2 items-center text-xl font-medium">
                <FaHandPointRight className="text-sky-700"></FaHandPointRight>
                <h1>React vs. Angular vs. Vue?</h1>
                </div>
                <div className="collapse-content">
                <span className="text-white">React</span>
                <p>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>
                <span className="text-white">Vue</span>
                <p>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                </p>
                <span className="text-white">Angular</span>
                <p>
                Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
