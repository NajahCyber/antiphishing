// Get the URL to search for
const urlToCheck = 'https://example.com'; // Change this to the URL you want to check

// Function to check if the URL exists in the HTML content
function checkURLInHTML(url) {
  const links = document.querySelectorAll('a'); // Select all anchor elements

  let urlFound = false;

  links.forEach(link => {
    if (link.href === url) {
      urlFound = true;
      return; // Exit loop if URL is found
    }
  });

  if (urlFound) {
    console.log(`URL (${url}) is present in the HTML.`);
  } else {
    console.log(`URL (${url}) is NOT present in the HTML.`);
  }
}

// Call the function to check the URL presence
checkURLInHTML(urlToCheck);
