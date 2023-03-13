function include_head() {
    const viewport_tag = document.createElement('meta');
    viewport_tag.setAttribute('name', 'viewport');
    viewport_tag.setAttribute('content', 'width=device-width, initial-scale=1');

    const font_google_api = document.createElement('link');
    font_google_api.setAttribute('rel', 'preconnect');
    font_google_api.setAttribute('href', 'https://fonts.googleapis.com');

    const font_google_static = document.createElement('link');
    font_google_static.setAttribute('rel', 'preconnect');

    const font_google = document.createElement('link');
    font_google.setAttribute('rel', 'stylesheet');
    font_google.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Caveat&family=Merriweather:ital,wght@0,400;1,700&display=swap');

    const general_style = document.createElement('link');
    general_style.setAttribute('rel', 'stylesheet');
    general_style.setAttribute('href', '/portfolio/writing/styles/general.css');

    const head = document.getElementsByTagName('head').item(0)
    head.appendChild(viewport_tag);
    head.appendChild(font_google_api);
    head.appendChild(font_google_static);
    head.appendChild(font_google);
    head.appendChild(general_style);
}

function include_header() {
    const nav = document.createElement('nav');
    
    const nav_logo = document.createElement('img');
    nav_logo.setAttribute('class', 'nav-logo');
    nav_logo.setAttribute('src', '/portfolio/writing/images/logo.svg');

    const nav_links = document.createElement('div');
    nav_links.setAttribute('class', 'nav-links');

    const about = document.createElement('a');
    about.appendChild(document.createTextNode('About'));

    const experience = document.createElement('a');
    experience.appendChild(document.createTextNode('Experience'));

    const projects = document.createElement('a');
    projects.appendChild(document.createTextNode('Projects'));

    const writing = document.createElement('a');
    writing.setAttribute('class', 'nav-links-link--selected');
    writing.setAttribute('href', '/portfolio/writing/index.html');
    writing.appendChild(document.createTextNode('Writing'));

    const contact = document.createElement('a');
    contact.appendChild(document.createTextNode('Contact'));

    nav_links.appendChild(about);
    nav_links.appendChild(experience);
    nav_links.appendChild(projects);
    nav_links.appendChild(writing);
    nav_links.appendChild(contact);

    nav.appendChild(nav_logo);
    nav.appendChild(nav_links);

    const body = document.getElementsByTagName('body').item(0);
    body.appendChild(nav);
}

function include_footer() {
    const footer = document.createElement('footer');

    const icons8_attr = document.createElement('p');
    icons8_attr.appendChild(document.createTextNode('Icons by Icons8'));

    const copyright = document.createElement('p');
    copyright.appendChild(document.createTextNode('Copyright © 2023-2023 Samuel Do'));

    footer.appendChild(icons8_attr);
    footer.appendChild(copyright);

    const body = document.getElementsByTagName('body').item(0);
    body.appendChild(footer);
}