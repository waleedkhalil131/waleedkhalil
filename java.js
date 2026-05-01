// 1. وظيفة العداد (تحديث الوقت كل ثانية)
function updateTimer() {
    // التاريخ مضبوط ليكون متبقي 9 أيام من تاريخ 1 مايو 2026
    const examDate = new Date("May 10, 2026 00:00:00").getTime(); 
    const now = new Date().getTime();
    const diff = examDate - now;

    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    if (diff <= 0) {
        timerElement.innerHTML = "بدأ الامتحان! بالتوفيق";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.innerHTML = `
        <span>${seconds} ثانية</span>
        <span>${minutes} دقيقة</span>
        <span>${hours} ساعة</span>
        <span>${days} يوم</span>
    `;
}

// 2. وظيفة كتابة الأسطر بشكل متكرر (Loop)
const codeLines = [
    "class WaleedKhalil {",
    "  constructor() {",
    "    this.subject = 'Programming & AI';",
    "    this.location = 'Port Said';",
    "  }",
    "}"
];

let lineNo = 0;
let charNo = 0;

function startTyping() {
    // التأكد من استخدام نفس الـ ID الموجود في سطر 38 بملف HTML
    const display = document.getElementById("typing-code"); 
    if (!display) return;

    if (lineNo < codeLines.length) {
        let currentLineText = codeLines[lineNo];
        if (charNo < currentLineText.length) {
            display.innerHTML += currentLineText.charAt(charNo);
            charNo++;
            setTimeout(startTyping, 50); // سرعة كتابة الحروف
        } else {
            display.innerHTML += "\n"; // الانتقال لسطر جديد
            lineNo++;
            charNo = 0;
            setTimeout(startTyping, 500); // وقفة بسيطة بين الأسطر
        }
    } else {
        // الانتظار 3 ثوانٍ بعد اكتمال الكود ثم المسح والإعادة
        setTimeout(() => {
            display.innerHTML = ""; 
            lineNo = 0;
            charNo = 0;
            startTyping();
        }, 3000);
    }
}

// 3. تشغيل العداد والكتابة فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    setInterval(updateTimer, 1000);
    updateTimer();
    startTyping();
});