import {ICard} from "../cards/card";
import {ICategory} from "../categories/category";
import { IUser } from "../users/user";

export class DbStore {

  categoriesStore: ICategory[] = [
    {
      id: 1,
      category: 'Action (set A)',
      pictureSrc: 'assets/images/hug.jpg',
      iconSrc: 'assets/svg/horse-riding.svg',
    },
    {
      id: 2,
      category: 'Action (set B)',
      pictureSrc: 'assets/images/sing.jpg',
      iconSrc: 'assets/svg/skiing.svg',
    },
    {
      id: 3,
      category: 'Animal (set A)',
      pictureSrc: 'assets/images/rabbit.jpg',
      iconSrc: 'assets/svg/kangaroo.svg',
    },
    {
      id: 4,
      category: 'Animal (set B)',
      pictureSrc: 'assets/images/bird.jpg',
      iconSrc: 'assets/svg/hedgehog.svg',
    },
    {
      id: 5,
      category: 'Clothes',
      pictureSrc: 'assets/images/boot.jpg',
      iconSrc: 'assets/svg/gumboot.svg',
    },
    {
      id: 6,
      category: 'Emotions',
      pictureSrc: 'assets/images/laugh.jpg',
      iconSrc: 'assets/svg/baby-boy.svg',
    },
    {
      id: 7,
      category: 'Home',
      pictureSrc: 'assets/images/door.jpg',
      iconSrc: 'assets/svg/house.svg',
    },
    {
      id: 8,
      category: 'Toys',
      pictureSrc: 'assets/images/bear.jpg',
      iconSrc: 'assets/svg/horse.svg',
    }

  ];

  cardsStore: ICard[] = [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/images/cry.jpg',
      audioSrc: 'assets/audio/cry.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 1,
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/images/dance.jpg',
      audioSrc: 'assets/audio/dance.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 2,

    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/images/dive.jpg',
      audioSrc: 'assets/audio/dive.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 3,
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/images/draw.jpg',
      audioSrc: 'assets/audio/draw.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 4,
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/images/fish.jpg',
      audioSrc: 'assets/audio/fish.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 5,
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/images/fly.jpg',
      audioSrc: 'assets/audio/fly.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 6,
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/images/hug.jpg',
      audioSrc: 'assets/audio/hug.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 7,
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/images/jump.jpg',
      audioSrc: 'assets/audio/jump.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 1,
      id: 8,
    },

    {
      word: 'open',
      translation: 'открывать',
      image: 'assets/images/open.jpg',
      audioSrc: 'assets/audio/open.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 9,
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'assets/images/play.jpg',
      audioSrc: 'assets/audio/play.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 10,
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'assets/images/point.jpg',
      audioSrc: 'assets/audio/point.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 11,
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'assets/images/ride.jpg',
      audioSrc: 'assets/audio/ride.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 12,
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'assets/images/run.jpg',
      audioSrc: 'assets/audio/run.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 13,
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'assets/images/sing.jpg',
      audioSrc: 'assets/audio/sing.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 14,
    },
    {
      word: 'skip',
      translation: 'прыгать',
      image: 'assets/images/skip.jpg',
      audioSrc: 'assets/audio/skip.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 15,
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'assets/images/swim.jpg',
      audioSrc: 'assets/audio/swim.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 2,
      id: 16,
    },

    {
      word: 'cat',
      translation: 'кот',
      image: 'assets/images/cat.jpg',
      audioSrc: 'assets/audio/cat.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 17,
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'assets/images/chick.jpg',
      audioSrc: 'assets/audio/chick.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 18,
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'assets/images/chicken.jpg',
      audioSrc: 'assets/audio/chicken.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 19,
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'assets/images/dog.jpg',
      audioSrc: 'assets/audio/dog.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 20,
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'assets/images/horse.jpg',
      audioSrc: 'assets/audio/horse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 21,
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'assets/images/pig.jpg',
      audioSrc: 'assets/audio/pig.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 22,
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'assets/images/rabbit.jpg',
      audioSrc: 'assets/audio/rabbit.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 23,
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'assets/images/sheep.jpg',
      audioSrc: 'assets/audio/sheep.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 3,
      id: 24,
    },

