let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

//API URL
let url = "https://meme-api.herokuapp.com/gimme/";

//ARRAY SUBREDDIT
let subreddit = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function to get Random Meme

let getMeme = () => {
    //choose a random sub from the sub array
    let randomSub = subreddit[Math.floor(Math.random() * subreddit.length)];
    //Fetch data Api
    fetch(url + randomSub).then(resp => resp.json()).then(data => {
        let memeImg = new Image();
        //Display Meme and title only after img loads
        memeImg.onload = () => {
            meme.src = data.url;
            title.textContent = data.title;
        };
        memeImg.src = data.url;
    })
}

//call the btn
getMemeBtn.addEventListener("click", getMeme); 
window.addEventListener("load", getMeme);