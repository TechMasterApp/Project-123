lwx = 0
lwy = 0
rwx = 0
rwy = 0
nx = 0
ny = 0

function preload() {
    
}

function setup() {
 canvas = createCanvas(600, 400)
 canvas.center()
 video = createCapture(VIDEO)
 video.position(100, 225)
 video.size(400, 500)
 posenet = ml5.poseNet(video, modelLoaded)
 posenet.on("pose", gotResult)
}

function draw() {

}

function modelLoaded() {

}

function gotResult(result) {
    if (result.length != 0) {
        lwx = result[0].pose.leftWrist.x
        lwy = result[0].pose.leftWrist.y
        rwx = result[0].pose.rightWrist.x
        rwy = result[0].pose.rightWrist.y
        nx = result[0].pose.nose.x
        ny = result[0].pose.nose.y
    }
}