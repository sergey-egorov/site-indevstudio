export const model = {
  pages: {
    home: {
      software_development: {
        title: 'Software development',
        items: [
          {
            id: 'web',
            title: 'Web',
            note: 'Interactive web apps for all occasions',
            img: 'assets/img/dev-bg-2.png',
          },
          {
            id: 'mobile',
            title: 'Mobile',
            note: 'Mobile apps for work and entertainment',
            img: 'assets/img/mobile-services-1.png',
          },
          {
            id: 'complex',
            title: 'Complex',
            note: 'Complex distributed systems for business',
            img: 'assets/img/dev-bg-1.png',
          },
          {
            id: 'iot',
            title: 'IoT',
            note: 'Software for specialized devices',
            img: 'assets/img/iot-1.png',
          }
        ]
      },

      client_services: {
        title: 'Client services',
        items: [
          {
            id: 'ivr',
            title: 'Voice IVR',
            note: 'Voice interactive services based on speech recognition and synthesis',
            img: 'assets/img/ivr.svg',
          },
          {
            id: 'chatbot',
            title: 'Chatbot',
            note: 'Intelligent chatbot services with Artificial Intelligence',
            img: 'assets/img/chatbot.svg',
          }
        ]
      }

    },

    services: {
      software_development: {
        title: 'Software development',
        items: [
          {
            id: 'web',
            title: 'Web',
            titleExt: 'Web development',
            contentFile: { en: 'assets/services/web-en.html', ru: 'assets/services/web-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'Digital Commerce',
              'Enterprise Web Solutions',
              'Web Back Ends',
              'Web Applications'
            ],
          },
          {
            id: 'mobile',
            title: 'Mobile',
            titleExt: 'Mobile development',
            contentFile: { en: 'assets/services/mobile-en.html', ru: 'assets/services/mobile-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'Enterprise Mobile Apps',
              'iPhone/iPad Solutions',
              'Android Applications',
              'Social Networking Apps',
              'Cross-Platform Solutions'
            ],
          },
          {
            id: 'complex',
            title: 'Complex',
            titleExt: 'Complex development',
            contentFile: { en: 'assets/services/complex-en.html', ru: 'assets/services/complex-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'System analysis',
              'Design & UI',
              'Development',
              'QA & Testing',
              'Staff Augmentation',
              'Deployment',
              'Integration'
            ],
          },
          {
            id: 'iot',
            title: 'IoT',
            titleExt: 'Embedded software',
            contentFile: { en: 'assets/services/iot-en.html', ru: 'assets/services/iot-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'Raspberry Pi Apps',
              'On-board system Apps'
            ],
          }
        ]
      },

      client_services: {
        title: 'Client services',
        items: [
          {
            id: 'ivr',
            title: 'Voice IVR',
            titleExt: 'Voice IVR development',
            contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'Speech recognition',
              'Speech syntesis',
              'VoIP',
              'Natural language processing'
            ],
          },
          {
            id: 'chatbot',
            title: 'Chatbot',
            titleExt: 'Chatbot development',
            contentFile: { en: 'assets/services/chatbot-en.html', ru: 'assets/services/chatbot-ru.html' },
            content: { en: '', ru: '' },
            competencies: [
              'Natural language processing',
              'Artificial intelligence'
            ],
          }
        ]
      }
    },

    portfolio: {
      solutions: [
        {
          title: 'GUI tool for editing, testing and simulating Colored Petri Nets',
          technologies: ['Javascript', 'Angular', 'Electron', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/cpn-ide/index-en.html', ru: 'assets/portfolio/cpn-ide/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/cpn-ide/screen-1.png'
        },
        {
          title: 'Smartphone diagnostic applications and automated trade-in service',
          technologies: ['iOS', 'Android', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/tradein/index-en.html', ru: 'assets/portfolio/tradein/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/tradein/screen-1.png'
        },
        {
          title: 'Automatic subtitle generator',
          technologies: ['Speech recognition', 'Media stream processing', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/subtitle/index-en.html', ru: 'assets/portfolio/subtitle/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/subtitle/screen-1.png'
        },
        {
          title: 'Voice IVR for water delivery company',
          technologies: ['Java', 'Springboot', 'Asterisk', 'C++'],
          contentFile: { en: 'assets/portfolio/ivr-water/index-en.html', ru: 'assets/portfolio/ivr-water/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/ivr-water/screen-1.png'
        },
        {
          title: 'Speech processing cloud service frontend',
          technologies: ['Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/stc-cloud/index-en.html', ru: 'assets/portfolio/stc-cloud/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/stc-cloud/screen-1.png'
        },
      ]

    }
  },

  // 'Digital Commerce',
  // 'Enterprise Web Solutions',
  // 'Web Back Ends',
  // 'Web Applications'
  // 'Enterprise Mobile Apps',
  // 'iPhone/iPad Solutions',
  // 'Android Applications',
  // 'Social Networking Apps',
  // 'Cross-Platform Solutions'
  // 'System analysis',
  // 'Design & UI',
  // 'Development',
  // 'QA & Testing',
  // 'Staff Augmentation',
  // 'Deployment',
  // 'Integration'

  competencies: [
    {
      id: 'Digital Commerce',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'Enterprise Web Solutions',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Web Back Ends',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Web Applications',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-apps.png'
    },

    {
      id: 'Speech recognition',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'Speech syntesis',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'VoIP',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'Natural language processing',
      contentFile: { en: 'assets/services/ivr-en.html', ru: 'assets/services/ivr-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
  ],

};
