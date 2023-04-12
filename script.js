const section = document.querySelector('.video-container');

function displayVideos(arrayVideos) {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        element.remove();
    });
    for (let i = 0; i < arrayVideos.length; i++) {
        section.insertAdjacentHTML('afterbegin', '<div class="card"> <h2>' +
            '<img src="' + arrayVideos[i].image + '" alt="vignette">' +
            arrayVideos[i].title + ' </h2>' +
            arrayVideos[i].content.substring(0, 120) + "..." +
            '</div>');
    }
}

displayVideos(videosList)

let search = document.getElementById('search');
search.addEventListener("input", () => {
    let input = search.value.toLowerCase();
    const videosListFiltered = videosList.filter(searchVideo =>
        searchVideo.title.toString().toLowerCase().includes(input)
    );
    let classesActive = document.querySelectorAll('.active');
    classesActive.forEach((classActive) => {
        classActive.classList.remove('active');
    });
    displayVideos(videosListFiltered);
});

function getValue() {
    let value = event.target.value;
    filterByTag(value.toLowerCase());
}

function filterByTag(value) {
    let classesActive = document.querySelectorAll('.active');
    classesActive.forEach((classActive) => {
        classActive.classList.remove('active');
    });
    if (value === "tous") {
        displayVideos(videosList);
        document.getElementById('tous').classList.add('active')
    } else {
        const filterVideo = videosList.filter(searchVideo =>
            searchVideo.tag.toString().toLowerCase().includes(value)
        );
        document.getElementById(value).classList.add('active');
        displayVideos(filterVideo);
    }
}

let root = document.documentElement;

function displayPanel() {
    if (document.getElementById("nav-panel").style.display === 'block') {
        document.getElementById("nav-panel").style.display = 'none';
        document.getElementById("sub-panel").style.display = 'none';
        document.getElementById("maskPanel").style.display = 'none';
        document.getElementById("unmaskPanel").style.display = 'block';
        root.style.setProperty('--marginVideoContainer', '0');
    } else {
        document.getElementById("nav-panel").style.display = 'block';
        document.getElementById("sub-panel").style.display = 'block';
        document.getElementById("maskPanel").style.display = 'block';
        document.getElementById("unmaskPanel").style.display = 'none';
        root.style.setProperty('--marginVideoContainer', '200px');
    }
}
