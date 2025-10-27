document.addEventListener('DOMContentLoaded', () => {
    // Global setup
    loadLanguage();
    initLangToggle();

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

    // Check if I18N_DB is loaded before using it
    if (typeof I18N_DB !== 'undefined') {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (I18N_DB[lang] && I18N_DB[lang][key]) {
                el.innerHTML = I18N_DB[lang][key];
            }
        });
    } else {
        console.error("I18N_DB not loaded yet!");
    }
}


function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'th';
            const newLang = currentLang === 'th' ? 'en' : 'th';
            localStorage.setItem('language', newLang);
            loadLanguage(); // Load text first
            // Re-render dynamic content (which includes math rendering)
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
    // Safely access keys only if I18N_DB is loaded
    return (typeof I18N_DB !== 'undefined' && I18N_DB[lang] && I18N_DB[lang][key]) ? I18N_DB[lang][key] : key;
}


function getI18nContent(contentObject) {
    const lang = getLang();
     // Safely access keys only if TEST_DATA is loaded (used here)
    return (typeof contentObject !== 'undefined' && contentObject[lang]) ? contentObject[lang] : (contentObject && contentObject['en']) || '';
}


// --- KaTeX Auto-render ---
function renderMath(element) {
    // Ensure KaTeX library is loaded
    if (window.renderMathInElement) {
        try {
            renderMathInElement(element, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false // Prevents script halting on minor errors
            });
        } catch (error) {
            console.error("KaTeX rendering error:", error);
        }
    } else {
        // Retry if KaTeX hasn't loaded (e.g., slow network)
        console.warn("KaTeX library not loaded yet, retrying render...");
        setTimeout(() => renderMath(element), 300); // Increased delay for retry
    }
}


// --- Login Page (index.html) ---
function initLogin() {
    if (localStorage.getItem('loggedInUser')) {
        window.location.href = 'hub.html';
    }

    const form = document.getElementById('login-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorMsg = document.getElementById('login-error');

        // Check USER_DB only after ensuring data.js is likely loaded
        if (typeof USER_DB !== 'undefined' && USER_DB[user] && USER_DB[user] === pass) {
            localStorage.setItem('loggedInUser', user);
            localStorage.setItem('isUnlimited', (user === 'JJ'));
            window.location.href = 'hub.html';
        } else {
             // Use getI18n safely
            errorMsg.textContent = getI18n('login_error');
        }
    });
     // Render math after DOM is ready for login page
    renderMath(document.body);
}

// --- Hub Page (hub.html) ---
function initHub() {
    const user = checkAuth(); // Redirects if not logged in
    document.getElementById('hub-username').textContent = user;
    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
    renderHub(); // Render dynamic content
    renderMath(document.body); // Render math after content is added
}

