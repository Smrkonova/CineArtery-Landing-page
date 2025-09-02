<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars(trim($_POST['fullname'] ?? ''));
    $company  = htmlspecialchars(trim($_POST['company'] ?? ''));
    $email    = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone    = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $subject  = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $message  = htmlspecialchars(trim($_POST['message'] ?? ''));

    $to = "bharatvarshpictures@gmail.com"; // your email
    $mail_subject = "New Contact Form Submission: " . $subject;

    $body = "
    You have a new contact form submission:

    Name: $name
    Company: $company
    Email: $email
    Phone: $phone

    Message:
    $message
    ";

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $mail_subject, $body, $headers)) {
        // Redirect to Thank You page
        header("Location: thankyou.html");
        exit();
    } else {
        echo "<script>alert('Failed to send message. Please try again later.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
