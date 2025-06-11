$(document).ready(function() {
    // Toggle between login and signup forms
    $('.nav-tabs .nav-link').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Form validation for login
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();

        // Simple email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            $('#loginEmail').addClass('is-invalid');
            isValid = false;
        } else {
            $('#loginEmail').removeClass('is-invalid');
        }

        // Password validation
        if (!password || password.length < 6) {
            $('#loginPassword').addClass('is-invalid');
            isValid = false;
        } else {
            $('#loginPassword').removeClass('is-invalid');
        }

        if (isValid) {
            // Here you would typically make an API call to your backend
            console.log('Login form submitted:', { email, password });
        }
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