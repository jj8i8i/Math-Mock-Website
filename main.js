document.addEventListener('DOMContentLoaded', () => {
    // Global setup
    loadLanguage();
    initLangToggle();
    initGlobalRender(); // This will run on static content first

    // Page-specific setup
    const bodyId = document.body.id;
    if (bodyId === 'login-page') initLogin();
    if (bodyId === 'hub-page') initHub();
    if (bodyId === 'test-page') initTest();
    if (bodyId === 'results-page') initResults();
});

// --- Language (i18n) ---
function loadLanguage() {
    const lang = localStorage.getItem('language') || 'th';
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (I18N_DB[lang][key]) {
            el.innerHTML = I18N_DB[lang][key];
        }
    });
}

function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'th';
            const newLang = currentLang === 'th' ? 'en' : 'th';
            localStorage.setItem('language', newLang);
            loadLanguage();
            // Re-render dynamic content
            const bodyId = document.body.id;
            if (bodyId === 'hub-page') renderHub(); 
            if (bodyId === 'test-page') renderTest(); 
            if (bodyId === 'results-page') renderResults();
        });
    }
}

function getLang() {
    return localStorage.getItem('language') || 'th';
}

function getI18n(key) {
    const lang = getLang();
    return I18N_DB[lang][key] || key;
}

function getI18nContent(contentObject) {
    const lang = getLang();
    return contentObject[lang] || contentObject['en'];
}

// --- KaTeX Auto-render ---
function initGlobalRender() {
    // Call KaTeX auto-render if it's loaded
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ]
        });
    }
}

// [แก้ไข] ฟังก์ชันสำหรับ Render KaTeX เฉพาะจุด
function renderMath(element) {
    if (window.renderMathInElement) {
        renderMathInElement(element, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ]
        });
    }
}


// --- Login Page (index.html) ---
function initLogin() {
    if (localStorage.getItem('loggedInUser')) {
        window.location.href = 'hub.html'; // Already logged in
    }

    const form = document.getElementById('login-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorMsg = document.getElementById('login-error');

        if (USER_DB[user] && USER_DB[user] === pass) {
            localStorage.setItem('loggedInUser', user);
            localStorage.setItem('isUnlimited', (user === 'JJ'));
            window.location.href = 'hub.html';
        } else {
            errorMsg.textContent = getI18n('login_error');
        }
    });
}

// --- Hub Page (hub.html) ---
function initHub() {
    const user = checkAuth();
    document.getElementById('hub-username').textContent = user;
    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
    renderHub();
}

function renderHub() {
    const container = document.getElementById('test-list-container');
    container.innerHTML = ''; // Clear existing
    const user = localStorage.getItem('loggedInUser');
    const isUnlimited = localStorage.getItem('isUnlimited') === 'true';

    Object.values(TEST_DATA).forEach(test => {
        const testId = test.id;
        const attemptKey = `attempt_${user}_${testId}`;
        const hasAttempted = localStorage.getItem(attemptKey) === 'true';

        let actionButton;
        if (hasAttempted && !isUnlimited) {
            actionButton = `
                <button class="button-secondary" data-testid="${testId}" data-action="view">
                    ${getI18n('view_results')} (${getI18n('attempt_used')})
                </button>`;
        } else {
            actionButton = `
                <button class="button-primary" data-testid="${testId}" data-action="start">
                    ${getI18n('start_test')}
                </button>`;
        }

        const card = `
            <div class="card test-card">
                <div class="test-card-info">
                    <h3>${getI18nContent(test.title)}</h3>
                    <div class="test-meta">
                        <span>${test.meta.questions} ${getI18n('questions')}</span>
                        <span>${test.meta.time} ${getI18n('minutes')}</span>
                        <span>${getI18n('difficulty')}: ${getI18nContent(test.meta.difficulty)}</span>
                    </div>
                </div>
                <div class="test-card-action">
                    ${actionButton}
                </div>
            </div>
        `;
        container.innerHTML += card;
    });

    // Add event listeners
    container.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const testId = button.dataset.testid;
            const action = button.dataset.action;
            localStorage.setItem('currentTestId', testId);

            if (action === 'start') {
                startTest(testId, user);
            } else if (action === 'view') {
                window.location.href = 'results.html';
            }
        });
    });
}

