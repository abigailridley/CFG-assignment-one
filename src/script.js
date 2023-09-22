const horoscopeData = [
{sign: "AQUARIUS", emoji: "♒️", todaysHoroscope: "Aquarius, your innovative thinking shines in software development. Embrace unconventional methods, but don't stray too far from the programming fundamentals. Engage with your teachers and peers to refine your unique approach."},
{sign: "PISCES", emoji: "♓️", todaysHoroscope: "Pisces, your creativity fuels inspiration in class. Stay grounded while chasing programming dreams; structure helps turn ideas into reality. Balancing your vision with practicality leads to success in software development."},
{sign: "ARIES", emoji: "♈️", todaysHoroscope: "Aries, your fiery determination fuels your journey through the world of software development. Expect breakthroughs in class, but be mindful of impatience. Collaborate effectively to learn and lead your peers through programming challenges."},
{sign: "TAURUS", emoji: "♉️", todaysHoroscope: "Taurus, your steady and practical nature will serve you well in the programming course. Trust your instincts, but embrace new methods in software development. Patience pays off as you navigate through the intricacies of class."},
{sign: "GEMINI", emoji: "♊️", todaysHoroscope: "Gemini, your dual nature makes learning programming versatile, but beware of distractions. Balance curiosity and focus for success in class, switching between software development realms effortlessly."},
{sign: "CANCER", emoji: "♋️", todaysHoroscope: "Cancer, your intuition guides you in software development. Embrace your coding family; their support is crucial in the classroom. Don't fear change; it's your stepping stone to mastering the art of programming."},
{sign: "LEO", emoji: "♌️", todaysHoroscope: "Leo, your confidence shines in class. Remember to listen and learn from others in software development. Collaboration amplifies your prowess, making you a standout in programming projects."},
{sign: "VIRGO", emoji: "♍️", todaysHoroscope: "Virgo, your precision is a boon in software development. Don't get lost in details; see the big picture in programming class. Your organized approach ensures success in various aspects of the field."},
{sign: "LIBRA", emoji: "♎️", todaysHoroscope: "Libra, balance is your mantra in software development. Collaborate and harmonize with peers for success. Your diplomacy and fairness shine throughout your programming journey."},
{sign: "SCORPIO", emoji: "♏️", todaysHoroscope: "Scorpio, your determination is unwavering in software development. Dive deep into programming challenges, trusting your instincts and embracing transformation."},
{sign: "SAGITTARIUS", emoji: "♐️", todaysHoroscope: "Sagittarius, your adventurous spirit fuels learning. Explore diverse programming realms in class, staying focused to complete software development projects with enthusiasm."},
{sign: "CAPRICORN", emoji: "♑️", todaysHoroscope: "Capricorn, your disciplined approach yields solid progress in software development class. Embrace your ambition but remember to take breaks for a well-rounded learning experience."},
]


const zodiacInput = document.getElementById("zodiac-input");
const horoscopeButton = document.getElementById("horoscope-button");
const horoscopeDiv = document.getElementById("horoscope");
const horoscopeDisplay = document.getElementById("horoscope-display")
const emojiButton = document.getElementById("emoji-button")
let currentIndex = 0;
let isFeatureEnabled = false; 

function displayEmojis() {
  if (currentIndex < horoscopeData.length) {
    if (isFeatureEnabled) {
      horoscopeDiv.innerHTML = `${horoscopeData[currentIndex].emoji}`;
    } else {
      horoscopeDiv.innerHTML = `Emojis are disabled`
    }
    setTimeout(clearEmoji, 100);
    currentIndex++;
  } else {
      
      const userHoroscope = zodiacInput.value.toUpperCase();
      const matchedZodiac = horoscopeData.find((item) => item.sign === userHoroscope);
      
      if (!matchedZodiac) {
        horoscopeDiv.innerHTML = "Horoscope not found";
      } else {
        horoscopeDiv.innerHTML = `Here is today's horoscope for the sign of ${matchedZodiac.sign} ${matchedZodiac.emoji}`
        horoscopeDisplay.innerHTML = `${matchedZodiac.todaysHoroscope}`;
      }
    }
  }
  
  function clearEmoji() {
    horoscopeDiv.innerHTML = "";
    
 
    setTimeout(displayEmojis, 50);
  }
  
  horoscopeButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentIndex = 0;
    displayEmojis();
    horoscopeDiv.innerHTML = "";
    horoscopeDisplay.innerHTML = "";
  });

  


emojiButton.addEventListener("click", function (event) {
  event.preventDefault()
emojiButton.innerHTML = `Emojis ${isFeatureEnabled ? "off" : "on"}`
  isFeatureEnabled = !isFeatureEnabled;
  console.log("Feature is now:", isFeatureEnabled ? "enabled" : "disabled");
});
  
  
  
  

