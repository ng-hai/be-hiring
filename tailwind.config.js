const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      yellow: '#FFBB00',
      'light-yellow': '#FFF6C8',
      'dark-blue': '#00003B',
      'dark-grey': '#909AAA',
      white: '#FFFFFF',
      'grey-1': '#F2F2F2',
      'grey-2': '#E0E0E0',
      'grey-3': '#B6B6B6',
      'grey-4': '#E1E3E8',
      'grey-5': '#F2F5F7',
      'grey-6': '#2D415E',
      red: '#FF3A44',
      blue: '#007AFF',
    },
    boxShadow: {
      none: 'none',
      low: '0px 1px 4px rgba(0, 0, 29, 0.06), 0px 1px 4px rgba(0, 0, 29, 0.04)',
      middle:
        '0px 2px 12px rgba(0, 0, 29, 0.04), 0px 4px 16px rgba(0, 0, 29, 0.07), 0px 0px 2px rgba(0, 0, 29, 0.04)',
    },
    fontFamily: {
      sans: ['beVietnam', ...defaultTheme.fontFamily.sans],
      display: ['beVietnam Display', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        10: '10px',
        12: '12px',
        18: '18px',
        24: '24px',
      },
      borderRadius: {
        2: '2px',
        6: '6px',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
    boxShadow: ['responsive', 'hover'],
  },
  plugins: [],
}
