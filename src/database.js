export default {
  games: [
    {
      name: 'Rise of the Tomb Raider',
      description: `Featuring epic, high-octane action moments set in the most beautiful hostile environments on earth, Rise of the Tomb Raider delivers a cinematic survival action adventure where you will join Lara Croft on her first tomb raiding expedition as she seeks to discover the secret of immortality.`,
      youtubeId: 'qiYiddjc6cU',
      tags: [
        'price:expensive',
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
        'action', 'adventure', 'rpg', 'single-player', 'pricing:moderate',
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
        'pricing:moderate',
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
      prompt: 'Do you want to play this with other people?',
      answers: [
        {
          text: 'Yes',
          fragment: 'with other people',
          tags: ['multi-player', 'cooperative']
        },
        {
          text: 'No',
          fragment: 'by myself',
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
      prompt: 'Do you want to ball out on this game or keep it cheap?',
      answers: [
        {
          text: 'Yeah, who cares! Money is cheap.',
          fragment: null,
          tags: []
        },
        {
          text: 'Eh, not really',
          fragment: null,
          tags: ['pricing:moderate', 'pricing:cheap', 'pricing:free']
        },
        {
          text: 'What? No. No.',
          fragment: 'on the cheap',
          tags: ['pricing:cheap', 'pricing:free']
        }
      ]
    }
  ]
}
