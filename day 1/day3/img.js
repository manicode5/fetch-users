
let slideIndex = 0;
        let slides = document.getElementsByClassName("slides");
        let slideInterval;
        let isPlaying = true;

        function showSlide(index) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slides[index].classList.add("active");
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            showSlide(slideIndex);
        }

        function startSlideshow() {
            slideInterval = setInterval(nextSlide, 2000);
            document.getElementById("startStopBtn").textContent = "Stop";
            isPlaying = true;
        }

        function stopSlideshow() {
            clearInterval(slideInterval);
            document.getElementById("startStopBtn").textContent = "Start";
            isPlaying = false;
        }

        document.getElementById("nextBtn").addEventListener("click", function() {
            stopSlideshow();
            nextSlide();
        });

        document.getElementById("prevBtn").addEventListener("click", function() {
            stopSlideshow();
            prevSlide();
        });

        document.getElementById("startStopBtn").addEventListener("click", function() {
            if (isPlaying) {
                stopSlideshow();
            } else {
                startSlideshow();
            }
        });

        // Start the slideshow when the page loads
        startSlideshow();
        