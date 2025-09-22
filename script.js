// Quiz Application - Modern Quiz Platform
// Easy to modify structure for adding categories and questions

class QuizApp {
    constructor() {
        this.currentScreen = 'welcome';
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.currentQuizScore = 0; // Score for current quiz session
        this.totalScore = 0; // Cumulative score across all quizzes
        this.completedCategories = new Set(); // Track completed categories
        this.totalQuestions = 7; // Can be easily modified
        
        // Load saved score from localStorage
        this.loadSavedScore();
        
        // Initialize the application
        this.init();
    }

    // Quiz Data - Easy to modify and expand
    get quizData() {
        return {
            // You can easily add more categories here
            categories: [
                {
                    id: 'science',
                    title: 'Science & Technology',
                    description: 'Test your knowledge of scientific facts and technological innovations',
                    icon: 'fas fa-flask',
                    color: '#667eea',
                    questions: [
                        {
                            question: "What is the chemical symbol for gold?",
                            options: ["Go", "Gd", "Au", "Ag"],
                            correct: 2,
                            explanation: "Au comes from the Latin word 'aurum' meaning gold."
                        },
                        {
                            question: "Which planet is known as the Red Planet?",
                            options: ["Venus", "Mars", "Jupiter", "Saturn"],
                            correct: 1,
                            explanation: "Mars appears red due to iron oxide (rust) on its surface."
                        },
                        {
                            question: "What does CPU stand for?",
                            options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
                            correct: 0,
                            explanation: "CPU is the main component that executes instructions in a computer."
                        },
                        {
                            question: "What is the speed of light in vacuum?",
                            options: ["300,000 km/s", "299,792,458 m/s", "186,000 miles/s", "All of the above"],
                            correct: 3,
                            explanation: "All these values represent the speed of light in different units."
                        },
                        {
                            question: "Which gas makes up about 78% of Earth's atmosphere?",
                            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                            correct: 2,
                            explanation: "Nitrogen makes up about 78% of our atmosphere, while oxygen is about 21%."
                        },
                        {
                            question: "What is the smallest unit of matter?",
                            options: ["Molecule", "Atom", "Proton", "Electron"],
                            correct: 1,
                            explanation: "Atoms are the basic building blocks of all matter."
                        },
                        {
                            question: "Which programming language is known as the 'language of the web'?",
                            options: ["Python", "Java", "JavaScript", "C++"],
                            correct: 2,
                            explanation: "JavaScript is essential for web development and runs in browsers."
                        },
                        {
                            question: "What gas do humans inhale for respiration?",
                            options: ["Oxygen", "Nitrogen", "Cardon Dioxide", "Argon"],
                            correct: 1,
                            explanation: "No explanation."
                        },
                        {
                            question: "ewgfgsdh",
                            options: ["jhgf", "gfhgs"],
                            correct: 1
                        }

                    ]
                },
                {
                    id: 'history',
                    title: 'History & Culture',
                    description: 'Explore historical events and cultural knowledge from around the world',
                    icon: 'fas fa-landmark',
                    color: '#f093fb',
                    questions: [
                        {
                            question: "In which year did World War II end?",
                            options: ["1944", "1945", "1946", "1947"],
                            correct: 1,
                            explanation: "World War II ended in 1945 with the surrender of Japan in September."
                        },
                        {
                            question: "Who painted the Mona Lisa?",
                            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                            correct: 2,
                            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
                        },
                        {
                            question: "Which ancient wonder of the world was located in Alexandria?",
                            options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Temple of Artemis"],
                            correct: 1,
                            explanation: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World."
                        },
                        {
                            question: "What was the Berlin Wall's primary purpose?",
                            options: ["Military defense", "Economic barrier", "Prevent East Germans from fleeing to West", "Cultural separation"],
                            correct: 2,
                            explanation: "The Berlin Wall was built to prevent East Germans from escaping to West Berlin."
                        },
                        {
                            question: "Which empire was ruled by Julius Caesar?",
                            options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Persian Empire"],
                            correct: 1,
                            explanation: "Julius Caesar was a Roman general and dictator of the Roman Empire."
                        },
                        {
                            question: "In which country did the Renaissance begin?",
                            options: ["France", "Germany", "Italy", "Spain"],
                            correct: 2,
                            explanation: "The Renaissance began in Italy during the 14th century."
                        },
                        {
                            question: "Who was the first person to walk on the moon?",
                            options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                            correct: 1,
                            explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969."
                        }
                    ]
                },
                {
                    id: 'geography',
                    title: 'Geography & Nature',
                    description: 'Discover facts about our planet, countries, and natural phenomena',
                    icon: 'fas fa-globe-americas',
                    color: '#4facfe',
                    questions: [
                        {
                            question: "What is the longest river in the world?",
                            options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
                            correct: 1,
                            explanation: "The Nile River in Africa is the longest river in the world at 6,650 km."
                        },
                        {
                            question: "Which is the largest ocean on Earth?",
                            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                            correct: 3,
                            explanation: "The Pacific Ocean covers about 46% of Earth's water surface."
                        },
                        {
                            question: "Mount Everest is located in which mountain range?",
                            options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
                            correct: 3,
                            explanation: "Mount Everest is part of the Himalayan mountain range."
                        },
                        {
                            question: "Which country has the most time zones?",
                            options: ["United States", "Russia", "China", "Canada"],
                            correct: 1,
                            explanation: "Russia spans 11 time zones, the most of any country."
                        },
                        {
                            question: "What is the smallest country in the world?",
                            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
                            correct: 2,
                            explanation: "Vatican City is the smallest country with an area of just 0.17 square miles."
                        },
                        {
                            question: "Which desert is the largest in the world?",
                            options: ["Sahara Desert", "Antarctic Desert", "Arctic Desert", "Gobi Desert"],
                            correct: 1,
                            explanation: "Antarctica is technically the largest desert, being a cold desert."
                        },
                        {
                            question: "What is the deepest point in Earth's oceans?",
                            options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
                            correct: 2,
                            explanation: "The Mariana Trench's Challenger Deep is the deepest known point at about 36,000 feet."
                        }
                    ]
                }
                // Add more categories here easily by following the same structure
            ]
        };
    }

