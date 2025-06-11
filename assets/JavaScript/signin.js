$(document).ready(function() {
    // Tab and form switching
    $('.tab-btn').click(function() {
        const formId = $(this).data('form');
        
        // Update tab buttons
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // Show corresponding form
        $('.auth-form').removeClass('active');
        $(`#${formId}Form`).addClass('active');
    });

    // Login form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        const password = $(this).find('input[type="password"]').val();
        
        // Here you would typically make an API call to your backend
        console.log('Login attempt:', { email, password });
    });

    // Signup form submission
    $('#signupForm').submit(function(e) {
        e.preventDefault();
        const formData = {
            fullName: $(this).find('input[type="text"]').first().val(),
            email: $(this).find('input[type="email"]').val(),
            phone: $(this).find('input[type="tel"]').val(),
            experience: $(this).find('input[type="text"]').eq(1).val(),
            password: $(this).find('input[type="password"]').first().val(),
            confirmPassword: $(this).find('input[type="password"]').last().val()
        };
        
        // Here you would typically make an API call to your backend
        console.log('Signup attempt:', formData);
    });

    // Form validation for signup
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        const fullName = $('#fullName').val();
        const email = $('#signupEmail').val();
        const phone = $('#phoneNumber').val();
        const experience = $('#experience').val();
        const password = $('#signupPassword').val();
        const confirmPassword = $('#confirmPassword').val();

        // Validate full name
        if (!fullName || fullName.length < 2) {
            $('#fullName').addClass('is-invalid');
            isValid = false;
        } else {
            $('#fullName').removeClass('is-invalid');
        }

        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            $('#signupEmail').addClass('is-invalid');
            isValid = false;
        } else {
            $('#signupEmail').removeClass('is-invalid');
        }

        // Validate phone (simple validation)
        if (!phone || phone.length < 10) {
            $('#phoneNumber').addClass('is-invalid');
            isValid = false;
        } else {
            $('#phoneNumber').removeClass('is-invalid');
        }

        // Validate experience
        if (!experience) {
            $('#experience').addClass('is-invalid');
            isValid = false;
        } else {
            $('#experience').removeClass('is-invalid');
        }

        // Validate password
        if (!password || password.length < 6) {
            $('#signupPassword').addClass('is-invalid');
            isValid = false;
        } else {
            $('#signupPassword').removeClass('is-invalid');
        }

        // Validate confirm password
        if (!confirmPassword || confirmPassword !== password) {
            $('#confirmPassword').addClass('is-invalid');
            isValid = false;
        } else {
            $('#confirmPassword').removeClass('is-invalid');
        }

        if (isValid) {
            // Here you would typically make an API call to your backend
            console.log('Signup form submitted:', {
                fullName,
                email,
                phone,
                experience,
                password
            });
        }
    });

    // Clear validation state when input changes
    $('.form-control').on('input', function() {
        $(this).removeClass('is-invalid');
    });
}); 