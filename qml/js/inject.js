function handler(event) {
    console.log('Injecting ubuntu touch styling fixes');

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(
    '.mw-box { display: none; } '+
    '.mw-box_header { display: none; } '+
    '.mw-box_title { display: none; } '+
    '.h-sidebar-left { display: none; } ' +
    '.c-mw-profile-info { display: none; } ' +
    '.profile-info_cover { display: none; } ' +
    '.mw-box_header:not(.group-bg) { display: none; } ' +
    '.c-mw-postbox { padding-left: 25px; } '+
    '.c-mw-postbox { padding-right: 25px } '+
    '.postbox_controls { padding-left: 25px; } ' +
    '.postbox_controls { padding-right: 25px } ' +
    '.mw-box--row { display: none; } '
    ));

    document.head.appendChild(style);
}

window.addEventListener('load', handler, false);

