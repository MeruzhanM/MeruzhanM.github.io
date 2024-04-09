function toggle(button, sectionClass) {
  let sections = document.getElementsByClassName(sectionClass);
  for (let section of sections) {
    if (section.style.maxHeight) {
      section.style.maxHeight = null;
      section.style.opacity = 0;
      button.textContent = "+";
    } else {
      section.style.maxHeight = section.scrollHeight + "px";
      section.style.opacity = 1;
      button.textContent = "-";
    }
  }
}
