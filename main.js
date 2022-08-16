function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(800, 800);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 800, 800);
}