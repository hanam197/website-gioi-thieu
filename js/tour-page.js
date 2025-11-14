document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.tours__filter-item');
    const paginationItems = document.querySelectorAll('.tours__pagination-item');
    const pages = document.querySelectorAll('.tours__cards.page');

    // Safety: if no pages found, do nothing
    if (!pages || pages.length === 0) return;

    // Toggle filter active class (your sliding highlight code can be used separately)
    filterItems.forEach(item => {
    item.addEventListener('click', () => {
        filterItems.forEach(i => i.classList.remove('filter-item-active'));
        item.classList.add('filter-item-active');
    });
    });

    // Show a page by index (0-based)
    function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    pages.forEach((page, i) => {
        if (i === index) {
        page.classList.add('active');
        } else {
        page.classList.remove('active');
        }
    });

    // update pagination active state
    paginationItems.forEach((p, i) => {
        p.classList.toggle('current-pagination-item', i === index);
    });
    }

    // Wire up pagination clicks
    paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showPage(index);
    });
    });

    // Initialize: show first page (or the one already marked active)
    const initialIndex = Array.from(pages).findIndex(p => p.classList.contains('active'));
    showPage(initialIndex >= 0 ? initialIndex : 0);

    document.querySelectorAll('.tours__book-btn').forEach(btn => {
            btn.addEventListener('click', () => {
            const link = btn.dataset.link;
            window.location.href = link;
        });
    });
});