const defaultAPIkey = 'PabCvzKeBsSEEedxWJbGgzRDA64ytqho'
const apiAutocomplete = 'https://api.giphy.com/v1/gifs/search/tags'
let APIkey;
let debounceTimer;
let activeIndex = -1;
let loadOffset = 0;

$('#divLoadBtn').hide()

$('#searchInput').on('input', function () {
    clearTimeout(debounceTimer);    // 清除上一個timer

    let query = $(this).val().trim()
    if (query.length < 2) {
        $('#suggestions').hide().empty()
        return;
    }

    debounceTimer = setTimeout(() => {
        getSuggestions(query);

    }, 500)

})

$('#suggestions').on('click', '.suggestion-item', function (e) {
    e.preventDefault();
    const keyword = $(this).text();
    $('#searchInput').val(keyword);
    $('#suggestions').hide();

    loadOffset = 0;
    searchImg(keyword);
})


$(document).on('click', function (e) {
    if (!$(e.target).closest('#searchInput, #suggestions').length) {
        $('#suggestions').hide()
    }
})

$('#searchInput').on('click', function () {
    activeIndex = -1;
    highlight($('.suggestion-item'));
    let query = $(this).val().trim()
    if (query.length >= 2) {
        $('#suggestions').show();
        return;
    }
})


$('#searchInput').on('keydown', function (e) {
    const items = $('.suggestion-item');
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeIndex < items.length - 1) activeIndex++;
        highlight(items);
    }
    else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeIndex >= 0) activeIndex--;
        highlight(items);
    }
    else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0) {
            const selectedText = $(items[activeIndex]).text();
            $('#searchInput').val(selectedText);
            $('#suggestions').hide();

            loadOffset = 0;
            searchImg(selectedText);
            activeIndex = -1;
        }
        else {
            const keyword = $(this).val().trim();
            if (keyword.length == 0) return;

            loadOffset = 0;
            searchImg(keyword);
            $('#suggestions').hide();
        }
    }
    else if (e.key === 'Backspace') {
        activeIndex = -1;
    }
})

$('#LoadMoreImg').on('click', function() {
    loadOffset += 50;
    searchImg($('#searchInput').val());
})

$('#backToTop').on('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

$('#toggleApiInput').on('click', function () {
    $('#apiKeyInput').toggle();
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('#toggleApiInput, #apiKeyInput').length) {
        $('#apiKeyInput').hide();
    }
});

window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 600 || document.body.scrollTop > 600) {
        btn.style.display = "block"
    }
    else {
        btn.style.display = "none"
    }
}

function getSuggestions(inputText) {
    if ($('#apiKeyInput').val() != '') {
        APIkey = $('#apiKeyInput').val();
    }
    else {
        APIkey = defaultAPIkey
    }
    $.get(apiAutocomplete,
        {
            api_key: APIkey,
            q: inputText,
            limit: 8
        },
        function (autoCompleteData) {
            let suggestionsData = autoCompleteData.data
            let html = ''
            suggestionsData.forEach(item => {
                html += `<a href="#" class="list-group-item list-group-item-action suggestion-item">${item.name}</a>`
            })
            $('#suggestions').html(html).show();
        })
}

function searchImg(keyword) {
    const APIurl = 'https://api.giphy.com/v1/gifs/search'
    if ($('#apiKeyInput').val() != '') {
        APIkey = $('#apiKeyInput').val();
    }
    else {
        APIkey = defaultAPIkey
    }
    
    $.get(APIurl,
        {
            api_key: APIkey,
            q: keyword,
            limit: 50,
            offset: loadOffset,
            rating: 'pg-13',
            lang: 'zh-TW',
            bundle: 'clips_grid_picker'
        },
        function (GIPHY_data) {
            if (loadOffset == 0) $('#divResult').html('');
            GIPHY_data.data.forEach(elem => {
                let divImg = $('<div>');
                divImg.addClass('divImg');
                divImg.append(`<a href="${elem.url}" target="_blank"><img src="${elem.images.fixed_width.url}" class="zoom-img"></a>`)

                $('#divResult').append(divImg)
                $('#divLoadBtn').show();
            });
        })
}

function highlight(text) {
    text.removeClass('active');
    if (activeIndex >= 0) {
        $(text[activeIndex]).addClass('active');
    }
}