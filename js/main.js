let dropArea = document.querySelector('.container'); // general drag & drop area
let progressBar = document.querySelector('.progress-bar'); // progress bar

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
    dropArea.addEventListener(event, (event) => {
        // prevent page refreshing and popups
        event.preventDefault();
        event.stopPropagation();
    }, false)
});

// change style when drag & drop
;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        dropArea.classList.add('drag-drop');
    }, false);
    progressBar.addEventListener(eventName, (e) => {
        progressBar.classList.add('active');
    }, false);
});

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        dropArea.classList.remove('drag-drop');
    }, false);
    progressBar.addEventListener(eventName, (e) => {
        progressBar.classList.remove('active');
    }, false);
});

// get files when dropped
dropArea.addEventListener('drop', (e) => {
    let dt = e.dataTransfer;
    let files = dt.files;

    getFiles(files);
}, false);

getFiles = (files) => {
    files = [...files];
    files.forEach(uploadFiles);
    files.forEach(previewFiles);
};

uploadFiles = (file) => {
    console.log("Upploading files");
};

previewFiles = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let img = document.createElement('img');
      img.classList.add("icon");
      img.src = reader.result;
      document.querySelector('.thumbnails').appendChild(img);
    }
};