!-- Button to open the dialog --
button onclick=showDialog()Open Fullscreen Dialogbutton

!-- Dialog content --
dialog id=fullscreenDialog
  !-- Import text content from external file --
  div id=dialogContentdiv
  button onclick=closeDialog()Close Dialogbutton
dialog

script
   Function to open the dialog
  function showDialog() {
    const dialog = document.getElementById('fullscreenDialog');
    dialog.showModal();
  }

   Function to close the dialog
  function closeDialog() {
    const dialog = document.getElementById('fullscreenDialog');
    dialog.close();
  }

   Fetch and insert text content from external file with .html extension
  fetch('dialog-content.html')
    .then(response = response.text())
    .then(content = {
      document.getElementById('dialogContent').innerHTML = content;
    });
script