    {
      word: 'bird',
      translation: 'птица',
      image: 'assets/images/bird.jpg',
      audioSrc: 'assets/audio/bird.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 25,
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'assets/images/fish1.jpg',
      audioSrc: 'assets/audio/fish.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 26,
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'assets/images/frog.jpg',
      audioSrc: 'assets/audio/frog.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 27,
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'assets/images/giraffe.jpg',
      audioSrc: 'assets/audio/giraffe.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 28,
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/images/lion.jpg',
      audioSrc: 'assets/audio/lion.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 29,
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'assets/images/mouse.jpg',
      audioSrc: 'assets/audio/mouse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 30,
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'assets/images/turtle.jpg',
      audioSrc: 'assets/audio/turtle.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 31,
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'assets/images/dolphin.jpg',
      audioSrc: 'assets/audio/dolphin.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 4,
      id: 32,
    },
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'assets/images/skirt.jpg',
      audioSrc: 'assets/audio/skirt.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 33,
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'assets/images/pants.jpg',
      audioSrc: 'assets/audio/pants.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 34,
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'assets/images/blouse.jpg',
      audioSrc: 'assets/audio/blouse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 35,
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'assets/images/dress.jpg',
      audioSrc: 'assets/audio/dress.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 36,
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'assets/images/boot.jpg',
      audioSrc: 'assets/audio/boot.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 37,
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'assets/images/shirt.jpg',
      audioSrc: 'assets/audio/shirt.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 38,
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'assets/images/coat.jpg',
      audioSrc: 'assets/audio/coat.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 39,
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'assets/images/shoe.jpg',
      audioSrc: 'assets/audio/shoe.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 5,
      id: 40,
    },

    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/images/sad.jpg',
      audioSrc: 'assets/audio/sad.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 41,
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/images/angry.jpg',
      audioSrc: 'assets/audio/angry.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 42,
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/images/happy.jpg',
      audioSrc: 'assets/audio/happy.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 43,
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/images/tired.jpg',
      audioSrc: 'assets/audio/tired.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 44,
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'assets/images/surprised.jpg',
      audioSrc: 'assets/audio/surprised.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 45,
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/images/scared.jpg',
      audioSrc: 'assets/audio/scared.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 46,
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/images/smile.jpg',
      audioSrc: 'assets/audio/smile.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 47,
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/images/laugh.jpg',
      audioSrc: 'assets/audio/laugh.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 6,
      id: 48,
    },

    {
      word: 'bed',
      translation: 'кровать',
      image: 'assets/images/bed.jpg',
      audioSrc: 'assets/audio/bed-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 49,
    },
    {
      word: 'door',
      translation: 'дверь',
      image: 'assets/images/door.jpg',
      audioSrc: 'assets/audio/door-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 50,
    },
    {
      word: 'mirror',
      translation: 'зеркало',
      image: 'assets/images/mirror.jpg',
      audioSrc: 'assets/audio/mirror-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 51,
    },
    {
      word: 'window',
      translation: 'окно',
      image: 'assets/images/window.jpg',
      audioSrc: 'assets/audio/window-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 52,
    },
    {
      word: 'armchair',
      translation: 'кресло',
      image: 'assets/images/armchair.jpg',
      audioSrc: 'assets/audio/armchair-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 53,
    },
    {
      word: 'table',
      translation: 'стол',
      image: 'assets/images/table.jpg',
      audioSrc: 'assets/audio/table-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 54,
    },
    {
      word: 'wardrobe',
      translation: 'шкаф',
      image: 'assets/images/wardrobe.jpg',
      audioSrc: 'assets/audio/wardrobe-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 55,
    },
    {
      word: 'notebook',
      translation: 'ноутбук',
      image: 'assets/images/notebook.jpg',
      audioSrc: 'assets/audio/notebook-us.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 7,
      id: 56,
    },

    {
      word: 'ball',
      translation: 'мяч',
      image: 'assets/images/ball.jpg',
      audioSrc: 'assets/audio/ball.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 57,
    },
    {
      word: 'bear',
      translation: 'медведь',
      image: 'assets/images/bear.jpg',
      audioSrc: 'assets/audio/bear.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 58,
    },
    {
      word: 'car',
      translation: 'машина',
      image: 'assets/images/car1.jpg',
      audioSrc: 'assets/audio/car.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 59,
    },
    {
      word: 'unicorn',
      translation: 'единорог',
      image: 'assets/images/unicorn.jpg',
      audioSrc: 'assets/audio/unicorn.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 60,
    },
    {
      word: 'constructor',
      translation: 'конструктор',
      image: 'assets/images/constructor.jpg',
      audioSrc: 'assets/audio/constructor.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 61,
    },
    {
      word: 'doll',
      translation: 'кукла',
      image: 'assets/images/doll3.jpg',
      audioSrc: 'assets/audio/doll.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 62,
    },
    {
      word: 'train',
      translation: 'стол',
      image: 'assets/images/train.jpg',
      audioSrc: 'assets/audio/train.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 63,
    },
    {
      word: 'robot',
      translation: 'робот',
      image: 'assets/images/robot.jpg',
      audioSrc: 'assets/audio/robot.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: 8,
      id: 64,
    },
  ];

  users: IUser[] = [
    {
      hash: 'adminadmin',
      status: 'admin',
    },
    {
      hash: 'useruser',
      status: 'user'
    },

  ];

  /*
  categoriesStore: ICategoryData[] = [
    {
      id: 'action%20(set%20a)',
      category: 'Action (set A)',
      pictureSrc: 'images/hug.jpg',
      iconSrc: 'assets/svg/horse-riding.svg',
      cards: [
        {
          word: 'cry',
          translation: 'плакать',
          image: 'images/cry.jpg',
          audioSrc: 'audio/cry.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'dance',
          translation: 'танцевать',
          image: 'images/dance.jpg',
          audioSrc: 'audio/dance.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'dive',
          translation: 'нырять',
          image: 'images/dive.jpg',
          audioSrc: 'audio/dive.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'draw',
          translation: 'рисовать',
          image: 'images/draw.jpg',
          audioSrc: 'audio/draw.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          image: 'images/fish.jpg',
          audioSrc: 'audio/fish.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'fly',
          translation: 'летать',
          image: 'images/fly.jpg',
          audioSrc: 'audio/fly.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,

        },
        {
          word: 'hug',
          translation: 'обнимать',
          image: 'images/hug.jpg',
          audioSrc: 'audio/hug.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'jump',
          translation: 'прыгать',
          image: 'images/jump.jpg',
          audioSrc: 'audio/jump.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]
    },
    {
      id: 'action%20(set%20b)',
      category: 'Action (set B)',
      pictureSrc: 'images/sing.jpg',
      iconSrc: 'assets/svg/skiing.svg',
      cards: [
        {
          word: 'open',
          translation: 'открывать',
          image: 'images/open.jpg',
          audioSrc: 'audio/open.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'play',
          translation: 'играть',
          image: 'images/play.jpg',
          audioSrc: 'audio/play.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'point',
          translation: 'указывать',
          image: 'images/point.jpg',
          audioSrc: 'audio/point.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'ride',
          translation: 'ездить',
          image: 'images/ride.jpg',
          audioSrc: 'audio/ride.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'run',
          translation: 'бегать',
          image: 'images/run.jpg',
          audioSrc: 'audio/run.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'sing',
          translation: 'петь',
          image: 'images/sing.jpg',
          audioSrc: 'audio/sing.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'skip',
          translation: 'прыгать',
          image: 'images/skip.jpg',
          audioSrc: 'audio/skip.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'swim',
          translation: 'плавать',
          image: 'images/swim.jpg',
          audioSrc: 'audio/swim.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]
    },
    {
      id: 'animal%20(set%20a)',
      category: 'Animal (set A)',
      pictureSrc: 'images/rabbit.jpg',
      iconSrc: 'assets/svg/kangaroo.svg',
      cards: [
        {
          word: 'cat',
          translation: 'кот',
          image: 'images/cat.jpg',
          audioSrc: 'audio/cat.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'chick',
          translation: 'цыплёнок',
          image: 'images/chick.jpg',
          audioSrc: 'audio/chick.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'chicken',
          translation: 'курица',
          image: 'images/chicken.jpg',
          audioSrc: 'audio/chicken.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'dog',
          translation: 'собака',
          image: 'images/dog.jpg',
          audioSrc: 'audio/dog.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'horse',
          translation: 'лошадь',
          image: 'images/horse.jpg',
          audioSrc: 'audio/horse.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'pig',
          translation: 'свинья',
          image: 'images/pig.jpg',
          audioSrc: 'audio/pig.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'rabbit',
          translation: 'кролик',
          image: 'images/rabbit.jpg',
          audioSrc: 'audio/rabbit.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'sheep',
          translation: 'овца',
          image: 'images/sheep.jpg',
          audioSrc: 'audio/sheep.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]
    },
    {
      id: 'animal%20(set%20b)',
      category: 'Animal (set B)',
      pictureSrc: 'images/bird.jpg',
      iconSrc: 'assets/svg/hedgehog.svg',
      cards: [
        {
          word: 'bird',
          translation: 'птица',
          image: 'images/bird.jpg',
          audioSrc: 'audio/bird.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'fish',
          translation: 'рыба',
          image: 'images/fish1.jpg',
          audioSrc: 'audio/fish.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'frog',
          translation: 'жаба',
          image: 'images/frog.jpg',
          audioSrc: 'audio/frog.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'giraffe',
          translation: 'жирафа',
          image: 'images/giraffe.jpg',
          audioSrc: 'audio/giraffe.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'lion',
          translation: 'лев',
          image: 'images/lion.jpg',
          audioSrc: 'audio/lion.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'mouse',
          translation: 'мышь',
          image: 'images/mouse.jpg',
          audioSrc: 'audio/mouse.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'turtle',
          translation: 'черепаха',
          image: 'images/turtle.jpg',
          audioSrc: 'audio/turtle.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'dolphin',
          translation: 'дельфин',
          image: 'images/dolphin.jpg',
          audioSrc: 'audio/dolphin.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]
    },
    {
      id: 'clothes',
      category: 'Clothes',
      pictureSrc: 'images/boot.jpg',
      iconSrc: 'assets/svg/gumboot.svg',
      cards: [
        {
          word: 'skirt',
          translation: 'юбка',
          image: 'images/skirt.jpg',
          audioSrc: 'audio/skirt.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'pants',
          translation: 'брюки',
          image: 'images/pants.jpg',
          audioSrc: 'audio/pants.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'blouse',
          translation: 'блузка',
          image: 'images/blouse.jpg',
          audioSrc: 'audio/blouse.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'dress',
          translation: 'платье',
          image: 'images/dress.jpg',
          audioSrc: 'audio/dress.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'boot',
          translation: 'ботинок',
          image: 'images/boot.jpg',
          audioSrc: 'audio/boot.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'shirt',
          translation: 'рубашка',
          image: 'images/shirt.jpg',
          audioSrc: 'audio/shirt.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'coat',
          translation: 'пальто',
          image: 'images/coat.jpg',
          audioSrc: 'audio/coat.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'shoe',
          translation: 'туфли',
          image: 'images/shoe.jpg',
          audioSrc: 'audio/shoe.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]
    },
    {
      id: 'emotions',
      category: 'Emotions',
      pictureSrc: 'images/laugh.jpg',
      iconSrc: 'assets/svg/baby-boy.svg',
      cards: [
        {
          word: 'sad',
          translation: 'грустный',
          image: 'images/sad.jpg',
          audioSrc: 'audio/sad.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'angry',
          translation: 'сердитый',
          image: 'images/angry.jpg',
          audioSrc: 'audio/angry.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'happy',
          translation: 'счастливый',
          image: 'images/happy.jpg',
          audioSrc: 'audio/happy.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'tired',
          translation: 'уставший',
          image: 'images/tired.jpg',
          audioSrc: 'audio/tired.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'surprised',
          translation: 'удивлённый',
          image: 'images/surprised.jpg',
          audioSrc: 'audio/surprised.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'scared',
          translation: 'испуганный',
          image: 'images/scared.jpg',
          audioSrc: 'audio/scared.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'smile',
          translation: 'улыбка',
          image: 'images/smile.jpg',
          audioSrc: 'audio/smile.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'laugh',
          translation: 'смех',
          image: 'images/laugh.jpg',
          audioSrc: 'audio/laugh.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]

    },
    {
      id: 'home',
      category: 'Home',
      pictureSrc: 'images/door.jpg',
      iconSrc: 'assets/svg/house.svg',
      cards: [
        {
          word: 'bed',
          translation: 'кровать',
          image: 'images/bed.jpg',
          audioSrc: 'audio/bed-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'door',
          translation: 'дверь',
          image: 'images/door.jpg',
          audioSrc: 'audio/door-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'mirror',
          translation: 'зеркало',
          image: 'images/mirror.jpg',
          audioSrc: 'audio/mirror-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'window',
          translation: 'окно',
          image: 'images/window.jpg',
          audioSrc: 'audio/window-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'armchair',
          translation: 'кресло',
          image: 'images/armchair.jpg',
          audioSrc: 'audio/armchair-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'table',
          translation: 'стол',
          image: 'images/table.jpg',
          audioSrc: 'audio/table-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'wardrobe',
          translation: 'шкаф',
          image: 'images/wardrobe.jpg',
          audioSrc: 'audio/wardrobe-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'notebook',
          translation: 'ноутбук',
          image: 'images/notebook.jpg',
          audioSrc: 'audio/notebook-us.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        }
      ]

    },
    {
      id: 'toys',
      category: 'Toys',
      pictureSrc: 'images/bear.jpg',
      iconSrc: 'assets/svg/horse.svg',
      cards: [
        {
          word: 'ball',
          translation: 'мяч',
          image: 'images/ball.jpg',
          audioSrc: 'audio/ball.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'bear',
          translation: 'медведь',
          image: 'images/bear.jpg',
          audioSrc: 'audio/bear.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'car',
          translation: 'машина',
          image: 'images/car1.jpg',
          audioSrc: 'audio/car.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'unicorn',
          translation: 'единорог',
          image: 'images/unicorn.jpg',
          audioSrc: 'audio/unicorn.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'constructor',
          translation: 'конструктор',
          image: 'images/constructor.jpg',
          audioSrc: 'audio/constructor.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'doll',
          translation: 'кукла',
          image: 'images/doll3.jpg',
          audioSrc: 'audio/doll.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'train',
          translation: 'стол',
          image: 'images/train.jpg',
          audioSrc: 'audio/train.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
        {
          word: 'robot',
          translation: 'робот',
          image: 'images/robot.jpg',
          audioSrc: 'audio/robot.mp3',
          clicks: 0,
          correct: 0,
          wrong: 0,
          errors: 0,
        },
      ]

    },
  ];*/

}