function renderHub() {
    // Ensure TEST_DATA is loaded
     if (typeof TEST_DATA === 'undefined') {
        console.error("TEST_DATA not loaded yet!");
        return; // Stop if data isn't ready
    }

    const container = document.getElementById('test-list-container');
    container.innerHTML = '';
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
    if (!testId || typeof TEST_DATA === 'undefined' || !TEST_DATA[testId]) {
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
    renderTest(); // Render content
    startTimer(test.meta.time, startTime, testId, user);

    document.getElementById('test-form').addEventListener('submit', e => {
        e.preventDefault();
        submitTest(testId, user, false);
    });
}

function renderTest() {
     if (typeof TEST_DATA === 'undefined') {
        console.error("TEST_DATA not loaded yet!");
        return;
    }
    const testId = localStorage.getItem('currentTestId');
     if (!testId || !TEST_DATA[testId]) return;
    const test = TEST_DATA[testId];

    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const lang = getLang();

    test.questions.forEach((q, index) => {
        const qNum = index + 1;

        const questionText = getI18nContent(q.q).replace(/\n/g, '<br>');
        const hintTextDisplay = getI18nContent(q.hint).replace(/\n/g, '<br>');

        // ใช้ class 'hint-initially-hidden' เริ่มต้น
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
                    <div class="hint-content hint-initially-hidden" id="hint-${qNum}"> ${hintTextDisplay}
                    </div>
                </div>
                <label for="q-ans-${qNum}" class="input-group-label">${getI18n('your_answer')}</label>
                <label class="answer-format-label" for="q-ans-${qNum}">${getI18n('answer_format_placeholder')}</label>
                <input type="text" id="q-ans-${qNum}" class="answer-input" name="q${qNum}">
            </div>
        `;
        container.innerHTML += qBox;
    });

    // Render Math ทั้งหมดหลังจากสร้าง HTML (รวม Hint ที่ซ่อนอยู่ด้วย class)
    renderMath(container);

    // [แก้ไข] Event Listener สำหรับ Hint (เวอร์ชัน 10 - สลับ class 'hint-visible')
    // วิธีนี้ Render Math แค่ครั้งเดียวตอนโหลดหน้า
    container.querySelectorAll('.hint-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.hintTarget;
            const hintContent = document.getElementById(targetId);
            // สลับ class 'hint-visible' แทน 'hint-initially-hidden'
            hintContent.classList.toggle('hint-visible');
            hintContent.classList.remove('hint-initially-hidden'); // เอา class เริ่มต้นออก
        });
    });
}


function startTimer(durationMinutes, startTime, testId, user) {
    const timerEl = document.getElementById('timer');
    const endTime = parseInt(startTime, 10) + durationMinutes * 60 * 1000;

    if(timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const now = Date.now();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = '00:00:00';
            timerEl.classList.add('low-time');
             document.getElementById('time-up-modal').style.display = 'flex';
            submitTest(testId, user, true);
            return;
        }

        if (timeLeft < 5 * 60 * 1000 && !timerEl.classList.contains('low-time')) {
            timerEl.classList.add('low-time');
        } else if (timeLeft >= 5 * 60 * 1000 && timerEl.classList.contains('low-time')) {
             timerEl.classList.remove('low-time');
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
    if (timerInterval) clearInterval(timerInterval);

    if (isAutoSubmit) {
        const modal = document.getElementById('time-up-modal');
        if(modal) modal.style.display = 'flex';
    }

     if (typeof TEST_DATA === 'undefined' || !TEST_DATA[testId]) {
        console.error("TEST_DATA not available during submission.");
        window.location.href = 'hub.html';
        return;
    }
    const test = TEST_DATA[testId];
    let score = 0;
    const userAnswers = [];
    const correctStatus = [];

    test.questions.forEach((q, index) => {
        const input = document.getElementById(`q-ans-${index + 1}`);
        const userAnswer = input ? input.value.trim() : "";
        userAnswers.push(userAnswer);

        const isCorrect = q.answer && (userAnswer === q.answer);
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
    }, isAutoSubmit ? 1500 : 0);
}

// --- Results Page (results.html) ---
function initResults() {
    const user = checkAuth();
    const testId = localStorage.getItem('currentTestId');
     if (!testId || typeof TEST_DATA === 'undefined' || !TEST_DATA[testId]) {
        window.location.href = 'hub.html';
        return;
    }


    document.getElementById('back-to-hub').addEventListener('click', () => {
        localStorage.removeItem('currentTestId');
        window.location.href = 'hub.html';
    });

    renderResults(); // Render content
}

function renderResults() {
     if (typeof TEST_DATA === 'undefined') {
        console.error("TEST_DATA not loaded yet for results!");
        const container = document.getElementById('results-container');
        if(container) container.innerHTML = '<p>Error loading test data.</p>';
        renderMath(document.body);
        return;
    }
    const user = localStorage.getItem('loggedInUser');
    const testId = localStorage.getItem('currentTestId');
     if (!testId || !TEST_DATA[testId]) {
         const container = document.getElementById('results-container');
         if(container) container.innerHTML = '<p>Invalid test selected.</p>';
         renderMath(document.body);
         return;
     }
    const test = TEST_DATA[testId];


    const resultsKey = `results_${user}_${testId}`;
    const resultsData = localStorage.getItem(resultsKey);

    document.getElementById('results-title').textContent = `${getI18n('results_for')} ${getI18nContent(test.title)}`;
    const scoreDisplay = document.getElementById('score-display');
    const noResultsMsg = document.getElementById('no-results-message');
    const resultsContainer = document.getElementById('results-container');


    if (!resultsData) {
        if(scoreDisplay) scoreDisplay.textContent = `0 / ${test.meta.questions}`;
        if(noResultsMsg) noResultsMsg.style.display = 'block';
        if(resultsContainer) resultsContainer.innerHTML = '';
        renderMath(document.body);
        return;
    }

    if(noResultsMsg) noResultsMsg.style.display = 'none';
    const results = JSON.parse(resultsData);

    if(scoreDisplay) scoreDisplay.textContent = `${results.score} / ${test.meta.questions}`;

    if(!resultsContainer) return;
    resultsContainer.innerHTML = '';
    const lang = getLang();

    test.questions.forEach((q, index) => {
        const qNum = index + 1;
        const userAnswer = results.userAnswers[index];
        const isCorrect = results.correctStatus[index];
        const statusText = isCorrect ? getI18n('correct_status') : getI18n('incorrect_status');
        const statusClass = isCorrect ? 'correct' : 'incorrect';

        const questionText = getI18nContent(q.q).replace(/\n/g, '<br>');
        const solutionText = getI18nContent(q.solution).replace(/\n/g, '<br>');
        const correctAnswer = q.answer || '';

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
                    <span>${correctAnswer}</span>
                </div>` : ''}

                <div class="solution-box">
                    <strong>${getI18n('solution')}</strong>
                    <div id="sol-${qNum}">
                        ${solutionText}
                    </div>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += resultBox;
    });

    // Render Math after generating all result boxes
    renderMath(resultsContainer);
}

// --- Auth ---
function checkAuth() {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        if(document.body.id !== 'login-page') {
             window.location.href = 'index.html';
        }
        return null;
    }
    return user;
}
