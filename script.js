

// Define all quiz questions
const questions = [
    {
        question: "Which car has right of way at the intersection with all arriving at same time?",
            options: {
                a: "The car on the left.",
                b: "The car on the right.",
                c: "The car that starts first?"
            },
            answer: "b"
        },
        {
            question: "What do you do when slowing down on a hill?",
            options: {
                a: "Use emergency brakes.",
                b: "Use brakes gradually.",
                c: "Use lower gear."
            },
            answer: "c"
        },
        {
            question: "Which conviction carries the highest number of points on your driving record?",
            options: {
                a: "Passing a stopped school bus loading or unloading children.",
                b: "Reckless driving.",
                c: "Driving without a license."
            },
            answer: "a"
        },
        {
            question: "When are roads likely to be more slippery?",
            options: {
                a: "After it has been raining for several hours.",
                b: "Just after it has been paved.",
                c: "Just after it has started drizzling."
            },
            answer: "c"
        },
        {
            question: "When following another car you should do which of the following?",
            options: {
                a: "Use two-second rule.",
                b: "Use your brakes often.",
                c: "Slow down abruptly."
            },
            answer: "a"
        },
        {
            question: "What does 'Do not hang out in the 'no zone' mean?",
            options: {
                a: "Do not louder in public places.",
                b: "No parking allowed.",
                c: "Do not park your car in truck's blind spots."
            },
            answer: "c"
        },
        {
            question: "Which statement is true about speed limits in North Carolina?",
            options: {
                a: "Maximum speed limit is 75 mph.",
                b: "Speed limit in Business district is 35 mph.",
                c: "Speed limit in the city is 35 mph unless otherwise posted."
            },
            answer: "c"
        },
        {
            question: "What happens if you let an underage person use your identification to buy alcohol?",
            options: {
                a: "DMV will revoke your license for one year.",
                b: "You will be subject to point and fine.",
                c: "You will be on probation for six months."
            },
            answer: "a"
        },
        {
            question: "What should you do when walking along a highway at night?",
            options: {
                a: "Walk on the right side of the road.",
                b: "Wear or carry something white.",
                c: "Walk on the paved portion of the road."
            },
            answer: "b"
        },
        {
            question: "How much alcohol should you have in your blood to be considered intoxicated?",
            options: {
                a: ".05%",
                b: ".10%",
                c: ".08%"
            },
            answer: "c"
        },
        {
            question: "How far in advance should you give your turning signal when driving at 45 mph?",
            options: {
                a: "200 feet",
                b: "400 feet",
                c: "50 feet"
            },
            answer: "a"
        },
        {
            question: "Which statement is true about farm equipment when they travel on the road?",
            options: {
                a: "They usually travel at the speed limit.",
                b: "They travel at a maximum speed limit of 15 to 20 mph.",
                c: "They are breaking the law."
            },
            answer: "b"
        },
        {
            question: "What percentage of traffic deaths are caused by drunk drivers?",
            options: {
                a: "67%",
                b: "25%",
                c: "38%"
            },
            answer: "c"
        },
        {
            question: "Properly inflated tires are important because?",
            options: {
                a: "It adds to safety and tire life.",
                b: "It is easier to check.",
                c: "Waste less gas."
            },
            answer: "a"
        },
        {
            question: "When driving on hard-packed snow or ice you should?",
            options: {
                a: "Overinflate the tires.",
                b: "Have less than usual air pressure in tires.",
                c: "Use chains or snow tires."
            },
            answer: "c"
        },
        {
            question: "If you are involved in an accident, what should you do?",
            options: {
                a: "Report the nearest law enforcement office.",
                b: "Notify your insurance company within five working days.",
                c: "Move your car to the side of the road."
            },
            answer: "a"
        },
        {
            question: "In North Carolina, how often should you have your vehicle inspection and registration done?",
            options: {
                a: "6 months",
                b: "2 years",
                c: "12 months"
            },
            answer: "c"
        },
        {
            question: "A leaky exhaust system should be repaired because it can cause?",
            options: {
                a: "Engine to run hot",
                b: "May allow dangerous fumes to enter the car.",
                c: "Waste gas and oil."
            },
            answer: "b"
        },
        {
            question: "What should a green arrow mean at a traffic light?",
            options: {
                a: "Traffic in all lanes must turn to the direction of the arrow.",
                b: "Traffic in that lane must turn to the direction of the arrow.",
                c: "All traffic must stop."
            },
            answer: "b"
        },
        {
            question: "What should a red arrow mean at a traffic light?",
            options: {
                a: "All traffic must stop.",
                b: "All traffic must turn to the direction of the arrow.",
                c: "Traffic in that lane must stop."
            },
            answer: "c"
        },
        {
            question: "What is the true statement about littering in North Carolina?",
            options: {
                a: "Minimum fine is $250 and maximum fine is $1000.",
                b: "You will be subject to point and fine.",
                c: "Revoke your license for six months."
            },
            answer: "a"
        },
        {
            question: "A trash thrown from a vehicle in North Carolina is?",
            options: {
                a: "No problem someone will eventually pick it up.",
                b: "Problem only if it hits someone.",
                c: "Driver will be charged with littering."
            },
            answer: "c"
        },
        {
            question: "What should you do when your car skids?",
            options: {
                a: "Use the brake gradually and hold the pedal down all the way.",
                b: "Turn your car's steering wheel towards the same direction your car's rear end is going.",
                c: "Use emergency brakes."
            },
            answer: "b"
        },
        {
            question: "Which one is the most dangerous traffic hazard?",
            options: {
                a: "Slow drivers.",
                b: "Middle-aged drivers.",
                c: "Women drivers."
            },
            answer: "a"
        },
        {
            question: "What should you do if you miss the exit on a highway?",
            options: {
                a: "Make a U-turn.",
                b: "Go to the next exit.",
                c: "Stop and back up to the ramp, then turn."
            },
            answer: "b"
        },
        {
            question: "Which statement is true about passing?",
            options: {
                a: "Signal just after you pass the vehicle.",
                b: "You require at least fifty feet of distance between you and the car ahead of you.",
                c: "Look ahead and behind to determine if it is safe to pass, glance over your shoulder to check blind spots, and then pass."
            },
            answer: "c"
        },
        {
            question: "If you have to turn right at an intersection, you should turn on the signal and do which of the following?",
            options: {
                a: "Go slightly towards the center of the road to give yourself some room.",
                b: "Pull your arm straight out of the window.",
                c: "Slow down and keep it to your right."
            },
            answer: "c"
        },
        {
            question: "When should you adjust your side and rearview mirrors?",
            options: {
                a: "Before you begin to drive.",
                b: "Before you get into the vehicle.",
                c: "Whenever you need to use them."
            },
            answer: "a"
        },
        {
            question: "Who has the right of way at the intersection?",
            options: {
                a: "A car approaching the intersection.",
                b: "A pedestrian.",
                c: "Whoever reaches the intersection first."
            },
            answer: "b"
        },
        {
            question: "When is a driving license required?",
            options: {
                a: "Sitting in the car while the engine is running.",
                b: "Operating a moped.",
                c: "Operating farm equipment."
            },
            answer: "a"
        },
        {
            question: "Why is it difficult to drive on country roads?",
            options: {
                a: "Cows have the right of way.",
                b: "Hills are likely to be steep and curves are likely to be sharp.",
                c: "Scenery can be beautiful."
            },
            answer: "b"
        },
        {
            question: "What should you do when you hear the siren of an emergency vehicle?",
            options: {
                a: "Slow down and move to the far right side possible.",
                b: "Stay in your lane.",
                c: "Move to the far right side possible and complete stop."
            },
            answer: "c"
        },
        {
            question: "What should you do on a four-lane highway?",
            options: {
                a: "Stay alert to the movement of vehicles next to you.",
                b: "Speed up so you can be off the road quickly.",
                c: "Drive slow."
            },
            answer: "a"
        },
        {
            question: "What should you do when you feel sleepy and have to drive a long distance?",
            options: {
                a: "At least every 100 miles stop, rest, and move around.",
                b: "Drive at nighttime to avoid heavy traffic.",
                c: "Open your window."
            },
            answer: "a"
        },
        {
            question: "What should you do after taking some medicine before a long trip?",
            options: {
                a: "Have someone else in the car with you.",
                b: "Find out the effects of that medicine.",
                c: "Have some food in your stomach."
            },
            answer: "b"
        },
        {
            question: "What should you use in fog, snow, and heavy rain?",
            options: {
                a: "High beam.",
                b: "Low beam.",
                c: "Parking lights only."
            },
            answer: "b"
        },
        {
            question: "What happens if you refuse to take a Breathalyzer or blood test?",
            options: {
                a: "DMV will revoke your license for one year.",
                b: "DMV will revoke your license for three months.",
                c: "You will be subject to fine and points."
            },
            answer: "a"
        },
        {
            question: "Which statement is true about the point system?",
            options: {
                a: "If you get 6 points in three years your license will be revoked.",
                b: "If you get 8 points, you can get three points reduced by completing a defensive-driving clinic.",
                c: "If you get 5 points after the reinstatement of your license, your license will be revoked."
            },
            answer: "c"
        },
        {
            question: "Which of the following is true about bicycle riders?",
            options: {
                a: "They are likely to get seriously hurt in almost every collision with cars.",
                b: "All bicycle riders should travel facing traffic.",
                c: "They are breaking the law."
            },
            answer: "a"
        },
        {
            question: "What is a true statement about pedestrian deaths?",
            options: {
                a: "Most pedestrians killed are blind.",
                b: "In cities, 2 out of 5 people killed are pedestrians.",
                c: "Most pedestrians are killed in residential areas."
            },
            answer: "b"
        },
        {
            question: "How do you do a shoulder check?",
            options: {
                a: "By looking at the right outside and rearview mirror.",
                b: "By looking at the left outside and rearview mirror.",
                c: "By looking over your shoulder to the lane you have to go."
            },
            answer: "c"
        }
    ];
