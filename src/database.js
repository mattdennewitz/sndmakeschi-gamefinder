export default {
  games: [
    {
      name: 'Rise of the Tomb Raider',
      description: `Featuring epic, high-octane action moments set in the most beautiful hostile environments on earth, Rise of the Tomb Raider delivers a cinematic survival action adventure where you will join Lara Croft on her first tomb raiding expedition as she seeks to discover the secret of immortality.`,
      youtubeId: 'qiYiddjc6cU',
      tags: [
        'price:$$$',
        'fps',
        'adventure',
        'action',
        'single-player',
        'exploration'
      ]
    },
    {
      name: 'Crashlands',
      description: `Crashlands is a story-driven crafting ARPG set in an outlandish world of hidden magic and high technology. Fight and tame alien beasts, craft resources into menacing weaponry, befriend the locals, and go toe-to-chin with a world-domineering maniac.`,
      youtubeId: 'q5M6qTEtsSQ',
      tags: [
        'action', 'adventure', 'rpg', 'single-player', 'pricing:$$',
      ]
    },
    {
      name: 'Cobalt',
      description: `Forget everything you've learned about combat. Cobalt's slo-mo mechanic lets you perform moves that other games can't comprehend. Discover the secrets of a distant colony in a cosmic campaign, take on challenges and rule the leaderboards, or face off against others in local and online multiplayer.`,
      youtubeId: 'pK_VCmJlscY',
      tags: [
        'multi-player',
        'single-player',
        'adventure',
        'action',
        'pricing:$$',
      ]
    }
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
          text: 'Solve a puzzle',
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
          text: '$25 or more',
          fragment: 'for $25 or more',
          tags: ['price:$$$']
        },
        {
          text: 'Up to $25',
          fragment: 'up to $25',
          tags: ['pricing:$', 'pricing:$$']
        },
        {
          text: 'Keep it under $20',
          fragment: 'while keeping it under $20',
          tags: ['pricing:$']
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
          tags: ['difficulty:easy']
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
          tags: ['content:clean']
        },
        {
          text: 'Pretty time, like a PG-13 movie',
          fragment: 'tame',
          tags: ['content:clean', 'content:tame']
        },
        {
          text: 'Contains sex, violence, and even some rock and roll',
          fragment: 'risque',
          tags: ['content:tame', 'content:risque']
        },
        {
          text: 'I am a hedonist and want it all',
          fragment: 'everything',
          tags: ['content:risque', 'content:hedonist']
        }
      ]
    }
  ]
}
