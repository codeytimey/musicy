peter=music2.mp3;
harry=music.mp3;
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload() {
    h_song=loadSound(harry);
    p_song=loadSound(peter);
}

function setup() {
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet Initialized");
}

function gotPoses(results) {
    if (results.length>0){
    console.log(results);

    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    console.log("leftwristX = "+leftwristX+ " leftwistY = "+leftwristY);

    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
    console.log("rightwristX = "+rightwristX+ " rightwristY = "+rightwristY);

    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

