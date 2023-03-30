// DECLARING CONSTANTS AND VARIABLES
//Object-array
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/avatar-vangogh.jpg",
        bild: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked:false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        bild: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked:false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        bild: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked:false
    }
]

//Constants / Variables
const likeSector=document.getElementById("likeCommentsSection")
const mainPicture=document.getElementById("mainPic-el")
const profileHead=document.getElementById("ProfileHeader")
const countBtn=document.getElementById("counting")
const heartBtn=document.getElementById("heartBtn-el")
let likes=false
let counter=0

// FUNCTIONS
// Startup function to render output
run(counter)

function run(x){
    displaySectionProfiler(x)
    displayMainImage(x)
    displayLikesComments(x)
}   

//HTML display Functions
function displaySectionProfiler(x){   
 profileHead.innerHTML=`<img class="profilepicPoster" alt="avatar of "id="avatar-el" src="${posts[x].avatar}">          
                        <div class="spacing-top">
                        <p id="name-el">${posts[x].name}</p>
                        <p id="location-el">${posts[x].location}</p>
                        </div>`                 
}
    
function displayMainImage(x){
    mainPicture.innerHTML=`<img class="post-pic" alt="posted picture of " src="${posts[x].bild}">`
}

function displayLikesComments(x){
    likeSector.innerHTML=`  <p class="likes-text" >${posts[x].likes} likes</p>
                            <p><span class="desc-el">${posts[x].username}</span> ${posts[x].comment}</p>
                            `
    
}

//Button Functions
heartBtn.addEventListener("click", function() {
    if (posts[counter].liked === false) {
      let add = posts[counter].likes
      add += 1
      posts[counter].likes = add
      displayLikesComments(counter)
      posts[counter].liked = true
    } else if (posts[counter].liked === true) {
      let sub = posts[counter].likes
      sub = sub - 1
      posts[counter].likes = sub
      displayLikesComments(counter)
      posts[counter].liked = false
    }
})

countBtn.addEventListener("click", function(){
    counter=counter+1
    if (counter>=posts.length){
        counter=0
        }
    run(counter)
    }
)