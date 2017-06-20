$(document).ready(function() {
    var pageSelector = '#pages > div';
    var menuSelector = '#topnav ul li';
    $(menuSelector).on('click', function() {
        $(menuSelector).removeClass('active');
        $(this).addClass('active');

        var pageId = "#page" + ($(this).index() + 1);
        $(pageSelector).removeClass('active');
        $(pageId).addClass('active');
    });

    var offset = 9;
    resizeImageWindow();
    offset = -6;

    $(window).on('resize', resizeImageWindow);

    function resizeImageWindow() {
        var contentWindow = '.page';
        var navigationBar = '#topnav';
        var newWidth = parseFloat($(navigationBar).css('width')) + offset;
        var newHeight = parseFloat(newWidth, 10) * (14/30); 
        $(contentWindow).css('width', newWidth);
        $(contentWindow).css('height', newHeight);
    }

    var leftImage = $('#page2 #left #image1');
    var leftDim = parseFloat(leftImage.css('width')) / 2;
    var rightImage = $('#page2 #right #image2');
    var rightDim = parseFloat(rightImage.css('width')) / 2;

    // var leftCrop = leftImage.croppie({
    //     viewport: {
    //         width: leftDim,
    //         height: leftDim,
    //     }
    // });
    // var rightCrop = rightImage.croppie({
    //     viewport: {
    //         width: rightDim,
    //         height: rightDim,
    //     }
    // });

    // var imageUrl = "https://assets.rbl.ms/1268721/980x.jpg";
    // leftCrop.croppie('bind', {
    //     url: "https://crossorigin.me/" + imageUrl
    // });
});
