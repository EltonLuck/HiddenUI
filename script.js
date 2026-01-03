const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("bgAudio");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if(!isPlaying) {
        audio.play();
        playBtn.textContent = "⏸";
        playBtn.classList.remove("paused");
    } else {
        audio.pause();
        playBtn.textContent = "▶";
        playBtn.classList.add("paused");
    }
    
    isPlaying = !isPlaying;
});