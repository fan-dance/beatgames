export const Games = [
  {
    id: 1,
    slug: 'para-pa_gorod-tancev',
    name: 'Пара Па: Город Танцев',
    description: 'Первая танцевальная онлайн игра в&nbsp;России. Много социальных механик, режимов игры',
    image: 'parapa.png',
    type: 'pc',
  },
  {
    id: 2,
    name: 'Touch Online',
    description: 'Танцевальная игра в стиле аниме. Интересные режимы игры, много одежды и игровых событий!',
    image: 'touch.png',
    slug: 'touch-online',
    type: 'pc',
  },
  {
    id: 3,
    name: 'Dance World',
    description: 'Версия игры Audition 2 от&nbsp;русских разработчиков. Классические режимы, множество любимых треков!',
    image: 'dance-world.png',
    slug: 'dance-world',
    type: 'pc',
  },
  {
    id: 4,
    name: 'Love Beat',
    description: 'Старая игра, с&nbsp;персонажами в&nbsp;стиле аниме. В&nbsp;игре есть уникальные и смешные режимы танцев.',
    image: 'lovebeat.png',
    slug: 'love-beat',
    type: 'pc',
  },
  {
    id: 5,
    name: 'Club MStar',
    description: 'Корейская игра, с системой дома, красивой графикой и интересными режимами. Раньше была в России.',
    image: 'mstar.png',
    slug: 'club-mstar',
    type: 'pc',
  },
  {
    id: 6,
    name: 'Just Dance Now',
    description: '',
    image: 'just-dance-now.png',
    slug: 'just-dance-now',
    type: 'pc',
  }
]

export function getGames(type) {
  if (!type) {
    return Games;
  }

  return Games.filter(game => game.type === type);
}

export function getGame(slug) {
  return Games.find(game => game.slug === slug);
}
