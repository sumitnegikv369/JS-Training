// ? 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
const googleTranslate = require("./api");

googleTranslate('en', 'ja', 'Nice To Meet You',
  (error, translation) => {
    if (error) {
      console.error("Error:", error.cause);
    } else {
      console.log("Translated text:", translation);
    }
  });