function startTest(testId, user) {
    const isUnlimited = localStorage.getItem('isUnlimited') === 'true';
    const attemptKey = `attempt_${user}_${testId}`;
    
    if (!isUnlimited) {
        localStorage.setItem(attemptKey, 'true');
    }

    localStorage.setItem(`testStartTime_${testId}`, Date.now());
    localStorage.removeItem(`results_${user}_${testId}`);
    
    window.location.href = 'test.html';
}

// --- Test Page (test.html) ---
let timerInterval;
function initTest() {
    const user = checkAuth();
    const testId = localStorage.getItem('currentTestId');
    if (!testId) {
        window.location.href = 'hub.html';
        return;
    }

    const test = TEST_DATA[testId];
    const startTimeKey = `testStartTime_${testId}`;
    const startTime = localStorage.getItem(startTimeKey);

    if (!startTime) {
        window.location.href = 'hub.html';
        return;
    }

    document.getElementById('test-title').textContent = getI18nContent(test.title);
    renderTest();
    startTimer(test.meta.time, startTime, testId, user);

    document.getElementById('test-form').addEventListener('submit', e => {
        e.preventDefault();
        submitTest(testId, user, false);
    });
}

function renderTest() {
    const testId = localStorage.getItem('currentTestId');
    const test = TEST_DATA[testId];
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const lang = getLang();

    test.questions.forEach((q, index) => {
        const qNum = index + 1;
        
        const questionText = (q.q[lang] || q.q['en']).replace(/\n/g, '<br>');
        const hintText = (q.hint[lang] || q.hint['en']).replace(/\n/g, '<br>');

        const qBox = `
            <div class="card question-box">
                <div class="question-header">${getI18n('question')} ${qNum}</div>
                <div class="question-content" id="q-content-${qNum}">
                    ${questionText}
                </div>
                <div class="hint-container">
                    <button type="button" class="hint-button" data-hint-target="hint-${qNum}">
                        ${getI18n('hint')}
                    </button>
                    <div class="hint-content" id="hint-${qNum}">
                        ${hintText}
                    </div>
                </div>
                <label for="q-ans-${qNum}" class="input-group-label">${getI18n('your_answer')}</label>
                <label class="answer-format-label" for="q-ans-${qNum}">${getI18n('answer_format_placeholder')}</label>
                <input type="text" id="q-ans-${qNum}" class="answer-input" name="q${qNum}">
            </div>
        `;
        container.innerHTML += qBox;
    });

    // Render Math สำหรับคำถาม
    renderMath(container);

    // [แก้ไข] เพิ่ม Event Listener สำหรับ Hint
    container.querySelectorAll('.hint-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.hintTarget;
            const hintContent = document.getElementById(targetId);
            
            // Render KaTeX ใน Hint เฉพาะตอนกดครั้งแรก
            if (!hintContent.dataset.rendered) {
                renderMath(hintContent);
                hintContent.dataset.rendered = 'true';
            }
            
            hintContent.style.display = hintContent.style.display === 'block' ? 'none' : 'block';
        });
    });
}

function startTimer(durationMinutes, startTime, testId, user) {
    const timerEl = document.getElementById('timer');
    const endTime = parseInt(startTime, 10) + durationMinutes * 60 * 1000;

    timerInterval = setInterval(() => {
        const now = Date.now();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = '00:00:00';
            timerEl.classList.add('low-time');
            submitTest(testId, user, true); 
            return;
        }

        if (timeLeft < 5 * 60 * 1000) { 
            timerEl.classList.add('low-time');
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerEl.textContent = 
            `${String(hours).padStart(2, '0')}:` +
            `${String(minutes).padStart(2, '0')}:` +
            `${String(seconds).padStart(2, '0')}`;

    }, 1000);
}

