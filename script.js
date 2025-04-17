function copyPrompt2() {
    alert('CACA')
  // Get the text field
  var copyText = document.querySelector("#prompt2");
    alert(copyText.textContent());
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}