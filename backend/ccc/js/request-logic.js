// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

/* A function called getContentType, which will take a string representing a filename
and return the proper content-type extension.
You will need to implement the functionality for determining content types
for 'text/html', 'text/css', 'image/jpeg', and 'text/plain'. */

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  if (filename.endsWith(`.html`)) {
    return 'text/html'
  } else if (filename.endsWith(`.css`)) {
    return 'text/css'
  } else if (filename.endsWith(`.jpeg`) || filename.endsWith(`.jpg`)) {
    return 'image/jpeg'
  } else {
    return 'text/plain'
  }
}