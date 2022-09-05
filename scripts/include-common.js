// Dependencies: JQuery

// Load common head
$.get("../../common/head.html", function(head) {
    $('head').prepend(head)
});

// Load common nav
$.get("../../common/nav.html", function(nav) {
    $('body').prepend(nav)
});

// Load common footer
$.get("../../common/footer.html", function(footer) {
    $('body').append(footer)
});