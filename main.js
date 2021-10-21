disneyTheme_song = "";
harryPotter_song = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    disneyTheme_song = loadSound("disney_theme_song.mp3");
    harryPotter_song = loadSound("harry_potter_song.mp3");
}

function setup() {
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function draw() {
    image(video, 0, 0, 600, 400);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        console.log("Left Wrist X= ", leftWristX);

        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist Y= ", leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right Wrist X= ", rightWristX);

        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist Y= ", rightWristY);
    }
}