$(document).ready(function() {
    // Function to disable form inputs and button for a specified duration
    function disableFormInputsAndButton(inputs, timeout) {
        $(inputs).prop('disabled', true);
        setTimeout(function() {
            $(inputs).prop('disabled', false);
        }, timeout);
    }

    // Function to start timer for an input field
    function startTimer(inputId, duration) {
        var timer = duration / 1000;
        var intervalId = setInterval(function() {
            $('#' + inputId + 'Timer').text(timer + " seconds remaining");
            timer--;
            if (timer < 0) {
                clearInterval(intervalId);
                $('#' + inputId + 'Timer').text('');
            }
        }, 1000);
    }

    // Character counter for the feedback textarea
    var maxChars = 500;
    $('#feedbackTextarea').on('input', function() {
        var remainingChars = maxChars - $(this).val().length;
        $('#feedbackCounter').text(remainingChars + " characters remaining");
    });
});$(document).ready(function() {
    // Function to disable form inputs and button for a specified duration
    function disableFormInputsAndButton(inputs, timeout) {
        $(inputs).prop('disabled', true);
        setTimeout(function() {
            $(inputs).prop('disabled', false);
        }, timeout);
    }

    // Function to start timer for an input field
    function startTimer(inputId, duration) {
        var timer = duration / 1000;
        var intervalId = setInterval(function() {
            $('#' + inputId + 'Timer').text(timer + " seconds remaining");
            timer--;
            if (timer < 0) {
                clearInterval(intervalId);
                $('#' + inputId + 'Timer').text('');
            }
        }, 1000);
    }

    // Character counter for the feedback textarea
    var maxChars = 500;
    $('#feedbackTextarea').on('input', function() {
        var remainingChars = maxChars - $(this).val().length;
        $('#feedbackCounter').text(remainingChars + " characters remaining");
    });

    // Retrieve timeout duration from data attribute
    var timeoutDuration = $('#contactForm').data('timeout-duration');
    if (timeoutDuration > 0) {
        var inputsToDisable = '#fullNameInput, #emailInput, #phoneNumberInput, #subjectInput, #feedbackTextarea, #submitButton';
        disableFormInputsAndButton(inputsToDisable, timeoutDuration);
        $('input[type="text"], input[type="email"], input[type="number"], textarea').each(function() {
            startTimer($(this).attr('id'), timeoutDuration);
        });
    }
});