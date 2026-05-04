const questions = [
    {
        q: "حدد البرنامج الذي يقوم بإخراج ما يلي:\nالطقس اليوم مشمس\nلا حاجة إلى مظلة",
        code: "let weatherForecast = 'مشمس';\nconsole.log('الطقس اليوم ' + weatherForecast);",
        options: [
            "if (weatherForecast == 'ممطر') { console.log('لا حاجة إلى مظلة'); }",
            "if (weatherForecast != 'ممطر') { console.log('لا حاجة إلى مظلة'); }",
            "if (weatherForecast != 'مشمس') { console.log('لا حاجة إلى مظلة'); }",
            "if (weatherForecast == 'ممطر') { console.log('بحاجة لمظلة'); }"
        ],
        correct: 1
    },
    {
        q: "من صورة 'ملاعب الرياضة': أي برنامج يطبع 'يتم لعب كرة القدم في الملعب'؟",
        code: "let sports = ['البيسبول', 'كرة السلة', 'كرة القدم'];\nlet outdoorSports = ['البيسبول', 'كرة القدم'];",
        options: [
            "if (sports[2] == outdoorSports[1])",
            "if (sports[1] == outdoorSports[0])",
            "if (sports[0] == outdoorSports[1])",
            "if (sports[2] == outdoorSports[0])"
        ],
        correct: 0
    },
    {
        q: "من صورة 'مواعيد الوصول': ما هو الكود الصحيح لطباعة موعد هاناكو وكينتا؟",
        code: "let visiters = ['كينتا', 'ريويا', 'هاناكو', 'آيا'];",
        options: [
            "if (visiters[i] == 'هاناكو' && visiters[i] == 'كينتا')",
            "if (visiters[i] == 'هاناكو' || visiters[i] == 'كينتا')",
            "if (visiters[i] != 'هاناكو')",
            "if (visiters[i] == 'آيا')"
        ],
        correct: 1
    },
    {
        q: "حدد البرنامج الذي يخرج التواريخ 5 و 7 فقط (مباريات كرة القدم):",
        code: "let dates = ['5', '6', '7', '8'];\nlet weather = ['غائم', 'ممطر', 'مشمس', 'ممطر'];\nlet participants = [22, 18, 24, 20];",
        options: [
            "if (weather[i] != 'ممطر' || participants[i] >= 22)",
            "if (weather[i] == 'ممطر' && participants[i] >= 22)",
            "if (weather[i] != 'ممطر' && participants[i] >= 22)",
            "if (weather[i] == 'ممطر' || participants[i] < 22)"
        ],
        correct: 2
    },
    {
        q: "خصم الأعمار: أي شرط يطبق الخصم للأطفال (أصغر من 10) أو كبار السن (أكبر من 60)؟",
        code: "let age = 5;",
        options: [
            "if (age < 10 && age > 60)",
            "if (age < 10 || age > 60)",
            "if (age > 10 || age < 60)",
            "if (age == 10 && age == 60)"
        ],
        correct: 1
    },
    {
        q: "من صورة 'قائمة اليوم': كيف نطبع جميع عناصر المصفوفة بشكل صحيح؟",
        code: "let menuList = ['ساندويتش', 'سلطة', 'قهوة'];",
        options: [
            "console.log(menuList[i]); داخل for loop",
            "console.log(menuList); داخل for loop",
            "console.log(menuList[0]); فقط",
            "console.log(menuList.length);"
        ],
        correct: 0
    },
    {
        q: "من صورة 'سلة التسوق': متى يظهر 'الشحن مجاني' (أكثر من 3 عناصر)؟",
        code: "let shoppingBasket = ['مانجا', 'روايات', 'حذاء', 'حاسوب'];",
        options: [
            "if (shoppingBasket.length > 3)",
            "if (shoppingBasket.length == 3)",
            "if (shoppingBasket.length < 3)",
            "if (shoppingBasket[0] == 'حاسوب')"
        ],
        correct: 0
    },
    {
        q: "من صورة 'الوظائف': أي حلقة تكرار صحيحة للمرور على جميع مهام المصفوفة؟",
        code: "let taskList = ['تنظيف', 'غسيل', 'طبخ'];",
        options: [
            "for (let i = 0; i <= taskList.length; i++)",
            "for (let i = 0; i < taskList.length; i++)",
            "for (let i = 1; i < taskList.length; i++)",
            "if (i < taskList.length)"
        ],
        correct: 1
    },
    {
        q: "من صورة 'شراء الملابس': كود يتجاهل 'تنورة' ويطبع بقية العناصر؟",
        code: "let item = 'تنورة';",
        options: [
            "if (item == 'تنورة')",
            "if (!(item == 'تنورة'))",
            "if (item != 'قميص')",
            "if (item == 'بنطال')"
        ],
        correct: 1
    },
    {
        q: "ما هي نتيجة تنفيذ: console.log(30 + '0')؟ (دمج نصوص)",
        code: "let number = 30;\nlet text = '0';",
        options: [
            "300",
            "30",
            "3000",
            "Error"
        ],
        correct: 0
    },
    {
        q: "إذا كان fav = 'بيتزا' و lunch = 'برجر'، ما نتيجة (fav != lunch)؟",
        code: "let fav = 'بيتزا';\nlet lunch = 'برجر';\nif (fav != lunch) { console.log('مختلفين'); }",
        options: [
            "مختلفين",
            "Error",
            "لا يطبع شيء",
            "بيتزا برجر"
        ],
        correct: 0
    },
    {
        q: "لركوب اللعبة يجب أن يكون الطول > 140 'و' الوزن > 40. المعامل هو:",
        code: "if (height > 140 ___ weight > 40)",
        options: [
            "||",
            "&&",
            "!",
            "=="
        ],
        correct: 1
    },
    {
        q: "ما نتيجة فحص (يوم الخميس) والوقت (8 صباحاً) مع فتح المتجر في 10؟",
        code: "if (day == 'الخميس' && time < 10) { console.log('سيفتح قريباً'); }",
        options: [
            "سيفتح قريباً",
            "مفتوح",
            "مغلق",
            "Error"
        ],
        correct: 0
    },
    {
        q: "درجة الطالب 60، والشرط (درجة > 60). ما المخرجات؟",
        code: "let score = 60;\nif (score > 60) { console.log('ناجح'); }",
        options: [
            "ناجح",
            "لا يطبع شيء (خطأ)",
            "رسوب",
            "60"
        ],
        correct: 1
    },
    {
        q: "السعر 12000 والوقت 21. شرط الخصم (السعر > 15000 أو الوقت < 21).",
        code: "if (price > 15000 || time < 21) { console.log('خصم'); } else { console.log('لا خصم'); }",
        options: [
            "خصم",
            "لا خصم",
            "12000",
            "Error"
        ],
        correct: 1
    },
    {
        q: "ترتيب العناصر (Index) في مصفوفة ['أ', 'ب', 'ج'] للعنصر 'أ' هو:",
        code: "let list = ['أ', 'ب', 'ج'];",
        options: [
            "0",
            "1",
            "2",
            "-1"
        ],
        correct: 0
    },
    {
        q: "ما هي وظيفة المعامل '||' في جملة if؟",
        code: "if (A || B)",
        options: [
            "يجب تحقق الشرطين معاً",
            "يكفي تحقق شرط واحد فقط",
            "نفي الشرطين",
            "ضرب القيمتين"
        ],
        correct: 1
    },
    {
        q: "كيف نعرف عدد عناصر المصفوفة في JavaScript؟",
        code: "let items = [1, 2, 3];",
        options: [
            "items.count",
            "items.length",
            "items.size",
            "items.index"
        ],
        correct: 1
    },
    {
        q: "ماذا يطبع الكود: console.log(typeof 100)؟",
        code: "let x = 100;",
        options: [
            "string",
            "number",
            "boolean",
            "undefined"
        ],
        correct: 1
    },
    {
        q: "العد في البرمجة يبدأ من الرقم:",
        code: "let arr = ['Start'];",
        options: [
            "1",
            "0",
            "-1",
            "10"
        ],
        correct: 1
    }
];

// باقي كود الـ JavaScript للتحميل والعرض...