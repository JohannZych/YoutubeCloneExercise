const section = document.querySelector('.video-container');

function displayVideos(arrayVideos) {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        element.remove();
    });
    let html = "";
    for (let i = 0; i < arrayVideos.length; i++) {
        html += '<div class="card"> <h2>' +
            '<img src="' + arrayVideos[i].image + '" alt="vignette">' +
            arrayVideos[i].title + ' </h2>' +
            arrayVideos[i].content.substring(0, 120) + "..." +
            '</div>';
    }
    section.innerHTML = html + section.innerHTML;
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
    const navPanel = document.getElementById("nav-panel");
    const subPanel = document.getElementById("sub-panel");
    const maskPanel = document.getElementById("maskPanel");
    const unmaskPanel = document.getElementById("unmaskPanel");

    root.style.setProperty("--marginVideoContainer", navPanel.style.display === "block" ? "0" : "200px");
    navPanel.style.display = navPanel.style.display === "block" ? "none" : "block";
    subPanel.style.display = navPanel.style.display;
    maskPanel.style.display = navPanel.style.display;
    unmaskPanel.style.display = navPanel.style.display === "block" ? "none" : "block";
}
