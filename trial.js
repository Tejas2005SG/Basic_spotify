let songindex = 0;
let audioelement = new Audio("song-1.mp3");
let play$button = document.getElementById("masterplay")
let progress$bar = document.querySelector("#songrange");
let gif = document.querySelector("#gif");
let songItems = Array.from(document.getElementsByClassName("songitems"));

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
// let audioelement = new Audio("song1.mp3");
audioelement.play();