function submitTest(testId, user, isAutoSubmit) {
    clearInterval(timerInterval);

    if (isAutoSubmit) {
        document.getElementById('time-up-modal').style.display = 'flex';
    }

    const test = TEST_DATA[testId];
    let score = 0;
    const userAnswers = [];
    const correctStatus = [];

    test.questions.forEach((q, index) => {
        const input = document.getElementById(`q-ans-${index + 1}`);
        const userAnswer = input ? input.value.trim() : "";
        userAnswers.push(userAnswer);

        const isCorrect = userAnswer === q.answer;
        if (isCorrect) {
            score++;
        }
        correctStatus.push(isCorrect);
    });

    const results = {
        score: score,
        userAnswers: userAnswers,
        correctStatus: correctStatus
    };

    localStorage.setItem(`results_${user}_${testId}`, JSON.stringify(results));
    
    setTimeout(() => {
        window.location.href = 'results.html';
    }, isAutoSubmit ? 2000 : 0);
}

// --- Results Page (results.html) ---
function initResults() {
    const user = checkAuth();
    const testId = localStorage.getItem('currentTestId');
    if (!testId) {
        window.location.href = 'hub.html';
        return;
    }

    document.getElementById('back-to-hub').addEventListener('click', () => {
        localStorage.removeItem('currentTestId');
        window.location.href = 'hub.html';
    });
    
    renderResults();
}

function renderResults() {
    const user = localStorage.getItem('loggedInUser');
    const testId = localStorage.getItem('currentTestId');
    const test = TEST_DATA[testId];
    
    const resultsKey = `results_${user}_${testId}`;
    const resultsData = localStorage.getItem(resultsKey);
    
    document.getElementById('results-title').textContent = `${getI18n('results_for')} ${getI18nContent(test.title)}`;

    if (!resultsData) {
        document.getElementById('score-display').textContent = `0 / ${test.meta.questions}`;
        document.getElementById('no-results-message').style.display = 'block';
        return;
    }
    
    document.getElementById('no-results-message').style.display = 'none';
    const results = JSON.parse(resultsData);
    
    document.getElementById('score-display').textContent = `${results.score} / ${test.meta.questions}`;
    
    const container = document.getElementById('results-container');
    container.innerHTML = '';
    const lang = getLang();

    test.questions.forEach((q, index) => {
        const qNum = index + 1;
        const userAnswer = results.userAnswers[index];
        const isCorrect = results.correctStatus[index];
        const statusText = isCorrect ? getI18n('correct_status') : getI18n('incorrect_status');
        const statusClass = isCorrect ? 'correct' : 'incorrect';

        const questionText = (q.q[lang] || q.q['en']).replace(/\n/g, '<br>');
        const solutionText = (q.solution[lang] || q.solution['en']).replace(/\n/g, '<br>');

        const resultBox = `
            <div class="card result-box">
                <div class="result-header">
                    ${getI18n('question')} ${qNum}
                    <span class="result-status ${statusClass}">(${statusText})</span>
                </div>
                <div class="question-content" id="res-q-${qNum}">
                    ${questionText}
                </div>
                
                <div class="result-answer">
                    <strong>${getI18n('your_answer')}</strong>
                    <span class="${statusClass}">${userAnswer || '(No Answer)'}</span>
                </div>
                
                ${!isCorrect ? `
                <div class="result-answer">
                    <strong>${getI18n('correct_answer')}</strong>
                    <span>${q.answer}</span>
                </div>` : ''}

                <div class="solution-box">
                    <strong>${getI18n('solution')}</strong>
                    <div id="sol-${qNum}">
                        ${solutionText}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += resultBox;
    });

    // Render Math สำหรับหน้าผลลัพธ์
    renderMath(container);
}

// --- Auth ---
function checkAuth() {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return user;
}
