function submitDonation() {
    var amount = document.getElementById('donationAmount').value;
    if (amount) {
        // This would be your PayPal link or a form submission to your server
        window.alert("Thank you for your donation of $" + amount + "!");
        // Redirect to PayPal or another page
        // window.location.href = 'https://www.paypal.com/donate?hosted_button_id=YOURBUTTONID&amount=' + amount;
    } else {
        window.alert("Please enter a donation amount.");
    }
}
