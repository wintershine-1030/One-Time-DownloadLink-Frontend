$(document).ready(function() {
    // Navigation tab handling
    $('.nav-tab').click(function() {
        $('.nav-tab').removeClass('active');
        $(this).addClass('active');
    });

    // Model selection handling
    $('.btn-select').click(function() {
        const card = $(this).closest('.model-card');
        const modelName = card.find('h3').text();
        
        // Update all cards and buttons
        $('.model-card').removeClass('active');
        $('.btn-selected').removeClass('btn-selected').addClass('btn-select').text('Select Model');
        
        // Update selected card
        card.addClass('active');
        $(this).removeClass('btn-select').addClass('btn-selected').text('Selected');
        
        // Update selected model details
        $('.selected-details p').text(`You've selected ${modelName}. You can now manage content and generate payment links for this model.`);
        
        // Smooth scroll to details
        $('html, body').animate({
            scrollTop: $('.selected-details').offset().top - 20
        }, 500);
    });

    // Add hover effects for images
    $('.model-card:not(.disabled)').hover(
        function() {
            $(this).find('.model-image img').css({
                'transform': 'scale(1.05)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).find('.model-image img').css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });
        }
    );

    // Prevent clicks on disabled cards
    $('.model-card.disabled').click(function(e) {
        e.preventDefault();
        return false;
    });
}); 