document.getElementById('submitBtn').addEventListener('click', handleSubmit);

const emailSubmitBtn = document.getElementById('emailSubmitBtn');
if (emailSubmitBtn) {
    emailSubmitBtn.addEventListener('click', handleEmailQuick);
}

// MAIN SUBMIT HANDLER
function handleSubmit(event) {
    event.preventDefault();

    resetErrors();

    const formData = getFormData();
    const isValid = validateForm(formData);

    if (!isValid) return;

    showPopup();
    document.getElementById('successPopup').style.flexDirection = 'column';
    document.getElementById('contactForm').reset();
}

// EMAIL SUBMIT ONLY HANDLER
function handleEmailQuick(event) {
    event.preventDefault();

    resetErrors();

    const email = document.getElementById('emailQuick').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        valid = showError('emailQuick', "Vui lòng nhập email.");
        return;
    } else if (!emailPattern.test(email)) {
        valid = showError('emailQuick', "Email không hợp lệ.");
        return;
    }
    
    showPopup();

    document.getElementById('contactForm').reset();
}

// GET ALL VALUES
function getFormData() {
    return {
        fullName: document.getElementById('fullName').value.trim(),
        departureDate: document.getElementById('departureDate').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        adults: document.getElementById('adults').value.trim(),
        children: document.getElementById('children').value.trim()
    };
}

// VALIDATION LOGIC
function validateForm(data) {
    let valid = true;

    if (data.fullName === "")
        valid = showError('fullName', "Vui lòng nhập họ và tên.");

    if (data.departureDate === "")
        valid = showError('departureDate', "Vui lòng chọn ngày khởi hành.");

    const phonePattern = /^[0-9]{10,15}$/;
    if (data.phone === "")
        valid = showError('phone', "Vui lòng nhập số điện thoại.");
    else if (!phonePattern.test(data.phone))
        valid = showError('phone', "Số điện thoại không hợp lệ.");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email === "")
        valid = showError('email', "Vui lòng nhập email.");
    else if (!emailPattern.test(data.email))
        valid = showError('email', "Email không hợp lệ.");

    const numOfAdults = Number(data.adults);
    const numOfChildren = Number(data.children);
    if (numOfAdults === "" && numOfChildren === "") {
        valid = showError('adults', "Vui lòng nhập số lượng khách.");
        valid = showError('children', "Vui lòng nhập số lượng khách.");
    } else if (numOfAdults <= 0 && numOfChildren <= 0) {
        valid = showError('adults', "Số lượng khách không hợp lệ.");
        valid = showError('children', "Số lượng khách không hợp lệ.");
    } else if (numOfAdults > 0 && numOfChildren < 0) {
        valid = showError('children', "Số lượng khách không hợp lệ.");
    } else if (numOfChildren > 0 && numOfAdults < 0) {
        
    }

    return valid;
}

// SHOW ERROR
function showError(id, message) {
    const input = document.getElementById(id);
    const msg = input.parentElement.querySelector('.error-msg');

    if (!msg) return false;

    msg.style.display = "block";
    msg.textContent = message;
    input.style.borderColor = "red";

    return false; 
}

// RESET ERRORS
function resetErrors() {
    document.querySelectorAll(".error-msg").forEach(e => {
        e.style.display = "none";
        e.textContent = "";
    });

    document.querySelectorAll(".contact__form-input").forEach(i => {
        i.style.borderColor = "#ccc";
    });
}

// POPUP HANDLERS
function showPopup() {
    document.getElementById('successPopup').style.display = 'flex';
}

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('successPopup').style.display = 'none';
});

document.getElementById('successPopup').addEventListener('click', event => {
    if (event.target === event.currentTarget) {
        event.currentTarget.style.display = 'none';
    }
});
