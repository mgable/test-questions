// Please save all your work in https://jsfiddle.net/ 
// Return the jsfiddle.net link to your work
// Answer five out of the six questions
// Use test data when provided, however your functions should work with any similiarly structured data
// Use any additional libraries you like
// If you have any questions about this test, please email mgable@marketshare.com

// 1: Write a function that searches collection "projects" to find the object with the lowest "e" value and return that object's "i" value.
var projects = [{i:1, e:41}, {i:5, e:4}, {i:3, e:2}, {i:1, e:90}, {i:5, e:40}, {i:3, e:20}];

// 2: write a function that sorts collection "scenarios" by "lastModifiedOn" in descending order (most current first) and outputs the results.
var scenarios = [
  {
    "id": 1,
    "uuid": "b47be837de14692f22298ad0d8acf5a5",
    "name": "MASTER PROJECT",
    "description": "MASTER PROJECT",
    "isMaster": true,
    "auditInfo": {
      "createdOn": "2014-03-09T09:33:41.973Z",
      "createdBy": {
        "uuid": "system",
        "name": "me"
      },
      "lastUpdatedOn": "2014-03-09T09:33:41.973Z",
      "lastUpdatedBy": {
        "uuid": "system",
        "name": "me"
      }
    }
  },
  {
    "id": 2,
    "uuid": "9806c3d1fbe236f4be52055f24c9623a",
    "name": "Test calculation Sandesh",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2011-03-10T08:55:22.280Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2011-03-10T08:55:22.280Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  },
  {
    "id": 4,
    "uuid": "fbde082a08923612a4a70a73f7a563e5",
    "name": "My Renamed Project - 1426026460724",
    "description": "This is my new description - 1426026460750",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2015-02-10T22:34:48.166Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2015-02-10T22:35:30.033Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  },
  {
    "id": 3,
    "uuid": "117d4a091d2b3125bc43d18ae20d6962",
    "name": "Chengchang Scenario Calculation Test",
    "description": "my new description",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2014-03-10T16:59:24.334Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2014-03-10T23:58:46.575Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  },
  {
    "id": 5,
    "uuid": "2ccd9efe05623c84b358fea1684832f1",
    "name": "My Renamed Project - 1426117320056",
    "description": "This is my new description - 1426117320078",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2015-01-11T23:49:14.161Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2015-01-11T23:49:57.248Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  },
  {
    "id": 6,
    "uuid": "bb48e52a0cbd36869a6364152a8e9fc4",
    "name": "My Renamed Project - 1426118490264",
    "description": "This is my new description - 1426118490279",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2014-04-12T00:08:30.789Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2014-04-12T00:09:12.766Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  },
  {
    "id": 7,
    "uuid": "2891aa64223532aabff05a8c4ec76d6c",
    "name": "My Renamed Project - 1426119218963",
    "description": "This is my new description - 1426119218980",
    "isMaster": false,
    "auditInfo": {
      "createdOn": "2015-03-12T00:20:41.768Z",
      "createdBy": {
        "uuid": "UUID-1",
        "name": "me"
      },
      "lastUpdatedOn": "2015-03-12T00:21:25.463Z",
      "lastUpdatedBy": {
        "uuid": "UUID-1",
        "name": "me"
      }
    }
  }]

// 3: write a function which takes an array of words and a string and finds all occurances of each array word in the string and returns that data as a collection.
// findWords(["cat", "at"], "Of the many cats in the catacombs, only the black cat and the white cat where at bat") // returns [{"cat": 2}, {"at": 1}]
// findWords(["foo", "bar", "a"], "after a foo, bar and foobar, we all went to a bar ") // returns [{"foo": 1}, {"bar": 2}, {"a":2}]

// 4: Write a function that sums all the values of "data". 
var data = [[[1,2,3,4,5],[[1],[2],[3],[4],[5],[6],[[1]]],[9,8,7,6,5,[1,2,3]]],[10,20,30,40,50],[21,33,55,66,77,88],[11,12,13,14,15,16,17,18,19],[[1000,1234],154,2122],[45,66,88,99,100,101]];

// 5: write function "makeObject" which takes two strings as parameters and returns an object. The first parameter will be the nested object made, and the second parameter will be the value of that object.
// makeObject("foo.bar", "buzz") // returns {foo: {bar: "buzz"}}
// makeObject("one.two.three", "foobar")  // returns {one: {two: {three: "foobar"}}}
// makeObject("kingdom.phylum.class.order", "primates")  // returns {kingdom: {phylum: {class: {order: "primates"}}}}

// 6: when sorting an array of names and acronyms, all of the acronyms are listed at the top. Please make it so sorting an array puts all items in the correct alphabetal order
var data = [
	'ACL',
	'accelerated graphics port',
	'ATM',
	'Address Resolution Protocol',
	'American Standard Code For Information Interchange',
	'Active Server Page',
	'ASP'
]

console.info(data.sort()) //["ACL", "ASP", "ATM", "Active Server Page", "Address Resolution Protocol", "American Standard Code For Information Interchange", "accelerated graphics port"]

//What we want the return to be is ["accelerated graphics port", "ACL", "Active Server Page", "Address Resolution Protocol", "American Standard Code For Information Interchange", "ASP", "ATM"]


