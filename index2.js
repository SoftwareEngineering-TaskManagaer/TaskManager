document.addEventListener('DOMContentLoaded', () => {
    const activePage = window.location.pathname.split('/').pop(); // Get just the filename
    const navLinks = document.querySelectorAll('.navclass li a');
    const homeNavLink = document.querySelector('.navclass li a[href="index2.html"]');
    const panelLinks = document.querySelectorAll('#panel-list li a');

    // Always keep Home tab active if on any Home-related pages
    const homePages = ['index2.html', 'priority.html', 'unfinished.html'];
    if (homePages.includes(activePage)) {
        homeNavLink?.classList.add('active');
    }

    // Highlight other nav links only if not part of Home
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === activePage && !homePages.includes(linkHref)) {
            link.classList.add('active');
        }
    });

    // Panel highlight: match current page
    let matchedPanelLink = null;
    panelLinks.forEach(link => {
        if (link.getAttribute('href') === activePage) {
            matchedPanelLink = link;
        }
    });

    if (matchedPanelLink) {
        matchedPanelLink.classList.add('active');
    } else {
        // Default to first panel item (Today's Task)
        const defaultTask = document.querySelector('#panel-list li:first-child a');
        defaultTask?.classList.add('active');
    }

    // Panel click behavior
    panelLinks.forEach(link => {
        link.addEventListener('click', () => {
            panelLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});