// Variables to track the quiz
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];
let answerSubmitted = false;

// Get DOM elements
const questionElement = document.getElementById('question');
const optionAElement = document.getElementById('optionA');
const optionBElement = document.getElementById('optionB');
const optionCElement = document.getElementById('optionC');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const answeredQuestionsList = document.getElementById('answered-questions');

// Load the current question
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    optionAElement.textContent = q.options.a;
    optionBElement.textContent = q.options.b;
    optionCElement.textContent = q.options.c;

    optionAElement.disabled = false;
    optionBElement.disabled = false;
    optionCElement.disabled = false;
    answerSubmitted = false;
}

// Handle answer checking
function checkAnswer(selectedOption) {
    if (answerSubmitted) return;
    answerSubmitted = true;

    const q = questions[currentQuestionIndex];
    const isCorrect = selectedOption === q.answer;
    if (isCorrect) score++;

    answeredQuestions.push({
        question: q.question,
        selectedAnswer: q.options[selectedOption],
        correctAnswer: q.options[q.answer],
        isCorrect: isCorrect
    });

    optionAElement.disabled = true;
    optionBElement.disabled = true;
    optionCElement.disabled = true;

    setTimeout(nextQuestion, 500);
}

// Load next question or end
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Show final score and detailed answers
function endQuiz() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreDisplay.textContent = score;

    answeredQuestionsList.innerHTML = '';
    answeredQuestions.forEach((qa, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Q${index + 1}:</strong> ${qa.question}<br>
            Your Answer: <span class="your-answer">${qa.selectedAnswer}</span>,
            Correct Answer: <span class="correct-answer">${qa.correctAnswer}</span>
            <span class="${qa.isCorrect ? 'correct' : 'wrong'}">(${qa.isCorrect ? 'Correct' : 'Wrong'})</span>
        `;
        answeredQuestionsList.appendChild(listItem);
    });
}

// Reset quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    scoreContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

// Start quiz
loadQuestion();
