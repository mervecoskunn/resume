// function sendMail(contactForm) {
//     emailjs.send("service_nd4xsh7", "resume", {
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "message": contactForm.projectsummary.value
//     })
//     .then(
//         function(response) {
//             console.log("SUCCESS", response);
//         },
//         function(error) {
//             console.log("FAILED", error);
//         }
//     );
//      return false; //to block from loading a new page
// }