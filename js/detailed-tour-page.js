document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tour-content__contact-now-btn')
    .addEventListener('click', function () {
        document.querySelector('.contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    showImage();
    showRelatedTour();

    // SHOW IMAGE IN GALLERY
    function showImage() {
        const galleryImages = Array.from(document.querySelectorAll('.gallery__container img'));
        const viewAllBtn = document.querySelector('.view-all-btn');
        let currentIndex = 0;

        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.opacity = 0;
        lightbox.style.visibility = 'hidden';
        lightbox.style.transition = 'opacity 0.3s';
        lightbox.style.zIndex = 1000;
        document.body.appendChild(lightbox);

        // Image
        const img = document.createElement('img');
        img.style.maxWidth = '100%';
        img.style.maxHeight = '90%';
        img.style.objectFit = 'cover';
        img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        img.style.position = 'relative';
        lightbox.appendChild(img);

        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '30px';
        closeBtn.style.fontSize = '2rem';
        closeBtn.style.color = '#fff';
        closeBtn.style.background = 'transparent';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        lightbox.appendChild(closeBtn);

        // Prev button
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
        prevBtn.style.position = 'absolute';
        prevBtn.style.left = '30px';
        prevBtn.style.top = '50%';
        prevBtn.style.transform = 'translateY(-50%)';
        prevBtn.style.fontSize = '2rem';
        prevBtn.style.color = '#fff';
        prevBtn.style.background = 'transparent';
        prevBtn.style.border = 'none';
        prevBtn.style.cursor = 'pointer';
        lightbox.appendChild(prevBtn);

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
        nextBtn.style.position = 'absolute';
        nextBtn.style.right = '30px';
        nextBtn.style.top = '50%';
        nextBtn.style.transform = 'translateY(-50%)';
        nextBtn.style.fontSize = '2rem';
        nextBtn.style.color = '#fff';
        nextBtn.style.background = 'transparent';
        nextBtn.style.border = 'none';
        nextBtn.style.cursor = 'pointer';
        lightbox.appendChild(nextBtn);

        // OPEN LIGHTBOX
        function openLightbox(index) {
            currentIndex = index;
            img.src = galleryImages[currentIndex].src;
            lightbox.style.visibility = 'visible';
            lightbox.style.opacity = 1;
        }

        // CLOSE LIGHTBOX
        function closeLightbox() {
            lightbox.style.opacity = 0;
            setTimeout(() => {
                lightbox.style.visibility = 'hidden';
            }, 300);
        }

        // HANDLE SHOW NEXT IMAGE
        function showNext() {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            img.src = galleryImages[currentIndex].src;
        }

        // HANDLE SHOW PREVIOUS IMAGE
        function showPrev() {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            img.src = galleryImages[currentIndex].src;
        }

        // Event listeners
        galleryImages.forEach((image, index) => {
            image.addEventListener('click', () => openLightbox(index));
        });

        viewAllBtn.addEventListener('click', () => openLightbox(0));

        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);

        // HANDLE CLICK OUTSIDE IMAGE TO CLOSE
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // HANDLE KEYBOARD NAVIGATION
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.visibility === 'visible') {
                if (e.key === 'ArrowRight') showNext();
                if (e.key === 'ArrowLeft') showPrev();
                if (e.key === 'Escape') closeLightbox();
            }
        });
    }

    // SHOW RELATED TOURS
    function showRelatedTour() {
        const container = document.querySelector(".related-tours__list-container");

    fetch("../data/tour-data.json")
        .then(res => res.json())
        .then(data => {
            // TAKE FIRST 4 TOURS
            const relatedTours = data.slice(0, 4);

            container.innerHTML = ""; // remove static HTML

            relatedTours.forEach(tour => {
                const card = document.createElement("div");
                card.classList.add("related-tours__card");

                card.innerHTML = `
                    <div class="related-tours__card-header">
                        <img src="${tour.image}" alt="${tour.name}">
                    </div>
                    <div class="related-tours__card-body">
                        <h3 class="related-tours__card-title">${tour.name}</h3>
                        <div class="related-tours__card-tour-duration">${tour.time}</div>
                        <div class="related-tours__card-tour-price">${tour.price}</div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading tour list:", err));
    }
});