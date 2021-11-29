$(document).ready(function () {


    $('#mypagination1').pagination({
        items: 20,
        displayedPages: 7,
        currentPage: 1,
        edges: 0,
        cssStyle: '',
        prevText: '<span aria-hidden="true">&laquo;</span>',
        nextText: '<span aria-hidden="true">&raquo;</span>',
        onInit: function () {
            // fire first page loading
        },
        onPageClick: function (page, evt) {
            $('#pagination-content1').text('Page ' + page);
        }
    });


        $('#mypagination2').pagination({
        items: 20,
        displayedPages: 5,
        currentPage: 1,
        edges: 1,
        cssStyle: '',
        prevText: '<span aria-hidden="true">&laquo;</span>',
        nextText: '<span aria-hidden="true">&raquo;</span>',
        onInit: function () {
            // fire first page loading
        },
        onPageClick: function (page, evt) {
            $('#pagination-content2').text('Page ' + page);
        }
    });


});

