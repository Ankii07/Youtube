const commentTemplates = [
    "This changed my perspective completely!",
    "Who's watching this in {year}?",
    "This deserves way more views!",
    "I've been looking for this my whole life!",
    "Underrated content right here!",
    "This video is a masterpiece!",
    "Can we appreciate the editing? 🔥",
    "I didn't know I needed this until now",
    "This is why I love YouTube",
    "The algorithm blessed me today",
    "Bookmarked for later!",
    "This needs to go viral!",
    "The quality is insane!",
    "I've watched this {number} times already",
    "This helped me so much, thank you!",
    "The production value is incredible!",
    "Why isn't this more popular?",
    "This is pure gold! 💛",
    "My mind is officially blown",
    "This video just made my day!",
    "The attention to detail is amazing",
    "I can't stop watching this!",
    "This is life-changing content",
    "The world needs to see this!",
    "This is exactly what I was looking for!",
    "The soundtrack is perfect! 🎵",
    "This deserves an award! 🏆",
    "I'm sharing this with everyone I know",
    "This video is a hidden gem! 💎",
    "The creator deserves more subscribers!",
    "This is next level content!",
    "I'm literally crying right now 😭",
    "This is too good to be free!",
    "The visuals are stunning! ✨",
    "This video is a work of art! 🎨",
    "I can't believe this is free content",
    "This is better than most TV shows!",
    "The information is so valuable!",
    "This video is underappreciated!",
    "The energy in this is incredible! ⚡"
];

const emojis = ["🔥", "❤️", "👏", "🎉", "✨", "👍", "💯", "😂", "😍", "🤯", "👌", "🙌", "🎯", "💎", "🏆"];
const years = ["2023", "2024", "2025"];
const numbers = ["5", "10", "20", "50", "100"];

export function generateRandomComment() {
    let comment = commentTemplates[Math.floor(Math.random() * commentTemplates.length)];
    
    // Replace placeholders with random values
    comment = comment.replace("{year}", years[Math.floor(Math.random() * years.length)]);
    comment = comment.replace("{number}", numbers[Math.floor(Math.random() * numbers.length)]);
    
    // Add random emojis (50% chance)
    if (Math.random() > 0.5) {
        const emojiCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < emojiCount; i++) {
            comment += " " + emojis[Math.floor(Math.random() * emojis.length)];
        }
    }
    
    // Add random capitalization (30% chance)
    if (Math.random() > 0.7) {
        comment = comment.toUpperCase();
    }
    
    return comment;
}

