/**
 * Update the output text as you type in the textarea
 */
 updateText = () => {
    const text = document.getElementById("text-input").value;
    document.getElementById('text-output').innerText = text;
  }
  
  /**
   * Toggle the bold class for the output text
   */
  makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
  makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  /**
   * Toggle the underline class for the output text
   */
  makeUnderline = (elem) => {
      elem.classList.toggle('active');
      let output = document.getElementById('text-output');
      (output.classList.contains('underline')) ? output.classList.remove('underline') :
      output.classList.add('underline');
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   */
  alignText = (elem, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType;
    let alignButtons = document.getElementsByClassName('align');
    for(button of alignButtons) {
      alignButtons[i].classList.remove('active');
    }
    elem.classList.toggle('active');
  }