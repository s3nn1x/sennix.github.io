document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.text');
    const light = document.querySelector('.gradient-lights');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const audio = document.getElementById('audio');
    const seekSlider = document.getElementById('seek-slider');

    setTimeout(() => {
        light.classList.add('show');
    }, 0);

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('show');
        }, 200 * index);
    });

    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ffffff';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '#ffa4eb';
        });
    });
    const titles = ["sennix world", "seNniXXX w0Rld", "S3nn1x w0r1d", "s3нникс ворлд", "010010 world", "get it?", "yeah thats my name"];
        let currentTitleIndex = 0;
        function changeTitle(){
            document.title = titles[currentTitleIndex]
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
        setInterval(changeTitle, 500)

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
             playPauseBtn.classList.add('playing');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('playing');
        }
    });

        audio.addEventListener('ended', () => {
            playPauseBtn.classList.remove('playing');
        });
    audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100;

    });
    seekSlider.addEventListener('input', () => {
        const seekTime = (seekSlider.value / 100) * audio.duration;
       audio.currentTime = seekTime;
    })
    audio.volume = 0.25; 
});
