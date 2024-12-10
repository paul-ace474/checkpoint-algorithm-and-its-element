function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define vowels for checking
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let inWord = false; // To track whether we are inside a word

    // Iterate through the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === '.') {
            break; // Stop at the period
        }

        // Increment character count
        length++;

        // Check if the character is a vowel
        if (vowels.has(char)) {
            vowelCount++;
        }

        // Check for word boundaries
        if (char !== ' ') {
            if (!inWord) {
                wordCount++; // A new word starts
                inWord = true;
            }
        } else {
            inWord = false; // Outside a word
        }
    }

    // Add 1 to length to account for the period
    length++;

    // Return the results
    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount,
    };
}

// Example usage
const sentence = "This is a sample sentence.";
const result = analyzeSentence(sentence);

console.log("Length of the sentence:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);
