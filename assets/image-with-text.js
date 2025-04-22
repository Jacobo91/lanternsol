const headingOne = document.querySelector('.image-with-text__heading-one.inline-richtext.h1');
const headingTwo = document.querySelector('.image-with-text__heading-two.inline-richtext.h1');

if (headingOne) {
  const words = headingOne.textContent.trim().split(/\s+/);
  const limitedBreaks = words.map((word, index) => {
    if (index === 1 || index === 3) {
      return word + '<br>';
    }
    return word;
  });
  headingOne.innerHTML = limitedBreaks.join(' ');
}

if (headingTwo) {
  const words = headingTwo.textContent.trim().split(/\s+/);
  const limitedBreaks = words.map((word, index) => {
    if (index === 1 || index === 3) {
      return word + '<br>';
    }
    return word;
  });
  headingTwo.innerHTML = limitedBreaks.join(' ');
}
