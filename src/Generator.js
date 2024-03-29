function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNewItem() {
  switch (getRandomInt(1, 3)){
    case 1:
      return {
        id: 1,
        explicit: true,
        title: "Червяк",
        author: "Ф. Захаров",
        text: "У червяка есть пять сердец,\n А я лишён и одного,\n Но потому я и мудрец,\n Что знаю я про червяка.\n \
        А червь не знает обо мне,\n О том, что нету ничего\n Внутри тебя, меня, нас всех.\n Лишь масса, блять, кусок пизды(Как говорил Алексей Никонов)\n \
        Но делать что-то надо нам,\n Чтоб стать как червяки.\n Рыть землю, умирать, плодиться,\n Затем перевоплотиться в птицу.\n \
        И улететь, свалить отсюда, поскорее.\n Зачем? Так говорят во всей России.\n Но я же патриот, ебать вас в рот.\n Как мне уйти от сосен, дуба и берёз?\n \
        Меня так мучит сей вопрос\n Про дерево, что я сжигал.\n Червяк, которого я рвал,\n Так дорог мне, тебе, всем нам."
      }
    case 2:
      return {
        id: 2,
        explicit: false,
        title: "Меня наркоша встретил у столба...",
        author: "Т. Козлов",
        text: 'Меня наркоша встретил у столба,\n Пренебрежительным окинув взглядом,\n И не увидев пота лба,\n Повел меня кормить запретным ядом.\n - \
        Мы оказались у знакомого завода,\n Где в страшных глюках я торчал полгода,\n "Че, подсказать, что?" - вдруг обратился нарик-\n -"Не парься, я уже смешарик..."'
      }
    case 3:
      return {
        id: 3,
        explicit: false,
        title: "Японский флаг...",
        author: "Т. Чернов",
        text: "Японский флаг реет над головами\nСимвол великого народа\nИ как был грозен с врагами\nНаш адмирал Ямамото"
      }
  }
}

function generateNewList() {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(this.getNewItem())
  }
  return items;
}

export default {getNewItem, getRandomInt, generateNewList};