// document.addEventListener('DOMContentLoaded', () => {
//     const filterItems = document.querySelectorAll('.tours__filter-item');
//     const paginationItems = document.querySelectorAll('.tours__pagination-item');
//     const pages = document.querySelectorAll('.tours__cards.page');

//     // Safety: if no pages found, do nothing
//     if (!pages || pages.length === 0) return;

//     // Toggle filter active class (your sliding highlight code can be used separately)
//     filterItems.forEach(item => {
//     item.addEventListener('click', () => {
//         filterItems.forEach(i => i.classList.remove('filter-item-active'));
//         item.classList.add('filter-item-active');
//     });
//     });

//     // Show a page by index (0-based)
    // function showPage(index) {
    // if (index < 0 || index >= pages.length) return;

    // pages.forEach((page, i) => {
    //     if (i === index) {
    //     page.classList.add('active');
    //     } else {
    //     page.classList.remove('active');
    //     }
    // });

    // // update pagination active state
    // paginationItems.forEach((p, i) => {
    //     p.classList.toggle('current-pagination-item', i === index);
    // });
    // }

    // Wire up pagination clicks
    // paginationItems.forEach((item, index) => {
    // item.addEventListener('click', () => {
    //     showPage(index);
    // });
    // });

//     // Initialize: show first page (or the one already marked active)
//     const initialIndex = Array.from(pages).findIndex(p => p.classList.contains('active'));
//     showPage(initialIndex >= 0 ? initialIndex : 0);

//     document.querySelectorAll('.tours__book-btn').forEach(btn => {
//             btn.addEventListener('click', () => {
//             const link = btn.dataset.link;
//             window.location.href = link;
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.tours__cards.page');
    const paginationItems = document.querySelectorAll('.tours__pagination-item');

    let toursData = [];
    const itemsPerPage = 4; // how many tours per page

    fetch('../data/tour-data.json')
        .then(response => response.json())
        .then(data => {
            toursData = data;
            renderPage(0); // show page 1 by default
        })
        .catch(error => console.error("Error loading JSON:", error));

    // RENDER ONE PAGE ONLY
    function renderPage(pageIndex) {
        const start = pageIndex * itemsPerPage;
        const end = start + itemsPerPage;

        const pageData = toursData.slice(start, end);

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
});
