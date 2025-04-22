const heading = document.querySelector('.image-with-text__heading.inline-richtext.h1.template--24453778112828__image_with_text_8Hiw8j');

if (heading) {
  const words = heading.textContent.trim().split(/\s+/); // Split on whitespace
  const limitedBreaks = words.map((word, index) => {
    // Insert a <br> after every 2nd and 5th word (index 1 and 4)
    if (index === 1 || index === 4) {
      return word + '<br>';
    }
    return word;
  });

  heading.innerHTML = limitedBreaks.join(' ');
}
