import type { Config } from 'tailwindcss'

const mainPalette = {
  accent: 'var(--accent)',
  lightAccent: 'var(--lightAccent)',
  lightDark: 'var(--lightDark)',
  cta: 'var(--cta)',
  primary: 'var(--primary)',
  lightPrimary: 'var(--lightPrimary)',
  borderAccent: 'var(--borderAccent)',
}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: mainPalette,
    },
    fontSize: {
      xs: [
        '14px',
        {
          lineHeight: '18px',
          fontWeight: '500',
        },
      ],
      sm: [
        '15px',
        {
          lineHeight: '27px',
          fontWeight: '500',
        },
      ],
      base: [
        '15px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      base1: [
        '16px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '23px',
          fontWeight: '700',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '22px',
          fontWeight: '300',
        },
      ],
      xxl: [
        '20px',
        {
          lineHeight: '25px',
          fontWeight: '700',
        },
      ],
      '2xl': [
        '20px',
        {
          lineHeight: '21px',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '20px',
        {
          lineHeight: '35px',
          fontWeight: '500',
        },
      ],
      '33xl': [
        '21px',
        {
          lineHeight: '26px',
          fontWeight: '500',
        },
      ],
      '4xl': [
        '24px',
        {
          lineHeight: '26px',
          fontWeight: '500',
        },
      ],
      '5xl': [
        '28px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      '6xl': [
        '34px',
        {
          lineHeight: '38px',
          fontWeight: '300',
        },
      ],
      '7xl': [
        '38px',
        {
          lineHeight: '41px',
          fontWeight: '500',
        },
      ],
      '8xl': [
        '53px',
        {
          lineHeight: '57px',
          fontWeight: '500',
        },
      ],
      big: [
        '83px',
        {
          lineHeight: '90px',
          fontWeight: '500',
        },
      ],
    },
    boxShadow: {
      'default-level1': '0 4px 8px var(--darkBlueUltraSoft)',
    },
    spacing: {
      0: '0px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3.5: '13px',
      4: '16px',
      5: '20px',
      6: '24px',
      6.5: '27px',
      7.5: '30px',
      8: '32px',
      8.5: '34px',
      10: '40px',
      10.5: '42px',
      11: '45px',
      12.5: '50px',
      13: '58px',
      16.5: '66px',
      17: '70px',
    },
    backgroundImage: {
      // base: "url('/assets/background.jpg')",
    },
    borderRadius: {
      default: '3px',
      base: '4px',
      lg: '10px',
      big: '20px',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
  },
  plugins: [],
} satisfies Config
