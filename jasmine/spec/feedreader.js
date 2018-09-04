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
         //changed it spec per udacity review...see original solution using 'hasOwnProperty' technique in git history
        it('url defined and url not empty', function() {
            for(var i = 0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });//end it

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //changed it spec per udacity review...see original solution using 'hasOwnProperty' technique in git history
        it('has feed name and feed name not empty',function(){
            for(var i = 0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
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
         /*
         beforeEach version below is more 'dry' than above:
         beforeEach(function(done) {
            loadFeed(0, done);
         });
         But will keep the more 'verbose' code as it helps me think of
         how to solve the 'double' asynchronous functions in 'New Feed Selection' suite
         */
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
        let firstArticles = [];//array container that will contain the
        //titles of the first articles of two different feed categories

        //getH2Title function we will call in both asynchronous calls of loadfeed below, designed
        //to fetch the text of the article titles and pushed into the [] array 'firstArticles'
        let getH2Title = function() {
            let feedList = $('.feed').find('article.entry');
            let articleH2 = $(feedList[0]).find('h2');
            let articleH2Text = $(articleH2).text();
            firstArticles.push(articleH2Text);
        };
        /*insde the beforeEach fx below note that loadFeed(0), an async fx,
        contains a callback, another async fx, loadFeed(1).
        This is structurally/conceptually different from my solution, where the beforeEach
        fx contains two loadFeed calls on the same scope called sequentially, where only the
        last loadFeed call has the jasmine callback done();
        */
        beforeEach(function(done) {

            loadFeed(0, function() {
                //feed 0 done loading!
                //get the title of the first article from this feed/loadFeed0

                getH2Title();
                loadFeed(1, function(){
                    //feed 1 done loading!
                    //get the title of the first article from this feed/loadFeed1
                    getH2Title();

                    // all variables initialized, can begin tests, signal jasmine with done()
                    done();//*** see note below

                });//end loadFeed1
                //done(); ....***note the done() call cannot be here inside loadFeed(0)!
                //it must be inside loadFeed(1) because if inside loadFeed(0), loadfeed0 may 'exit' and
                //erroneously signal jasmine all is done, and not wait for loadfeed(1) to execute.
                //I think this is the point of the Udacity Review #1's comments.
            });//end loadFeed0

        });//end beforeEach

        it('changes content', function(done) {
            //remember, firstArticles array contains text from first css feed and first ublog feed
            console.log(firstArticles[0]);
            console.log(firstArticles[1]);

            expect(firstArticles[0]).not.toContain(firstArticles[1]);
            done();
        });//end it

     });//end describe


}());//end jquery fx

