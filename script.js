noseX = 0;
noseY = 0;
function preload(){
    mushtache = loadImage("https://i.postimg.cc/255s0JBK/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', gotPose);
}

function modelLoaded(){
    console.log("pose model Loaded");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mushtache, noseX-28, noseY, 60, 30);
}

function takeSnapshot(){
    save("realtime_filter.png");
}