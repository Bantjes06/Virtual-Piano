//Event listener for when keys are pressed//
document.addEventListener("keydown", function (event) {
    //If statement for checking which key is pressed and playing correct audio//
    if (event.code == "KeyA") {
        let audioA = new Audio("/whitekeys/A.mp3");
        return audioA.play();
    } else if (event.code == "KeyS") {
        let audioS = new Audio("/whitekeys/S.mp3");
        return audioS.play();
    } else if (event.code == "KeyD") {
        let audioD = new Audio("/whitekeys/D.mp3");
        return audioD.play();
    } else if (event.code == "KeyF") {
        let audioF = new Audio("/whitekeys/F.mp3");
        return audioF.play();
    } else if (event.code == "KeyG") {
        let audioG = new Audio("/whitekeys/G.mp3");
        return audioG.play();
    } else if (event.code == "KeyH") {
        let audioH = new Audio("/whitekeys/H.mp3");
        return audioH.play();
    } else if (event.code == "KeyJ") {
        let audioJ = new Audio("/whitekeys/J.mp3");
        return audioJ.play();
    } else if (event.code == "KeyW") {
        let audioW = new Audio("/blackkeys/W.mp3");
        return audioW.play();
    } else if (event.code == "KeyE") {
        let audioE = new Audio("/blackkeys/E.mp3");
        return audioE.play();
    } else if (event.code == "KeyT") {
        let audioT = new Audio("/blackkeys/T.mp3");
        return audioT.play();
    } else if (event.code == "KeyY") {
        let audioY = new Audio("/blackkeys/Y.mp3");
        return audioY.play();
    } else if (event.code == "KeyU") {
        let audioU = new Audio("/blackkeys/U.mp3");
        return audioU.play();
    } else {
        console.log("Wrong key entered.")
    }
});
