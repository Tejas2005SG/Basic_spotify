

//initialize 
let songindex = 0;
let audioelement = new Audio("Songs/song-1.mp3");
let play$button = document.getElementById("masterplay")
let progress$bar = document.querySelector("#songrange");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.getElementsByClassName("songitems"));
let songName = document.getElementById("songName");

// audioelement.play();
let songlist = [
    { songname: "Teri Jhuki Nazar", filepath: "song-1.mp3", coverimage: "songimages/songimage-1.jpeg" },
    { songname: "Nakharewali", filepath: "song-2.mp3", coverimage: "songimages/songimage-2.jpeg" },
    { songname: "Tum Hi Ho", filepath: "song-3.mp3", coverimage: "songimages/songimage-3.jpeg" },
    { songname: "Chale Aana", filepath: "song-4.mp3", coverimage: "songimages/songimage-4.jpeg" },
    { songname: "Tu He Kahan", filepath: "song-5.mp3", coverimage: "songimages/songimage-5.jpeg" },
    { songname: "Humnava Mere", filepath: "song-6.mp3", coverimage: "songimages/songimages-6.jpeg" },
    { songname: "Shikayat", filepath: "song-7.mp3", coverimage: "songimages/songimages-7.jpeg" },

];


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songlist[i].coverimage;
    element.getElementsByClassName("songName")[0].innerText = songlist[i].songname;
});

//handle playand pause
play$button.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        play$button.classList.remove("fa-play");
        play$button.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        play$button.classList.remove("fa-pause");
        play$button.classList.add("fa-play");
        gif.style.opacity = 0;

    };
})


// progress bar code
audioelement.addEventListener("timeupdate", () => {
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    progress$bar.value = progress;

});

progress$bar.addEventListener("change", () => {
    audioelement.currentTime = ((progress$bar.value * audioelement.duration) / 100);
})

const makePlay = () => {
    Array.from(document.getElementsByClassName("songPlayItem")).forEach(element => {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
        // element.classList.add("fa-play");

    });
}

Array.from(document.getElementsByClassName("songPlayItem")).forEach(element => {
    element.addEventListener("click", (evt) => {
        makePlay();
        songindex = parseInt(evt.target.id);
        evt.target.classList.remove("fa-play");
        evt.target.classList.add("fa-pause");
        audioelement.src = `song-${songindex + 1}.mp3`;
        songName.innerText = songlist[songindex].songname;

        audioelement.currentTime = 0;
        audioelement.play();
        play$button.classList.remove("fa-play");
        play$button.classList.add("fa-pause");
        gif.style.opacity = 1;


    });

});


document.querySelector("#forward").addEventListener("click", () => {
    if (songindex >= 7) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `song-${songindex + 1}.mp3`;
    songName.innerText = songlist[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    play$button.classList.remove("fa-play");
    play$button.classList.add("fa-pause");
    gif.style.opacity = 1;
    
});

document.querySelector("#backward").addEventListener("click", () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `song-${songindex + 1}.mp3`;
    songName.innerText = songlist[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    makePause();
    play$button.classList.remove("fa-play");
    play$button.classList.add("fa-pause");
    gif.style.opacity = 1;
});

function trial() {
    Array.from(document.getElementsByClassName("songPlayItem")).forEach(element => {
        element.addEventListener("click", (evt) => {
            console.log(evt.id)


        })
    })
}
trial()