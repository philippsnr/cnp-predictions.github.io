<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["Name"];
  $email = $_POST["E-mail"];
  $topic = $_POST["Service"];
  $message = $_POST["Message"];

  // Create the email message
  $to = "philipp.eckhard.staudinger@gmail.com";
  $subject = "New Contact Message";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Topic: " . $topic . "\n";
  $body .= "Message: " . $message . "\n";

  // Set the headers
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message! We will get back to you soon.";
  } else {
    echo "Sorry, an error occurred while sending your message.";
  }
}
?>