$(document).ready(function() {
  // Initialize the tooltip.
  $('[data-toggle="tooltip"]').tooltip()
  
  // When the copy button is clicked, select the value of the text box, attempt
  // to execute the copy command, and trigger event to update tooltip message
  // to indicate whether the text was successfully copied.
  /*
  $('#copy-button').bind('click', function() {
    var input = document.querySelector('#copy-input');
    var email = input.textContent;
    // input.setSelectionRange(0, input.value.length + 1);
    try {
      var success =document.execCommand('copy',false, email);
      //  document.execCommand('copy');
      if (success) {
        $('#copy-button').trigger('copied', ['Copied!']);
      } else {
        $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
      }
    } catch (err) {
      $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
    }
  });

  // Handler for updating the tooltip message.
  $('#copy-button').bind('copied', function(event, message) {
    $(this).attr('title', message)
        .tooltip('fixTitle')
        .tooltip('show')
        .attr('title', "Copy to Clipboard")
        .tooltip('fixTitle');
  });*/
});
