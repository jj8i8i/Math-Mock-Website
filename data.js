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
             // ข้อ 1 (คงเดิม)
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
            // ข้อ 2 - ข้อ 8 (คงเดิมเหมือนเวอร์ชันก่อน)
            {
                q: {
                    'th': 'ให้ $P(x)$ เป็นพหุนามที่มีสัมประสิทธิ์เป็นจำนวนเต็ม และ $P(x)$ ไม่ใช่พหุนามคงตัว ถ้า $P(n)$ เป็นตัวหารของ $2^n - 1$ สำหรับทุกจำนวนเต็มบวก $n$ จงหา $P(x)$ ที่เป็นไปได้ทั้งหมด',
                    'en': 'Let $P(x)$ be a non-constant polynomial with integer coefficients. If $P(n)$ divides $2^n - 1$ for all positive integers $n$. Find all possible polynomials $P(x)$.'
                },
                hint: {
                    'th': 'ถ้า $P(n_0) = 0$ จะเกิดอะไรขึ้น? ถ้า $P(x)$ ไม่คงตัว, $|P(n)|$ จะโตเร็วแค่ไหน? แล้ว $P(n)$ จะมีค่าเป็นอะไรได้บ้าง?',
                    'en': 'What happens if $P(n_0) = 0$? If $P(x)$ is non-constant, how fast does $|P(n)|$ grow? What values can $P(n)$ take?'
                },
                answer: 'No such polynomial',
                solution: {
                    'th': '$P(n) \\ne 0$ สำหรับ $n \\in \\mathbb{N}$ เพราะ $P(n) \\mid 2^n-1$ และ $2^n-1 \\ne 0$.\n\nให้ $m = P(n)$. เรามี $m \\mid 2^n-1$, ซึ่งหมายความว่า $2^n \\equiv 1 \\pmod m$.\n\nพิจารณา $P(n + k \\cdot m)$ โดยที่ $k$ เป็นจำนวนเต็มใดๆ\nเนื่องจาก $P(x)$ มีสัมประสิทธิ์เป็นจำนวนเต็ม เราทราบว่า $(n+km) - n \\mid P(n+km) - P(n)$\n$km \\mid P(n+km) - m$\nดังนั้น $m \\mid P(n+km) - m$, ซึ่งหมายความว่า $P(n+km) \\equiv m \\pmod m$, หรือ $P(n+km) \\equiv 0 \\pmod m$.\nดังนั้น $m \\mid P(n+km)$.\n\nจากเงื่อนไขโจทย์, เราทราบว่า $P(n+km) \\mid 2^{n+km} - 1$.\nเนื่องจาก $m \\mid P(n+km)$ และ $P(n+km) \\mid 2^{n+km} - 1$, เราสรุปได้ว่า $m \\mid 2^{n+km} - 1$.\n\nพิจารณา $2^{n+km} - 1 = (2^n)(2^m)^k - 1$.\nเนื่องจาก $2^n \\equiv 1 \\pmod m$, เราได้ $2^{n+km} - 1 \\equiv (1)(2^m)^k - 1 = (2^m)^k - 1 \\pmod m$.\nดังนั้น $m \\mid (2^m)^k - 1$ สำหรับทุกจำนวนเต็ม $k$.\nโดยเฉพาะอย่างยิ่ง เมื่อ $k=1$, เราต้องได้ว่า $m \\mid 2^m - 1$.\n\nนั่นคือ เราพิสูจน์ได้ว่า $P(n)$ ต้องสอดคล้องกับเงื่อนไข $P(n) \\mid 2^{P(n)} - 1$ สำหรับทุกจำนวนเต็มบวก $n$.\n\nจำนวนเต็ม $m$ ที่สอดคล้องกับ $m \\mid 2^m - 1$ มีเพียง $m=1$ และ $m=-1$ เท่านั้น\n(พิสูจน์: ... )\n\nดังนั้น $P(n)$ ต้องมีค่าเป็น $1$ หรือ $-1$ สำหรับทุกจำนวนเต็มบวก $n$.\n\nพหุนาม $P(x)$ ที่รับค่าเพียงสองค่า ($1$ หรือ $-1$) ที่จุดจำนวนเต็มบวกอนันต์ตัว จะต้องเป็นพหุนามคงตัวเท่านั้น (คือ $P(x) = 1$ หรือ $P(x) = -1$).\n\nแต่โจทย์กำหนดว่า $P(x)$ *ไม่ใช่*พหุนามคงตัว จึงเกิดข้อขัดแย้งขึ้น\n\nสรุป: ไม่มีพหุนามดังกล่าว',
                    'en': '$P(n) \\ne 0$ for $n \\in \\mathbb{N}$ because $P(n) \\mid 2^n-1$ and $2^n-1 \\ne 0$.\n\nLet $m = P(n)$. We have $m \\mid 2^n-1$, which means $2^n \\equiv 1 \\pmod m$.\n\nConsider $P(n + k \\cdot m)$ where $k$ is any integer.\n(...)\nSo we have proved that $P(n)$ must satisfy $P(n) \\mid 2^{P(n)} - 1$ for all positive integers $n$.\n\nThe only integers $m$ satisfying $m \\mid 2^m - 1$ are $m=1$ and $m=-1$.\n(Proof: ...)\n\nTherefore, $P(n)$ must take the value $1$ or $-1$ for all positive integers $n$.\n\nA polynomial $P(x)$ that takes only two values ($1$ or $-1$) at infinitely many positive integer points must be a constant polynomial (i.e., $P(x) = 1$ or $P(x) = -1$).\n\nHowever, the problem states that $P(x)$ is *non-constant*. This is a contradiction.\n\nConclusion: No such polynomial exists.'
                }
            },
            { // ข้อ 3
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
                    'en': 'Note that for $\\sqrt{1-x^2}$, $\\sqrt{1-y^2}$, $\\sqrt{1-z^2}$ to be real, $x,y,z$ must be in the interval $[-1, 1]$.\nThus, we can substitute $x = \\sin A, y = \\sin B, z = \\sin C$ by choosing $A, B, C \\in [-\\pi/2, \\pi/2]$. (...)\nWe conclude $A = B = C = \\pi/4$.\n\nFinding the values of $x, y, z$:\n$x = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$y = \\sin(\\pi/4) = 1/\\sqrt{2}$\n$z = \\sin(\\pi/4) = 1/\\sqrt{2}$\n\nThe required value is $x^2+y^2+z^2$:\n$x^2+y^2+z^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 + 1/2 = 3/2$.'
                }
            },
            { // ข้อ 4
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
                    'th': 'พิจารณาพจน์แรก $\\frac{x^4+y^4}{x^2+y^2}$.\nโดยอสมการ Cauchy-Schwarz (หรือ AM-QM): $x^4+y^4 = (x^2)^2 + (y^2)^2 \\ge \\frac{(x^2+y^2)^2}{2}$.\nดังนั้น $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{(x^2+y^2)^2 / 2}{x^2+y^2} = \\frac{x^2+y^2}{2}$.\n\nทำเช่นเดียวกันสำหรับอีกสองพจน์:\n$\\frac{y^4+z^4}{y^2+z^2} \\ge \\frac{y^2+z^2}{2}$\n$\\frac{z^4+x^4}{z^2+x^2} \\ge \\frac{z^2+x^2}{2}$\n\nนำอสมการทั้งสามมาบวกกัน:\n$S \\ge \\frac{x^2+y^2}{2} + \\frac{y^2+z^2}{2} + \\frac{z^2+x^2}{2} = x^2+y^2+z^2$.\n\nโดยอสมการ AM-GM สำหรับ $x^2, y^2, z^2$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{x^2 y^2 z^2} = 3 \\sqrt[3]{(xyz)^2}$.\n\nเนื่องจากโจทย์กำหนดให้ $xyz=1$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{(1)^2} = 3$.\n\nดังนั้น $S \\ge x^2+y^2+z^2 \\ge 3$.\nค่าต่ำสุดที่เป็นไปได้ของ $S$ คือ $3$.\n\nสมการเกิดขึ้นเมื่อ $x=y=z=1$.\n(...)\nค่าต่ำสุดคือ 3.',
                    'en': 'Consider the first term $\\frac{x^4+y^4}{x^2+y^2}$.\nBy Cauchy-Schwarz inequality (or AM-QM): $x^4+y^4 \\ge \\frac{(x^2+y^2)^2}{2}$.\nThus, $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{x^2+y^2}{2}$.\n\nSimilarly for the other two terms:\n(...)\nAdding the three inequalities:\n$S \\ge x^2+y^2+z^2$.\n\nBy AM-GM inequality for $x^2, y^2, z^2$:\n$x^2+y^2+z^2 \\ge 3 \\sqrt[3]{(xyz)^2}$.\n\nSince $xyz=1$:\n$x^2+y^2+z^2 \\ge 3$.\n\nTherefore, $S \\ge x^2+y^2+z^2 \\ge 3$.\nThe minimum possible value of $S$ is $3$.\n\nEquality occurs when $x=y=z=1$.\n(...)\nThe minimum value is 3.'
                }
            },
             { // ข้อ 5
                q: {
                    'th': 'กำหนดลำดับ $a_n$ สำหรับ $n \\ge 1$ ว่า $a_n$ คือจำนวนเต็มบวกตัวที่ $n$ ที่ *ไม่* เป็นจำนวนกำลังสองสมบูรณ์ ($2, 3, 5, 6, 7, 8, 10, \\dots$) จงหาค่า $n$ ที่ทำให้ $a_n = 1000$',
                    'en': 'Define $a_n$ for $n \\ge 1$ to be the $n$-th positive integer that is *not* a perfect square ($2, 3, 5, 6, 7, 8, 10, \\dots$) Find $n$ such that $a_n = 1000$'
                },
                hint: {
                    'th': 'นี่คือปัญหาการนับ $a_n = 1000$ หมายความว่า 1000 คือตัวที่ $n$\n$n$ คือ (จำนวนทั้งหมด $\\le 1000$) ลบด้วย (จำนวนอะไร $\\le 1000$?)',
                    'en': 'This is a counting problem. $a_n = 1000$ means 1000 is the $n$-th non-square.\n$n$ = (Total numbers $\\le 1000$) - (Number of ... $\\le 1000$?)'
                },
                answer: '969',
                solution: {
                    'th': '$a_n = 1000$ หมายความว่า 1000 เป็นจำนวนเต็มบวกตัวที่ $n$ ที่ *ไม่ใช่* จำนวนกำลังสองสมบูรณ์.\n\nดังนั้น $n$ คือจำนวนของจำนวนเต็มบวกที่ไม่ใช่กำลังสองสมบูรณ์ ซึ่งมีค่าน้อยกว่าหรือเท่ากับ 1000.\n\nเราสามารถหา $n$ ได้โดย:\n$n = $ (จำนวนเต็มบวกทั้งหมด $\\le 1000$) - (จำนวนกำลังสองสมบูรณ์ $\\le 1000$)\n\nจำนวนเต็มบวกทั้งหมด $\\le 1000$ คือ 1000 ตัว.\n\nจำนวนกำลังสองสมบูรณ์ $\\le 1000$ คือ $1^2, 2^2, \\dots, m^2$ โดยที่ $m^2 \\le 1000$.\n$m = \\lfloor \\sqrt{1000} \\rfloor$.\n\nเนื่องจาก $31^2 = 961$ และ $32^2 = 1024$, ค่า $m$ ที่มากที่สุดคือ $m=31$.\nดังนั้น มีกำลังสองสมบูรณ์ 31 ตัว.\n\n$n = 1000 - 31 = 969$.',
                    'en': '$a_n = 1000$ means that 1000 is the $n$-th positive integer which is *not* a perfect square.\n\nThus, $n$ is the count of non-square positive integers less than or equal to 1000.\n\n$n = $ (Total positive integers $\\le 1000$) - (Number of perfect squares $\\le 1000$)\n\nTotal integers $\\le 1000$ is 1000.\n\nPerfect squares $\\le 1000$ are $1^2, 2^2, \\dots, m^2$ where $m^2 \\le 1000$.\n$m = \\lfloor \\sqrt{1000} \\rfloor$.\n\nSince $31^2 = 961$ and $32^2 = 1024$, $m=31$.\nThere are 31 perfect squares.\n\n$n = 1000 - 31 = 969$.'
                }
            },
            { // ข้อ 6
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
                     'th': 'ให้ $S = x+y$ และ $P = xy$. เราต้องการหาค่า $S$ ที่มากที่สุด\n\n$x^2 - xy + y^2 = (x+y)^2 - 3xy = S^2 - 3P = 721$\n$P = \\frac{S^2 - 721}{3}$.\n\n$x, y$ เป็นจำนวนเต็มบวก $\implies S, P$ เป็นจำนวนเต็มบวก.\n$P>0 \\implies S^2 > 721 \\implies S \\ge 27$.\n\n$x, y$ เป็นรากของ $t^2 - St + P = 0$.\nแทน $P$: $t^2 - St + \\frac{S^2 - 721}{3} = 0$.\n\nDiscriminant $\\Delta = S^2 - 4(\\frac{S^2 - 721}{3}) = \\frac{3S^2 - 4S^2 + 2884}{3} = \\frac{2884 - S^2}{3}$.\n$\Delta \\ge 0 \\implies S^2 \\le 2884 \\implies S \\le 53$.\n\nเพื่อให้ $x,y$ เป็นจำนวนเต็ม $\Delta$ ต้องเป็นกำลังสองสมบูรณ์ ($k^2$) และ $S, k$ ต้องมี parity เดียวกัน.\n\nทดสอบ $S=53$: $\\Delta = \\frac{2884 - 53^2}{3} = 25 = 5^2$.\n$S=53$ (คี่), $k=5$ (คี่) $\implies$ รากเป็นจำนวนเต็ม.\n$t = \\frac{53 \\pm 5}{2} = 29, 24$.\nได้ $(x, y) = (29, 24)$ ซึ่งเป็นจำนวนเต็มบวก.\n\nค่าที่มากที่สุดคือ 53.',
                    'en': 'Let $S = x+y$ and $P = xy$. We want $S_{\\max}$\n\n$x^2 - xy + y^2 = S^2 - 3P = 721$\n$P = \\frac{S^2 - 721}{3}$.\n\nSince $x, y > 0$ integers, $S, P > 0$ integers.\n$P>0 \\implies S^2 > 721 \\implies S \\ge 27$.\n\n$x, y$ are roots of $t^2 - St + P = 0$.\n$t^2 - St + \\frac{S^2 - 721}{3} = 0$.\n\nDiscriminant $\\Delta = \\frac{2884 - S^2}{3}$.\n$\Delta \\ge 0 \\implies S^2 \\le 2884 \\implies S \\le 53$.\n\nFor integer roots, $\\Delta = k^2$ and $S, k$ have same parity.\n\nTest $S=53$: $\\Delta = \\frac{2884 - 2809}{3} = 25 = 5^2$.\n$S=53$ (odd), $k=5$ (odd). Roots are integers.\n$t = \\frac{53 \\pm 5}{2} = 29, 24$.\n$(x, y) = (29, 24)$ are positive integers.\n\nThe largest value is 53.'
                }
            },
            { // ข้อ 7
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
                     'th': 'ให้ $x$ เป็นราก $\implies x^3 - 3x^2 + 1 = 0$. (1)\nให้ $y = x^2$. (2)\n\nจาก (1): $x^3 = 3x^2 - 1$. \nแทน $x^2=y$: $x \cdot y = 3y - 1$. \nยกกำลังสอง: $x^2 y^2 = (3y - 1)^2$. \nแทน $x^2=y$ อีกครั้ง: $y \cdot y^2 = 9y^2 - 6y + 1$. \n$y^3 - 9y^2 + 6y - 1 = 0$. \n\nพหุนามนี้คือ $Q(y) = y^3 - 9y^2 + 6y - 1$.\n\n$Q(2) = 2^3 - 9(2^2) + 6(2) - 1 = 8 - 36 + 12 - 1 = -17$.',
                    'en': 'Let $x$ be a root $\implies x^3 - 3x^2 + 1 = 0$. (1)\nLet $y = x^2$. (2)\n\nFrom (1): $x^3 = 3x^2 - 1$. \nSub $x^2=y$: $x y = 3y - 1$. \nSquare: $x^2 y^2 = (3y - 1)^2$. \nSub $x^2=y$ again: $y^3 = 9y^2 - 6y + 1$. \n$y^3 - 9y^2 + 6y - 1 = 0$. \n\nThis is $Q(y) = y^3 - 9y^2 + 6y - 1$.\n\n$Q(2) = 8 - 9(4) + 12 - 1 = -17$.'
                }
            },
            { // ข้อ 8
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
                     'th': 'ให้ $K = (\\alpha^2 - 3)...(\\delta^2 - 3)$.\n$K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] ... [(\\delta - \\sqrt{3})(\\delta + \\sqrt{3})]$\n$K = [(\\alpha - \\sqrt{3})...(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})...(\\delta + \\sqrt{3})]$.\n\n$P(x) = (x-\\alpha)...(x-\\delta)$.\n$P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)...(\\sqrt{3}-\\delta) = (-1)^4 (\\alpha-\\sqrt{3})... = $ พจน์แรก\n$P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)...(-\\sqrt{3}-\\delta) = (-1)^4 (\\alpha+\\sqrt{3})... = $ พจน์ที่สอง\n\n$K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$.\n\n$P(x) = x^4 - x^3 + 2x^2 + x + 3$.\n$P(\\sqrt{3}) = 9 - 3\\sqrt{3} + 6 + \\sqrt{3} + 3 = 18 - 2\\sqrt{3}$.\n$P(-\\sqrt{3}) = 9 + 3\\sqrt{3} + 6 - \\sqrt{3} + 3 = 18 + 2\\sqrt{3}$.\n\n$K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3}) = 18^2 - (2\\sqrt{3})^2 = 324 - 12 = 312$.',
                    'en': 'Let $K = (\\alpha^2 - 3)...(\\delta^2 - 3)$.\n$K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] ... [(\\delta - \\sqrt{3})(\\delta + \\sqrt{3})]$\n$K = [(\\alpha - \\sqrt{3})...(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})...(\\delta + \\sqrt{3})]$.\n\n$P(x) = (x-\\alpha)...(x-\\delta)$.\n$P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)... = $ First term\n$P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)... = $ Second term\n\n$K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$.\n\n$P(x) = x^4 - x^3 + 2x^2 + x + 3$.\n$P(\\sqrt{3}) = 9 - 3\\sqrt{3} + 6 + \\sqrt{3} + 3 = 18 - 2\\sqrt{3}$.\n$P(-\\sqrt{3}) = 9 + 3\\sqrt{3} + 6 - \\sqrt{3} + 3 = 18 + 2\\sqrt{3}$.\n\n$K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3}) = 18^2 - (2\\sqrt{3})^2 = 324 - 12 = 312$.'
                }
            },
            // ข้อ 9 [แก้ไข] ลบ * ออกจากคำถาม + แก้ไข Hint
            {
                q: {
                    'th': 'จงหาจำนวนเต็ม $n$ ที่มีค่ามากที่สุด ซึ่ง $n \\le 2025$ และ $n$ สามารถเขียนได้ในรูป $a^3 + b^3 + c^3 - 3abc$ สำหรับจำนวนเต็ม ไม่เป็นลบ $a, b, c$', // ลบ * ออก
                    'en': 'Find the largest integer $n \\le 2025$ such that $n$ can be written in the form $a^3 + b^3 + c^3 - 3abc$ for some non-negative integers $a, b, c$' // ลบ * ออก
                },
                hint: { // แก้ไข Hint เอา $ ออก
                    'th': 'แยกตัวประกอบ $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ \nวิเคราะห์ว่า $n$ สามารถเป็นค่าใดได้บ้างเมื่อเทียบ $\\pmod 9$',
                    'en': 'Factor $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ \nAnalyze the possible values of $n \\pmod 9$'
                },
                answer: '2025',
                solution: {
                    'th': 'ใช้เอกลักษณ์การแยกตัวประกอบ:\n$n = a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.\n\nพิจารณาค่าของ $n \pmod 9$.\nเราทราบว่า $x^3 \pmod 9$ สามารถเป็นได้แค่ $0, 1,$ หรือ $-1$.\n\nพิจารณา $\pmod 3$ ก่อน:\n$n \\equiv a+b+c \pmod 3$.\n\nถ้า $n \\equiv 0 \pmod 3$, แล้ว $a+b+c \\equiv 0 \pmod 3$.\nให้ $K = a^2+b^2+c^2-ab-bc-ca$. จะได้ $K \\equiv (a+b+c)^2 \\equiv 0 \pmod 3$.\nดังนั้น, ถ้า $n$ หารด้วย 3 ลงตัว, $n$ ต้องหารด้วย $3 \\times 3 = 9$ ลงตัว.\nนั่นคือ $n$ *ไม่สามารถ* อยู่ในรูป $9k+3$ หรือ $9k+6$ ได้.\n\nเราต้องการหา $n$ ที่มากที่สุด $\\le 2025$ ที่ $n \\not\\equiv 3, 6 \\pmod 9$.\n\nตรวจสอบค่า $n$ จากมากไปน้อย:\n$n = 2025$: $2025 \\equiv 0 \pmod 9$. (เป็นไปได้)\n$n = 2024$: $2024 \\equiv 8 \\pmod 9$. (เป็นไปได้)\n$n = 2023$: $2023 \\equiv 7 \\pmod 9$. (เป็นไปได้)\n$n = 2022$: $2022 \\equiv 6 \\pmod 9$. (เป็นไปไม่ได้)\n...\nค่า $n$ ที่มากที่สุดที่เป็นไปได้คือ $2025$.\n\nตรวจสอบว่า $n=2025$ สร้างได้จริง:\nใช้ $a=k+1, b=k, c=k-1$. จะได้ $n=9k$. \n$9k=2025 \\implies k=225$. ดังนั้น $a=226, b=225, c=224$ เป็นจำนวนเต็มไม่เป็นลบ.\n\nค่าที่มากที่สุดคือ 2025.',
                    'en': 'Use the factorization identity:\n$n = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$.\n\nConsider $n \pmod 9$.\n$x^3 \pmod 9$ can only be $0, 1,$ or $-1$.\n\nConsider $\pmod 3$ first:\n$n \\equiv a+b+c \pmod 3$.\n\nIf $n \\equiv 0 \pmod 3$, then $a+b+c \\equiv 0 \pmod 3$.\nLet $K = a^2+b^2+c^2-ab-bc-ca$. Then $K \\equiv (a+b+c)^2 \\equiv 0 \pmod 3$.\nSo, if $n$ is divisible by 3, $n$ must be divisible by $3 \\times 3 = 9$.\nThus $n$ *cannot* be of the form $9k+3$ or $9k+6$.\n\nWe need the largest $n \\le 2025$ such that $n \\not\\equiv 3, 6 \\pmod 9$.\n\nCheck values downwards:\n$n = 2025$: $2025 \\equiv 0 \pmod 9$. (Possible)\n$n = 2024$: $2024 \\equiv 8 \\pmod 9$. (Possible)\n$n = 2023$: $2023 \\equiv 7 \\pmod 9$. (Possible)\n$n = 2022$: $2022 \\equiv 6 \\pmod 9$. (Impossible)\n...\nThe largest possible integer $n$ is 2025.\n\nVerify achievability:\nUse $a=k+1, b=k, c=k-1$. Then $n=9k$. \n$9k=2025 \\implies k=225$. So $a=226, b=225, c=224$ are non-negative integers.\n\nThe largest value is 2025.'
                }
            },
            // ข้อ 10 (คงเดิม)
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
                    'th': 'พิจารณาเอกลักษณ์ $n+1 = \\sqrt{1 + n(n+2)}$.\n\nเราได้ $n+1 = \\sqrt{1 + n \\times (n+2)}$.\nแทนค่า $n+2$ โดยใช้เอกลักษณ์เดิม: $n+2 = \\sqrt{1 + (n+1)(n+3)}$.\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$.\n\nทำซ้ำไปเรื่อยๆ:\n$n+1 = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$.\n\nนิพจน์ทางขวามือคือรูปแบบทั่วไปของโจทย์ ซึ่งมีค่าเท่ากับ $n+1$.\n\nในโจทย์ $n=2$.\nดังนั้น $x = n+1 = 2+1 = 3$.',
                    'en': 'Consider the identity $n+1 = \\sqrt{1 + n(n+2)}$.\n\nWe have $n+1 = \\sqrt{1 + n \\times (n+2)}$.\nSubstitute for $n+2$ using the identity: $n+2 = \\sqrt{1 + (n+1)(n+3)}$.\n$n+1 = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$.\n\nRepeating this process:\n$n+1 = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$.\n\nThe expression on the right matches the problem's form and equals $n+1$.\n\nIn the problem, $n=2$.\nTherefore, $x = n+1 = 2+1 = 3$.'
                }
            }
        ]
    }
    // เพิ่มชุดข้อสอบอื่นได้ที่นี่ ...
};
