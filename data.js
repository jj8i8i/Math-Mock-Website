// Database ผู้ใช้งาน
const USER_DB = {
    'JJ': 'Kirito',
    'Waigoon': 'Joi',
    'Thimphu': 'Yensira',
    'Meepooh': 'Meepooh',
    'Win': 'Eovs',
    'Kirito': 'Betatester'
};

// Database ข้อความสำหรับเปลี่ยนภาษา
const I18N_DB = {
    'th': {
        'login_title': 'เข้าสู่ระบบ',
        'username': 'ชื่อผู้ใช้',
        'password': 'รหัสผ่าน',
        'login_button': 'ล็อกอิน',
        'login_error': 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        'welcome': 'ยินดีต้อนรับ,',
        'logout': 'ออกจากระบบ',
        'test_selection': 'เลือกชุดข้อสอบ',
        'questions': 'ข้อ',
        'minutes': 'นาที',
        'difficulty': 'ความยาก',
        'start_test': 'เริ่มทำข้อสอบ',
        'view_results': 'ดูเฉลย',
        'attempt_used': 'ทำแล้ว',
        'time_left': 'เวลาที่เหลือ',
        'submit_test': 'ส่งคำตอบ',
        'time_up': 'หมดเวลา!',
        'auto_submit': 'ระบบกำลังส่งคำตอบของคุณ...',
        'results_for': 'ผลลัพธ์สำหรับ',
        'back_to_hub': 'กลับไปหน้าหลัก',
        'your_score': 'คะแนนของคุณ',
        'question': 'ข้อที่',
        'hint': 'คำใบ้',
        'your_answer': 'คำตอบของคุณ:',
        'correct_answer': 'คำตอบที่ถูก:',
        'solution': 'วิธีทำโดยละเอียด:',
        'correct_status': 'ถูกต้อง',
        'incorrect_status': 'ผิด',
        'no_attempt': 'ยังไม่ได้ทำข้อสอบ',
        'no_attempt_desc': 'คุณยังไม่ได้ทำข้อสอบชุดนี้ หรือ ออกจากหน้าระหว่างทำข้อสอบ',
        'answer_format_placeholder': 'กรอกคำตอบของคุณ (เช่น 3, 3/2, No such polynomial)'
    },
    'en': {
        'login_title': 'Login',
        'username': 'Username',
        'password': 'Password',
        'login_button': 'Log In',
        'login_error': 'Invalid username or password',
        'welcome': 'Welcome,',
        'logout': 'Logout',
        'test_selection': 'Select a Test Set',
        'questions': 'Questions',
        'minutes': 'Minutes',
        'difficulty': 'Difficulty',
        'start_test': 'Start Test',
        'view_results': 'View Results',
        'attempt_used': 'Attempted',
        'time_left': 'Time Left:',
        'submit_test': 'Submit Test',
        'time_up': 'Time\'s Up!',
        'auto_submit': 'Submitting your answers...',
        'results_for': 'Results for',
        'back_to_hub': 'Back to Hub',
        'your_score': 'Your Score',
        'question': 'Question',
        'hint': 'Hint',
        'your_answer': 'Your Answer:',
        'correct_answer': 'Correct Answer:',
        'solution': 'Detailed Solution:',
        'correct_status': 'Correct',
        'incorrect_status': 'Incorrect',
        'no_attempt': 'No Attempt Found',
        'no_attempt_desc': 'You have not attempted this test set, or you left mid-test.',
        'answer_format_placeholder': 'Enter your answer (e.g., 3, 3/2, No such polynomial)'
    }
};

