document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission until validation passes

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let image = document.getElementById('image').files[0];

    let isValid = true;

    // Name Validation
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Email Validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Mobile Validation
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = "Mobile number must be 10 digits";
        isValid = false;
    } else {
        document.getElementById('mobileError').textContent = "";
    }

    // Image Validation
    if (image && !["image/jpeg", "image/png"].includes(image.type)) {
        document.getElementById('imageError').textContent = "Only JPG/PNG files are allowed";
        isValid = false;
    } else {
        document.getElementById('imageError').textContent = "";
    }

    // If validation passes, submit the form (use Ajax or form submission)
    if (isValid) {
        alert("Form Submitted Successfully!");
        // You can send the form data using fetch() or XMLHttpRequest()
    }
});
