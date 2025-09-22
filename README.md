# Easy Quizzy - Modern Online Quiz Platform 🧠


✨ Features

- **Modern UI/UX**: Beautiful gradient backgrounds, smooth animations, and responsive design
- **Live Score Tracking**: Real-time score display in the header
- **Progress Indicators**: Visual progress bar and question counter
- **3 Quiz Categories**: Science & Technology, History & Culture, Geography & Nature
- **7 Questions per Category**: Each category contains 7 carefully crafted questions
- **Interactive Animations**: Hover effects, transitions, and loading animations
- **Keyboard Navigation**: Use arrow keys and Enter to navigate
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Easy Customization**: Simple structure for adding new categories and questions

## 🚀 Getting Started

### Running the Quiz

1. Clone this repository
2. Open terminal in the project directory
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`
5. Enjoy the quiz! 🎉

### Alternative Methods
- Simply open `index.html` in your web browser
- Use any other local server (Live Server extension in VS Code, etc.)

## 🎮 How to Use

1. **Welcome Screen**: Click "Start Quiz" to begin
2. **Category Selection**: Choose from Science, History, or Geography
3. **Take the Quiz**: Answer 7 questions in your chosen category
4. **View Results**: See your score, accuracy, and performance feedback
5. **Try Again**: Select another category or retry

## 🛠 Easy Customization

### Adding New Categories

Edit `script.js` and find the `quizData` getter method. Add a new category object:

```javascript
{
    id: 'your-category-id',
    title: 'Your Category Title',
    description: 'Describe your category here',
    icon: 'fas fa-icon-name', // FontAwesome icon
    color: '#your-hex-color',
    questions: [
        {
            question: "Your question here?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0, // Index of correct answer (0-3)
            explanation: "Explanation of the correct answer"
        },
        // Add 6 more questions...
    ]
}
```

### Changing Number of Questions

1. Modify `totalQuestions` property in the `QuizApp` constructor
2. Make sure each category has enough questions

### Customizing Scoring

- Edit the `calculateScore()` method in `script.js`
- Currently awards 10 points per correct answer
- Modify the scoring logic as needed

### Styling Changes

- Edit `style.css` to change colors, fonts, animations
- All CSS custom properties are clearly organized
- Responsive breakpoints are defined for mobile/tablet

## 🎨 Features Breakdown

### Modern Design Elements
- **Gradient Backgrounds**: Beautiful color transitions
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Hover Effects**: Enhanced user feedback
- **Modern Typography**: Google Fonts (Poppins)
- **FontAwesome Icons**: Professional iconography

### User Experience
- **Loading States**: Spinner animation during quiz completion
- **Auto-advance**: Questions advance automatically after selection
- **Visual Feedback**: Different states for selected, correct, and incorrect answers
- **Performance Messages**: Encouraging feedback based on score
- **Keyboard Shortcuts**: Arrow keys, Enter, and Escape navigation

### Technical Features
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Modular Code**: Object-oriented JavaScript structure
- **Easy Maintenance**: Well-commented and organized code
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML and keyboard navigation

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to:
- Add new quiz categories
- Improve the UI/UX
- Fix bugs or add features
- Enhance mobile experience
- Add new question types

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- Timer-based questions
- Difficulty levels
- Multiplayer mode
- Question explanations display
- Sound effects
- Dark/Light theme toggle
- Statistics tracking
- Social sharing

---

**Built with ❤️ by the Group 1 Nust Coding Pirates** 🏴‍☠️

Enjoy quizzing and keep learning! 🚀
