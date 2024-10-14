const TelegramBot = require('node-telegram-bot-api');
const token = '7269781125:AAH1y4tnol-idQU2jfCnEHZMk80aOeWjf0M'; 

const bot = new TelegramBot(token, {polling: true});


const motivationalPhrases = [
    "Acredite no seu potencial e trabalhe duro todos os dias.",
    "Sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Cada desafio é uma oportunidade disfarçada.",
    "A jornada de mil milhas começa com um único passo.",
    "Não desista! Grandes coisas levam tempo.",
    "O fracasso é apenas a oportunidade de começar de novo com mais experiência.",
    "Você é mais forte do que pensa.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Mantenha seus olhos nas estrelas e seus pés no chão.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "O sucesso não é o resultado de um grande golpe, mas de pequenos esforços constantes.",
    "Transforme suas feridas em sabedoria.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Não importa o quão devagar você vá, desde que você não pare.",
    "A única limitação é a sua mente.",
    "A disciplina é a ponte entre metas e realizações.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não tenha medo de desistir do bom para perseguir o ótimo.",
    "A única coisa entre você e seu objetivo é a história que você continua contando a si mesmo.",
    "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo."
];


function sendMotivationalMessage(chatId, timeOfDay) {
    const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    bot.sendMessage(chatId, `🌅 ${timeOfDay}, pessoal! ${phrase}`);
}


bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newUser = msg.new_chat_member.first_name;
    bot.sendMessage(chatId, `Bem-vindo(a), ${newUser}! Que bom ter você conosco! 🎉`);
});


function scheduleMorningMessage() {
    const now = new Date();
    let timeToMorning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0, 0) - now;
    if (timeToMorning < 0) timeToMorning += 86400000; 

    setTimeout(() => {
        sendMotivationalMessage('-1002340045083', 'Bom Dia');
        setInterval(() => sendMotivationalMessage('-1002340045083', 'Bom Dia'), 86400000); 
    }, timeToMorning);
}


function scheduleNightMessage() {
    const now = new Date();
    let timeToNight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 22, 0, 0, 0) - now;
    if (timeToNight < 0) timeToNight += 86400000; 

    setTimeout(() => {
        sendMotivationalMessage('-1002340045083', 'Boa Noite');
        setInterval(() => sendMotivationalMessage('-1002340045083', 'Boa Noite'), 86400000); 
    }, timeToNight);
}


function scheduleFocusReminder() {
    const chatId = '-1002340045083'; 
    setInterval(() => {
        bot.sendMessage(chatId, "🔔 Lembrete: Mantenha o foco nas suas metas e continue progredindo!");
    }, 60000);
}

scheduleMorningMessage();
scheduleNightMessage();
scheduleFocusReminder();