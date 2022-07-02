import * as React from 'react';
import MovieListSection from '../organisms/MovieListSection';

const datas = [
  {
    adult: false,
    backdrop_path: '/uhYoytlNaq46dG81wLmHqaSuzWu.jpg',
    genre_ids: [28, 12, 14],
    id: 76338,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Thor: The Dark World',
    overview:
      'Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
    popularity: 251.304,
    poster_path: '/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg',
    release_date: '2013-10-30',
    title: 'Thor: The Dark World',
    video: false,
    vote_average: 6.6,
    vote_count: 14971,
  },
  {
    adult: false,
    backdrop_path: '/7D2PgX369YYePs4m44IQvROWM42.jpg',
    genre_ids: [28, 878, 12, 14],
    id: 76170,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Wolverine',
    overview:
      'Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan.',
    popularity: 13.218,
    poster_path: '/t2wVAcoRlKvEIVSbiYDb8d0QqqS.jpg',
    release_date: '2013-07-23',
    title: 'The Wolverine',
    video: false,
    vote_average: 6.4,
    vote_count: 8296,
  },
  {
    adult: false,
    backdrop_path: '/tKa1gmGKAUVYnflYcadipeL3d9h.jpg',
    genre_ids: [28, 12, 878],
    id: 68721,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Iron Man 3',
    overview:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    popularity: 114.635,
    poster_path: '/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
    release_date: '2013-04-18',
    title: 'Iron Man 3',
    video: false,
    vote_average: 6.9,
    vote_count: 19596,
  },
  {
    adult: false,
    backdrop_path: '/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg',
    genre_ids: [28, 12, 14],
    id: 1930,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Amazing Spider-Man',
    overview:
      "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    popularity: 175.957,
    poster_path: '/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg',
    release_date: '2012-06-23',
    title: 'The Amazing Spider-Man',
    video: false,
    vote_average: 6.7,
    vote_count: 15015,
  },
  {
    adult: false,
    backdrop_path: '/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
    genre_ids: [878, 28, 12],
    id: 24428,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Avengers',
    overview:
      'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
    popularity: 251.24,
    poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    release_date: '2012-04-25',
    title: 'The Avengers',
    video: false,
    vote_average: 7.7,
    vote_count: 27123,
  },
  {
    adult: false,
    backdrop_path: '/aHc765LRg5d5DtoS4LKiGEROWrq.jpg',
    genre_ids: [28, 14, 53],
    id: 71676,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Ghost Rider: Spirit of Vengeance',
    overview:
      'When the devil resurfaces with aims to take over the world in human form, Johnny Blaze reluctantly comes out of hiding to transform into the flame-spewing supernatural hero Ghost Rider -- and rescue a 10-year-old boy from an unsavory end.',
    popularity: 74.226,
    poster_path: '/fDtIZXLNreDHk3mOskJYABrQNOQ.jpg',
    release_date: '2011-12-11',
    title: 'Ghost Rider: Spirit of Vengeance',
    video: false,
    vote_average: 5,
    vote_count: 3165,
  },
  {
    adult: false,
    backdrop_path: '/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg',
    genre_ids: [28, 12, 878],
    id: 1771,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Captain America: The First Avenger',
    overview:
      "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    popularity: 109.141,
    poster_path: '/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg',
    release_date: '2011-07-22',
    title: 'Captain America: The First Avenger',
    video: false,
    vote_average: 7,
    vote_count: 18738,
  },
  {
    adult: false,
    backdrop_path: '/7kURId6slyHNujYpCFm0Z1M3kRt.jpg',
    genre_ids: [28, 878, 12],
    id: 49538,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'X-Men: First Class',
    overview:
      'Before Charles Xavier and Erik Lensherr took the names Professor X and Magneto, they were two young men discovering their powers for the first time. Before they were arch-enemies, they were closest of friends, working together with other mutants (some familiar, some new), to stop the greatest threat the world has ever known.',
    popularity: 3.123,
    poster_path: '/vUvlOY575rztBuJV3a0dbHW5MQR.jpg',
    release_date: '2011-06-01',
    title: 'X-Men: First Class',
    video: false,
    vote_average: 7.3,
    vote_count: 11133,
  },
  {
    adult: false,
    backdrop_path: '/3SDoquTjagne0jWzdxEu31KFLmw.jpg',
    genre_ids: [12, 14, 28],
    id: 10195,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Thor',
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    popularity: 303.959,
    poster_path: '/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
    release_date: '2011-04-21',
    title: 'Thor',
    video: false,
    vote_average: 6.8,
    vote_count: 18351,
  },
  {
    adult: false,
    backdrop_path: '/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg',
    genre_ids: [12, 28, 878],
    id: 10138,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Iron Man 2',
    overview:
      "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    popularity: 157.629,
    poster_path: '/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg',
    release_date: '2010-04-28',
    title: 'Iron Man 2',
    video: false,
    vote_average: 6.8,
    vote_count: 18075,
  },
  {
    adult: false,
    backdrop_path: '/wvqdJLVh0mSblly7UnYFPEk04Wd.jpg',
    genre_ids: [12, 28, 53, 878],
    id: 2080,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'X-Men Origins: Wolverine',
    overview:
      'After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.',
    popularity: 13.073,
    poster_path: '/yj8LbTju1p7CUJg7US2unSBk33s.jpg',
    release_date: '2009-04-28',
    title: 'X-Men Origins: Wolverine',
    video: false,
    vote_average: 6.3,
    vote_count: 9028,
  },
  {
    adult: false,
    backdrop_path: '/dqPZpQy6PJINOJtld17NgIERusH.jpg',
    genre_ids: [28, 80],
    id: 13056,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Punisher: War Zone',
    overview:
      'Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left horribly disfigured by Castle, he sets out for vengeance under his new alias: Jigsaw. With the "Punisher Task Force" hot on his trail and the FBI unable to take Jigsaw in, Frank must stand up to the formidable army that Jigsaw has recruited before more of his evil deeds go unpunished.',
    popularity: 19.203,
    poster_path: '/oOvKJgYUIpfswGHAdW6159bPbvM.jpg',
    release_date: '2008-12-05',
    title: 'Punisher: War Zone',
    video: false,
    vote_average: 5.8,
    vote_count: 881,
  },
  {
    adult: false,
    backdrop_path: '/jPu8yiadqgzwFPGKJmGo637ASVP.jpg',
    genre_ids: [878, 28, 12],
    id: 1724,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Incredible Hulk',
    overview:
      'Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.',
    popularity: 67.726,
    poster_path: '/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg',
    release_date: '2008-06-12',
    title: 'The Incredible Hulk',
    video: false,
    vote_average: 6.2,
    vote_count: 9879,
  },
  {
    adult: false,
    backdrop_path: '/s6cQgJSkviamXAXBggT2xmj7JiG.jpg',
    genre_ids: [28, 878, 12],
    id: 1726,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Iron Man',
    overview:
      'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    popularity: 129.091,
    poster_path: '/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
    release_date: '2008-04-30',
    title: 'Iron Man',
    video: false,
    vote_average: 7.6,
    vote_count: 22912,
  },
  {
    adult: false,
    backdrop_path: '/7ff2FyFmskEFfmXHkxuqVr47DiG.jpg',
    genre_ids: [12, 14, 28, 53],
    id: 1979,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Fantastic Four: Rise of the Silver Surfer',
    overview:
      "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
    popularity: 45.605,
    poster_path: '/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg',
    release_date: '2007-06-13',
    title: 'Fantastic Four: Rise of the Silver Surfer',
    video: false,
    vote_average: 5.6,
    vote_count: 6813,
  },
];

export default function SearchLayout() {
  return <MovieListSection datas={datas} types="search" />;
}