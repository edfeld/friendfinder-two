
var friends = function () {
    
    let arrFriends = [
        {
            "name":"Ahmed",
            "photo":"https://i.kym-cdn.com/entries/icons/original/000/006/792/will-ferrell-in-anchorman-the-movie.jpg",
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
            "photo":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/NeoTheMatrix.jpg/220px-NeoTheMatrix.jpg",
            "scores":[
                3,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                4,
                4
                ]
        },
        {
            "name":"Leslie",
            "photo":"https://vignette.wikia.nocookie.net/neopedia/images/1/11/The-matrix-revolutions-2003-orig-27831.jpeg/revision/latest?cb=20120313120452&path-prefix=ru",
            "scores":[
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
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