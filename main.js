function selectAll(elem) {
    // elem = document.getElementById(id);
    elem.focus();
    elem.select();
}

$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    if (!$('#m3u8-placeholder')[0].value) {
        $('#m3u8-placeholder')[0].value = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
    }
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '#' + $('#m3u8-placeholder')[0].value;
    });

    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        // alert('enter was pressed!');
        play_button = document.getElementById("play-btn");
        play_button.click();
      }
    });
});
