$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const dots = $('.dot');
    const slidesPerPage = 3; 
    const totalPages = Math.ceil(slides.length / slidesPerPage);

    function showSlide(index) {
        const slideWidth = slides.outerWidth(true);
        const offset = -index * slideWidth * slidesPerPage;
        $('.slider').css('transform', `translateX(${offset}px)`);
        dots.removeClass('active');
        dots.eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalPages;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalPages) % totalPages;
        showSlide(currentSlide);
    }

    dots.on('click', function() {
        currentSlide = $(this).data('slide');
        showSlide(currentSlide);
    });

    $('.arrow.left').on('click', prevSlide);
    $('.arrow.right').on('click', nextSlide);

    showSlide(currentSlide);
});
// footer//

$(document).ready(function() {
    
    $('.project-detail').on('click', function() {
        const newImage = $(this).data('image');
        $('#projectImage').attr('src', newImage);
        $('.project-detail').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function() {
    $('.detail').on('click', function() {
        var newImageSrc = $(this).data('image');
        $('#mainProjectImage').attr('src', newImageSrc);
    });
});

    $(document).ready(function() {
        
        $('#contactBtn').on('click', function() {
            $('#popupForm').show();
        });

        
        $('.close').on('click', function() {
            $('#popupForm').hide();
        });

        
        $(window).on('click', function(event) {
            if ($(event.target).is('#popupForm')) {
                $('#popupForm').hide();
            }
        });
    });

