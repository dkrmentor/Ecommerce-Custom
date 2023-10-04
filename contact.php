<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Build email message
    $to = 'dkrmentor@gmail.com'; // Replace with your email address
    $headers = "From: DKRMENTOR <noreply@dkrmentor>";
    $messageBody = "Name: $name\n";
    $messageBody .= "Phone Number: $phone\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message\n";

    // Send email
    if (mail($to, "Contact Form Submission", $messageBody, $headers)) {
        // Email sent successfully
        header("Location: index.html?submitted=2");
        exit();
    } else {
        // Error sending email
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
