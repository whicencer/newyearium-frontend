export const randomPlaceholder = () => {
  const wishes = [
    "Хочу дом на берегу моря...",
    "Хочу путешествовать по миру",
    "Хочу научиться новому языку",
    "Хочу заняться спортом регулярно",
    "Хочу провести больше времени с семьей",
    "Желаю всем здоровья и счастья",
    "Желаю всем успехов в работе",
    "Желаю всем исполнения желаний",
    "Желаю всем мира и благополучия",
    "Желаю всем новых открытий и впечатлений",
    "Желаю всем крепкой дружбы и любви"
  ];
  
  return wishes[Math.floor(Math.random() * wishes.length)];
}