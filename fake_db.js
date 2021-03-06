// json-server fake_db.js
module.exports = function () {
  let faker = require('faker')

  return {
    users: [...Array(15)].map((el, index) => {
      return {
        id: index,
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: '123123',
      }
    }),
    tokens: {
      access_token: 'access_token_123',
      auto_token: 'token_d@d.com',
    },
    cms: {
      APPLIANCE__ACCORDION__TITLE_1: 'Cost:',
      APPLIANCE__ACCORDION__TITLE_2: 'Rebates:',
      APPLIANCE__ACCORDION__TITLE_3: 'Investment <br/> Recovery:',
      FEEDBACK_MODAL_POSITIVE__TITLE: 'Great!',
      FEEDBACK_MODAL_POSITIVE__PARAGRAPH:
        '!As the next step, we can email you information about this package. Our email will include:',
      FEEDBACK_MODAL_POSITIVE__LIST: [
        'Resources to learn more.',
        '!Current rebates you can claim.',
        '!Link to our complementary service to find qualified contractors in your area.',
      ],
      FEEDBACK_MODAL_NEGATIVE__TITLE: '!Your feedback is valuable!',
      FEEDBACK_MODAL_NEGATIVE__PARAGRAPH:
        '!Our mission is to provide the best information to help you make the right decisions for your home. Tell us what you think is missing or ask us a question.',
      FEEDBACK_MODAL_QUESTION__TITLE: '!We are here to help!',
      FEEDBACK_MODAL_QUESTION__PARAGRAPH:
        '!Please type in your question below.',
      PAGE_SUCCESS__NOTIFICATION:
        "!We have saved your responses for ${ADDRESS}. You can access this home anytime under 'My Account' after logging in.",
      PAGE_SUCCESS__TITLE: '!Great News',
      PAGE_SUCCESS__TITLE_SECONDARY:
        '!We crunched the numbers using publicly available data for the entire community. Our analysis found cost effective options to reduce climate harming carbon emissions from existing single-family homes.',
      PAGE_SUCCESS__PARAGRAPH:
        '!The City of SLO has adopted policy to support home energy retrofits. This platform provides findings to help single-family home owners better understand their options.',
      HOME__HEADING: '!Welcome San Luis Obispo <br/> Residents!',
      HOME__HEADING_SECONDARY:
        'CMS- Ready to discover energy upgrades that will lower <br/> your home???s utility bills and carbon emission?',
      PKG_CUSTOM__TITLE: "Your Home's <br class='-my-1' />  CURRENT Estimated ",
      PKG_CUSTOM__SUB_TITLE: 'Carbon Emissions and Utility Bills ',
      PKG_CUSTOM__TITLE_2: 'Custom Upgrade Package',
      PKG_CUSTOM__SUB_TITLE_2:
        ' Click on the ${BTN_CHECK} or ${BTN_PLUS} buttons to customize ',
      PKG_CUSTOM__FEEDBACK_TITLE: 'PROVIDE FEEDBACK',
      PKG_CUSTOM__FOOTER_TITLE: 'LEARN MORE',
      PKG_CUSTOM__FOOTER_PARAGRAPH:
        'How this upgrade was evaluated for your home.',
      PKG_CUSTOM__FEEDBACK_PARAGRAPH:
        'Would you be interested in installing this package? ',
      PKG_SELECT__TITLE:
        "!Your Home's <br class='-my-1' />  CURRENT Estimated ",
      PKG_SELECT__SUB_TITLE: '!Carbon Emissions and Utility Bills ',
      PKG_SELECT__PARAGRAPH:
        "!Let's explore ways to reduce these carbon <br /> emissions and utility bills. ",
      PKG_SELECT__TITLE_OPTION: '!Energy Upgrades Packages',
      PKG_ONE__TITLE: "!Your Home's <br class='-my-1' />  CURRENT Estimated ",
      PKG_ONE__SUB_TITLE: '!Carbon Emissions and Utility Bills ',
      PKG_ONE__TITLE_2: 'Custom Upgrade Package',
      PKG_ONE__SUB_TITLE_2: 'Electric Heat Pump Water Heater + Solar',
      PAGE_SUCCESS__IMG_1: 'https://i.imgur.com/pxV2FUY.png',
      PAGE_SUCCESS__IMG_2: 'https://i.imgur.com/WEpgtLF.png',
      _: '_',
    },
    questions: [
      {
        id: 1,
        inputType: 'text',
        question: 'Please enter a home address:',
        ans: null,
        placeholder: 'Type in home address here',
      },
      {
        id: 2,
        inputType: 'select',
        question:
          'How is this home cooled? (Choose the main system, if more than one) ',
        ans: null,
        options: [
          {
            label: 'Central AC with vents',
            value: 'Central AC with vents',
          },
          {
            label: 'Room ACs',
            value: 'Room ACs',
          },
          {
            label: 'Heat Pump (Central or Mini Split)',
            value: 'Heat Pump (Central or Mini Split)',
          },
          {
            label: "Doesn't have AC",
            value: "Doesn't have AC",
          },
          {
            label: "Don't know / Unsure",
            value: "Don't know / Unsure",
          },
        ],
      },
      {
        id: 3,
        inputType: 'select',
        question:
          'How is this home heated?   (Choose the main system, if more than one)',
        ans: null,
        options: [
          {
            label: 'Natural Gas Furnace',
            value: 'Natural Gas Furnace',
          },
          {
            label: 'Boiler with Radiator',
            value: 'Boiler with Radiator',
          },
          {
            label: 'Heat Pump (Central or Mini Split)',
            value: 'Heat Pump (Central or Mini Split)',
          },
          {
            label: 'Electric Baseboard Heater',
            value: 'Electric Baseboard Heater',
          },
          {
            label: 'Propane Furnace',
            value: 'Propane Furnace',
          },
          {
            label: 'Oil Furnace',
            value: 'Oil Furnace',
          },
          {
            label: "Don't know / Unsure",
            value: "Don't know / Unsure",
          },
        ],
      },
      {
        id: 4,
        inputType: 'select',
        question: 'What type of water heater does this home have?',
        ans: null,
        options: [
          {
            label: 'Natural Gas w/ Storage Tank',
            value: 'Natural Gas w/ Storage Tank',
          },
          {
            label: 'Natural Gas Tankless',
            value: 'Natural Gas Tankless',
          },
          {
            label: 'Electric w/ Storage Tank',
            value: 'Electric w/ Storage Tank',
          },
          {
            label: 'Heat Pump Water Heater',
            value: 'Heat Pump Water Heater',
          },
          {
            label: "Don't know / Unsure",
            value: "Don't know / Unsure",
          },
        ],
      },
    ],
  }
}