// Database ข้อสอบ
const TEST_DATA = {
    'algebra_set_1': {
        id: 'algebra_set_1',
        title: { 'en': 'Algebra Set 1', 'th': 'พีชคณิต ชุดที่ 1' },
        meta: {
            questions: 10,
            time: 90,
            difficulty: { 'en': 'Medium', 'th': 'ปานกลาง' }
        },
        questions: [
            // ข้อ 1
            {
                q: {
                    'th': 'ให้ $f: \\mathbb{Q} \\to \\mathbb{Q}$ เป็นฟังก์ชันที่สอดคล้องกับสมการ $f(x^2 + y) = f(x)^2 + f(y)$ สำหรับทุก $x, y \\in \\mathbb{Q}$ (เซตของจำนวนตรรกยะ) ถ้า $f(2) = 2$ จงหาค่าของ $f(-1)$',
                    'en': 'Let $f: \\mathbb{Q} \\to \\mathbb{Q}$ be a function satisfying $f(x^2 + y) = f(x)^2 + f(y)$ for all $x, y \\in \\mathbb{Q}$. If $f(2) = 2$, find the value of $f(-1)$'
                },
                hint: {
                    'th': 'ลองแทน $x=0$ เพื่อหา $f(0)$ จากนั้นลองแทน $y=0$ เพื่อดูความสัมพันธ์ของ $f(x^2)$',
                    'en': 'Try substituting $x=0$ to find $f(0)$. Then, try $y=0$ to see the relation for $f(x^2)$'
                },
                answer: '-1',
                solution: {
                    'th': 'หา $f(0)$:\nแทน $x=0$ ลงในสมการ: $f(0^2 + y) = f(0)^2 + f(y)$\n$f(y) = f(0)^2 + f(y)$ $\\implies f(0)^2 = 0 \\implies f(0) = 0$\n\nหา $f(x^2)$:\nแทน $y=0$ ลงในสมการ: $f(x^2 + 0) = f(x)^2 + f(0)$\n$f(x^2) = f(x)^2 + 0 \\implies f(x^2) = f(x)^2$\n\nสร้างสมการ Cauchy:\nจาก $f(x^2 + y) = f(x)^2 + f(y)$ และ $f(x^2) = f(x)^2$ $\\implies f(x^2 + y) = f(x^2) + f(y)$\nให้ $u = x^2$ (ซึ่ง $u$ เป็นกำลังสองของจำนวนตรรกยะบวก) $\\implies f(u+y) = f(u) + f(y)$ สำหรับ $u \\ge 0$ ที่เป็นกำลังสอง\n\nพิสูจน์ $f(x)=x$:\n$f(1) = f(1^2) = f(1)^2 \\implies f(1) = 0$ หรือ $f(1) = 1$\n$f(2) = f(1^2+1) = f(1)^2+f(1) = f(1)+f(1) = 2f(1)$\nโจทย์ให้ $f(2)=2$ ดังนั้น $2 = 2f(1) \\implies f(1)=1$\nโดยอุปนัย $f(n) = n$ สำหรับ $n \\in \\mathbb{N}$ และ $f(x)=x$ สำหรับ $x \\in \\mathbb{Q}, x \\ge 0$\n\nหา $f(-1)$:\nเรามี $f(1+y) = f(1^2+y) = f(1)^2 + f(y) = 1 + f(y)$ ซึ่งจริงสำหรับทุก $y \\in \\mathbb{Q}$\nแทน $y = -1$: $f(1 + (-1)) = 1 + f(-1)$\n$f(0) = 1 + f(-1)$\nเนื่องจาก $f(0)=0$ $\\implies 0 = 1 + f(-1) \\implies f(-1) = -1$',
                    'en': 'Find $f(0)$:\nLet $x=0$ in the equation: $f(0^2 + y) = f(0)^2 + f(y)$\n$f(y) = f(0)^2 + f(y)$ $\\implies f(0)^2 = 0 \\implies f(0) = 0$\n\nFind $f(x^2)$:\nLet $y=0$ in the equation: $f(x^2 + 0) = f(x)^2 + f(0)$\n$f(x^2) = f(x)^2 + 0 \\implies f(x^2) = f(x)^2$\n\nCauchy Eq:\nFrom $f(x^2 + y) = f(x)^2 + f(y)$ and $f(x^2) = f(x)^2$ $\\implies f(x^2 + y) = f(x^2) + f(y)$.\nLet $u = x^2$ (a square of a non-negative rational) $\\implies f(u+y) = f(u) + f(y)$ for $u \\ge 0$ being a square.\n\nProve $f(x)=x$:\n$f(1) = f(1^2) = f(1)^2 \\implies f(1) = 0$ or $f(1) = 1$.\n$f(2) = f(1^2+1) = f(1)^2+f(1) = f(1)+f(1) = 2f(1)$.\nGiven $f(2)=2$, $2 = 2f(1) \\implies f(1)=1$.\nBy induction, $f(n)=n$ for $n \\in \\mathbb{N}$ and $f(x)=x$ for $x \\in \\mathbb{Q}, x \\ge 0$\n\nFind $f(-1)$:\nWe have $f(1+y) = f(1^2+y) = f(1)^2 + f(y) = 1 + f(y)$ for all $y \\in \\mathbb{Q}$.\nLet $y = -1$: $f(1 + (-1)) = 1 + f(-1)$\n$f(0) = 1 + f(-1)$\nSince $f(0)=0$ $\\implies 0 = 1 + f(-1) \\implies f(-1) = -1$'
                }
            },
            // ข้อ 2
            {
                q: { // [แก้ไข] ลบ * ออก
                    'th': 'ให้ $P(x)$ เป็นพหุนามที่มีสัมประสิทธิ์เป็นจำนวนเต็ม และ $P(x)$ ไม่ใช่พหุนามคงตัว ถ้า $P(n)$ เป็นตัวหารของ $2^n - 1$ สำหรับทุกจำนวนเต็มบวก $n$ จงหา $P(x)$ ที่เป็นไปได้ทั้งหมด',
                    'en': 'Let $P(x)$ be a non-constant polynomial with integer coefficients. If $P(n)$ divides $2^n - 1$ for all positive integers $n$. Find all possible polynomials $P(x)$.'
                },
                hint: {
                    'th': 'ถ้า $P(n_0) = 0$ จะเกิดอะไรขึ้น? ถ้า $P(x)$ ไม่คงตัว, $|P(n)|$ จะโตเร็วแค่ไหน? แล้ว $P(n)$ จะมีค่าเป็นอะไรได้บ้าง?',
                    'en': 'What happens if $P(n_0) = 0$? If $P(x)$ is non-constant, how fast does $|P(n)|$ grow? What values can $P(n)$ take?'
                },
                answer: 'No such polynomial',
                solution: { // [แก้ไข] แก้ mod + ลบ *
                    'th': '$P(n) \\ne 0$ สำหรับ $n \\in \\mathbb{N}$ เพราะ $P(n) \\mid 2^n-1$ และ $2^n-1 \\ne 0$.\n\nให้ $m = P(n)$. เรามี $m \\mid 2^n-1$, ซึ่งหมายความว่า $2^n \\equiv 1 \\pmod{m}$.\n\nพิจารณา $P(n + k \\cdot m)$ โดยที่ $k$ เป็นจำนวนเต็มใดๆ\nเนื่องจาก $P(x)$ มีสัมประสิทธิ์เป็นจำนวนเต็ม เราทราบว่า $(n+km) - n \\mid P(n+km) - P(n)$\n$km \\mid P(n+km) - m$\nดังนั้น $m \\mid P(n+km) - m$, ซึ่งหมายความว่า $P(n+km) \\equiv m \\pmod{m}$, หรือ $P(n+km) \\equiv 0 \\pmod{m}$.\nดังนั้น $m \\mid P(n+km)$.\n\nจากเงื่อนไขโจทย์, เราทราบว่า $P(n+km) \\mid 2^{n+km} - 1$.\nเนื่องจาก $m \\mid P(n+km)$ และ $P(n+km) \\mid 2^{n+km} - 1$, เราสรุปได้ว่า $m \\mid 2^{n+km} - 1$.\n\nพิจารณา $2^{n+km} - 1 = (2^n)(2^m)^k - 1$.\nเนื่องจาก $2^n \\equiv 1 \\pmod{m}$, เราได้ $2^{n+km} - 1 \\equiv (1)(2^m)^k - 1 = (2^m)^k - 1 \\pmod{m}$.\nดังนั้น $m \\mid (2^m)^k - 1$ สำหรับทุกจำนวนเต็ม $k$.\nโดยเฉพาะอย่างยิ่ง เมื่อ $k=1$, เราต้องได้ว่า $m \\mid 2^m - 1$.\n\nนั่นคือ เราพิสูจน์ได้ว่า $P(n)$ ต้องสอดคล้องกับเงื่อนไข $P(n) \\mid 2^{P(n)} - 1$ สำหรับทุกจำนวนเต็มบวก $n$.\n\nจำนวนเต็ม $m$ ที่สอดคล้องกับ $m \\mid 2^m - 1$ มีเพียง $m=1$ และ $m=-1$ เท่านั้น\n(พิสูจน์: ถ้า $m \\ne \\pm 1$, ให้ $p$ เป็นตัวประกอบเฉพาะที่เล็กที่สุดของ $|m|$. แล้ว $p \\mid m$ และ $m \\mid 2^m - 1$, ดังนั้น $p \\mid 2^m - 1$, หรือ $2^m \\equiv 1 \\pmod{p}$. ให้ $d = \\text{ord}_p(2)$. แล้ว $d \\mid m$. จาก Fermat\'s Little Theorem, $d \\mid p-1$. ดังนั้น $d < p$. ถ้า $d > 1$, $d$ จะมีตัวประกอบเฉพาะ $q$ ซึ่ง $q \\le d < p$. แต่ $q \\mid d$ และ $d \\mid m$ $\\implies q \\mid m$. นี่ขัดแย้งกับ $p$ ที่เป็นตัวประกอบเฉพาะ เล็กที่สุด ของ $|m|$. ดังนั้น $d=1$. แต่ถ้า $d=1$, $2^1 \\equiv 1 \\pmod{p}$, ซึ่งเป็นไปไม่ได้. ข้อขัดแย้งนี้หมายความว่า $m$ ต้องเป็น $1$ หรือ $-1$)\n\nดังนั้น $P(n)$ ต้องมีค่าเป็น $1$ หรือ $-1$ สำหรับทุกจำนวนเต็มบวก $n$.\n\nพหุนาม $P(x)$ ที่รับค่าเพียงสองค่า ($1$ หรือ $-1$) ที่จุดจำนวนเต็มบวกอนันต์ตัว จะต้องเป็นพหุนามคงตัวเท่านั้น (คือ $P(x) = 1$ หรือ $P(x) = -1$).\n\nแต่โจทย์กำหนดว่า $P(x)$ ไม่ใช่พหุนามคงตัว จึงเกิดข้อขัดแย้งขึ้น\n\nสรุป: ไม่มีพหุนามดังกล่าว',
                    'en': '$P(n) \\ne 0$ for $n \\in \\mathbb{N}$ because $P(n) \\mid 2^n-1$ and $2^n-1 \\ne 0$.\n\nLet $m = P(n)$. We have $m \\mid 2^n-1$, which means $2^n \\equiv 1 \\pmod{m}$.\n\nConsider $P(n + k \\cdot m)$ where $k$ is any integer.\nSince $P(x)$ has integer coefficients, we know that $(n+km) - n \\mid P(n+km) - P(n)$.\n$km \\mid P(n+km) - m$.\nThus $m \\mid P(n+km) - m$, which means $P(n+km) \\equiv m \\pmod{m}$, or $P(n+km) \\equiv 0 \\pmod{m}$.\nSo, $m \\mid P(n+km)$.\n\nBy the problem condition, we know $P(n+km) \\mid 2^{n+km} - 1$.\nSince $m \\mid P(n+km)$ and $P(n+km) \\mid 2^{n+km} - 1$, we conclude that $m \\mid 2^{n+km} - 1$.\n\nConsider $2^{n+km} - 1 = (2^n)(2^m)^k - 1$.\nSince $2^n \\equiv 1 \\pmod{m}$, we have $2^{n+km} - 1 \\equiv (1)(2^m)^k - 1 = (2^m)^k - 1 \\pmod{m}$.\nThus $m \\mid (2^m)^k - 1$ for all integers $k$.\nIn particular, for $k=1$, we must have $m \\mid 2^m - 1$.\n\nSo we have proved that $P(n)$ must satisfy $P(n) \\mid 2^{P(n)} - 1$ for all positive integers $n$.\n\nThe only integers $m$ satisfying $m \\mid 2^m - 1$ are $m=1$ and $m=-1$.\n(Proof by smallest prime divisor: If $m \\ne \\pm 1$, let $p$ be the smallest prime divisor of $|m|$. Then $p \\mid m$ and $m \\mid 2^m - 1$, so $p \\mid 2^m - 1$, or $2^m \\equiv 1 \\pmod{p}$. Let $d = \\text{ord}_p(2)$. Then $d \\mid m$. By Fermat\'s Little Theorem, $d \\mid p-1$. Thus $d < p$. If $d > 1$, $d$ must have a prime divisor $q$ such that $q \\le d < p$. But $q \\mid d$ and $d \\mid m \\implies q \\mid m$. This contradicts the minimality of $p$. Thus $d=1$. But if $d=1$, $2^1 \\equiv 1 \\pmod{p}$, impossible. Contradiction means $m=1$ or $m=-1$.)\n\nTherefore, $P(n)$ must take the value $1$ or $-1$ for all positive integers $n$.\n\nA polynomial $P(x)$ that takes only two values ($1$ or $-1$) at infinitely many positive integer points must be a constant polynomial (i.e., $P(x) = 1$ or $P(x) = -1$).\n\nHowever, the problem states that $P(x)$ is non-constant. This is a contradiction.\n\nConclusion: No such polynomial exists.'
                }
            },
            // ข้อ 3
            {
                q: {
                    'th': 'จงหาค่าของ $x^2+y^2+z^2$ เมื่อ $x, y, z$ เป็นจำนวนจริงที่สอดคล้องกับ:\n$x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = 1$\n$y\\sqrt{1-z^2} + z\\sqrt{1-y^2} = 1$\n$z\\sqrt{1-x^2} + x\\sqrt{1-z^2} = 1$',
                    'en': 'Find $x^2+y^2+z^2$, where $x, y, z$ are real numbers satisfying:\n$x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = 1$\n$y\\sqrt{1-z^2} + z\\sqrt{1-y^2} = 1$\n$z\\sqrt{1-x^2} + x\\sqrt{1-z^2} = 1$'
                },
                hint: {
                    'th': 'นิพจน์ $a\\sqrt{1-b^2} + b\\sqrt{1-a^2}$ คล้ายกับสูตรตรีโกณมิติใดหรือไม่? ลองแทน $x = \\sin A$',
                    'en': 'Does the expression $a\\sqrt{1-b^2} + b\\sqrt{1-a^2}$ look like a trig formula? Try substituting $x = \\sin A$'
                },
                answer: '3/2',
                solution: {
                    'th': 'สังเกตว่าเพื่อให้ $\\sqrt{1-x^2}$, $\\sqrt{1-y^2}$, $\\sqrt{1-z^2}$ เป็นจำนวนจริง $x,y,z$ ต้องอยู่ในช่วง $[-1, 1]$.\nดังนั้น เราสามารถแทนค่า $x = \\sin A, y = \\sin B, z = \\sin C$ โดยเลือก $A, B, C \\in [-\\pi/2, \\pi/2]$. ในช่วงนี้ ค่า $\\cos$ จะไม่เป็นลบเสมอ, ดังนั้น $\\sqrt{1-x^2} = \\cos A$, $\\sqrt{1-y^2} = \\cos B$, $\\sqrt{1-z^2} = \\cos C$.\n\nแทนค่าลงในระบบสมการ:\nสมการแรก: $\\sin A \\cos B + \\sin B \\cos A = 1 \\implies \\sin(A+B) = 1$\nสมการที่สอง: $\\sin B \\cos C + \\sin C \\cos B = 1 \\implies \\sin(B+C) = 1$\nสมการที่สาม: $\\sin C \\cos A + \\sin A \\cos C = 1 \\implies \\sin(C+A) = 1$\n\nเนื่องจาก $A, B, C \\in [-\\pi/2, \\pi/2]$, ผลบวกของสองมุมใดๆ จะอยู่ในช่วง $[-\\pi, \\pi]$.\nค่ามุม $k$ ในช่วง $[-\\pi, \\pi]$ ที่ทำให้ $\\sin(k) = 1$ มีเพียงค่าเดียวคือ $k = \\pi/2$.\n\nดังนั้น เราได้ระบบสมการ:\n$A+B = \\pi/2$\n$B+C = \\pi/2$\n$C+A = \\pi/2$\n\nแก้ระบบสมการนี้:\nจากสองสมการแรก $(A+B) - (B+C) = \\pi/2 - \\pi/2 \\implies A-C = 0 \\implies A=C$.\nแทน $A=C$ ลงในสมการที่สาม: $A+A = \\pi/2 \\implies 2A = \\pi/2 \\implies A = \\pi/4$.\nดังนั้น $A=C=\\pi/4$. แทนค่ากลับไปหาสมการแรก $B = \\pi/2 - A = \\pi/2 - \\pi/4 = \\pi/4$.\nสรุปได้ว่า $A = B = C = \\pi/4$.\n\nหาค่า $x, y, z$:\n$x = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$y = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$z = \\sin(\\pi/4) = 1/\\sqrt{2}$\n\nค่าที่ต้องการคือ $x^2+y^2+z^2$:\n$x^2+y^2+z^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 + 1/2 = 3/2$.',
                    'en': 'Note that for $\\sqrt{1-x^2}$, $\\sqrt{1-y^2}$, $\\sqrt{1-z^2}$ to be real, $x,y,z$ must be in the interval $[-1, 1]$.\nThus, we can substitute $x = \\sin A, y = \\sin B, z = \\sin C$ by choosing $A, B, C \\in [-\\pi/2, \\pi/2]$. In this interval, the cosine value is always non-negative, so $\\sqrt{1-x^2} = \\cos A$, $\\sqrt{1-y^2} = \\cos B$, $\\sqrt{1-z^2} = \\cos C$.\n\nSubstituting into the system of equations:\nFirst eq: $\\sin A \\cos B + \\sin B \\cos A = 1 \\implies \\sin(A+B) = 1$\nSecond eq: $\\sin B \\cos C + \\sin C \\cos B = 1 \\implies \\sin(B+C) = 1$\nThird eq: $\\sin C \\cos A + \\sin A \\cos C = 1 \\implies \\sin(C+A) = 1$\n\nSince $A, B, C \\in [-\\pi/2, \\pi/2]$, the sum of any two angles lies in $[-\\pi, \\pi]$.\nThe only angle $k$ in the interval $[-\\pi, \\pi]$ such that $\\sin(k) = 1$ is $k = \\pi/2$.\n\nTherefore, we obtain the system:\n$A+B = \\pi/2$\n$B+C = \\pi/2$\n$C+A = \\pi/2$\n\nSolving this system:\nSubtracting the second equation from the first gives $(A+B) - (B+C) = \\pi/2 - \\pi/2 \\implies A-C = 0 \\implies A=C$.\nSubstituting $A=C$ into the third equation: $A+A = \\pi/2 \\implies 2A = \\pi/2 \\implies A = \\pi/4$.\nThus $A=C=\\pi/4$. Substituting back into the first equation $B = \\pi/2 - A = \\pi/2 - \\pi/4 = \\pi/4$.\nWe conclude $A = B = C = \\pi/4$.\n\nFinding the values of $x, y, z$:\n$x = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$y = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$z = \\sin(\\pi/4) = 1/\\sqrt{2}$\n\nThe required value is $x^2+y^2+z^2$:\n$x^2+y^2+z^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 + 1/2 = 3/2$.'
                }
            },
             // ข้อ 4
            {
                q: {
                    'th': 'กำหนดให้ $x, y, z$ เป็นจำนวนจริงบวกซึ่ง $xyz=1$ จงหาค่าต่ำสุดของ $S = \\frac{x^4+y^4}{x^2+y^2} + \\frac{y^4+z^4}{y^2+z^2} + \\frac{z^4+x^4}{z^2+x^2}$',
                    'en': 'Let $x, y, z$ be positive real numbers such that $xyz=1$. Find the minimum value of $S = \\frac{x^4+y^4}{x^2+y^2} + \\frac{y^4+z^4}{y^2+z^2} + \\frac{z^4+x^4}{z^2+x^2}$'
                },
                hint: {
                    'th': 'พิจารณาพจน์เดียว $\\frac{a^4+b^4}{a^2+b^2}$ สามารถลดรูปโดยใช้อสมการ $a^4+b^4 \\ge \\frac{(a^2+b^2)^2}{2}$ ได้หรือไม่?',
                    'en': 'Consider a single term $\\frac{a^4+b^4}{a^2+b^2}$. Can you simplify this using an inequality like $a^4+b^4 \\ge \\frac{(a^2+b^2)^2}{2}$?'
                },
                answer: '3',
                solution: {
                    'th': 'พิจารณาพจน์แรก $\\frac{x^4+y^4}{x^2+y^2}$.\nโดยอสมการ Cauchy-Schwarz (หรือ AM-QM): $x^4+y^4 = (x^2)^2 + (y^2)^2 \\ge \\frac{(x^2+y^2)^2}{2}$.\nดังนั้น $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{(x^2+y^2)^2 / 2}{x^2+y^2} = \\frac{x^2+y^2}{2}$.\n\nทำเช่นเดียวกันสำหรับอีกสองพจน์:\n$\\frac{y^4+z^4}{y^2+z^2} \\ge \\frac{y^2+z^2}{2}$\n$\\frac{z^4+x^4}{z^2+x^2} \\ge \\frac{z^2+x^2}{2}$\n\nนำอสมการทั้งสามมาบวกกัน:\n$S = \\frac{x^4+y^4}{x^2+y^2} + \\frac{y^4+z^4}{y^2+z^2} + \\frac{z^4+x^4}{z^2+x^2} \\ge \\frac{x^2+y^2}{2} + \\frac{y^2+z^2}{2} + \\frac{z^2+x^2}{2}$\n$S \\ge \\frac{2(x^2+y^2+z^2)}{2} = x^2+y^2+z^2$.\n\nโดยอสมการ AM-GM สำหรับ $x^2, y^2, z^2$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{x^2 y^2 z^2} = 3 \\sqrt[3]{(xyz)^2}$.\n\nเนื่องจากโจทย์กำหนดให้ $xyz=1$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{(1)^2} = 3$.\n\nดังนั้น $S \\ge x^2+y^2+z^2 \\ge 3$.\nค่าต่ำสุดที่เป็นไปได้ของ $S$ คือ $3$.\n\nสมการเกิดขึ้นเมื่ออสมการทั้งหมดเป็นสมการ:\nอสมการ $\\frac{a^4+b^4}{a^2+b^2} \\ge \\frac{a^2+b^2}{2}$ เป็นสมการเมื่อ $a^2=b^2$ (หรือ $a=b$ เพราะ $a,b>0$).\nอสมการ $x^2+y^2+z^2 \\ge 3$ เป็นสมการเมื่อ $x^2=y^2=z^2$ (หรือ $x=y=z$ เพราะ $x,y,z>0$).\nเงื่อนไขทั้งหมดสอดคล้องกันเมื่อ $x=y=z$.\nจาก $xyz=1$, เราได้ $x=y=z=1$.\n\nเมื่อ $x=y=z=1$, $S = \\frac{1^4+1^4}{1^2+1^2} + \\frac{1^4+1^4}{1^2+1^2} + \\frac{1^4+1^4}{1^2+1^2} = \\frac{2}{2} + \\frac{2}{2} + \\frac{2}{2} = 1+1+1 = 3$.\n\nค่าต่ำสุดคือ 3.',
                    'en': 'Consider the first term $\\frac{x^4+y^4}{x^2+y^2}$.\nBy Cauchy-Schwarz inequality (or AM-QM): $x^4+y^4 = (x^2)^2 + (y^2)^2 \\ge \\frac{(x^2+y^2)^2}{2}$.\nThus, $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{(x^2+y^2)^2 / 2}{x^2+y^2} = \\frac{x^2+y^2}{2}$.\n\nSimilarly for the other two terms:\n$\\frac{y^4+z^4}{y^2+z^2} \\ge \\frac{y^2+z^2}{2}$\n$\\frac{z^4+x^4}{z^2+x^2} \\ge \\frac{z^2+x^2}{2}$\n\nAdding the three inequalities:\n$S = \\frac{x^4+y^4}{x^2+y^2} + \\frac{y^4+z^4}{y^2+z^2} + \\frac{z^4+x^4}{z^2+x^2} \\ge \\frac{x^2+y^2}{2} + \\frac{y^2+z^2}{2} + \\frac{z^2+x^2}{2}$\n$S \\ge \\frac{2(x^2+y^2+z^2)}{2} = x^2+y^2+z^2$.\n\nBy AM-GM inequality for $x^2, y^2, z^2$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{x^2 y^2 z^2} = 3 \\sqrt[3]{(xyz)^2}$.\n\nSince the problem states $xyz=1$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{(1)^2} = 3$.\n\nTherefore, $S \\ge x^2+y^2+z^2 \\ge 3$.\nThe minimum possible value of $S$ is $3$.\n\nEquality occurs when all inequalities become equalities:\nThe inequality $\\frac{a^4+b^4}{a^2+b^2} \\ge \\frac{a^2+b^2}{2}$ holds with equality when $a^2=b^2$ (or $a=b$ since $a,b>0$).\nThe inequality $x^2+y^2+z^2 \\ge 3$ holds with equality when $x^2=y^2=z^2$ (or $x=y=z$ since $x,y,z>0$).\nAll conditions are met simultaneously when $x=y=z$.\nFrom $xyz=1$, we get $x=y=z=1$.\n\nWhen $x=y=z=1$, $S = \\frac{1^4+1^4}{1^2+1^2} + \\frac{1^4+1^4}{1^2+1^2} + \\frac{1^4+1^4}{1^2+1^2} = \\frac{2}{2} + \\frac{2}{2} + \\frac{2}{2} = 1+1+1 = 3$.\n\nThe minimum value is 3.'
                }
            },
            // ข้อ 5
            {
                q: { // [แก้ไข] ลบ * ออก
                    'th': 'กำหนดลำดับ $a_n$ สำหรับ $n \\ge 1$ ว่า $a_n$ คือจำนวนเต็มบวกตัวที่ $n$ ที่ ไม่ เป็นจำนวนกำลังสองสมบูรณ์ ($2, 3, 5, 6, 7, 8, 10, \\dots$) จงหาค่า $n$ ที่ทำให้ $a_n = 1000$',
                    'en': 'Define $a_n$ for $n \\ge 1$ to be the $n$-th positive integer that is not a perfect square ($2, 3, 5, 6, 7, 8, 10, \\dots$) Find $n$ such that $a_n = 1000$'
                },
                hint: {
                    'th': 'นี่คือปัญหาการนับ $a_n = 1000$ หมายความว่า 1000 คือตัวที่ $n$\n$n$ คือ (จำนวนทั้งหมด $\\le 1000$) ลบด้วย (จำนวนอะไร $\\le 1000$?)',
                    'en': 'This is a counting problem. $a_n = 1000$ means 1000 is the $n$-th non-square.\n$n$ = (Total numbers $\\le 1000$) - (Number of ... $\\le 1000$?)'
                },
                answer: '969',
                solution: {
                    'th': '$a_n = 1000$ หมายความว่า 1000 เป็นจำนวนเต็มบวกตัวที่ $n$ ที่ ไม่ใช่ จำนวนกำลังสองสมบูรณ์.\n\nดังนั้น $n$ คือจำนวนของจำนวนเต็มบวกที่ไม่ใช่กำลังสองสมบูรณ์ ซึ่งมีค่าน้อยกว่าหรือเท่ากับ 1000.\n\nเราสามารถหา $n$ ได้โดย:\n$n = $ (จำนวนเต็มบวกทั้งหมด $\\le 1000$) - (จำนวนกำลังสองสมบูรณ์ $\\le 1000$)\n\nจำนวนเต็มบวกทั้งหมดที่น้อยกว่าหรือเท่ากับ 1000 คือ 1000 ตัว ($1, 2, ..., 1000$).\n\nจำนวนกำลังสองสมบูรณ์ที่น้อยกว่าหรือเท่ากับ 1000 คือ $1^2, 2^2, 3^2, \\dots, m^2$ โดยที่ $m^2 \\le 1000$.\nเราต้องหาค่า $m$ ที่มากที่สุด ซึ่งคือ $m = \\lfloor \\sqrt{1000} \\rfloor$.\n\nเนื่องจาก $31^2 = 961$ และ $32^2 = 1024$, ค่า $m$ ที่มากที่สุดคือ $m=31$.\nดังนั้น มีจำนวนกำลังสองสมบูรณ์ทั้งหมด 31 ตัว ที่น้อยกว่าหรือเท่ากับ 1000 ($1^2, 2^2, \\dots, 31^2$).\n\nแทนค่ากลับไปในสูตร:\n$n = 1000 - 31 = 969$.',
                    'en': '$a_n = 1000$ means that 1000 is the $n$-th positive integer which is not a perfect square.\n\nThus, $n$ is the count of non-square positive integers less than or equal to 1000.\n\nWe can find $n$ by the formula:\n$n = $ (Total positive integers $\\le 1000$) - (Number of perfect squares $\\le 1000$)\n\nThe total number of positive integers less than or equal to 1000 is 1000 ($1, 2, ..., 1000$).\n\nThe perfect squares less than or equal to 1000 are $1^2, 2^2, 3^2, \\dots, m^2$ such that $m^2 \\le 1000$.\nWe need to find the largest such integer $m$, which is $m = \\lfloor \\sqrt{1000} \\rfloor$.\n\nSince $31^2 = 961$ and $32^2 = 1024$, the largest value for $m$ is $m=31$.\nSo, there are 31 perfect squares less than or equal to 1000 ($1^2, 2^2, \\dots, 31^2$).\n\nSubstituting back into the formula:\n$n = 1000 - 31 = 969$.'
                }
            },
            // ข้อ 6
            {
                q: {
                    'th': 'จงหาค่าที่มากที่สุดที่เป็นไปได้ของ $x+y$ เมื่อ $x$ และ $y$ เป็นจำนวนเต็มบวก ที่สอดคล้องกับสมการ $x^2 - xy + y^2 = 721$',
                    'en': 'Find the largest possible value of $x+y$, where $x$ and $y$ are positive integers satisfying $x^2 - xy + y^2 = 721$'
                },
                hint: {
                    'th': 'ให้ $S = x+y$ และ $P = xy$ เขียนสมการใหม่ในรูป $S$ และ $P$ $\\$ $x, y$ เป็นรากของ $t^2 - St + P = 0$ $\\$ Discriminant ต้องเป็นอย่างไร?',
                    'en': 'Let $S = x+y$ and $P = xy$. Rewrite the equation in terms of $S$ and $P$. $\\$ $x, y$ are roots of $t^2 - St + P = 0$. $\\$ What must be true of the discriminant?'
                },
                answer: '53',
                solution: {
                    'th': 'ให้ $S = x+y$ และ $P = xy$. เราต้องการหาค่า $S$ ที่มากที่สุดที่เป็นไปได้\n\nเขียนสมการโจทย์ใหม่ในรูปของ $S$ และ $P$:\n$x^2 - xy + y^2 = (x+y)^2 - 3xy = S^2 - 3P$\nดังนั้น $S^2 - 3P = 721$. แก้หา $P$: $P = \\frac{S^2 - 721}{3}$.\n\nเนื่องจาก $x$ และ $y$ เป็นจำนวนเต็มบวก, $S = x+y$ ต้องเป็นจำนวนเต็มบวก และ $P=xy$ ต้องเป็นจำนวนเต็มบวก ($P>0$).\n$P>0 \\implies \\frac{S^2 - 721}{3} > 0 \\implies S^2 > 721$. เนื่องจาก $\\sqrt{721} \\approx 26.85$, เราต้องมี $S \\ge 27$.\n\n$x$ และ $y$ เป็นรากของสมการกำลังสอง $t^2 - (x+y)t + xy = 0$, หรือ $t^2 - St + P = 0$.\nแทนค่า $P$: $t^2 - St + \\frac{S^2 - 721}{3} = 0$.\n\nเพื่อให้ $x$ และ $y$ เป็นจำนวนจริง, discriminant ($\Delta$) ของสมการกำลังสองนี้ต้องไม่เป็นลบ ($\Delta \\ge 0$):\n$\\Delta = (-S)^2 - 4(1)\\left(\\frac{S^2 - 721}{3}\\right) = S^2 - \\frac{4S^2 - 2884}{3}$\n$\\Delta = \\frac{3S^2 - (4S^2 - 2884)}{3} = \\frac{2884 - S^2}{3}$.\n\nเงื่อนไข $\Delta \\ge 0$ หมายความว่า $\\frac{2884 - S^2}{3} \\ge 0$, ซึ่งก็คือ $2884 - S^2 \\ge 0$, หรือ $S^2 \\le 2884$.\nเนื่องจาก $\\sqrt{2884} \\approx 53.7$, และ $S$ ต้องเป็นจำนวนเต็ม, ค่า $S$ ที่มากที่สุดที่เป็นไปได้คือ $S \\le 53$.\n\nนอกจากนี้, เพื่อให้ $x$ และ $y$ เป็นจำนวนเต็ม, $\Delta$ จะต้องเป็นกำลังสองสมบูรณ์ของจำนวนเต็ม (ให้ $\Delta = k^2$) และราก $t = \\frac{S \\pm \\sqrt{\\Delta}}{2} = \\frac{S \\pm k}{2}$ ต้องเป็นจำนวนเต็ม. ซึ่งหมายความว่า $S$ และ $k$ ต้องมี parity เดียวกัน (เป็นคู่ทั้งคู่ หรือคี่ทั้งคู่).\n\nเราต้องการหาค่า $S$ ที่มากที่สุดที่เป็นไปได้, ดังนั้นเราจึงทดสอบค่า $S$ จากมากไปน้อย เริ่มจาก $S=53$.\nถ้า $S=53$:\n$\\Delta = \\frac{2884 - 53^2}{3} = \\frac{2884 - 2809}{3} = \\frac{75}{3} = 25$.\n$25$ เป็นกำลังสองสมบูรณ์ ($k^2 = 25 \\implies k=5$).\n$S=53$ (คี่) และ $k=5$ (คี่) มี parity เดียวกัน, ดังนั้นรากจะเป็นจำนวนเต็ม.\nรากคือ $t = \\frac{53 \\pm 5}{2}$.\n$t_1 = \\frac{53+5}{2} = 29$\n$t_2 = \\frac{53-5}{2} = 24$\nเราได้คู่คำตอบ $(x, y) = (29, 24)$ (หรือ $(24, 29)$) ซึ่งเป็นจำนวนเต็มบวกทั้งคู่.\n\nเนื่องจาก $S=53$ เป็นค่าสูงสุดที่เป็นไปได้ตามทฤษฎี และเราพบคำตอบที่เป็นจำนวนเต็มบวกสำหรับค่านี้, ค่าที่มากที่สุดของ $x+y$ คือ 53.',
                    'en': 'Let $S = x+y$ and $P = xy$. We want to find the maximum possible value of $S$.\n\nRewrite the given equation in terms of $S$ and $P$:\n$x^2 - xy + y^2 = (x+y)^2 - 3xy = S^2 - 3P$.\nSo, $S^2 - 3P = 721$. Solving for $P$: $P = \\frac{S^2 - 721}{3}$.\n\nSince $x$ and $y$ are positive integers, $S = x+y$ must be a positive integer, and $P=xy$ must also be a positive integer ($P>0$).\n$P>0 \\implies \\frac{S^2 - 721}{3} > 0 \\implies S^2 > 721$. Since $\\sqrt{721} \\approx 26.85$, we must have $S \\ge 27$.\n\n$x$ and $y$ are the roots of the quadratic equation $t^2 - (x+y)t + xy = 0$, or $t^2 - St + P = 0$.\nSubstituting $P$: $t^2 - St + \\frac{S^2 - 721}{3} = 0$.\n\nFor $x$ and $y$ to be real numbers, the discriminant ($\Delta$) of this quadratic must be non-negative ($\Delta \\ge 0$):\n$\\Delta = (-S)^2 - 4(1)\\left(\\frac{S^2 - 721}{3}\\right) = S^2 - \\frac{4S^2 - 2884}{3}$\n$\\Delta = \\frac{3S^2 - (4S^2 - 2884)}{3} = \\frac{2884 - S^2}{3}$.\n\nThe condition $\Delta \\ge 0$ implies $\\frac{2884 - S^2}{3} \\ge 0$, which means $2884 - S^2 \\ge 0$, or $S^2 \\le 2884$.\nSince $\\sqrt{2884} \\approx 53.7$, and $S$ must be an integer, the maximum possible value for $S$ is $S \\le 53$.\n\nFurthermore, for $x$ and $y$ to be integers, $\Delta$ must be a perfect square of an integer (say $\Delta = k^2$), and the roots $t = \\frac{S \\pm \\sqrt{\\Delta}}{2} = \\frac{S \\pm k}{2}$ must be integers. This requires $S$ and $k$ to have the same parity (both even or both odd).\n\nWe want the largest possible value of $S$, so we test values downwards starting from $S=53$.\nIf $S=53$:\n$\\Delta = \\frac{2884 - 53^2}{3} = \\frac{2884 - 2809}{3} = \\frac{75}{3} = 25$.\n$25$ is a perfect square ($k^2 = 25 \\implies k=5$).\n$S=53$ (odd) and $k=5$ (odd) have the same parity, so the roots will be integers.\nThe roots are $t = \\frac{53 \\pm 5}{2}$.\n$t_1 = \\frac{53+5}{2} = 29$\n$t_2 = \\frac{53-5}{2} = 24$\nWe found the pair $(x, y) = (29, 24)$ (or $(24, 29)$), which are both positive integers.\n\nSince $S=53$ is the theoretical maximum integer value and we found valid positive integer solutions for this value, the largest possible value of $x+y$ is 53.'
                }
            },
            // ข้อ 7
            {
                q: {
                    'th': 'ให้ $\\alpha, \\beta, \\gamma$ เป็นรากของ $P(x) = x^3 - 3x^2 + 1 = 0$ ให้ $Q(x)$ เป็นพหุนามดีกรี 3 ที่มีรากเป็น $\\alpha^2, \\beta^2, \\gamma^2$ จงหาค่าของ $Q(2)$',
                    'en': 'Let $\\alpha, \\beta, \\gamma$ be the roots of $P(x) = x^3 - 3x^2 + 1 = 0$. Let $Q(x)$ be the monic polynomial of degree 3 whose roots are $\\alpha^2, \\beta^2, \\gamma^2$. Find $Q(2)$'
                },
                hint: {
                    'th': 'ให้ $y = x^2$ $\\$ เรามี $x^3 - 3x^2 + 1 = 0$ $\\$ พยายามกำจัด $x$ ออกจากสองสมการนี้เพื่อสร้างพหุนามของ $y$',
                    'en': 'Let $y = x^2$. We have $x^3 - 3x^2 + 1 = 0$. Try to eliminate $x$ from these two equations to create a polynomial in $y$.'
                },
                answer: '-17',
                solution: {
                    'th': 'ให้ $x$ เป็นรากของ $P(x)=0$, ดังนั้น $x^3 - 3x^2 + 1 = 0$. (1)\nเราต้องการพหุนาม $Q(y)=0$ ที่มีรากเป็น $y = x^2$. (2)\n\nจาก (1), จัดรูปใหม่: $x^3 = 3x^2 - 1$.\nจาก (2), $x^2 = y$. แทนค่านี้ในสมการที่จัดรูปใหม่:\n$x \\cdot x^2 = 3x^2 - 1$\n$x \\cdot y = 3y - 1$.\n\nเราต้องกำจัด $x$ ออกไป. ยกกำลังสองทั้งสองข้าง:\n$(xy)^2 = (3y - 1)^2$\n$x^2 y^2 = 9y^2 - 6y + 1$.\n\nตอนนี้แทน $x^2 = y$ กลับเข้าไปอีกครั้ง:\n$(y) y^2 = 9y^2 - 6y + 1$\n$y^3 = 9y^2 - 6y + 1$.\n\nย้ายข้างทั้งหมดไปด้านเดียวเพื่อให้ได้สมการพหุนาม:\n$y^3 - 9y^2 + 6y - 1 = 0$.\n\nพหุนามนี้มี $\\alpha^2, \\beta^2, \\gamma^2$ เป็นราก และมีสัมประสิทธิ์นำเป็น 1 (monic), ดังนั้น พหุนามนี้คือ $Q(y)$.\n$Q(y) = y^3 - 9y^2 + 6y - 1$.\n\nเราต้องการหา $Q(2)$:\n$Q(2) = (2)^3 - 9(2)^2 + 6(2) - 1$\n$Q(2) = 8 - 9(4) + 12 - 1$\n$Q(2) = 8 - 36 + 12 - 1$\n$Q(2) = 20 - 37 = -17$.',
                    'en': 'Let $x$ be a root of $P(x)=0$, so $x^3 - 3x^2 + 1 = 0$. (1)\nWe want a polynomial $Q(y)=0$ whose roots are $y = x^2$. (2)\n\nFrom (1), rearrange: $x^3 = 3x^2 - 1$.\nFrom (2), $x^2 = y$. Substitute this into the rearranged equation:\n$x \\cdot x^2 = 3x^2 - 1$\n$x \\cdot y = 3y - 1$.\n\nWe need to eliminate $x$. Square both sides:\n$(xy)^2 = (3y - 1)^2$\n$x^2 y^2 = 9y^2 - 6y + 1$.\n\nNow substitute $x^2 = y$ again:\n$(y) y^2 = 9y^2 - 6y + 1$\n$y^3 = 9y^2 - 6y + 1$.\n\nMove all terms to one side to get the polynomial equation:\n$y^3 - 9y^2 + 6y - 1 = 0$.\n\nThis polynomial has $\\alpha^2, \\beta^2, \\gamma^2$ as its roots and is monic, so this is $Q(y)$.\n$Q(y) = y^3 - 9y^2 + 6y - 1$.\n\nWe need to find $Q(2)$:\n$Q(2) = (2)^3 - 9(2)^2 + 6(2) - 1$\n$Q(2) = 8 - 9(4) + 12 - 1$\n$Q(2) = 8 - 36 + 12 - 1$\n$Q(2) = 20 - 37 = -17$.'
                }
            },
            // ข้อ 8
            {
                q: {
                    'th': 'ให้ $\\alpha, \\beta, \\gamma, \\delta$ เป็นรากของ $P(x) = x^4 - x^3 + 2x^2 + x + 3 = 0$ จงหาค่าของ $(\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$',
                    'en': 'Let $\\alpha, \\beta, \\gamma, \\delta$ be the roots of $P(x) = x^4 - x^3 + 2x^2 + x + 3 = 0$. Find the value of $(\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$'
                },
                hint: {
                    'th': 'เรามี $P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$ $\\$ ลองแยกตัวประกอบ $\\alpha^2 - 3 = (\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})$ แล้วจัดกลุ่มผลคูณใหม่',
                    'en': 'We have $P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$ $\\$ Try factoring $\\alpha^2 - 3 = (\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})$ and regroup the product.'
                },
                answer: '312',
                solution: {
                    'th': 'ให้ $K = (\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$.\n\nเราสามารถเขียนแต่ละพจน์ในรูปผลต่างกำลังสอง: $\\alpha^2 - 3 = (\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})$.\nดังนั้น $K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] \\cdot [(\\beta - \\sqrt{3})(\\beta + \\sqrt{3})] \\cdot [(\\gamma - \\sqrt{3})(\\gamma + \\sqrt{3})] \\cdot [(\\delta - \\sqrt{3})(\\delta + \\sqrt{3})]$.\n\nจัดกลุ่มผลคูณใหม่:\n$K = [(\\alpha - \\sqrt{3})(\\beta - \\sqrt{3})(\\gamma - \\sqrt{3})(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})(\\beta + \\sqrt{3})(\\gamma + \\sqrt{3})(\\delta + \\sqrt{3})]$.\n\nเรารู้ว่า $P(x)$ สามารถเขียนในรูปผลคูณของตัวประกอบเชิงเส้นได้:\n$P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$.\n\nพิจารณาค่า $P(\\sqrt{3})$:\n$P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)(\\sqrt{3}-\\beta)(\\sqrt{3}-\\gamma)(\\sqrt{3}-\\delta)$\n$P(\\sqrt{3}) = (-1)^4 (\\alpha-\\sqrt{3})(\\beta-\\sqrt{3})(\\gamma-\\sqrt{3})(\\delta-\\sqrt{3})$\nดังนั้น กลุ่มแรกใน $K$ คือ $P(\\sqrt{3})$.\n\nพิจารณาค่า $P(-\\sqrt{3})$:\n$P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)(-\\sqrt{3}-\\beta)(-\\sqrt{3}-\\gamma)(-\\sqrt{3}-\\delta)$\n$P(-\\sqrt{3}) = (-1)^4 (\\alpha+\\sqrt{3})(\\beta+\\sqrt{3})(\\gamma+\\sqrt{3})(\\delta+\\sqrt{3})$\nดังนั้น กลุ่มที่สองใน $K$ คือ $P(-\\sqrt{3})$.\n\nเราจึงได้ว่า $K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$.\n\nคำนวณค่า $P(\\sqrt{3})$ และ $P(-\\sqrt{3})$ จาก $P(x) = x^4 - x^3 + 2x^2 + x + 3$:\n$P(\\sqrt{3}) = (\\sqrt{3})^4 - (\\sqrt{3})^3 + 2(\\sqrt{3})^2 + (\\sqrt{3}) + 3$\n$P(\\sqrt{3}) = 9 - 3\\sqrt{3} + 2(3) + \\sqrt{3} + 3 = 9 - 3\\sqrt{3} + 6 + \\sqrt{3} + 3 = (9+6+3) + (-3\\sqrt{3}+\\sqrt{3}) = 18 - 2\\sqrt{3}$.\n\n$P(-\\sqrt{3}) = (-\\sqrt{3})^4 - (-\\sqrt{3})^3 + 2(-\\sqrt{3})^2 + (-\\sqrt{3}) + 3$\n$P(-\\sqrt{3}) = 9 - (-3\\sqrt{3}) + 2(3) - \\sqrt{3} + 3 = 9 + 3\\sqrt{3} + 6 - \\sqrt{3} + 3 = (9+6+3) + (3\\sqrt{3}-\\sqrt{3}) = 18 + 2\\sqrt{3}$.\n\nสุดท้าย คำนวณ $K$:\n$K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3})$\nนี่คือผลต่างกำลังสอง $(a-b)(a+b) = a^2-b^2$.\n$K = 18^2 - (2\\sqrt{3})^2 = 324 - (4 \\cdot 3) = 324 - 12 = 312$.',
                    'en': 'Let $K = (\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$.\n\nWe can write each term using the difference of squares: $\\alpha^2 - 3 = (\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})$.\nSo, $K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] \\cdot [(\\beta - \\sqrt{3})(\\beta + \\sqrt{3})] \\cdot [(\\gamma - \\sqrt{3})(\\gamma + \\sqrt{3})] \\cdot [(\\delta - \\sqrt{3})(\\delta + \\sqrt{3})]$.\n\nRearrange the product:\n$K = [(\\alpha - \\sqrt{3})(\\beta - \\sqrt{3})(\\gamma - \\sqrt{3})(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})(\\beta + \\sqrt{3})(\\gamma + \\sqrt{3})(\\delta + \\sqrt{3})]$.\n\nWe know that $P(x)$ can be factored in terms of its roots:\n$P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$.\n\nConsider the value $P(\\sqrt{3})$:\n$P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)(\\sqrt{3}-\\beta)(\\sqrt{3}-\\gamma)(\\sqrt{3}-\\delta)$\n$P(\\sqrt{3}) = (-1)^4 (\\alpha-\\sqrt{3})(\\beta-\\sqrt{3})(\\gamma-\\sqrt{3})(\\delta-\\sqrt{3})$\nSo, the first group in $K$ is $P(\\sqrt{3})$.\n\nConsider the value $P(-\\sqrt{3})$:\n$P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)(-\\sqrt{3}-\\beta)(-\\sqrt{3}-\\gamma)(-\\sqrt{3}-\\delta)$\n$P(-\\sqrt{3}) = (-1)^4 (\\alpha+\\sqrt{3})(\\beta+\\sqrt{3})(\\gamma+\\sqrt{3})(\\delta+\\sqrt{3})$\nSo, the second group in $K$ is $P(-\\sqrt{3})$.\n\nTherefore, $K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$.\n\nNow, calculate $P(\\sqrt{3})$ and $P(-\\sqrt{3})$ using $P(x) = x^4 - x^3 + 2x^2 + x + 3$:\n$P(\\sqrt{3}) = (\\sqrt{3})^4 - (\\sqrt{3})^3 + 2(\\sqrt{3})^2 + (\\sqrt{3}) + 3$\n$P(\\sqrt{3}) = 9 - 3\\sqrt{3} + 6 + \\sqrt{3} + 3 = (9+6+3) + (-3\\sqrt{3}+\\sqrt{3}) = 18 - 2\\sqrt{3}$.\n\n$P(-\\sqrt{3}) = (-\\sqrt{3})^4 - (-\\sqrt{3})^3 + 2(-\\sqrt{3})^2 + (-\\sqrt{3}) + 3$\n$P(-\\sqrt{3}) = 9 + 3\\sqrt{3} + 6 - \\sqrt{3} + 3 = (9+6+3) + (3\\sqrt{3}-\\sqrt{3}) = 18 + 2\\sqrt{3}$.\n\nFinally, calculate $K$:\n$K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3})$\nThis is a difference of squares $(a-b)(a+b) = a^2-b^2$.\n$K = 18^2 - (2\\sqrt{3})^2 = 324 - (4 \\cdot 3) = 324 - 12 = 312$.'
                }
            },
            // ข้อ 9
            {
                q: { // [แก้ไข] ลบ * ออก
                    'th': 'จงหาจำนวนเต็ม $n$ ที่มีค่ามากที่สุด ซึ่ง $n \\le 2025$ และ $n$ สามารถเขียนได้ในรูป $a^3 + b^3 + c^3 - 3abc$ สำหรับจำนวนเต็ม ไม่เป็นลบ $a, b, c$',
                    'en': 'Find the largest integer $n \\le 2025$ such that $n$ can be written in the form $a^3 + b^3 + c^3 - 3abc$ for some non-negative integers $a, b, c$'
                },
                hint: {
                    'th': 'แยกตัวประกอบ $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ $\\$ วิเคราะห์ว่า $n$ สามารถเป็นค่าใดได้บ้างเมื่อเทียบ $\\pmod 9$',
                    'en': 'Factor $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ $\\$ Analyze the possible values of $n \\pmod 9$'
                },
                answer: '2025',
                solution: { // [แก้ไข] แก้ mod
                    'th': 'ใช้เอกลักษณ์การแยกตัวประกอบ:\n$n = a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.\n\nพิจารณาค่าของ $n \\pmod{9}$.\nเราทราบว่า $x^3 \\pmod{9}$ สามารถเป็นได้แค่ $0, 1,$ หรือ $-1$.\n\n$n = a^3 + b^3 + c^3 - 3abc$.\nเนื่องจาก $3abc$ หารด้วย 3 ลงตัวเสมอ, เราพิจารณา $\\pmod{3}$ ก่อน:\n$n \\equiv a^3 + b^3 + c^3 \\pmod{3}$.\nและ $x^3 \\equiv x \\pmod{3}$.\nดังนั้น $n \\equiv a+b+c \\pmod{3}$.\n\nถ้า $n$ หารด้วย 3 ลงตัว ($n \\equiv 0 \\pmod{3}$), แล้ว $a+b+c$ ต้องหารด้วย 3 ลงตัวเช่นกัน.\nให้ $a+b+c = 3k$ สำหรับบางจำนวนเต็ม $k$.\n\nพิจารณาตัวประกอบที่สอง $K = a^2+b^2+c^2-ab-bc-ca$.\n$K \\pmod{3}$: $K \\equiv a^2+b^2+c^2 - (ab+bc+ca) \\pmod{3}$.\n$K \\equiv a^2+b^2+c^2 + 2(ab+bc+ca) = (a+b+c)^2 \\pmod{3}$.\nเนื่องจาก $a+b+c \\equiv 0 \\pmod{3}$, เราได้ $K \\equiv (0)^2 = 0 \\pmod{3}$.\n\nดังนั้น, ถ้า $n$ หารด้วย 3 ลงตัว, ทั้ง $a+b+c$ และ $K$ ต่างก็หารด้วย 3 ลงตัว.\n$n = (a+b+c)(K)$ จะต้องเป็นผลคูณของสองจำนวนที่หารด้วย 3 ลงตัว, ซึ่งหมายความว่า $n$ ต้องหารด้วย $3 \\times 3 = 9$ ลงตัว.\n\nข้อสรุปนี้หมายความว่า จำนวนเต็ม $n$ ที่สามารถเขียนในรูป $a^3+b^3+c^3-3abc$ ได้นั้น หาก $n$ หารด้วย 3 ลงตัว แล้ว $n$ จะต้องหารด้วย 9 ลงตัวเสมอ. กล่าวคือ $n$ ไม่สามารถ อยู่ในรูป $9k+3$ หรือ $9k+6$ ได้.\n\nเราต้องการหาจำนวนเต็ม $n$ ที่มากที่สุด ซึ่ง $n \\le 2025$ และ $n$ ไม่อยู่ในรูป $9k+3$ หรือ $9k+6$.\n\nตรวจสอบค่า $n$ จากมากไปน้อย:\n$n = 2025$: $2025 = 9 \\times 225$. $2025 \\equiv 0 \\pmod{9}$. ค่านี้เป็นไปได้.\n$n = 2024$: $2024 \\equiv 8 \\pmod{9}$. ค่านี้เป็นไปได้.\n$n = 2023$: $2023 \\equiv 7 \\pmod{9}$. ค่านี้เป็นไปได้.\n$n = 2022$: $2022 \\equiv 6 \\pmod{9}$. ค่านี้เป็นไปไม่ได้.\n$n = 2019$: $2019 \\equiv 3 \\pmod{9}$. ค่านี้เป็นไปไม่ได้.\n\nค่า $n$ ที่มากที่สุดที่เป็นไปได้คือ $2025$.\n\nเราต้องตรวจสอบด้วยว่า $n=2025$ สามารถสร้างได้จริงจาก $a,b,c \\ge 0$. ลองใช้ $a=k+1, b=k, c=k-1$. \n$n = 9k$.\nถ้าเราต้องการ $n=2025$, ต้องมี $9k=2025 \\implies k=225$.\nดังนั้น $a=226, b=225, c=224$ เป็นจำนวนเต็มไม่เป็นลบที่ให้ค่า $n=2025$.\n\nค่าที่มากที่สุดคือ 2025.',
                    'en': 'Use the factorization identity:\n$n = a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.\n\nConsider the value of $n \\pmod{9}$.\nWe know that $x^3 \\pmod{9}$ can only be $0, 1,$ or $-1$.\n\n$n = a^3 + b^3 + c^3 - 3abc$.\nSince $3abc$ is always divisible by 3, consider $\\pmod{3}$ first:\n$n \\equiv a^3 + b^3 + c^3 \\pmod{3}$.\nAnd $x^3 \\equiv x \\pmod{3}$.\nThus $n \\equiv a+b+c \\pmod{3}$.\n\nIf $n$ is divisible by 3 ($n \\equiv 0 \\pmod{3}$), then $a+b+c$ must also be divisible by 3.\nLet $a+b+c = 3k$ for some integer $k$.\n\nConsider the second factor $K = a^2+b^2+c^2-ab-bc-ca$.\n$K \\pmod{3}$: $K \\equiv a^2+b^2+c^2 - (ab+bc+ca) \\pmod{3}$.\n$K \\equiv a^2+b^2+c^2 + 2(ab+bc+ca) = (a+b+c)^2 \\pmod{3}$.\nSince $a+b+c \\equiv 0 \\pmod{3}$, we get $K \\equiv (0)^2 = 0 \\pmod{3}$.\n\nTherefore, if $n$ is divisible by 3, both $a+b+c$ and $K$ are divisible by 3.\n$n = (a+b+c)(K)$ must be the product of two multiples of 3, which means $n$ must be divisible by $3 \\times 3 = 9$.\n\nThis implies that any integer $n$ representable in the form $a^3+b^3+c^3-3abc$, if divisible by 3, must also be divisible by 9. In other words, $n$ cannot be of the form $9k+3$ or $9k+6$.\n\nWe need the largest integer $n \\le 2025$ such that $n$ is not of the form $9k+3$ or $9k+6$.\n\nCheck values downwards from 2025:\n$n = 2025$: $2025 = 9 \\times 225$. $2025 \\equiv 0 \\pmod{9}$. This is possible.\n$n = 2024$: $2024 \\equiv 8 \\pmod{9}$. This is possible.\n$n = 2023$: $2023 \\equiv 7 \\pmod{9}$. This is possible.\n$n = 2022$: $2022 \\equiv 6 \\pmod{9}$. This is not possible.\n$n = 2019$: $2019 \\equiv 3 \\pmod{9}$. This is not possible.\n\nThe largest possible integer $n$ is 2025.\n\nWe must also verify that $n=2025$ can be achieved with non-negative integers $a, b, c$. Try $a=k+1, b=k, c=k-1$. \n$n = 9k$.\nIf we want $n=2025$, we need $9k=2025 \\implies k=225$.\nSo $a=226, b=225, c=224$ are non-negative integers that yield $n=2025$.\n\nThe largest value is 2025.'
                }
            },
            // ข้อ 10
            {
                q: {
                    'th': 'จงหาค่าที่แท้จริงของ $x = \\sqrt{1+2\\sqrt{1+3\\sqrt{1+4\\sqrt{1+5\\sqrt{\\dots}}}}}$',
                    'en': 'Find the exact value of $x = \\sqrt{1+2\\sqrt{1+3\\sqrt{1+4\\sqrt{1+5\\sqrt{\\dots}}}}}$'
                },
                hint: {
                    'th': 'พิจารณาเอกลักษณ์ของ Ramanujan: $n+1 = \\sqrt{1 + n(n+2)}$ $\\$ ลองใช้เอกลักษณ์นี้ซ้ำๆ',
                    'en': 'Consider Ramanujan\'s identity: $n+1 = \\sqrt{1 + n(n+2)}$ $\\$ Try to apply this identity recursively.'
                },
                answer: '3',
                solution: {
                    'th': 'พิจารณาเอกลักษณ์ที่เกิดจากการจัดรูป $n+1$:\n$n+1 = \\sqrt{(n+1)^2} = \\sqrt{1 + (n+1)^2 - 1} = \\sqrt{1 + n^2 + 2n} = \\sqrt{1 + n(n+2)}$.\n\nเราจึงได้ความสัมพันธ์ว่า $n+1 = \\sqrt{1 + n(n+2)}$.\n\nลองใช้ความสัมพันธ์นี้กับ $n+2$ แทน $n$:\n$n+2 = \\sqrt{1 + (n+1)(n+3)}$.\n\nใช้กับ $n+3$ แทน $n$:\n$n+3 = \\sqrt{1 + (n+2)(n+4)}$.\nและต่อไปเรื่อยๆ...\n\nตอนนี้ แทนค่ากลับเข้าไปใน $n+1 = \\sqrt{1 + n(n+2)}$ แบบเวียนเกิด:\n$n+1 = \\sqrt{1 + n \\times (n+2)}$\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$ (แทน $n+2$)\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1) \\sqrt{1 + (n+2)(n+4)} }}$ (แทน $n+3$)\n\nเมื่อทำต่อไปเรื่อยๆ เราจะได้:\n$n+1 = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$\n\nนิพจน์ทางขวามือ คือรูปแบบทั่วไปของรากซ้อนที่โจทย์ถาม โดยที่ $n$ คือตัวเลขแรกที่อยู่หน้าเครื่องหมายรากตัวแรก.\nนิพจน์นี้มีค่าเท่ากับ $n+1$.\n\nในโจทย์ ค่า $n$ คือ $2$.\nดังนั้น $x = \\sqrt{1+2\\sqrt{1+3\\sqrt{1+4\\sqrt{1+5\\sqrt{\\dots}}}}}$ มีค่าเท่ากับ $n+1$ เมื่อ $n=2$.\n$x = 2+1 = 3$.',
                    'en': 'Consider the identity derived from manipulating $n+1$:\n$n+1 = \\sqrt{(n+1)^2} = \\sqrt{1 + (n+1)^2 - 1} = \\sqrt{1 + n^2 + 2n} = \\sqrt{1 + n(n+2)}$.\n\nSo we have the relationship $n+1 = \\sqrt{1 + n(n+2)}$.\n\nLet\'s apply this relationship with $n+2$ replacing $n$:\n$n+2 = \\sqrt{1 + (n+1)(n+3)}$.\n\nApply it with $n+3$ replacing $n$:\n$n+3 = \\sqrt{1 + (n+2)(n+4)}$.\nAnd so on...\n\nNow, substitute back into $n+1 = \\sqrt{1 + n(n+2)}$ recursively:\n$n+1 = \\sqrt{1 + n \\times (n+2)}$\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$ (substituting for $n+2$)\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1) \\sqrt{1 + (n+2)(n+4)} }}$ (substituting for $n+3$)\n\nContinuing this pattern indefinitely, we get:\n$n+1 = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$\n\nThe expression on the right is the general form of the nested radical in the question, where $n$ is the first number multiplying the first inner square root.\nThis expression evaluates to $n+1$.\n\nIn the problem given, the value of $n$ is $2$.\nTherefore, $x = \\sqrt{1+2\\sqrt{1+3\\sqrt{1+4\\sqrt{1+5\\sqrt{\\dots}}}}}$ evaluates to $n+1$ with $n=2$.\n$x = 2+1 = 3$.'
                }
            }
        ]
    }
    // เพิ่มชุดข้อสอบอื่นได้ที่นี่ ...
};
