const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
    const trimmedText = textInput.value.trim();
    if (trimmedText === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = trimmedText;
    }
});
