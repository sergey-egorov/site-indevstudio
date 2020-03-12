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

            technologies: [
              'angular',
              'bootstrap',
              'electron',
              'html5',
              'java',
              'javascript',
              'matdesign',
              'postgres',
              'spring',
            ],

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

            technologies: [
              'angular',
              'electron',
              'html5',
              'javascript',
              'matdesign',
            ],

            competencies: [
              'Enterprise Mobile Apps',
              'Android Applications', 
              'iPhone/iPad Solutions',
              'Cross-Platform Solutions',
              'Social Networking Apps',
              'Apps/Library porting'
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
              'Speech synthesis',
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
          id: 'cpn-ide',
          title: 'GUI tool for editing, testing and simulating Colored Petri Nets',
          technologies: ['Javascript', 'Angular', 'Electron', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/cpn-ide/index-en.html', ru: 'assets/portfolio/cpn-ide/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/cpn-ide/screen-1.png'
        },
        {
          id: 'super-trade-in',
          title: 'Smartphone diagnostic applications and automated trade-in service',
          technologies: ['iOS', 'Android', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/tradein/index-en.html', ru: 'assets/portfolio/tradein/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/tradein/screen-1.png'
        },
        {
          id: 'subtitles',
          title: 'Automatic subtitle generator',
          technologies: ['Speech recognition', 'Media stream processing', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: { en: 'assets/portfolio/subtitle/index-en.html', ru: 'assets/portfolio/subtitle/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/subtitle/screen-1.png'
        },
        {
          id: 'voice-ivr',
          title: 'Voice IVR for water delivery company',
          technologies: ['Java', 'Springboot', 'Asterisk', 'C++'],
          contentFile: { en: 'assets/portfolio/ivr-water/index-en.html', ru: 'assets/portfolio/ivr-water/index-ru.html' },
          content: { en: '', ru: '' },
          img: 'assets/portfolio/ivr-water/screen-1.png'
        },
        {
          id: 'stc-cloud',
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
      contentFile: { en: 'assets/services/digit-com-en.html', ru: 'assets/services/digit-com-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'Enterprise Web Solutions',
      contentFile: { en: 'assets/services/enterprise-en.html', ru: 'assets/services/enterprise-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Web Back Ends',
      contentFile: { en: 'assets/services/back-en.html', ru: 'assets/services/back-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Web Applications',
      contentFile: { en: 'assets/services/webapp-en.html', ru: 'assets/services/webapp-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-apps.png'
    },
    {
      id: 'Speech recognition',
      contentFile: { en: 'assets/services/speech-recog-en.html', ru: 'assets/services/speech-recog-en.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Speech synthesis',
      contentFile: { en: 'assets/services/speech-synth-en.html', ru: 'assets/services/speech-synth-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'VoIP',
      contentFile: { en: 'assets/services/voip-en.html', ru: 'assets/services/voip-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Natural language processing',
      contentFile: { en: 'assets/services/nlp-en.html', ru: 'assets/services/nlp-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Enterprise Mobile Apps',
      contentFile: { en: 'assets/services/enterprise-mob-en.html', ru: 'assets/services/enterprise-mob-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Android Applications',
      contentFile: { en: 'assets/services/android-en.html', ru: 'assets/services/android-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-apps.png'
    },
    {
      id: 'iPhone/iPad Solutions',
      contentFile: { en: 'assets/services/ios-en.html', ru: 'assets/services/ios-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/dig-commerce.png'
    },
    {
      id: 'Cross-Platform Solutions',
      contentFile: { en: 'assets/services/cross-plat-en.html', ru: 'assets/services/cross-plat-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Social Networking Apps',
      contentFile: { en: 'assets/services/social-net-en.html', ru: 'assets/services/social-net-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Apps/Library porting',
      contentFile: { en: 'assets/services/porting-en.html', ru: 'assets/services/porting-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'Raspberry Pi Apps',
      contentFile: { en: 'assets/services/rasp-pi-en.html', ru: 'assets/services/rasp-pi-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    },
    {
      id: 'On-board system Apps',
      contentFile: { en: 'assets/services/board-sys-en.html', ru: 'assets/services/board-sys-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/enterprise.png'
    },
    {
      id: 'Artificial intelligence',
      contentFile: { en: 'assets/services/ai-en.html', ru: 'assets/services/ai-ru.html' },
      content: { en: '', ru: '' },
      img: 'assets/img/web-backs.png'
    }

  ],


  technologies: [
    {
      id: 'angular',
      img: 'assets/img/tech/angular.png',
      href: 'https://angular.io/'
    },
    {
      id: 'bootstrap',
      img: 'assets/img/tech/bootstrap.png',
      href: 'https://getbootstrap.com/'
    },
    {
      id: 'matdesign',
      img: 'assets/img/tech/matdesign.png',
      href: 'https://material.io/'
    },
    {
      id: 'html5',
      img: 'assets/img/tech/html5.png',
      href: 'https://www.w3.org/'
    },
    {
      id: 'javascript',
      img: 'assets/img/tech/javascript.png',
      href: 'https://www.javascript.com/'
    },
    {
      id: 'electron',
      img: 'assets/img/tech/electron.png',
      href: 'https://www.electronjs.org/'
    },
    {
      id: 'spring',
      img: 'assets/img/tech/spring.png',
      href: 'https://spring.io/'
    },
    {
      id: 'postgres',
      img: 'assets/img/tech/postgres.png',
      href: 'https://www.postgresql.org/'
    },
    {
      id: 'java',
      img: 'assets/img/tech/java.png',
      href: 'https://www.java.com/'
    },
  ]

};
