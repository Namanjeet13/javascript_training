// tagName returns the tag name of the element
console.log(firstElement.tagName);

// firstChild returns the first child element of the element
console.log(firstElement.firstChild);
console.log(document.body.firstChild);

// innerText returns the text content of the element, including any text within child elements
console.log(firstElement.innerText);

// innerText to change the text content
firstElement.innerText = "New Heading";
console.log(firstElement.innerText);

// innerHTML returns the HTML content of the element, including any child elements
console.log(firstElement.innerHTML);

// innerHTML to change the HTML content
firstElement.innerHTML = "<strong>New Heading</strong>";
console.log(firstElement.innerHTML);

// textContent returns the text content of the element, even if its hidden
confirmed(firstElement.textContent); // Should display "New Heading"
