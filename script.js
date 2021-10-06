function preload(){

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
        console.log("noseX: " + results[0].pose.nose.x);
        console.log("noseY: " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function takeSnapshot(){
    save("realtime_filter.png");
}