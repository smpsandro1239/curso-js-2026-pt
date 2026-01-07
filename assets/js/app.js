document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initQuiz();
    initNavigation();
    initFooter();
});

function initFooter() {
    const footer = document.querySelector('footer');
    if (footer && !document.querySelector('.hero')) { // Apply only to lesson pages (landing page has .hero)
        footer.innerHTML = `
            <p>Curso Completo de JavaScript - 2026 | Feito com ❤️ por <strong>Sandro Pereira</strong></p>
            <p style="font-size: 0.85rem; margin-top: 10px; opacity: 0.8;">
                <a href="https://github.com/smpsandro1239" target="_blank" style="color: inherit; text-decoration: none;">GitHub</a> •
                <a href="mailto:smpsandro1239@gmail.com?subject=D%C3%BAvida%20ou%20Bug%20-%20Curso%20JS%202026&body=Ol%C3%A1%20Sandro!%0A%0AEstou%20na%20aula%20..." style="color: inherit; text-decoration: none;">
                    🐛 Reportar Erro / Tirar Dúvida
                </a>
            </p>
        `;
    }
}

function initClock() {
    let totalSeconds = 60 * 60; // 60 minutes default
    const clockDisplay = document.getElementById('clock');

    // Check if clock element exists
    if (!clockDisplay) return;

    function updateClock() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        clockDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalSeconds > 0) {
            totalSeconds--;
            setTimeout(updateClock, 1000);
        }
    }

    updateClock();
}

function initQuiz() {
    const questionsContainer = document.querySelectorAll('.question');
    if (questionsContainer.length === 0) return;

    // The 'questions' object must be defined in the HTML file before this script is loaded
    // or we can attach it to window object if defined there.
    // For this implementation, we assume 'courseData' global object contains question data.
    if (typeof window.courseData === 'undefined' || !window.courseData.questions) {
        console.warn('Quiz data not found in window.courseData');
        return;
    }

    const questions = window.courseData.questions;
    let selectedAnswers = {};
    const submitBtn = document.getElementById('submitBtn');
    const resultsDiv = document.getElementById('results');
    const resultsText = document.getElementById('resultsText');
    const resultsScore = document.getElementById('resultsScore');

    const options = document.querySelectorAll('.option');

    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', function() {
            const questionDiv = this.closest('.question');
            const questionNum = questionDiv.dataset.question;

            // Remove selected class from all options in this question
            questionDiv.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Add selected class to clicked option
            this.classList.add('selected');

            // Store selected answer
            selectedAnswers[questionNum] = this.dataset.value;

            // Enable submit button if all questions are answered
            checkAllAnswered();
        });
    });

    function checkAllAnswered() {
        const totalQuestions = Object.keys(questions).length;
        const answeredQuestions = Object.keys(selectedAnswers).length;
        if (submitBtn) {
            submitBtn.disabled = answeredQuestions !== totalQuestions;
        }
    }

    // Submit answers
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            let correctCount = 0;

            // Process each question
            Object.keys(questions).forEach(qNum => {
                const questionDiv = document.querySelector(`.question[data-question="${qNum}"]`);
                const selectedOption = questionDiv.querySelector('.option.selected');
                const correctAnswer = questions[qNum].correct;

                if (selectedOption) {
                    const userAnswer = selectedOption.dataset.value;

                    // Clear previous feedback
                    questionDiv.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('correct', 'incorrect');
                    });

                    const feedbackDiv = questionDiv.querySelector('.feedback');
                    const explanationDiv = feedbackDiv.querySelector('.explanation');
                    const analogyDiv = feedbackDiv.querySelector('.analogy-feedback');

                    if (userAnswer === correctAnswer) {
                        selectedOption.classList.add('correct');
                        explanationDiv.innerHTML = '<strong>✅ Resposta correta!</strong> ' + questions[qNum].explanation;
                        analogyDiv.textContent = questions[qNum].analogy;
                        correctCount++;
                    } else {
                        selectedOption.classList.add('incorrect');
                        explanationDiv.innerHTML = '<strong>❌ Resposta incorreta.</strong> ' + questions[qNum].explanation;
                        analogyDiv.textContent = questions[qNum].analogy;

                        // Highlight correct answer
                        const correctOption = questionDiv.querySelector(`.option[data-value="${correctAnswer}"]`);
                        if (correctOption) {
                            correctOption.classList.add('correct');
                        }
                    }

                    feedbackDiv.classList.add('show');
                }
            });

            // Show results
            const totalQuestions = Object.keys(questions).length;
            const percentage = Math.round((correctCount / totalQuestions) * 100);

            if (resultsScore) resultsScore.textContent = `Acertaste ${correctCount} de ${totalQuestions} perguntas (${percentage}%)`;

            if (resultsText && resultsDiv) {
                if (percentage >= 70) {
                    resultsText.textContent = 'Excelente trabalho! 🎉';
                    resultsDiv.className = 'results show success';
                } else {
                    resultsText.textContent = 'Boa tentativa! Revê os conceitos e tenta novamente. 💪';
                    resultsDiv.className = 'results show fail';
                }
                resultsDiv.style.display = 'block';
            }
        });
    }
}

function initNavigation() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
