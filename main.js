disneyTheme_song = "";
harryPotter_song = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

score_leftWrist = 0;
score_rightWrist = 0;

disneyTheme_status = "";
harryPotter_status = "";

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
    fill("#ff0000");
    stroke("#6e2bc8");

    //Code for leftWrist
    disneyTheme_status = disneyTheme_song.isPlaying();

    if (score_leftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);

        harryPotter_song.stop()

        if (disneyTheme_status == false) {
            disneyTheme_song.play();

            document.getElementById("song_name").innerHTML = "Playing Disney Theme Song";
        }
    }

    //Code for rightWrist
    harryPotter_status = harryPotter_song.isPlaying();

    if (score_rightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);

        disneyTheme_song.stop()

        if (harryPotter_status == false) {
            harryPotter_song.play();

            document.getElementById("song_name").innerHTML = "Playing Harry Potter Song";
        }
    }
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        score_leftWrist = results[0].pose.keypoints[9].score;

        score_rightWrist = results[0].pose.keypoints[10].score;

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