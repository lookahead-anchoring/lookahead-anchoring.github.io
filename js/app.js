
$(document).ready(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly:true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

// Video Carousel functionality
let currentSlide = 0;
const totalSlides = 5;

function showSlide(n) {
    const track = document.getElementById('videoTrack');
    const dots = document.querySelectorAll('.dot');

    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;

    track.style.transform = `translateX(-${currentSlide * 20}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');

    // Pause all videos except current one, play current video
    const videos = document.querySelectorAll('.carousel-video');
    videos.forEach((video, index) => {
        if (index === currentSlide) {
            video.play();
        } else {
            video.pause();
        }
    });
}

function nextVideo() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousVideo() {
    currentSlide--;
    showSlide(currentSlide);
}

function currentVideo(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
}

// Touch/swipe support
let startX = 0;
let endX = 0;
let isDragging = false;

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');

    // Don't autoplay the first video on page load
    // Let the user manually start it

    // Track video play/pause state for the overlay icons
    const videos = document.querySelectorAll('.carousel-video');
    videos.forEach((video) => {
        const slide = video.closest('.carousel-slide');

        // Mark all slides as paused initially
        slide.classList.add('paused');

        // Just listen to native video events, don't interfere with native controls
        video.addEventListener('pause', function() {
            slide.classList.add('paused');
        });

        video.addEventListener('play', function() {
            slide.classList.remove('paused');
        });
    });

    if (carousel) {
        // Touch events
        carousel.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchend', function(e) {
            if (isDragging) {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
                isDragging = false;
            }
        });

        // Mouse events for desktop
        carousel.addEventListener('mousedown', function(e) {
            startX = e.clientX;
            isDragging = true;
            carousel.style.cursor = 'grabbing';
            e.preventDefault(); // Prevent default behavior
        });

        carousel.addEventListener('mouseup', function(e) {
            if (isDragging) {
                endX = e.clientX;
                carousel.style.cursor = 'grab';
                handleSwipe();
                isDragging = false;
            }
        });

        carousel.addEventListener('mouseleave', function(e) {
            if (isDragging) {
                endX = e.clientX;
                carousel.style.cursor = 'grab';
                handleSwipe();
                isDragging = false;
            }
        });

        // Listen to CSS transition end to ensure video control
        const track = document.getElementById('videoTrack');
        track.addEventListener('transitionend', function() {
            // Pause all videos except current one
            // Only play current video if it's not manually paused
            const videos = document.querySelectorAll('.carousel-video');
            videos.forEach((video, index) => {
                if (index === currentSlide) {
                    const slide = video.closest('.carousel-slide');
                    if (!slide.classList.contains('paused')) {
                        video.play();
                    }
                } else {
                    video.pause();
                }
            });
        });

        // Set initial cursor
        carousel.style.cursor = 'grab';
    }
});

function handleSwipe() {
    const threshold = 20; // minimum distance for swipe
    const distance = startX - endX;

    if (Math.abs(distance) > threshold) {
        if (distance > 0) {
            nextVideo(); // swipe left - next video
        } else {
            previousVideo(); // swipe right - previous video
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousVideo();
    } else if (e.key === 'ArrowRight') {
        nextVideo();
    }
});