    // Load saved score from localStorage
    loadSavedScore() {
        const savedData = localStorage.getItem('easyQuizzyScore');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                this.totalScore = data.totalScore || 0;
                this.completedCategories = new Set(data.completedCategories || []);
            } catch (error) {
                console.log('Error loading saved score:', error);
                this.totalScore = 0;
                this.completedCategories = new Set();
            }
        }
    }

    // Save score to localStorage
    saveScore() {
        const dataToSave = {
            totalScore: this.totalScore,
            completedCategories: Array.from(this.completedCategories),
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem('easyQuizzyScore', JSON.stringify(dataToSave));
    }

    // Clear saved score (for reset functionality)
    clearSavedScore() {
        localStorage.removeItem('easyQuizzyScore');
        this.totalScore = 0;
        this.completedCategories = new Set();
        this.updateLiveScore();
    }

    // Confirm before resetting total score
    confirmScoreReset() {
        if (this.totalScore === 0) {
            alert('Your score is already 0!');
            return;
        }
        
        const confirmed = confirm(
            `Are you sure you want to reset your total score?\n\n` +
            `Current total score: ${this.totalScore} points\n` +
            `Categories completed: ${this.completedCategories.size}\n\n` +
            `This action cannot be undone!`
        );
        
        if (confirmed) {
            this.clearSavedScore();
            alert('Your total score has been reset to 0!');
        }
    }

    // Show help screen
    showHelp() {
        this.previousScreen = this.currentScreen; // Remember where we came from
        this.showScreen('help');
    }

    // Close help screen and return to previous screen
    closeHelp() {
        if (this.previousScreen && this.previousScreen !== 'help') {
            this.showScreen(this.previousScreen);
        } else {
            this.showScreen('welcome'); // Default to welcome if no previous screen
        }
    }

    // Initialize the application
    init() {
        this.bindEvents();
        this.showScreen('welcome');
        this.updateLiveScore();
    }

    // Event bindings
    bindEvents() {
        // Navigation buttons
        document.getElementById('startBtn').addEventListener('click', () => this.showCategorySelection());
        document.getElementById('homeBtn').addEventListener('click', () => this.resetQuiz());
        document.getElementById('retryBtn').addEventListener('click', () => this.showCategorySelection());
        
        // Score reset button
        document.getElementById('resetScoreBtn').addEventListener('click', () => this.confirmScoreReset());
        
        // Help buttons
        document.getElementById('helpBtn').addEventListener('click', () => this.showHelp());
        document.getElementById('helpCloseBtn').addEventListener('click', () => this.closeHelp());
        document.getElementById('welcomeHelpBtn').addEventListener('click', () => this.showHelp());
        
        // Quiz navigation
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
    }

    // Show different screens
    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(screenName + 'Screen').classList.add('active');
        this.currentScreen = screenName;
        
        // Add animation class for smooth transitions
        setTimeout(() => {
            document.getElementById(screenName + 'Screen').style.opacity = '1';
        }, 100);
    }

    // Show category selection
    showCategorySelection() {
        const categoryGrid = document.getElementById('categoryGrid');
        categoryGrid.innerHTML = '';
        
        this.quizData.categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            
            // Add completed indicator if category has been completed
            const isCompleted = this.completedCategories.has(category.id);
            const completedBadge = isCompleted ? '<div class="completed-badge"><i class="fas fa-check"></i> Completed</div>' : '';
            
            categoryCard.innerHTML = `
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3 class="category-title">${category.title}</h3>
                <p class="category-description">${category.description}</p>
                ${completedBadge}
            `;
            
            if (isCompleted) {
                categoryCard.classList.add('completed');
            }
            
            categoryCard.addEventListener('click', () => this.startQuiz(category));
            categoryGrid.appendChild(categoryCard);
        });
        
        this.showScreen('category');
    }

    // Start quiz with selected category
    startQuiz(category) {
        this.currentCategory = category;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.currentQuizScore = 0; // Reset only current quiz score
        
        // Update UI elements
        document.getElementById('currentCategory').textContent = category.title;
        document.getElementById('totalQuestions').textContent = this.totalQuestions;
        
        this.showQuestion();
        this.showScreen('quiz');
    }

    // Display current question
    showQuestion() {
        const question = this.currentCategory.questions[this.currentQuestionIndex];
        
        // Update question counter and progress
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        this.updateProgress();
        
        // Update question text
        document.getElementById('questionText').textContent = question.question;
        
        // Create answer options
        const answersContainer = document.getElementById('answersContainer');
        answersContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const answerOption = document.createElement('div');
            answerOption.className = 'answer-option';
            answerOption.innerHTML = `
                <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
                <span>${option}</span>
            `;
            
            // Check if this was previously selected
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                answerOption.classList.add('selected');
            }
            
            answerOption.addEventListener('click', () => this.selectAnswer(index, answerOption));
            answersContainer.appendChild(answerOption);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    // Handle answer selection
    selectAnswer(answerIndex, selectedElement) {
        // Remove previous selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Mark new selection
        selectedElement.classList.add('selected');
        
        // Store answer
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Enable next button
        document.getElementById('nextBtn').disabled = false;
        
        // Auto-advance after a short delay (optional)
        setTimeout(() => {
            if (this.currentQuestionIndex < this.totalQuestions - 1) {
                this.nextQuestion();
            } else {
                this.finishQuiz();
            }
        }, 1000);
    }

    // Navigate to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.totalQuestions - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    }

    // Navigate to previous question
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    // Update navigation buttons state
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.disabled = this.currentQuestionIndex === 0;
        nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === undefined;
        
        if (this.currentQuestionIndex === this.totalQuestions - 1) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Finish Quiz';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
    }

    // Update progress bar
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        document.getElementById('progressDisplay').textContent = `${this.currentQuestionIndex + 1}/${this.totalQuestions}`;
    }

    // Update live score display
    updateLiveScore() {
        document.getElementById('liveScore').textContent = this.totalScore;
    }

    // Calculate final score
    calculateScore() {
        this.currentQuizScore = 0;
        this.userAnswers.forEach((answer, index) => {
            if (answer === this.currentCategory.questions[index].correct) {
                this.currentQuizScore += 10; // 10 points per correct answer
            }
        });
        
        // Add current quiz score to total score
        this.totalScore += this.currentQuizScore;
        
        // Mark category as completed
        this.completedCategories.add(this.currentCategory.id);
        
        // Save the updated score
        this.saveScore();
        
        this.updateLiveScore();
    }

    // Finish quiz and show results
    finishQuiz() {
        this.showLoadingScreen();
        
        setTimeout(() => {
            this.calculateScore();
            this.showResults();
        }, 1500); // Simulate processing time
    }

    // Show loading screen
    showLoadingScreen() {
        document.getElementById('loadingSpinner').classList.remove('hidden');
    }

    // Hide loading screen
    hideLoadingScreen() {
        document.getElementById('loadingSpinner').classList.add('hidden');
    }

    // Display results
    showResults() {
        this.hideLoadingScreen();
        
        const correctAnswers = this.userAnswers.filter((answer, index) => 
            answer === this.currentCategory.questions[index].correct
        ).length;
        
        const accuracy = Math.round((correctAnswers / this.totalQuestions) * 100);
        
        // Update results display
        document.getElementById('finalScore').textContent = this.currentQuizScore;
        document.getElementById('totalScoreDisplay').textContent = this.totalScore;
        document.getElementById('correctAnswers').textContent = `${correctAnswers}/${this.totalQuestions}`;
        document.getElementById('accuracyRate').textContent = accuracy + '%';
        
        // Set appropriate icon and message based on performance
        const resultsIcon = document.getElementById('resultsIcon');
        const resultsTitle = document.getElementById('resultsTitle');
        const resultsMessage = document.getElementById('resultsMessage');
        
        if (accuracy >= 80) {
            resultsIcon.innerHTML = '<i class="fas fa-trophy" style="color: #f1c40f;"></i>';
            resultsTitle.textContent = 'Excellent Work!';
            resultsMessage.textContent = 'Outstanding performance! You have excellent knowledge in this category.';
        } else if (accuracy >= 60) {
            resultsIcon.innerHTML = '<i class="fas fa-medal" style="color: #3498db;"></i>';
            resultsTitle.textContent = 'Good Job!';
            resultsMessage.textContent = 'Well done! You have a solid understanding of this topic.';
        } else {
            resultsIcon.innerHTML = '<i class="fas fa-redo" style="color: #e74c3c;"></i>';
            resultsTitle.textContent = 'Keep Learning!';
            resultsMessage.textContent = 'Good effort! Consider reviewing this topic and try again.';
        }
        
        this.showScreen('results');
    }

    // Reset quiz to initial state (but preserve total score)
    resetQuiz() {
        this.currentCategory = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.currentQuizScore = 0;
        // Note: totalScore is NOT reset - it persists across sessions
        this.updateLiveScore(); // This will show the persistent total score
        document.getElementById('progressDisplay').textContent = '0/0';
        document.getElementById('progressBar').style.width = '0%';
        this.showScreen('welcome');
    }
}

