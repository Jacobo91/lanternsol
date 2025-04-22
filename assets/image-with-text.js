const heading = document.querySelector('.image-with-text__heading.inline-richtext.h1');

if (heading) {
  const words = heading.textContent.trim().split(/\s+/); // Split on whitespace
  const limitedBreaks = words.map((word, index) => {
    // Insert a <br> after word 2 and word 4 (index 1 and 3)
    if (index === 1 || index === 3) {
      return word + '<br>';
    }
    return word;
  });

  heading.innerHTML = limitedBreaks.join(' ');
}