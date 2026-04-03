function verify() {
    let certNo = document.getElementById("certNumber").value;
    let certs = JSON.parse(localStorage.getItem("certificates")) || [];
    let found = certs.find(c => c.certId === certNo);
    let resultDiv = document.getElementById("result");
    
    if(found) {
        resultDiv.innerHTML = `<div style="background:#e0f2f1; padding:1rem; border-radius:10px;">
            <h3>✅ Verified Certificate</h3>
            <p><strong>Name:</strong> ${found.studentName}</p>
            <p><strong>Course:</strong> ${found.course}</p>
            <p><strong>Date:</strong> ${found.issueDate}</p>
        </div>`;
    } else {
        resultDiv.innerHTML = `<div style="background:#ffebee; padding:1rem; border-radius:10px; color:red;">
            ❌ NOT VERIFIED - Invalid Certificate Number
        </div>`;
    }
}

// Sample certificate (admin can add more)
let sampleCerts = [
    {certId: "SGRT001", studentName: "Rahul Sharma", course: "Computer Courses", issueDate: "2025-01-15"}
];
if(!localStorage.getItem("certificates")) {
    localStorage.setItem("certificates", JSON.stringify(sampleCerts));
}