
var friends = function () {
    
    let arrFriends = [
        {
            "name":"Ahmed",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[
                5,
                1,
                4,
                4,
                5,
                1,
                2,
                5,
                4,
                1
                ]
        },
        {
            "name":"Billy Bob",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[
                3,
                3,
                4,
                4,
                5,
                1,
                5,
                5,
                5,
                5
                ]
        },
        {
            "name":"Leslie",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3
                ]
        }
    ];

    this.getFriends = function(){
        return arrFriends;
    },

    this.getFriend = function( myIndex) {
        console.log("myINdex: ", myIndex);
        return arrFriends[parseInt(myIndex)];
    }

    this.sayHello = function () {
        return "Hello";
    }

}

module.exports = friends;