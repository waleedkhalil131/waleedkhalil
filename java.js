// نصوص الكود اللي هتتعرض وتتغير
const codeSnippets = [
    "print('Hello, Code Masters!')",
    "def learn_ai(student):",
    "   return student.skill + ' ++'",
    "while not successful:",
    "   code_everyday()",
    "print('Level Up your Future!')"
];

const typingCode = document.getElementById('typing-code');
let snippetIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentSnippet = codeSnippets[snippetIndex];
    
    if (isDeleting) {
        typingCode.textContent = currentSnippet.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingCode.textContent = currentSnippet.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentSnippet.length) {
        // خلص كتابة، استنى شوية قبل ما تمسح
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        // خلص مسح، انقل للكود اللي بعده
        isDeleting = false;
        snippetIndex = (snippetIndex + 1) % codeSnippets.length;
        setTimeout(type, 500);
    } else {
        // سرعة الكتابة والمسح
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// ابدأ الحركة
type();