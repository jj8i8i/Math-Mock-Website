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
        'no_attempt_desc': 'คุณยังไม่ได้ทำข้อสอบชุดนี้ หรือ ออกจากหน้าระหว่างทำข้อสอบ'
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
        'no_attempt_desc': 'You have not attempted this test set, or you left mid-test.'
    }
};

// Database ข้อสอบ
const TEST_DATA = {
    'algebra_set_1': {
        id: 'algebra_set_1',
        title: { 'en': 'Algebra Set 1', 'th': 'พีชคณิต ชุดที่ 1' },
        meta: {
            questions: 10,
            time: 90, // นาที
            difficulty: { 'en': 'Hard', 'th': 'ยาก' }
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
                    'th': '1. **หา $f(0)$:** แทน $x=0$ $\\implies f(y) = f(0)^2 + f(y) \\implies f(0)^2 = 0 \\implies f(0) = 0$\n2. **หา $f(x^2)$:** แทน $y=0$ $\\implies f(x^2) = f(x)^2 + f(0) = f(x)^2$ ดังนั้น $f(x^2) = f(x)^2 \\ge 0$ สำหรับ $x^2$\n3. **สร้างสมการ Cauchy:** จาก $f(x^2 + y) = f(x)^2 + f(y)$ และ $f(x^2) = f(x)^2$ $\\implies f(x^2 + y) = f(x^2) + f(y)$ ให้ $u = x^2$ (ซึ่ง $u$ เป็นกำลังสองของจำนวนตรรกยะบวก) $\\implies f(u+y) = f(u) + f(y)$ สำหรับ $u \ge 0$ ที่เป็นกำลังสอง\n4. **พิสูจน์ $f(x)=x$:** $f(1) = f(1^2) = f(1)^2 \\implies f(1) = 0$ หรือ $f(1) = 1$ $f(2) = f(1^2+1) = f(1)^2+f(1) = f(1)+f(1) = 2f(1)$ โจทย์ให้ $f(2)=2$ ดังนั้น $2 = 2f(1) \\implies f(1)=1$ โดยอุปนัย $f(n) = n$ สำหรับ $n \\in \\mathbb{N}$ และ $f(x)=x$ สำหรับ $x \\in \\mathbb{Q}, x \ge 0$\n5. **หา $f(-1)$:** เรามี $f(1+y) = f(1^2+y) = f(1)^2 + f(y) = 1 + f(y)$ ซึ่งจริงสำหรับทุก $y \\in \\mathbb{Q}$ แทน $y = -1$: $f(1 + (-1)) = 1 + f(-1)$ $\\implies f(0) = 1 + f(-1)$ เนื่องจาก $f(0)=0$ $\\implies 0 = 1 + f(-1) \\implies f(-1) = -1$',
                    'en': '1. **Find $f(0)$:** Let $x=0$ $\\implies f(y) = f(0)^2 + f(y) \\implies f(0)^2 = 0 \\implies f(0) = 0$\n2. **Find $f(x^2)$:** Let $y=0$ $\\implies f(x^2) = f(x)^2 + f(0) = f(x)^2$\n3. **Cauchy Eq:** From $f(x^2 + y) = f(x)^2 + f(y)$ and $f(x^2) = f(x)^2$ $\\implies f(x^2 + y) = f(x^2) + f(y)$. Let $u = x^2$ (a square of a rational) $\\implies f(u+y) = f(u) + f(y)$ for $u$ being a square.\n4. **Prove $f(x)=x$:** $f(1) = f(1^2) = f(1)^2 \\implies f(1) = 0$ or $f(1) = 1$. $f(2) = f(1^2+1) = f(1)^2+f(1) = f(1)+f(1) = 2f(1)$. Given $f(2)=2$, $2 = 2f(1) \\implies f(1)=1$. By induction, $f(n)=n$ for $n \\in \\mathbb{N}$ and $f(x)=x$ for $x \\in \\mathbb{Q}, x \ge 0$\n5. **Find $f(-1)$:** We have $f(1+y) = f(1^2+y) = f(1)^2 + f(y) = 1 + f(y)$ for all $y \\in \\mathbb{Q}$. Let $y = -1$: $f(1 + (-1)) = 1 + f(-1)$ $\\implies f(0) = 1 + f(-1)$. Since $f(0)=0$ $\\implies 0 = 1 + f(-1) \\implies f(-1) = -1$'
                }
            },
            // ข้อ 2
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
                    'th': '1. $P(n) \\ne 0$ สำหรับ $n \\in \\mathbb{N}$ เพราะ $P(n) \mid 2^n-1$ และ $2^n-1 \\ne 0$\n2. ให้ $m = P(n)$ เรามี $m \mid 2^n-1$ $\\implies 2^n \\equiv 1 \\pmod m$\n3. พิจารณา $P(n + k \cdot m)$ โดย $k \in \\mathbb{Z}$ $\\implies P(n+km) \\equiv P(n) \equiv m \\equiv 0 \\pmod m$ ดังนั้น $m \mid P(n+km)$ \n4. จากโจทย์, $P(n+km) \mid 2^{n+km} - 1$\n5. ดังนั้น $m \mid 2^{n+km} - 1$ $\\implies m \mid (2^n)(2^m)^k - 1$ $\\implies m \mid (1)(2^m)^k - 1 \pmod m$ (เพราะ $2^n \\equiv 1 \pmod m$) $\\implies m \mid (2^m)^k - 1$ สำหรับทุก $k$ โดยเฉพาะ $k=1$, $m \mid 2^m - 1$\n6. เราจึงได้ว่า $P(n) \mid 2^{P(n)} - 1$ สำหรับทุก $n \\in \\mathbb{N}$\n7. จำนวนเต็ม $m$ ที่ $m \mid 2^m - 1$ มีเพียง $m=1$ และ $m=-1$ (พิสูจน์โดยพิจารณาตัวประกอบเฉพาะที่น้อยที่สุดของ $m$ ถ้า $m \\ne \pm 1$ จะเกิดข้อขัดแย้ง)\n8. ดังนั้น $P(n)$ ต้องมีค่า $1$ หรือ $-1$ สำหรับทุก $n \\in \\mathbb{N}$\n9. พหุนาม $P(x)$ ที่รับค่า $1$ หรือ $-1$ ที่จุด $n$ อนันต์ตัว จะต้องเป็นพหุนามคงตัว (คือ $P(x) = 1$ หรือ $P(x) = -1$)\n10. แต่โจทย์กำหนดว่า $P(x)$ *ไม่ใช่พหุนามคงตัว* จึงเกิดข้อขัดแย้ง\n11. สรุป: ไม่มีพหุนามดังกล่าว',
                    'en': '1. $P(n) \\ne 0$ for $n \\in \\mathbb{N}$ because $P(n) \mid 2^n-1$ and $2^n-1 \\ne 0$\n2. Let $m = P(n)$. We have $m \mid 2^n-1$ $\\implies 2^n \\equiv 1 \\pmod m$\n3. Consider $P(n + k \cdot m)$ for $k \in \\mathbb{Z}$ $\\implies P(n+km) \\equiv P(n) \equiv m \\equiv 0 \\pmod m$ so $m \mid P(n+km)$ \n4. By hypothesis, $P(n+km) \mid 2^{n+km} - 1$\n5. Thus $m \mid 2^{n+km} - 1$ $\\implies m \mid (2^n)(2^m)^k - 1$ $\\implies m \mid (1)(2^m)^k - 1 \pmod m$ (since $2^n \\equiv 1 \pmod m$) $\\implies m \mid (2^m)^k - 1$ for all $k$. For $k=1$, $m \mid 2^m - 1$\n6. So, $P(n) \mid 2^{P(n)} - 1$ for all $n \\in \\mathbb{N}$\n7. The only integers $m$ satisfying $m \mid 2^m - 1$ are $m=1$ and $m=-1$ (Proof by smallest prime divisor).\n8. Therefore, $P(n)$ must be $1$ or $-1$ for all $n \\in \\mathbb{N}$\n9. A polynomial $P(x)$ that takes values $1$ or $-1$ at infinitely many integer points must be a constant polynomial ($P(x) = 1$ or $P(x) = -1$)\n10. This contradicts the given condition that $P(x)$ is *non-constant*.\n11. Conclusion: No such polynomial exists.'
                }
            },
            // ข้อ 3
            {
                q: {
                    'th': 'จงหาค่าของ $x^2+y^2+z^2$ เมื่อ $x, y, z$ เป็นจำนวนจริงที่สอดคล้องกับ $x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = 1$, $y\\sqrt{1-z^2} + z\\sqrt{1-y^2} = 1$, $z\\sqrt{1-x^2} + x\\sqrt{1-z^2} = 1$',
                    'en': 'Find $x^2+y^2+z^2$, where $x, y, z$ are real numbers satisfying $x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = 1$, $y\\sqrt{1-z^2} + z\\sqrt{1-y^2} = 1$, and $z\\sqrt{1-x^2} + x\\sqrt{1-z^2} = 1$'
                },
                hint: {
                    'th': 'นิพจน์ $a\\sqrt{1-b^2} + b\\sqrt{1-a^2}$ คล้ายกับสูตรตรีโกณมิติใดหรือไม่? ลองแทน $x = \\sin A$',
                    'en': 'Does the expression $a\\sqrt{1-b^2} + b\\sqrt{1-a^2}$ look like a trig formula? Try substituting $x = \\sin A$'
                },
                answer: '3/2',
                solution: {
                    'th': '1. สังเกตว่า $x,y,z$ ต้องอยู่ใน $[-1, 1]$ $\\implies$ เราสามารถแทน $x = \\sin A, y = \\sin B, z = \\sin C$ โดย $A, B, C \\in [-\\pi/2, \\pi/2]$ ซึ่ง $\\cos A, \\cos B, \\cos C \\ge 0$\n2. สมการแรก: $x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = \\sin A \\cos B + \\sin B \\cos A = \\sin(A+B)$ $\\implies \\sin(A+B) = 1$\n3. สมการที่สอง: $\\sin(B+C) = 1$\n4. สมการที่สาม: $\\sin(C+A) = 1$\n5. เนื่องจาก $A, B, C \\in [-\\pi/2, \\pi/2]$ $\\implies$ $A+B, B+C, C+A \\in [-\\pi, \\pi]$ $\\implies$ ค่าเดียวที่ $\\sin(k) = 1$ ในช่วงนี้คือ $k = \\pi/2$\n6. เราได้ระบบสมการ: $A+B = \\pi/2$, $B+C = \\pi/2$, $C+A = \\pi/2$\n7. แก้ระบบสมการ: $(A+B) - (B+C) = 0 \\implies A=C$ แทนใน $C+A=\\pi/2 \\implies 2A = \\pi/2 \\implies A = \\pi/4$ $\\implies A=B=C = \\pi/4$\n8. $x = \\sin(\\pi/4) = 1/\\sqrt{2}$, $y = \\sin(\\pi/4) = 1/\\sqrt{2}$, $z = \\sin(\\pi/4) = 1/\\sqrt{2}$\n9. $x^2+y^2+z^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 + 1/2 = 3/2$',
                    'en': '1. Note $x,y,z$ must be in $[-1, 1]$. We can substitute $x = \\sin A, y = \\sin B, z = \\sin C$ with $A, B, C \\in [-\\pi/2, \\pi/2]$, so $\\cos A, \\cos B, \\cos C \\ge 0$\n2. First eq: $x\\sqrt{1-y^2} + y\\sqrt{1-x^2} = \\sin A \\cos B + \\sin B \\cos A = \\sin(A+B)$ $\\implies \\sin(A+B) = 1$\n3. Second eq: $\\sin(B+C) = 1$\n4. Third eq: $\\sin(C+A) = 1$\n5. Since $A, B, C \\in [-\\pi/2, \\pi/2]$ $\\implies$ $A+B, B+C, C+A \\in [-\\pi, \\pi]$ $\\implies$ The only value $k$ in this range for $\\sin(k) = 1$ is $k = \\pi/2$\n6. We get $A+B = \\pi/2$, $B+C = \\pi/2$, $C+A = \\pi/2$\n7. Solving this system gives $A=B=C = \\pi/4$\n8. $x = \\sin(\\pi/4) = 1/\\sqrt{2}$, $y = \\sin(\\pi/4) = 1/\\sqrt{2}$, $z = \\sin(\\pi/4) = 1/\\sqrt{2}$\n9. $x^2+y^2+z^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 + 1/2 = 3/2$'
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
                    'th': '1. พิจารณาพจน์ $\\frac{x^4+y^4}{x^2+y^2}$ $\\$ โดยอสมการ Cauchy-Schwarz $(1+1)(x^4+y^4) \\ge (x^2+y^2)^2$ $\\implies x^4+y^4 \\ge \\frac{(x^2+y^2)^2}{2}$ \n2. ดังนั้น $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{(x^2+y^2)^2 / 2}{x^2+y^2} = \\frac{x^2+y^2}{2}$ \n3. ประยุกต์กับทุกพจน์: $S \\ge \\frac{x^2+y^2}{2} + \\frac{y^2+z^2}{2} + \\frac{z^2+x^2}{2}$ $\\implies S \\ge \\frac{2(x^2+y^2+z^2)}{2} = x^2+y^2+z^2$ \n4. โดยอสมการ AM-GM: $x^2+y^2+z^2 \\ge 3 \\sqrt[3]{x^2 y^2 z^2} = 3 \\sqrt[3]{(xyz)^2}$ \n5. เนื่องจาก $xyz=1$: $x^2+y^2+z^2 \\ge 3 \\sqrt[3]{1^2} = 3$ $\\implies S \\ge 3$ \n6. สมการเกิดขึ้นเมื่อ $x=y=z$ $\\$ จาก $xyz=1$ $\\implies x=y=z=1$ $\\$ เมื่อ $x=y=z=1$, $S = \\frac{1+1}{1+1} + \\frac{1+1}{1+1} + \\frac{1+1}{1+1} = 1+1+1 = 3$ $\\$ ค่าต่ำสุดคือ 3',
                    'en': '1. Consider the term $\\frac{x^4+y^4}{x^2+y^2}$ $\\$ By Cauchy-Schwarz $(1+1)(x^4+y^4) \\ge (x^2+y^2)^2$ $\\implies x^4+y^4 \\ge \\frac{(x^2+y^2)^2}{2}$ \n2. Thus $\\frac{x^4+y^4}{x^2+y^2} \\ge \\frac{(x^2+y^2)^2 / 2}{x^2+y^2} = \\frac{x^2+y^2}{2}$ \n3. Applying to all terms: $S \\ge \\frac{x^2+y^2}{2} + \\frac{y^2+z^2}{2} + \\frac{z^2+x^2}{2}$ $\\implies S \\ge \\frac{2(x^2+y^2+z^2)}{2} = x^2+y^2+z^2$ \n4. By AM-GM: $x^2+y^2+z^2 \\ge 3 \\sqrt[3]{x^2 y^2 z^2} = 3 \\sqrt[3]{(xyz)^2}$ \n5. Since $xyz=1$: $x^2+y^2+z^2 \\ge 3 \\sqrt[3]{1^2} = 3$ $\\implies S \\ge 3$ \n6. Equality holds when $x=y=z$ $\\$ From $xyz=1$ $\\implies x=y=z=1$ $\\$ At $x=y=z=1$, $S = \\frac{1+1}{1+1} + \\frac{1+1}{1+1} + \\frac{1+1}{1+1} = 1+1+1 = 3$ $\\$ The minimum value is 3.'
                }
            },
            // ข้อ 5
            {
                q: {
                    'th': 'กำหนดลำดับ $a_n$ สำหรับ $n \\ge 1$ ว่า $a_n$ คือจำนวนเต็มบวกตัวที่ $n$ ที่ *ไม่* เป็นจำนวนกำลังสองสมบูรณ์ ($2, 3, 5, 6, 7, 8, 10, \\dots$) จงหาค่า $n$ ที่ทำให้ $a_n = 1000$',
                    'en': 'Define $a_n$ for $n \\ge 1$ to be the $n$-th positive integer that is *not* a perfect square ($2, 3, 5, 6, 7, 8, 10, \\dots$) Find $n$ such that $a_n = 1000$'
                },
                hint: {
                    'th': 'นี่คือปัญหาการนับ $a_n = 1000$ หมายความว่า 1000 คือตัวที่ $n$ $\\$ $n$ คือ (จำนวนทั้งหมด $\\le 1000$) ลบด้วย (จำนวนอะไร $\\le 1000$?)',
                    'en': 'This is a counting problem. $a_n = 1000$ means 1000 is the $n$-th non-square. $\\$ $n$ = (Total numbers $\\le 1000$) - (Number of ... $\\le 1000$?)'
                },
                answer: '969',
                solution: {
                    'th': '1. $a_n = 1000$ หมายความว่า 1000 เป็นจำนวนที่ *ไม่ใช่* กำลังสองสมบูรณ์ ตัวที่ $n$\n2. $n$ คือจำนวนของ "ตัวที่ไม่ใช่กำลังสองสมบูรณ์" ที่มีค่า $\\le 1000$\n3. $n = $ (จำนวนเต็มทั้งหมด $\\le 1000$) - (จำนวน "กำลังสองสมบูรณ์" $\\le 1000$)\n4. จำนวนเต็มทั้งหมด $\\le 1000$ คือ 1000 ตัว\n5. จำนวนกำลังสองสมบูรณ์ $\\le 1000$ คือ $1^2, 2^2, \\dots, m^2$ โดย $m^2 \\le 1000$\n6. $m = \\lfloor \\sqrt{1000} \\rfloor$\n7. $31^2 = 961$, $32^2 = 1024$ $\\implies$ $m = 31$\n8. มีกำลังสองสมบูรณ์ 31 ตัว (ตั้งแต่ $1^2$ ถึง $31^2$)\n9. $n = 1000 - 31 = 969$',
                    'en': '1. $a_n = 1000$ means 1000 is the $n$-th positive integer that is *not* a perfect square.\n2. $n$ is the count of "non-square" integers that are $\\le 1000$.\n3. $n = $ (Total integers $\\le 1000$) - (Total "perfect squares" $\\le 1000$)\n4. Total integers $\\le 1000$ is 1000.\n5. Perfect squares $\\le 1000$ are $1^2, 2^2, \\dots, m^2$ where $m^2 \\le 1000$.\n6. $m = \\lfloor \\sqrt{1000} \\rfloor$\n7. $31^2 = 961$, $32^2 = 1024$ $\\implies$ $m = 31$\n8. There are 31 perfect squares (from $1^2$ to $31^2$).\n9. $n = 1000 - 31 = 969$'
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
                    'th': '1. ให้ $S = x+y$ และ $P = xy$ เราต้องการ $S_{\\max}$\n2. $x^2 - xy + y^2 = (x+y)^2 - 3xy = S^2 - 3P$\n3. $S^2 - 3P = 721 \\implies P = \\frac{S^2 - 721}{3}$\n4. $x$ และ $y$ เป็นรากของสมการ $t^2 - St + P = 0$\n5. แทน $P$: $t^2 - St + \\frac{S^2 - 721}{3} = 0$\n6. $x, y$ เป็นจำนวนจริง $\\implies$ Discriminant $\\Delta \\ge 0$ $\\implies \\Delta = (-S)^2 - 4(1)(\\frac{S^2-721}{3}) = S^2 - \\frac{4S^2 - 2884}{3} = \\frac{3S^2 - 4S^2 + 2884}{3} = \\frac{2884 - S^2}{3}$\n7. $\\frac{2884 - S^2}{3} \\ge 0 \\implies S^2 \\le 2884$ $\\implies S \\le \\sqrt{2884} \\approx 53.7$\n8. $S$ เป็นจำนวนเต็ม $\\implies S \\le 53$\n9. $x, y$ เป็นจำนวนเต็ม $\\implies \\Delta$ ต้องเป็นกำลังสองสมบูรณ์ และ $\\frac{S \pm \\sqrt{\\Delta}}{2}$ ต้องเป็นจำนวนเต็ม\n10. ทดสอบ $S=53$: $\\Delta = \\frac{2884 - 53^2}{3} = \\frac{2884 - 2809}{3} = \\frac{75}{3} = 25 = 5^2$ (เป็นกำลังสองสมบูรณ์)\n11. $t = \\frac{53 \pm \\sqrt{25}}{2} = \\frac{53 \pm 5}{2}$ $\\implies t = 29$ หรือ $t = 24$\n12. $x=29, y=24$ เป็นจำนวนเต็มบวก และ $x+y=53$\n13. $S=53$ เป็นค่าสูงสุดที่เป็นไปได้',
                    'en': '1. Let $S = x+y$ and $P = xy$. We want $S_{\\max}$\n2. $x^2 - xy + y^2 = (x+y)^2 - 3xy = S^2 - 3P$\n3. $S^2 - 3P = 721 \\implies P = \\frac{S^2 - 721}{3}$\n4. $x$ and $y$ are roots of $t^2 - St + P = 0$\n5. Sub $P$: $t^2 - St + \\frac{S^2 - 721}{3} = 0$\n6. For real roots, Discriminant $\\Delta \\ge 0$ $\\implies \\Delta = (-S)^2 - 4(1)(\\frac{S^2-721}{3}) = \\frac{2884 - S^2}{3}$\n7. $\\frac{2884 - S^2}{3} \\ge 0 \\implies S^2 \\le 2884$ $\\implies S \\le \\sqrt{2884} \\approx 53.7$\n8. $S$ is integer $\\implies S \\le 53$\n9. For integer $x,y$, $\\Delta$ must be a perfect square.\n10. Test $S=53$: $\\Delta = \\frac{2884 - 53^2}{3} = \\frac{2884 - 2809}{3} = \\frac{75}{3} = 25 = 5^2$ (It is a perfect square!)\n11. $t = \\frac{53 \pm \\sqrt{25}}{2} = \\frac{53 \pm 5}{2}$ $\\implies t = 29$ or $t = 24$\n12. $x=29, y=24$ are positive integers and $x+y=53$\n13. $S=53$ is the largest possible value.'
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
                    'th': '1. $x$ เป็นราก $\\implies x^3 - 3x^2 + 1 = 0$\n2. $y$ เป็นรากใหม่ $\\implies y = x^2$\n3. จาก (1): $x(x^2) - 3(x^2) + 1 = 0 \\implies xy - 3y + 1 = 0 \\implies xy = 3y - 1$\n4. ยกกำลังสอง: $(xy)^2 = (3y-1)^2 \\implies x^2 y^2 = 9y^2 - 6y + 1$\n5. แทน $x^2 = y$ กลับเข้าไป: $(y) y^2 = 9y^2 - 6y + 1$\n6. $y^3 = 9y^2 - 6y + 1$\n7. ย้ายข้าง: $y^3 - 9y^2 + 6y - 1 = 0$\n8. พหุนามนี้คือ $Q(y)$ (เนื่องจากมี $\\alpha^2, \\beta^2, \\gamma^2$ เป็นราก)\n9. $Q(y) = y^3 - 9y^2 + 6y - 1$\n10. $Q(2) = (2)^3 - 9(2)^2 + 6(2) - 1 = 8 - 9(4) + 12 - 1 = 8 - 36 + 12 - 1 = -17$',
                    'en': '1. $x$ is a root $\\implies x^3 - 3x^2 + 1 = 0$\n2. $y$ is a new root $\\implies y = x^2$\n3. From (1): $x(x^2) - 3(x^2) + 1 = 0 \\implies xy - 3y + 1 = 0 \\implies xy = 3y - 1$\n4. Square both sides: $(xy)^2 = (3y-1)^2 \\implies x^2 y^2 = 9y^2 - 6y + 1$\n5. Substitute $x^2 = y$ back: $(y) y^2 = 9y^2 - 6y + 1$\n6. $y^3 = 9y^2 - 6y + 1$\n7. Rearrange: $y^3 - 9y^2 + 6y - 1 = 0$\n8. This polynomial is $Q(y)$ (as it has roots $\\alpha^2, \\beta^2, \\gamma^2$)\n9. $Q(y) = y^3 - 9y^2 + 6y - 1$\n10. $Q(2) = (2)^3 - 9(2)^2 + 6(2) - 1 = 8 - 9(4) + 12 - 1 = 8 - 36 + 12 - 1 = -17$'
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
                    'th': '1. ให้ $K = (\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$\n2. $K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] \\cdot [(\\beta - \\sqrt{3})(\\beta + \\sqrt{3})] \\cdot \\dots$\n3. จัดกลุ่มใหม่: $K = [(\\alpha - \\sqrt{3})(\\beta - \\sqrt{3})(\\gamma - \\sqrt{3})(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})(\\beta + \\sqrt{3})(\\gamma + \\sqrt{3})(\\delta + \\sqrt{3})]$\n4. $P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$\n5. $P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)(\\sqrt{3}-\\beta)(\\sqrt{3}-\\gamma)(\\sqrt{3}-\\delta) = (-1)^4 (\\alpha-\\sqrt{3})... = $ พจน์แรก\n6. $P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)(-\\sqrt{3}-\\beta)... = (-1)^4 (\\alpha+\\sqrt{3})... = $ พจน์ที่สอง\n7. $K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$\n8. $P(x) = x^4 - x^3 + 2x^2 + x + 3$\n9. $P(\\sqrt{3}) = (\\sqrt{3})^4 - (\\sqrt{3})^3 + 2(\\sqrt{3})^2 + (\\sqrt{3}) + 3 = 9 - 3\\sqrt{3} + 2(3) + \\sqrt{3} + 3 = 18 - 2\\sqrt{3}$\n10. $P(-\\sqrt{3}) = (-\\sqrt{3})^4 - (-\\sqrt{3})^3 + 2(-\\sqrt{3})^2 + (-\\sqrt{3}) + 3 = 9 - (-3\\sqrt{3}) + 2(3) - \\sqrt{3} + 3 = 18 + 2\\sqrt{3}$\n11. $K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3}) = 18^2 - (2\\sqrt{3})^2 = 324 - 12 = 312$',
                    'en': '1. Let $K = (\\alpha^2 - 3)(\\beta^2 - 3)(\\gamma^2 - 3)(\\delta^2 - 3)$\n2. $K = [(\\alpha - \\sqrt{3})(\\alpha + \\sqrt{3})] \\cdot [(\\beta - \\sqrt{3})(\\beta + \\sqrt{3})] \\cdot \\dots$\n3. Regroup: $K = [(\\alpha - \\sqrt{3})(\\beta - \\sqrt{3})(\\gamma - \\sqrt{3})(\\delta - \\sqrt{3})] \\times [(\\alpha + \\sqrt{3})(\\beta + \\sqrt{3})(\\gamma + \\sqrt{3})(\\delta + \\sqrt{3})]$\n4. $P(x) = (x-\\alpha)(x-\\beta)(x-\\gamma)(x-\\delta)$\n5. $P(\\sqrt{3}) = (\\sqrt{3}-\\alpha)(\\sqrt{3}-\\beta)(\\sqrt{3}-\\gamma)(\\sqrt{3}-\\delta) = (-1)^4 (\\alpha-\\sqrt{3})... = $ First term\n6. $P(-\\sqrt{3}) = (-\\sqrt{3}-\\alpha)(-\\sqrt{3}-\\beta)... = (-1)^4 (\\alpha+\\sqrt{3})... = $ Second term\n7. $K = P(\\sqrt{3}) \\cdot P(-\\sqrt{3})$\n8. $P(x) = x^4 - x^3 + 2x^2 + x + 3$\n9. $P(\\sqrt{3}) = (\\sqrt{3})^4 - (\\sqrt{3})^3 + 2(\\sqrt{3})^2 + (\\sqrt{3}) + 3 = 9 - 3\\sqrt{3} + 6 + \\sqrt{3} + 3 = 18 - 2\\sqrt{3}$\n10. $P(-\\sqrt{3}) = (-\\sqrt{3})^4 - (-\\sqrt{3})^3 + 2(-\\sqrt{3})^2 + (-\\sqrt{3}) + 3 = 9 + 3\\sqrt{3} + 6 - \\sqrt{3} + 3 = 18 + 2\\sqrt{3}$\n11. $K = (18 - 2\\sqrt{3})(18 + 2\\sqrt{3}) = 18^2 - (2\\sqrt{3})^2 = 324 - 12 = 312$'
                }
            },
            // ข้อ 9
            {
                q: {
                    'th': 'จงหาจำนวนเต็ม $n$ ที่มีค่ามากที่สุด ซึ่ง $n \\le 2025$ และ $n$ สามารถเขียนได้ในรูป $a^3 + b^3 + c^3 - 3abc$ สำหรับจำนวนเต็ม *ไม่เป็นลบ* $a, b, c$',
                    'en': 'Find the largest integer $n \\le 2025$ such that $n$ can be written in the form $a^3 + b^3 + c^3 - 3abc$ for some *non-negative* integers $a, b, c$'
                },
                hint: {
                    'th': 'แยกตัวประกอบ $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ $\\$ วิเคราะห์ว่า $n$ สามารถเป็นค่าใดได้บ้างเมื่อเทียบ $\\pmod 9$',
                    'en': 'Factor $a^3 + b^3 + c^3 - 3abc = (a+b+c)(...)$ $\\$ Analyze the possible values of $n \\pmod 9$'
                },
                answer: '2025',
                solution: {
                    'th': '1. $n = a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$\n2. วิเคราะห์ $n \pmod 9$: $x^3 \pmod 9$ สามารถเป็น $0, 1, -1$ (หรือ $0, 1, 8$)\n3. $a, b, c \pmod 3$ $\\implies a^3+b^3+c^3-3abc \equiv a+b+c \pmod 3$\n4. ถ้า $n \equiv 0 \pmod 3$ $\\implies a+b+c \equiv 0 \pmod 3$\n5. ถ้า $a+b+c \equiv 0 \pmod 3$, ให้ $a+b+c=3k$\n6. $a^2+b^2+c^2-ab-bc-ca = \\frac{1}{2}((a-b)^2+(b-c)^2+(c-a)^2)$\n7. $K = a^2+b^2+c^2-ab-bc-ca$ $\\$ $K \equiv (a+b+c)^2 \equiv 0 \pmod 3$ (เพราะ $-1 \equiv 2 \pmod 3$)\n8. ดังนั้น ถ้า $n \equiv 0 \pmod 3$ $\\implies (a+b+c) \equiv 0 \pmod 3$ และ $(K) \equiv 0 \pmod 3$\n9. $\\implies n = (a+b+c)(K)$ ต้องหารด้วย $3 \times 3 = 9$ ลงตัว\n10. นั่นคือ $n$ *ไม่สามารถ* อยู่ในรูป $9k+3$ หรือ $9k+6$ ได้\n11. เราต้องการ $n$ ที่มากที่สุด $\\le 2025$ ที่ $n \not\equiv 3 \\pmod 9$ และ $n \not\equiv 6 \\pmod 9$\n12. $2025 = 9 \times 225 \implies 2025 \equiv 0 \pmod 9$ (เป็นไปได้)\n13. $2024 \equiv 8 \pmod 9$ (เป็นไปได้)\n14. $2023 \equiv 7 \pmod 9$ (เป็นไปได้)\n15. $2022 \equiv 6 \pmod 9$ (เป็นไปไม่ได้)\n16. $2021 \equiv 5 \pmod 9$ (เป็นไปได้)\n17. $2020 \equiv 4 \pmod 9$ (เป็นไปได้)\n18. $2019 \equiv 3 \pmod 9$ (เป็นไปไม่ได้)\n19. $n$ ที่มากที่สุดที่เป็นไปได้คือ $2025$\n20. เราสามารถสร้าง $n=2025$ ได้ เช่น $a=226, b=225, c=224$ $\\implies a+b+c = 675, K = 3 \implies n = 675 \times 3 = 2025$ $\\$ (วิธีง่าย: $a=k+1, b=k, c=k-1 \implies n=9k$. $9k=2025 \implies k=225$. $a=226, b=225, c=224$)',
                    'en': '1. $n = a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)$\n2. Analyze $n \pmod 9$: $x^3 \pmod 9$ can be $0, 1, 8$ (or $0, 1, -1$)\n3. If $n \equiv 0 \pmod 3$ $\\implies a+b+c \equiv a^3+b^3+c^3 \equiv n \equiv 0 \pmod 3$\n4. Let $K = a^2+b^2+c^2-ab-bc-ca$\n5. $K = (a+b+c)^2 - 3(ab+bc+ca) \equiv (a+b+c)^2 \pmod 3$\n6. If $n \equiv 0 \pmod 3$, then $a+b+c \equiv 0 \pmod 3$, which implies $K \equiv 0^2 \equiv 0 \pmod 3$\n7. So, if $n$ is divisible by 3, $a+b+c$ is divisible by 3 and $K$ is divisible by 3.\n8. This means $n = (a+b+c)(K)$ must be divisible by $3 \times 3 = 9$.\n9. Therefore, $n$ *cannot* be of the form $9k+3$ or $9k+6$.\n10. We want the largest $n \le 2025$ s.t. $n \not\equiv 3 \pmod 9$ and $n \not\equiv 6 \pmod 9$\n11. $2025 = 9 \times 225 \implies 2025 \equiv 0 \pmod 9$ (Possible)\n12. $2024 \equiv 8 \pmod 9$ (Possible)\n13. $2023 \equiv 7 \pmod 9$ (Possible)\n14. $2022 \equiv 6 \pmod 9$ (Impossible)\n15. $2019 \equiv 3 \pmod 9$ (Impossible)\n16. The largest possible integer is $2025$.\n17. We can construct $n=2025$. Let $a=k+1, b=k, c=k-1$ $\implies n=9k$. $9k=2025 \implies k=225$. $\\$ $a=226, b=225, c=224$ are non-negative integers. So $n=2025$ is achievable.'
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
                    'th': '1. พิจารณาเอกลักษณ์ $n+1 = \\sqrt{(n+1)^2} = \\sqrt{1 + n^2 + 2n} = \\sqrt{1 + n(n+2)}$\n2. เราได้ $f(n) = n+1 = \\sqrt{1 + n \cdot f(n+1)}$\n3. $f(n) = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$\n4. $f(n) = \\sqrt{1 + n \\sqrt{1 + (n+1) \\sqrt{1 + (n+2)(n+4)} }}$\n5. $f(n) = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$\n6. นิพจน์นี้มีค่าเท่ากับ $f(n) = n+1$\n7. โจทย์ถามหาค่า $x$ ซึ่งอยู่ในรูป $f(n)$ โดย $n=2$\n8. $x = f(2) = 2+1 = 3$',
                    'en': '1. Consider the identity $n+1 = \\sqrt{(n+1)^2} = \\sqrt{1 + n^2 + 2n} = \\sqrt{1 + n(n+2)}$\n2. We have $f(n) = n+1 = \\sqrt{1 + n \cdot f(n+1)}$ where $f(n+1) = n+2$\n3. $f(n) = \\sqrt{1 + n \\sqrt{1 + (n+1)(n+3)}}$\n4. $f(n) = \\sqrt{1 + n \\sqrt{1 + (n+1) \\sqrt{1 + (n+2)(n+4)} }}$\n5. $f(n) = \\sqrt{1+n\\sqrt{1+(n+1)\\sqrt{1+(n+2)\\sqrt{1+\\dots}}}}$\n6. This expression is exactly $f(n) = n+1$\n7. The problem asks for $x$, which is $f(n)$ for $n=2$\n8. $x = f(2) = 2+1 = 3$'
                }
            }
        ]
    }
    // เพิ่มชุดข้อสอบอื่นได้ที่นี่ ...
};
