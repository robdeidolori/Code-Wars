// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases. 


//Array of users who liked post
let peopleWhoLike = []

//function to return desired text
function displayWhoLikes(){
    let likes = peopleWhoLike.length
    if (likes == 0){
        return "no one likes this"
    } else if (likes == 1){
        return `${peopleWhoLike[0]} likes this`
    } else if (likes == 2){
        return `${peopleWhoLike[0]} and ${peopleWhoLike[1]} like this`
    } else if (likes == 3){
        return `${peopleWhoLike[0]}, ${peopleWhoLike[1]}, and ${peopleWhoLike[2]} like this`
    } else {
        return `${peopleWhoLike[0]}, ${peopleWhoLike[1]} and ${likes - 2} others like this`
    }
}

//insert returned string into element with id of #displayWhoLikes
document.querySelector('#displayWhoLikes').innerHTML = displayWhoLikes()