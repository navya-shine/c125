noseX=0;
noseY=0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,470);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialised ');
}
function gotPoses(results)
{
    if(results>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor( leftwristX - rightwristX )
        console.log("leftWrist = " + leftwristX + "rightWrist = " + rightwristX + "difference = " + difference);
    }
}
function draw()
{
    background('#5D5C5C');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}