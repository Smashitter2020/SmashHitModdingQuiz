import { questions } from "../json/questions.json";

const submitBtn = document.getElementById("submitBtn");

let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < questions.length; i++) {
        const element = document.createElement("div");
        element.className = "question";
        element.innerHTML = `
        <div style="margin-bottom: 5px;" class="question-title">${questions[i].question}</div> 
        <input type="text" class="answer-field" placeholder="Your answer">
        `;
    }
});

submitBtn.addEventListener("click", () => {
    const questions = document.querySelectorAll(".question");

    questions.forEach((q, index) => {
        const field = q.querySelector(".answer-field");
        const answer = field.value.toLowerCase().replace(/\s+/g, "").includes(questions[index].answer.toLowerCase().replace(/\s+/g, ""));
        field.disabled = true;
        if (answer === questions[index].answer.toLowerCase().replace(/\s+/g, "").includes(questions[index].answer.toLowerCase().replace(/\s+/g, ""))) {
            correctAnswers++;
        }
    });
    let accuracy = Math.round((correctAnswers / appData.length) * 100);
    submitBtn.style.display = "none";
    const result = document.getElementById("result");
    result.textContent = "Your score: " + accuracy + "%";

    if (accuracy >= 80) {
        result.style.background = "#81C78475";
    } else if (accuracy >= 60) {
        result.style.background = "#FFF17675";
    } else if (accuracy >= 30) {
        result.style.background = "#FFB74D75";
    } else {
        result.style.background = "#E5737375";
    }
});