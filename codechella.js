let Twit = require('Twit')
const express = require('express');
let app = express();

app.use(express.static("public"));

app.set("view engine", "pug");

app.use(express.json());

app.get('/', loadIndex);

function loadIndex(req, res, next){
    res.render("index");
}



var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

arrUser = []

    T.get('https://api.twitter.com/1.1/followers/ids.json', { screen_name: 'muktamanhas' }, function(err, data, response){
        arrUser = data['ids'][3]
        console.log(arrUser)
        console.log('https://api.twitter.com/1.1/users?id='+ arrUser)
        T.get('https://api.twitter.com/1.1/users/lookup.json?user_id=1210451819102535681', function(err, data, response){
            console.log(data)
        });
        

})



// function getFollowers(){
//     T.get('https://api.twitter.com/1.1/followers/list.json', { screen_name: 'twitter' }, function(err, data, response){
//         arrUser.push(data.users);

//         while(data['next_cursor'] != 0){
//             cursor = data['next_cursor']
//             var url = 'https://api.twitter.com/1.1/followers/list.json?cursor=' + cursor;
//             T.get(url, { screen_name: 'twitter',}, getFollowers);
//         }
//         console.log(arrUser)

//     })

// }
// getFollowers()


// T.get('https://api.twitter.com/1.1/followers/list.json', { screen_name: 'muktamanhas' },  function (err, data, response) {
//     // lengthID = data.ids.length
//     // console.log(data.ids);
//     console.log(data);
//     // for (let i = 0; i < data.ids.length; i++){
//     //     T.get('https://api.twitter.com/1.1/users/show.json?id=' + data.ids[i], { screen_name: 'muktamanhas' },  function (err, data, response) {
//     //         console.log(response);

//     //     })
// userArr = []
// function getData(err, data, response){
//     console.log(data)
//     console.log(data.users.length)
    // console.log(data.users)
    // console.log()
    // for (let i = 0; i < data.users.length; i++){
    //     newObj = { screen_name : data.users[i]['screen_name'],
    //                 profile_image_url : data.users[i]['profile_background_image_url']
    //             };
    //     userArr.push(newObj);
    // }
    // if(data['next_cursor'] > 0){
    //     T.get('https://api.twitter.com/1.1/followers/list.json', { screen_name: 'twitter', cursor: data['next_cursor'] }, getData);
    // }

// T.get('https://api.twitter.com/1.1/followers/list.json', { screen_name: 'twitter' }, getData)

// console.log(userArr)


//     T.get('https://api.twitter.com/1.1/followers/list.json', { screen_name: 'muktamanhas' },  function (err, data, response) {
//         userArr = []
//         for (let i = 0; i < data.users.length; i++){
//             newObj = { screen_name : data.users[i]['screen_name'],
//                        profile_image_url : data.users[i]['profile_background_image_url']
//                     };
//             userArr.push(newObj);
//         }

//         if(data['next_cursor'] > 0){
//             T.get('followers/ids', { screen_name: 'twitter', next_cursor: data['next_cursor'] }, getData);
//         } 

// })
//         console.log(userArr)
//         //console.log(data.users[0]['screen_name'])
//       })

// })

app.listen(3000);
console.log("Server listening at http://localhost:3000");
