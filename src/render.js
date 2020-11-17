const { remote } = require('electron');
const { dialog } = remote;
var pathToFfmpeg = require('ffmpeg-static');
const shell = require('any-shell-escape')
const { exec } = require('child_process')

// Buttons
const videoElement = document.getElementById("my-video");
const chooseFileBtn = document.getElementById("videoSelectBtn");
const muteButton = document.getElementById("muteBtn");
const closeButton = document.getElementById("close-btn")

var currentVideoPath = '';
var defaultFileName = '';

chooseFileBtn.onclick = getVideoFile;
muteButton.onclick = muteVideoFile;

closeButton.addEventListener("click", e => {
    window.closeWindow();
});

// Load the file into the player for convenience
function getVideoFile() {
    filePath = dialog.showOpenDialogSync({ 
        properties: ['openFile'] });
    
    if (filePath) {
        videoElement.src = filePath;
        currentVideoPath = filePath.toString();
        defaultFileName = getFileName(currentVideoPath);
        //console.log(defaultFileName);
    }
}

function muteVideoFile() {
    filePath = dialog.showSaveDialogSync({
        buttonLabel: 'Save video',
        defaultPath: `muted-${defaultFileName}`
    });

    const makeMutedMP4 = shell([
        pathToFfmpeg, '-i', currentVideoPath,
        '-c', 'copy', '-an', filePath
    ])

    //console.log(currentVideoPath);
    //console.log(filePath);
    //console.log(makeMutedMP4);
    if (filePath) {
        exec(makeMutedMP4, (err) => {
            if (err) {
                console.error(err)
                process.exit(1)
            } else {
                console.info('done!')
            }
        })
    }
}

function getFileName(file) {
    var startIndex = (file.indexOf('\\') >= 0 ? file.lastIndexOf('\\') : file.lastIndexOf('/'));
    var filename = file.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    return filename;
}