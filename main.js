song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 800, 800);
}

function modelLoaded() {
    console.log("The ml5 PoseNet model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        //scoreLeftWrist = results[0].pose.keypoints[9].score;
        //console.log("Left wrist score: " + scoreLeftWrist);

        //  scoreRightWrist = results[0].pose.keypoints[10].score;
        // console.log("Right wrist score: " + scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X coordinate is " + leftWristX + " and Y coordinate is " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X coordinate is " + rightWristX + " and Y coordinate is " + rightWristY);
    }

}