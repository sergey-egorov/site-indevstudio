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
            title: 'Web development',
            contentFile: 'assets/services/web-en.html',
            content: '',
            competencies: [
              'Digital Commerce',
              'Enterprise Web Solutions',
              'Web Back Ends',
              'Web Applications'
            ],
          },
          {
            title: 'Mobile development',
            contentFile: 'assets/services/mobile-en.html',
            content: '',
            competencies: [
              'Enterprise Mobile Apps',
              'iPhone/iPad Solutions',
              'Android Applications',
              'Social Networking Apps',
              'Cross-Platform Solutions'
            ],
          },
          {
            title: 'Complex',
            contentFile: 'assets/services/complex-en.html',
            content: '',
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
            title: 'IoT',
            contentFile: 'assets/services/iot-en.html',
            content: '',
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
            title: 'Voice IVR',
            contentFile: 'assets/services/ivr-en.html',
            content: '',
            competencies: [
              'Speech recognition',
              'Speech syntesis',
              'VoIP',
              'Natural language processing'
            ],
          },
          {
            title: 'Chatbot',
            contentFile: 'assets/services/chatbot-en.html',
            content: '',
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
          contentFile: 'assets/portfolio/cpn-ide/index-en.html',
          content: '',
          img: 'assets/portfolio/cpn-ide/screen-1.png'
        },
        {
          title: 'Smartphone diagnostic applications and automated trade-in service',
          technologies: ['iOS', 'Android', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: 'assets/portfolio/tradein/index-en.html',
          content: '',
          img: 'assets/portfolio/tradein/screen-1.png'
        },
        {
          title: 'Automatic subtitle generator',
          technologies: ['Speech recognition', 'Media stream processing', 'Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: 'assets/portfolio/subtitle/index-en.html',
          content: '',
          img: 'assets/portfolio/subtitle/screen-1.png'
        },
        {
          title: 'Voice IVR for water delivery company',
          technologies: ['Java', 'Springboot', 'Asterisk', 'C++'],
          contentFile: 'assets/portfolio/ivr-water/index-en.html',
          content: '',
          img: 'assets/portfolio/ivr-water/screen-1.png'
        },
        {
          title: 'Speech processing cloud service frontend',
          technologies: ['Javascript', 'Angular', 'Java', 'Springboot'],
          contentFile: 'assets/portfolio/stc-cloud/index-en.html',
          content: '',
          img: 'assets/portfolio/stc-cloud/screen-1.png'
        },
      ]

    }
  }

};
