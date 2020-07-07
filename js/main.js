let dropArea = document.querySelector('.container'); // general drag & drop area

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
    dropArea.addEventListener(event, (event) => {
        // prevent page refreshing and popups
        event.preventDefault();
        event.stopPropagation();
    }, false)
});

;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        dropArea.classList.add('drag-drop');
    }, false)
});

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        dropArea.classList.remove('drag-drop');
    }, false)
});