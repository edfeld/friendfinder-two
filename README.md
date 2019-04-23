# FriendFinder

![FriendFinder_2](https://user-images.githubusercontent.com/18557337/56592155-f15aab00-659e-11e9-9a95-92eef2ff51d9.png)

## An application similar to a dating application, built on Node and Express

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with the question.

2. The `server.js` file requires the npm packages, `express` and `path`.

3. Your `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains three routes, including:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
   * A GET route with the url `/api/friend/:friendIndex`.  This will return the JSON display of one friend based on the index value passed that corresponds to the friends array index value.
   * A GET route, `/api/questions`.  This returns a JSON of all of the survey questions.

5. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects has follow the format below.

```json
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
}
```

6. The user's most compatible friend is determined by using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once the current user's most compatible friend, the result is displayed as a modal pop-up.
   * The modal displays both the name and picture of the closest match.
