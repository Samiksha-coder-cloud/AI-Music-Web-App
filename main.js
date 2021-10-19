disneyTheme_song = "";
harryPotter_song = "";

function preload() {
    disneyTheme_song = loadSound("disney_theme_song.mp3");
    harryPotter_song = loadSound("harry_potter_song.mp3");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 400);
}