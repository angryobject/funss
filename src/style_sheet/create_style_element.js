// thanks to https://davidwalsh.name/add-rules-stylesheets
export default function createStyleElement(media) {
  const style = document.createElement('style');

  if (media) {
    style.setAttribute('media', media);
  }

  // WebKit hack :(
  style.appendChild(document.createTextNode(''));

  document.head.appendChild(style);

  return style;
}
