// Please save all your work as separate fiddles at https://jsfiddle.net/ 
// Return the jsfiddle.net links to your work, one link per question
// Answer at least five out of the seven questions (you can answer them all if you like)
// Use test data when provided, however your functions should work with any similiarly structured data
// Use any additional libraries you like
// Error trapping is optional
// If you have any questions about this test, please email mark.gable@drinks.com

// 1: Write a function that searches collection "projects" to find the object with the lowest "e" value and return that object's "i" value.
// getLowestValue([{i:10, e: 100},{i:20, e: 200}]); // returns 10
var projects = [{i:1, e:41}, {i:5, e:4}, {i:3, e:2}, {i:1, e:90}, {i:5, e:40}, {i:3, e:20}];

// 2: Write a HTML layout which has three columns which stretch 100% of the height of the browser, where the left and right column are 200px wide and the center column fills the leftover width. See example here - https://raw.githubusercontent.com/mgable/test-questions/master/question-2.jpg

// 3: write a function which takes an array of words and a string and finds all occurances of each array word in the string and returns that data as a collection.
// findWords(["cat", "at"], "Of the many cats in the catacombs, only the black cat and the white cat where at bat"); // returns [{"cat": 2}, {"at": 1}]
var words = ["foo", "bar", "a"];
var sentence = "after a foo, bar and foobar, we all went to a bar";

// 4: Write a function that sums all the values of "data". 
// addArrays([[1,2,3],[1]]); // returns 7
var data = [[[1,2,3,4,5],[[1],[2],[3],[4],[5],[6],[[1]]],[9,8,7,6,5,[1,2,3]]],[10,20,30,40,50],[21,33,55,66,77,88],[11,12,13,14,15,16,17,18,19],[[1000,1234],154,2122],[45,66,88,99,100,101]];

// 5: write function "makeObject" which takes two strings as parameters and returns an object. The first parameter will be the nested object made, and the second parameter will be the value of that object.
// makeObject("foo.bar", "buzz"); // returns {foo: {bar: "buzz"}}
// makeObject("one.two.three", "foobar");  // returns {one: {two: {three: "foobar"}}}
// makeObject("kingdom.phylum.class.order", "primates");  // returns {kingdom: {phylum: {class: {order: "primates"}}}}

// 6: Write a HTML layout which has three nested div's which are all different widths and heights but are all horizonally and vertically centered within each other and then centered vertically and horizonally within the body. See example here - https://raw.githubusercontent.com/mgable/test-questions/master/question-6.jpg

// 7: write a function that arranges collection "scenarios" by "createdOn" in descending order (most current first) and returns the results.

var scenarios = [{
  "id":3,
   "name": "MASTER PROJECT",
   "description": "MASTER PROJECT",
   "auditInfo": {
     "createdOn": "March 10, 2014",
     "createdBy": {
       "uuid": "system",
       "name": "me"
     }
   }
 },
 {
   "id":1,
   "name": "Test calculation",
   "description": "Test calculation",
   "auditInfo": {
     "createdOn": "October 1, 2011",
     "createdBy": {
       "uuid": "system",
       "name": "me"
     }
   }
 },
 {
   "id": 2,
   "name": "My Renamed Project - 1426026460724",
   "description": "This is my new description - 1426026460750",
   "auditInfo": {
     "createdOn": "June 15, 2013",
     "createdBy": {
       "uuid": "system",
       "name": "me"
     }
   }
 }]

