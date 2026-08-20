var counter = 0;

function replaceText(){
   const textForReplace = document.getElementById('allText');
   textForReplace.innerHTML ='<p id="title">100 reasons why do I love you</p><button class="button" onclick="seeReasons()">Click to see the reason</button>'
   document.getElementById('button').remove();
}

function seeReasons(){
   counter = counter+1;
   if(counter <= 100){
      const loveList = document.getElementById('list');
      loveList.innerHTML =`<p>Reason number ${counter}: ${compliments[counter]}</p>`
   }
   else{
      const loveList = document.getElementById('list');
      loveList.innerHTML =`<p id="thatAll">That all, I love you</p>`
      document.getElementById('button').remove()
   }
}

const compliments = [
    "",
    "Your smile can instantly brighten up my darkest days.",
    "I love the way your eyes crinkle when you laugh.",
    "Your laugh is my absolute favorite sound in the world.",
    "You have a smile that makes everyone around you feel warm.",
    "The way you giggle when you’re genuinely happy is adorable.",
    "You know exactly how to make me smile when I want to cry.",
    "I love that your smile is the first thing I want to see every morning.",
    "Your smile is incredibly contagious.",
    "I love how your face lights up when you see something you love.",
    "Even a tiny smile from you makes my heart skip a beat.",
    "You have the kindest and most generous heart I’ve ever known.",
    "I love how incredibly pure and honest your soul is.",
    "You are always so compassionate and empathetic toward others.",
    "Your strength and resilience constantly inspire me to be better.",
    "I love how passionate you get when talking about things you love.",
    "You have a beautiful mind and a unique way of looking at the world.",
    "Your patience with me is truly a blessing.",
    "You are so genuinely sweet and soft-hearted.",
    "I love your witty sense of humor and your quick responses.",
    "You have an amazing ability to bring peace wherever you go.",
    "When I am with you, I feel like I am finally home.",
    "You make me feel completely safe, loved, and secure.",
    "I can be 100% myself around you without any fear of judgment.",
    "You make me believe in true love and beautiful fairy tales.",
    "Being with you gives me a sense of peace I’ve never felt before.",
    "You make even the most boring, ordinary days feel like an adventure.",
    "With you, I feel like the luckiest person alive.",
    "You give me the confidence to chase my dreams.",
    "I feel incredibly proud whenever I hold your hand in public.",
    "You make my life complete and full of beautiful colors.",
    "You are absolutely stunning, both inside and out.",
    "I love looking into your beautiful eyes and getting lost in them.",
    "I love running my fingers through your hair.",
    "You look incredibly cute and beautiful even when you just woke up.",
    "I love your style and how elegant you look in everything you wear.",
    "Your skin is so soft, and I love touching your face gently.",
    "You look like an absolute angel when you are peacefully sleeping.",
    "I love the cute little expressions you make when you are focused.",
    "Your beauty is timeless and completely effortless.",
    "I still get butterflies in my stomach every single time I look at you.",
    "I love how we can talk for hours about everything and nothing.",
    "Our inside jokes that nobody else would ever understand.",
    "The way we can sit in complete silence and still feel connected.",
    "I love our late-night conversations when the whole world is asleep.",
    "Every single memory we’ve built together is a treasure to me.",
    "The way you hold my arm tightly when we walk down the street.",
    "I love cooking with you, even if we end up making a complete mess.",
    "How we can turn a simple grocery trip into a fun date.",
    "I love watching movies with you and sharing one blanket.",
    "Looking back at our old pictures always brings tears of joy to my eyes.",
    "You always notice when something is wrong with me before I even say it.",
    "I love how you take care of me when I am tired or sick.",
    "You are my biggest cheerleader and my number one fan.",
    "You never give up on me, even when I make mistakes.",
    "I love the sweet, encouraging text messages you send me randomly.",
    "You always listen to my long rants with genuine interest.",
    "You give the best advice when I am feeling completely lost.",
    "I love that I can always count on you, no matter what happens.",
    "You always make sure that I am eating well and staying healthy.",
    "Your hugs have the magical power to heal all my stress.",
    "I love the way you kiss me softly when we say goodbye.",
    "How you get defensive and cute when you lose a game.",
    "The way you pout your lips when you want my attention.",
    "How you try to hide your face when you blush.",
    "The little sounds you make when you are comfortably snuggling.",
    "How excited you get over small gifts or sweet surprises.",
    "I love how you steal my hoodies and look incredibly cute in them.",
    "The way you play with your keys or rings when you are nervous.",
    "How you remember the smallest details about things I like.",
    "The sleepy, raspy tone of your voice in the early morning.",
    "I love that you are not just my girlfriend, but also my best friend.",
    "You make me look forward to the future and growing old together.",
    "I love how we always find a way to solve our problems together.",
    "You accept my flaws and love me for exactly who I am.",
    "I love that we can dream about our future house and life together.",
    "You make me want to build a beautiful, happy family with you.",
    "I love how our hands fit perfectly together, like puzzle pieces.",
    "You brought a deep meaning and purpose into my life.",
    "I love that my heart chose you out of billions of people.",
    "With you, I know that our love can survive any storm.",
    "There is absolutely no one else like you in the entire universe.",
    "I love how clumsy you can be sometimes—it’s incredibly endearing.",
    "You have a beautiful way of expressing your thoughts and emotions.",
    "I love your determination and how hard you work for your goals.",
    "You have a brilliant mind that never ceases to amaze me.",
    "I love how creative and imaginative you are.",
    "You have a beautiful voice that brings instant calm to my mind.",
    "I love how you stay true to yourself no matter what.",
    "You have a childish, playful side that keeps me young at heart.",
    "You are a perfect combination of a strong woman and a sweet girl.",
    "I love you because you are my sunshine on a rainy day.",
    "I love you because you made me a better and happier person.",
    "I love you because every song about love reminds me of you.",
    "I love you because you are my favorite part of every single day.",
    "I love you because you are the best thing that ever happened to me.",
    "I love you because you filled the empty spaces in my heart.",
    "I love you because life with you is a truly beautiful blessing.",
    "I love you because you are my absolute everything.",
    "I love you more today than yesterday, but less than I will tomorrow.",
    "I love you simply because you are you, my perfect, beautiful girl."
];
