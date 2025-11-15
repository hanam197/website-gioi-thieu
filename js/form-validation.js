document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // SHOW ERROR FUNCTION
    function showError(id, message) {
        const input = document.getElementById(id);
        const msg = input.parentElement.querySelector('.error-msg');
        msg.style.display = "block";
        msg.textContent = message;
        input.style.borderColor = "red";
        isValid = false;
    }

    // RESET ALL ERRORS
    document.querySelectorAll(".error-msg").forEach(e => e.style.display = "none");
    document.querySelectorAll(".contact__form-input").forEach(i => i.style.borderColor = "#ccc");

    // GET VALUES
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // VALIDATE FULL NAME
    if (fullName === "") {
        showError('fullName', "Vui lòng nhập họ và tên.");
    }

    // VALIDATE DEPARTURE DATE
    const departureDate = document.getElementById('departureDate').value.trim();
    if (departureDate === "") {
        showError('departureDate', "Vui lòng chọn ngày khởi hành.");
    }

    // VALIDATE PHONE
    const phonePattern = /^[0-9]{10,15}$/;
    if (phone === "") {
        showError('phone', "Vui lòng nhập số điện thoại.");
    } else if (!phonePattern.test(phone)) {
        showError('phone', "Số điện thoại không hợp lệ.");
    }

    // VALIDATE EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        showError('email', "Vui lòng nhập email.");
    } else if (!emailPattern.test(email)) {
        showError('email', "Email không hợp lệ.");
    }

    // VALIDATE GUEST NUMBER
    const adults = document.getElementById('adults').value.trim();
    const children = document.getElementById('children').value.trim();
    if (adults === "" && children === "") {
        showError('adults', "Vui lòng nhập số lượng khách.");
        showError('children', "Vui lòng nhập số lượng khách.");
    } else if (Number(adults) <= 0 && Number(children) <= 0) {
        showError('adults', "Số lượng khách không hợp lệ.");
        showError('children', "Số lượng khách không hợp lệ.");
    }

    // IF ALL VALIDATIONS PASS
    if (!isValid) return;

    // SHOW POPUP
    document.getElementById('successPopup').style.display = 'flex';
    document.getElementById('contactForm').reset();
});

// CLOSE POPUP
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('successPopup').style.display = 'none';
});

// CLOSE POPUP WHEN CLICKING OUTSIDE CONTENT
document.getElementById('successPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});