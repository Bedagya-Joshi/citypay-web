document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = new URL(link.href);
            const pathname = url.pathname.replace('.html', '');
            history.pushState({}, '', pathname);
            loadPage(url.pathname);
        });
    });

    function loadPage(pathname) {
        if (!pathname.endsWith('.html')) {
            pathname += '.html';
        }

        fetch(pathname)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Page not found');
            })
            .then(html => {
                document.body.innerHTML = html;
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error(error);
                document.body.innerHTML = '<h1>404 Not Found</h1>';
            });
    }

    window.onpopstate = function () {
        loadPage(location.pathname);
    };
});
