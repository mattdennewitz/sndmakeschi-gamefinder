export default {
  games: [
    {
      name: 'Trine: 2 Complete Story',
      description: `Three Heroes make their way through dangers untold in a fairytale world, featuring physics-based puzzles, beautiful sights and online co-op.`,
      youtubeId: 'SkyR2lXBrqU',
      'curator': {
        name: 'Vin Scully',
        playlist: 'Vin Scully\'s Fairytale Theater'
      },
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Portal',
      description: `Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.`,
      youtubeId: 'cO_DIVuSyQ',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'The Sims 3',
      description: `Play with Life. Create the lives you've always wanted!`,
      youtubeId: 'p7BAUNzJvts',
      curator: null,
      tags: [
        'pricing:<$20',
      ]
    },
    {
      name: 'Star Wars: Starfighter',
      description: `Star Wars flyng simulator around the events of Star Wars: The Phantom Menace`,
      youtubeId: 't_MHrBuT1QE',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Ticket to Ride',
      description: `The official adaptation of Days of Wonder's best-selling train board game, Ticket to Ride takes less than one minute to learn but a lifetime to master.`,
      youtubeId: 'KHaHRlGWgFM',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Plants vs. Zombies GOTY Edition',
      description: `Zombies are invading your home, and the only defense is your arsenal of plants! Armed with an alien nursery-worth of zombie-zapping plants like peashooters and cherry bombs, you'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks.`,
      youtubeId: 'UzujEiKgnjI',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Never Alone (Kisima Ingitchuna)',
      description: `Experience the epic journey of Nuna and Fox as they search for the source of an eternal blizzard that threatens the survival of everything they have ever known.`,
      youtubeId: 'VnY21Fg5G1Y',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Papo & Yo',
      description: `Quico's best friend, Monster, is a huge beast with razor-sharp teeth, but that doesn’t scare Quico away from playing with him. That said, Monster does have a very dangerous problem: an addiction to poisonous frogs.`,
      youtubeId: 'qkrjby0lKRE',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
    {
      name: 'Sunset',
      description: `It's 1972 and a military coup has rocked Anchuria. You, Angela Burnes, are trapped in the metropolitan capital of San Bavón. Your paradise has turned into a warzone. You take up a job as a housekeeper. Every week, an hour before sunset, you clean the swanky bachelor pad of the wealthy Gabriel Ortega.`,
      youtubeId: 'xXxV-lhexic',
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
      ]
    },
  ],

  questions: [
    // question: what would you like to play?
    {
      prompt: 'What would you like to do today?',
      answers: [
        {
          text: 'Save the planet',
          fragment: 'save the planet',
          tags: ['aliens', 'adventure', 'space', 'fps', 'simulation',
                 'heroic', 'sci-fi', 'action', 'exploration']
        },
        {
          text: 'Work on a puzzle',
          fragment: 'solve a puzzle',
          tags: ['puzzles', 'relax', 'simulation']
        },
        {
          text: 'Be someone new',
          fragment: 'be someone else for a while',
          tags: ['fps', 'adventure', 'dating-sim', 'job-oriented', 'heroic',
                 'sci-fi', 'action', 'exploration']
        },
        {
          text: 'Set the world on fire',
          fragment: 'set the world on fire',
          tags: ['fps', 'adventure', 'relax', 'sci-fi', 'action']
        }
      ]
    },

    // question: multi-player or not?
    {
      prompt: 'Do you want to play...',
      answers: [
        {
          text: 'With other people?',
          fragment: 'with other people',
          tags: ['multi-player', 'cooperative']
        },
        {
          text: 'Against other people?',
          fragment: 'by myself',
          tags: ['multi-player']
        },
        {
          text: 'On your own?',
          fragment: 'by my lonesome',
          tags: ['single-player']
        },
        {
          text: 'Don\'t Care',
          fragment: null,
          tags: []
        }
      ]
    },

    // question: pricing?
    {
      prompt: 'How much are you willing to spend on this game?',
      answers: [
        {
          text: 'More than $20',
          fragment: 'for $20 or more',
          tags: ['price:>$20']
        },
        {
          text: 'Keep it under $20',
          fragment: 'for up to $20',
          tags: ['pricing:<$20']
        },
        {
          text: '$5 or less',
          fragment: 'for $5 or less',
          tags: ['pricing:<$5']
        },
        {
          text: 'Game free or die',
          fragment: 'for free',
          tags: ['pricing:free']
        }
      ]
    },

    // question: difficulty
    {
      prompt: 'What level of difficulty are you looking for?',
      answers: [
        {
          text: 'Easy',
          fragment: 'something easy',
          tags: ['difficulty:casual']
        },
        {
          text: 'Medium',
          fragment: 'something moderately challenging',
          tags: ['difficulty:medium']
        },
        {
          text: 'Hard',
          fragment: 'something very challenging',
          tags: ['difficulty:hard']
        },
        {
          text: 'Whatever',
          fragment: null,
          tags: []
        }
      ]
    },

    // question: content
    {
      prompt: 'What kind of content are you comfortable with?',
      answers: [
        {
          text: 'No violence, drug use, or bad language, please',
          fragment: 'keep it clean',
          tags: ['content:e']
        },
        {
          text: 'Pretty time, like a PG-13 movie',
          fragment: 'tame',
          tags: ['content:e', 'content:e']
        },
        {
          text: 'Contains sex, violence, and even some rock and roll',
          fragment: 'risque',
          tags: ['content:t', 'content:m']
        },
        {
          text: 'I am a hedonist and want it all',
          fragment: 'everything',
          tags: ['content:m', 'content:ao']
        }
      ]
    }
  ]
}
