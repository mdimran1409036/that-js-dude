import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Tutorial from './Tutorial'
const tutorialsData = [
    { title: 'Angular2 Tutorial', details: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the perfect video for you" },
    { title: "50 Dev tool Tips", details: "f you have some idea about dev tool and want to become a master..this is the right video for your" },
    { title: "scope & closure", details: "Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand." },
    { title: "Interview Questions", details: "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing." },
    { title: "Angular Interview Question", details: "A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular." },
    { title: "this", details: "Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video..." },
    { title: "array", details: "Array is the mostly used Data stucture. And in Javascript it is at least 3 one of the key data structure that you have to use to master. This video will tell you 15 hidden features that witll make u expert in JavaScript array." },
    { title: "React Workshop for beginners", details: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help." },
    { title: "console", details: "To be a decent web developer you have to know developer tool. If you want to be a better JavaScript developer, you have to master in the console tab of dev tool. there is no exception. no hanky panky..." }
]
const Main = () => {
    return(
        <div className="container">
            <div className="left-container">
                <div class="js-confusing-parts">
                    <h2>JS Confusing Parts</h2>
                    <p>Understand <span>this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers</span> and
                        many more caveats.</p>

                </div>
                <div className="tutorials">
                    {
                        tutorialsData.map(tutorial => <Tutorial tutorial={tutorial}></Tutorial>)
                    }
                </div>

            </div>
            <Sidebar></Sidebar>
        </div>
    )
    
}


export default Main;