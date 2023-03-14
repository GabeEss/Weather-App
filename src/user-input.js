export default function getUserInput() {
    const userInput = document.getElementById('search-bar');

    if (!userInput) {
        throw new Error('Input element not found!');
      }
      const inputVal = userInput.value.trim();
      if (!inputVal) {
        throw new Error('Please enter a valid input!');
      }
      
      return inputVal;
}