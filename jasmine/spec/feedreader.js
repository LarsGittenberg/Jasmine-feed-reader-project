/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */


$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has url and url not empty',function(){
            let gotProperUrl = true;//boolean flag
            for (let i = 0; i<allFeeds.length; i++) {
                //test to see that each item in the allFeeds array has a .url property
                //gotProperUrl changes to false if any of the feeds does not have a .url property
                if (!allFeeds[i].hasOwnProperty('url') ) {
                    gotProperUrl = false;
                }
                 //test to see each .url property has an 'http' in its string value
                if (!/http/.test(allFeeds[i].url) ) {
                    gotProperUrl = false;
                }
            };
            expect(gotProperUrl).toBe(true);
        });//end it

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has feed name and feed name not empty',function(){
            let gotProperName = true;//boolean flag
            for (let i = 0; i<allFeeds.length; i++) {
                //test to see that each item in the allFeeds array has a .name property
                if (!allFeeds[i].hasOwnProperty('name') ) {
                    gotProperName = false;
                }
                //test to see each .name property has a space in its string value
                if (!/ /.test(allFeeds[i].name)) {
                    gotProperName = false;
                }
            };
            expect(gotProperName).toBe(true);
         });//end it

     });//end describe


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
            //if menu is hidden, body should have a class menu-hidden
            let gotHiddenClass = $('body').hasClass('menu-hidden');
            expect(gotHiddenClass).toBe(true);
        });//end it

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('toggles on click',function() {
            //select menu icon using jquery, then trigger a click, the body should lose the menu-hidden class
            let menuIconTest = $('.menu-icon-link');
            menuIconTest.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //trigger a click again, the body should have the class menu-hidden toggle back again
            menuIconTest.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });//end it

    });//end describe


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initital Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('has an article.entry element in .feed container', function(done) {
            let entryInFeed = $('.feed').find('article.entry');
            expect(entryInFeed[0]).toBeDefined();
            done();
         });//end it

    });//end describe


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstArticles = [];//array container that will contain the
        //titles of the first articles of two different feed categories

        //getH2Title function we will call in both asynchronous calls of loadfeed below, designed
        //to fetch the text of the article titles and pushed into the [] array 'firstArticles'
        var getH2Title = function() {
            var feedList = $('.feed').find('article.entry');
            var articleH2 = $(feedList[0]).find('h2');
            var articleH2Text = $(articleH2).text();
            firstArticles.push(articleH2Text);
        };

        beforeEach(function(done) {
            loadFeed(0, function() {
                getH2Title();
            });

            loadFeed(1, function() {
                getH2Title();
                done();
            });
        });//end beforeeach

        it('changes content', function(done) {
            //remember, firstArticles array contains text from first css feed and first ublog feed
            console.log(firstArticles[0]);
            console.log(firstArticles[1]);

            expect(firstArticles[0]).not.toContain(firstArticles[1]);
            done();
        });//end it

     });//end describe


}());//end jquery fx

