# Feed Reader Testing Project

- Project: Using Jasmine, a testing framework for javascript, student is tasked with setting suites of tests for "test-driven development" of a browser based feed reader app. The feed reader app's html, css and js are already built, but the Jasmine tests are left incomplete, for which the student is left to build up.
- This project is a student submission, and the Jasmine tests have been implemented (Udacity review pending).
- The project is part of the requirements for completion of [Udacity's Front End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
- This project assumes that the student has gone through Udacity's Course on [Javascript Testing ](https://www.udacity.com/course/javascript-testing--ud549) with Mike Wales.
- The project files have been cloned from Udacity's [Feed Reader Testing Project in Github](https://github.com/udacity/frontend-nanodegree-feedreader).
- You can view Udacity's rubric/instructions for students in the [Udacity Classroom](https://classroom.udacity.com/me).


## Table of Contents

- [Background Info](#bkginfo)
- [Dependencies](#dependencies)
- [Instructions](#instructions)
- [Project Goal](#projectgoal)
- [Project Behavior](#projectbehavior)

## <a name="bkginfo"></a>Background Info
_(excerpted from original Udacity Project readme file)_

### Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


### What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## <a name="dependencies"></a>Dependencies
The project uses several CDNs and dependencies - you will need to have internet access and a browser for the feed reader app + it's dependencies to work. Among the CDNs you'll need:
- [Google Font Library](http://fonts.googleapis.com)
- [jQuery's CDN Library](https://code.jquery.com/jquery/)


## Instructions

Clone/download the [Feed Reader JS Testing Project in Github](https://github.com/udacity/ud549).
For the 'feed reader app' functionality, the following files are needed, and are already provided locally:
- index.html
- css files normalize.css, icomoon.css, style.css
- app.js (this is the JS file you'll be using Jasmine to test and see if the code/script in it works as expected)

For the Jasmine testing framework functionality, all files are also already included. For future reference, they can be obtained and downloaded from the [Jasmine Github repo](https://github.com/jasmine/jasmine). There you'll find detailed instructions on the necessary script files that need to be called in your html file.

In Jasmine based 'test driven development', you the tester would normally need to create a js 'spec' file where you'll build your test suite and specs. For this project, it already comes with a spec file, named feedreader.js file. You'll find it in the jasmine/spec subfolder.

This project is already complete/solved (Udacity review pending). To inspect, open index.html in a browser. You'll see the feed reader in action, with sliding menu and dynamic feed depending on the category selected from menu. If you scroll down to the bottom of the index page, you will see the Jasmine tester functionality. All of the tests should have passed, and the current state of the specs should be green, ie the test passed. Each green dot represents a passed test. Test that fail will be in red 'x's, with Jasmine explaining the test and what the actual expected outcome should have been.

## <a name="projectgoal"></a>Project Goal
- The project goal is to work in a red/green refactoring process, analyzing the functionality of the Feed Reader app in app.js, along with its related html and css, build up a suite of behavioral expactations, and then testing those expectations.

## <a name="projectbehavior"></a>Project Workflow/Behavior
- Jasmine provides the tester with built-in testing functions such as describe() and it(), along with other helper functions such as done(). You, the coder, will use your JS know-how and build a suite of these testing functions and test them against expected outcomes based on the intended behavior of the feed reader app. To learn more about Jasmine's tester functions and nomenclature visit:
- [Jasmine Documentation Page](https://jasmine.github.io/pages/getting_started.html)

- [Jasmine Functions Introduction Tutorial](https://jasmine.github.io/2.0/introduction.html)





