document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("enqName").value;
    let phone = document.getElementById("enqPhone").value;
    let course = document.getElementById("enqCourse").value;
    let message = document.getElementById("enqMessage").value;
    
    let enquiry = {
        id: Date.now(),
        name: name,
        phone: phone,
        course: course,
        message: message,
        date: new Date().toLocaleString()
    };
    
    let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];
    enquiries.push(enquiry);
    localStorage.setItem("enquiries", JSON.stringify(enquiries));
    
    let whatsappMsg = `New Enquiry!%0AName: ${name}%0APhone: ${phone}%0ACourse: ${course}%0AMessage: ${message}`;
    window.open(`https://wa.me/916398946335?text=${whatsappMsg}`, '_blank');
    
    alert("✅ Enquiry Submitted! We will contact you on WhatsApp.");
    this.reset();
});