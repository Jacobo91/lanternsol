const heading = document.querySelector('.image-with-text__heading.inline-richtext.h1.template--24453778112828__image_with_text_8Hiw8j');
const heading2 = document.querySelector('.image-with-text__heading.inline-richtext.h1.template--24453778145596__image_with_text_tFmyhT');
const heading3 = document.querySelector('.image-with-text__heading.inline-richtext.h1.template--24453778473276__image_with_text_AfhccY');

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

if (heading2) {
  const words = heading2.textContent.trim().split(/\s+/); // Split on whitespace
  const limitedBreaks = words.map((word, index) => {
    // Insert a <br> after every 2nd and 5th word (index 1 and 4)
    if (index === 1 || index === 4) {
      return word + '<br>';
    }
    return word;
  });

  heading2.innerHTML = limitedBreaks.join(' ');
}

if (heading3) {
  const words = heading3.textContent.trim().split(/\s+/); // Split on whitespace
  const limitedBreaks = words.map((word, index) => {
    // Insert a <br> after every 2nd and 5th word (index 1 and 4)
    if (index === 1 || index === 4) {
      return word + '<br>';
    }
    return word;
  });

  heading3.innerHTML = limitedBreaks.join(' ');
}
