document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.tours__cards.page');
    const paginationItems = document.querySelectorAll('.tours__pagination-item');
    const filterItems = document.querySelectorAll('.tours__filter-item');

    let toursData = [];
    let filteredData = [];
    let filteredTours = [];
    const itemsPerPage = 8; // how many tours per page

    fetch('../data/tour-data.json')
        .then(response => response.json())
        .then(data => {
            toursData = data.filter(t => t.time.includes("Trong ngày"));
            filteredData = [...toursData]; // default show all
            updatePagination();
            renderPage(0); // show page 1 by default
        })
        .catch(error => console.error("Error loading JSON:", error));

    // UPDATE PAGINATION
    function updatePagination() {
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);

        paginationItems.forEach((item, index) => {
            item.style.display = index < totalPages ? 'inline-block' : 'none';
        });
    }

    // RENDER ONE PAGE ONLY
    function renderPage(pageIndex, data = filteredTours.length ? filteredTours : toursData) {
        const start = pageIndex * itemsPerPage;
        const end = start + itemsPerPage;

        const pageData = data.slice(start, end);

        const activePage = pages[pageIndex];
        if (!activePage) return;

        const cardList = activePage.querySelector('.card-list');
        cardList.innerHTML = "";

        pageData.forEach(tour => {
            const card = `
            <div class="tours__card card">
                <div class="tours__card-header">
                    <img src="${tour.image}" alt="${tour.name}" class="card-img"/>
                </div>
                <div class="tours__card-body">
                    <p class="tours__tour-name">${tour.name}</p>
                    <p class="tours__tour-time">${tour.time}</p>
                    <p class="tours__tour-content">${tour.meta}</p>
                    <p class="tours__tour-price">
                        <span style="color: red; font-weight: bold; font-size: 20px;">
                            ${tour.price}
                        </span>/khách
                    </p>
                    <button class="tours__book-btn primary-btn" data-link="../pages/detailed-tour-page.html">Đặt tour</button>
                </div>
            </div>
            `;
            cardList.innerHTML += card;
        });

        // DYNAMIC PAGINATION
        handleDynamicPagination(data.length, pageIndex, data);

        showPage(pageIndex);
        viewTourDetails();
    }

    // ACTIVATE PAGE DISPLAY
    function showPage(index) {
        pages.forEach((page, i) => page.classList.toggle('active', i === index));
        paginationItems.forEach((p, i) => p.classList.toggle('current-pagination-item', i === index));
    }

    // PAGINATION CLICKS
    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => renderPage(index));
    });

    // VIEW TOUR DETAILS
    function viewTourDetails() {
        document.querySelectorAll('.tours__book-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.dataset.link;
                window.location.href = link;
            });
        });
    }

    // HANDLE DYNAMIC PAGINATION
    function handleDynamicPagination(totalItems, currentPage, data) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.querySelector('.tours__pagination');
        paginationContainer.innerHTML = "";

        for (let i = 0; i < totalPages; i++) {
            const li = document.createElement('li');
            li.className = 'tours__pagination-item' + (i === currentPage ? ' current-pagination-item' : '');
            li.innerHTML = `<span>${i + 1}</span>`;
            li.addEventListener('click', () => renderPage(i, data));
            paginationContainer.appendChild(li);
        }
    }
});
