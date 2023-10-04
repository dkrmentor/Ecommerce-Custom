<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['address']) && isset($_POST['phone']) && isset($_POST['message'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Retrieve cart items
    $cartItems = json_decode($_POST['cartItems'], true);

    // Build email message
    $to = 'dkrmentor@gmail.com'; // Replace with your email address
    $headers = "From: DKRMENTOR <noreply@dkrmentor>";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";

    // Add cart items to the message
    $message .= "Cart Items:\n";
    foreach ($cartItems as $item) {
        $productName = $item['name'];
        $productPrice = $item['price'];
        $message .= "$productName - $productPrice\n";
    }

    // Send email
    if (mail($to, "Contact Form Submission", $message, $headers)) {
        // Email sent successfully
        ?>
        <script>window.location.href='index.html?submitted=2';</script>
        <?php
    } else {
        // Error sending email
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
