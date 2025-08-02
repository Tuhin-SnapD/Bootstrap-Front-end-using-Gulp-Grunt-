$(document).ready(function(){
    // Carousel functionality
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    // Modal functionality
    $('#reserve').click(function () {
        $('#reserveModal').modal('show');
    });
    $('#login').click(function () {
        $('#loginModal').modal('show');
    });

    // Form validation and enhancement
    $('#reserveModalForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const size = $('input[name="op"]:checked').val();
        const fabric = $('input[name="options"]:checked').parent().text().trim();
        const date = $('#date').val();
        const time = $('#time').val();
        
        // Validate form
        if (!size || !fabric || !date || !time) {
            showAlert('Please fill in all fields', 'warning');
            return false;
        }
        
        // Show success message
        showAlert('Size check request submitted successfully! We\'ll contact you soon.', 'success');
        $('#reserveModal').modal('hide');
        
        // Reset form
        this.reset();
    });

    // Login form validation
    $('#loginModal form').on('submit', function(e) {
        e.preventDefault();
        
        const email = $('#exampleInputEmail3').val();
        const password = $('#exampleInputPassword3').val();
        
        if (!email || !password) {
            showAlert('Please enter both email and password', 'warning');
            return false;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address', 'warning');
            return false;
        }
        
        // Simulate login process
        showAlert('Login successful! Welcome to High Level Threads.', 'success');
        $('#loginModal').modal('hide');
        this.reset();
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Add loading animation to images
    $('img').on('load', function() {
        $(this).addClass('img-loaded');
    }).each(function() {
        if (this.complete) {
            $(this).addClass('img-loaded');
        }
    });

    // Counter animation for developer page
    $('.count').each(function() {
        const $this = $(this);
        const countTo = $this.attr('data-to');
        const speed = $this.attr('data-speed');
        
        $({ countNum: 0 }).animate({
            countNum: countTo
        }, {
            duration: parseInt(speed),
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });

    // Add hover effects to cards
    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).removeClass('shadow-lg').css('transform', 'translateY(0)');
        }
    );

    // Newsletter subscription (if exists)
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        const email = $('#newsletterEmail').val();
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address', 'warning');
            return false;
        }
        
        showAlert('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    });

    // Search functionality (if exists)
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        const query = $('#searchInput').val().trim();
        
        if (query.length < 2) {
            showAlert('Please enter at least 2 characters to search', 'warning');
            return false;
        }
        
        showAlert('Search functionality coming soon!', 'info');
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Add tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Add popovers
    $('[data-toggle="popover"]').popover();

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Utility functions
    function showAlert(message, type) {
        const alertHtml = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
        
        // Remove existing alerts
        $('.alert').remove();
        
        // Add new alert
        $('body').prepend(alertHtml);
        
        // Auto dismiss after 5 seconds
        setTimeout(() => {
            $('.alert').fadeOut();
        }, 5000);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialize any additional plugins or features
    console.log('High Level Threads - Enhanced JavaScript loaded successfully!');
});
