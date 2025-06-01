document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    document.getElementById("formMessage").textContent = `Thanks for subscribing, ${name}!`;
    event.target.reset();
  });
  
  function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
      document.getElementById("fileMessage").textContent = `File '${file.name}' uploaded successfully.`;
    } else {
      document.getElementById("fileMessage").textContent = "Please select a file first.";
    }
  }
  