// Utility functions for easy customization

// Function to add new categories (call this to add categories dynamically)
function addCategory(categoryData) {
    // This would be used if you want to add categories dynamically
    // For now, categories are defined in the quizData getter
    console.log('To add a new category, modify the quizData getter in the QuizApp class');
}

// Function to modify quiz settings
function updateQuizSettings(settings) {
    // This could be used to modify settings like number of questions per category
    if (settings.questionsPerCategory) {
        // This would require modifying the app instance
        console.log('Quiz settings updated');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and start the quiz application
    window.quizApp = new QuizApp();
    
    // Add some visual feedback for loading
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!window.quizApp) return;
    
    switch (e.key) {
        case 'ArrowLeft':
            if (window.quizApp.currentScreen === 'quiz') {
                document.getElementById('prevBtn').click();
            }
            break;
        case 'ArrowRight':
        case 'Enter':
            if (window.quizApp.currentScreen === 'quiz') {
                document.getElementById('nextBtn').click();
            } else if (window.quizApp.currentScreen === 'help') {
                document.getElementById('helpCloseBtn').click();
            }
            break;
        case 'Escape':
            if (window.quizApp.currentScreen === 'help') {
                window.quizApp.closeHelp();
            } else if (window.quizApp.currentScreen !== 'welcome') {
                window.quizApp.resetQuiz();
            }
            break;
        case 'h':
        case 'H':
        case '?':
            if (window.quizApp.currentScreen !== 'help') {
                window.quizApp.showHelp();
            }
            break;
    }
});

/*
=== EASY CUSTOMIZATION GUIDE ===

To add more categories:
1. Go to the quizData getter method
2. Add a new object to the categories array following this structure:
   {
       id: 'unique-id',
       title: 'Category Title',
       description: 'Category description',
       icon: 'fas fa-icon-name', // FontAwesome icon
       color: '#hexcolor',
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

To change the number of questions per category:
1. Modify the totalQuestions property in the constructor
2. Make sure each category has enough questions

To add new question types:
1. Modify the showQuestion() method
2. Update the selectAnswer() method to handle new formats

To customize scoring:
1. Modify the calculateScore() method
2. Change the points per question (currently 10 points each)

To add new screens:
1. Add HTML for the new screen in index.html
2. Update the showScreen() method
3. Add navigation logic

The code is designed to be easily maintainable and expandable!
*/
