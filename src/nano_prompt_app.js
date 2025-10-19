const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });

// Replace this with your real Nano API key
const NANO_API_KEY = "your_nano_api_key_here";

// List of sample prompts
const prompts = [
  "Write a short poem about space.",
  "Explain quantum computing simply.",
  "Generate 3 app ideas for students.",
  "Summarize the story of Romeo and Juliet."
];

console.log("Choose a prompt to send to Nano AI:\n");
prompts.forEach((p, i) => {
  console.log(`${i + 1}. ${p}`);
});

const choice = parseInt(prompt("\nEnter number: ")) - 1;

if (choice < 0 || choice >= prompts.length) {
  console.log("Invalid choice!");
  process.exit(1);
}

const userPrompt = prompts[choice];
console.log(`\nSending to Nano AI:\n"${userPrompt}"\n`);

axios.post(
  "https://api.nano.dev/v1/completions",
  {
    model: "gpt-4-turbo",
    prompt: userPrompt,
  },
  {
    headers: {
      Authorization: `Bearer ${NANO_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => {
    console.log("Nano AI Response:\n");
    console.log(response.data.choices[0].text);
  })
  .catch((err) => {
    console.error("Error calling Nano AI:", err.message);
  });
