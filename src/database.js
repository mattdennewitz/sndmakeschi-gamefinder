export default {
  games: [
    {
      name: 'Trine: 2 Complete Story',
      description: `Three Heroes make their way through dangers untold in a fairytale world, featuring physics-based puzzles, beautiful sights and online co-op.`,
      youtubeId: 'SkyR2lXBrqU',
      score: 5,
      'curator': {
        name: 'Vin Scully',
        playlist: 'Vin Scully\'s Fairytale Theater'
      },
      tags: [
        'pricing:<$5',
        'pricing:<$20',
        'p:single-player', 'content:e', 'difficulty:casual', 'g:action', 'g:character'
      ]
    },
    {
      name: 'Portal',
      description: `Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.`,
      youtubeId: 'cO_DIVuSyQ',
      score: 5,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:t', 'difficulty:casual', 'g:puzzles', 'g:action', 'g:character'
      ]
    },
    {
      name: 'The Sims 3',
      description: `Play with Life. Create the lives you've always wanted!`,
      youtubeId: 'p7BAUNzJvts',
      score: 4,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$20', 'p:single-player', 'content:t', 'difficulty:casual', 'g:character'
      ]
    },
    {
      name: 'Star Wars: Starfighter',
      description: `Star Wars flyng simulator around the events of Star Wars: The Phantom Menace`,
      youtubeId: 't_MHrBuT1QE',
      score: 1,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:t', 'g:action'
      ]
    },
    {
      name: 'Ticket to Ride',
      description: `The official adaptation of Days of Wonder's best-selling train board game, Ticket to Ride takes less than one minute to learn but a lifetime to master.`,
      youtubeId: 'KHaHRlGWgFM',
      score: 4,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:e', 'difficulty:casual', 'g:puzzles', 'g:character'
      ]
    },
    {
      name: 'Plants vs. Zombies GOTY Edition',
      description: `Zombies are invading your home, and the only defense is your arsenal of plants! Armed with an alien nursery-worth of zombie-zapping plants like peashooters and cherry bombs, you'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks.`,
      youtubeId: 'UzujEiKgnjI',
      score: 5,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:e', 'difficulty:casual', 'g:character'
      ]
    },
    {
      name: 'Never Alone (Kisima Ingitchuna)',
      description: `Experience the epic journey of Nuna and Fox as they search for the source of an eternal blizzard that threatens the survival of everything they have ever known.`,
      youtubeId: 'VnY21Fg5G1Y',
      score: 4,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:t', 'difficulty:casual', 'g:action', 'g:puzzles', 'g:character'
      ]
    },
    {
      name: 'Papo & Yo',
      description: `Quico's best friend, Monster, is a huge beast with razor-sharp teeth, but that doesn’t scare Quico away from playing with him. That said, Monster does have a very dangerous problem: an addiction to poisonous frogs.`,
      youtubeId: 'qkrjby0lKRE',
      score: 4,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:t', 'difficulty:casual', 'g:puzzles', 'g:character'

      ]
    },
    {
      name: 'Sunset',
      description: `It's 1972 and a military coup has rocked Anchuria. You, Angela Burnes, are trapped in the metropolitan capital of San Bavón. Your paradise has turned into a warzone. You take up a job as a housekeeper. Every week, an hour before sunset, you clean the swanky bachelor pad of the wealthy Gabriel Ortega.`,
      youtubeId: 'xXxV-lhexic',
      score: 2,
      curator: null,
      tags: [
        'pricing:<$20',
        'pricing:<$5',
        'p:single-player', 'content:t', 'difficulty:casual', 'g:character', 'g:action'
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
          tags: ['g:action']
        },
        {
          text: 'Work on a puzzle',
          fragment: 'solve a puzzle',
          tags: ['g:puzzles']
        },
        {
          text: 'Be someone new',
          fragment: 'be someone else for a while',
          tags: ['g:character']
        },
        {
          text: 'Set the world on fire',
          fragment: 'set the world on fire',
          tags: ['g:fire']
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
          tags: ['p:multi-player', 'p:cooperative']
        },
        {
          text: 'Against other people?',
          fragment: 'by myself',
          tags: ['p:multi-player']
        },
        {
          text: 'On your own?',
          fragment: 'by my lonesome',
          tags: ['p:single-player']
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
          fragment: 'playing something easy',
          tags: ['difficulty:casual']
        },
        {
          text: 'Medium',
          fragment: 'kind of being challenging',
          tags: ['difficulty:medium']
        },
        {
          text: 'Hard',
          fragment: 'being very challenged',
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
          fragment: 'let\'s keep it clean',
          tags: ['content:e']
        },
        {
          text: 'Pretty tame, like a PG-13 movie',
          fragment: 'kinda tame',
          tags: ['content:e', 'content:t']
        },
        {
          text: 'Contains sex, violence, and even some rock and roll',
          fragment: 'I want to get risque',
          tags: ['content:t', 'content:m']
        },
        {
          text: 'I am a hedonist and want it all',
          fragment: 'let\'s make it strange',
          tags: ['content:m', 'content:ao']
        }
      ]
    }
  ]
}
