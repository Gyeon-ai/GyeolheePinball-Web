import type { ColorTheme } from '../types/ColorTheme';

export const initialZoom = 30;
export const canvasWidth = 1600;
export const canvasHeight = 900;
export const zoomThreshold = 5;
export const STUCK_DELAY = 5000;
export const winnerAreaHeight = 168;
export const HAIR_BORDER = '#b79cf2';
export const HAIR_NEON_GOLD = '#71c6f3';
export const HAIR_BORDER_COLORS = [
  'rgba(181, 150, 242, .96)',
  'rgba(126, 103, 224, .92)',
  'rgba(111, 185, 239, .92)',
  'rgba(174, 227, 255, .94)',
] as const;
export const UI_FONT_FAMILY = `'Pretendard Variable', Pretendard, 'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', system-ui, sans-serif`;

export enum Skills {
  None,
  Impact,
}

export const DefaultEntityColor = {
  box: HAIR_NEON_GOLD,
  circle: 'yellow',
  polyline: 'white',
} as const;

export const DefaultBloomColor = {
  box: HAIR_NEON_GOLD,
  circle: 'yellow',
  polyline: HAIR_NEON_GOLD,
};

export const Themes: Record<string, ColorTheme> = {
  light: {
    background: '#eee',
    marbleLightness: 50,
    marbleWinningBorder: 'black',
    skillColor: '#69c',
    coolTimeIndicator: '#999',
    entity: {
      box: {
        fill: '#226f92',
        outline: 'black',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 0,
      },
      circle: {
        fill: 'yellow',
        outline: '#ed7e11',
        bloom: 'yellow',
        bloomRadius: 0,
      },
      polyline: {
        fill: 'white',
        outline: 'black',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 0,
      },
    },
    rankStroke: 'black',
    minimapBackground: '#fefefe',
    minimapViewport: '#6699cc',

    winnerBackground: 'rgba(255, 255, 255, 0.5)',
    winnerOutline: 'black',
    winnerText: '#cccccc',
  },
  dark: {
    background: '#241942',
    marbleLightness: 75,
    marbleWinningBorder: 'white',
    skillColor: 'white',
    coolTimeIndicator: 'red',
    entity: {
      box: {
        fill: '#9d69df',
        outline: '#c9b6ff',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 15,
      },
      circle: {
        fill: 'yellow',
        outline: 'yellow',
        bloom: 'yellow',
        bloomRadius: 15,
      },
      polyline: {
        fill: '#f6f2ff',
        outline: '#e6dcff',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 15,
      },
    },
    rankStroke: '',
    minimapBackground: '#2f2451',
    minimapViewport: HAIR_BORDER,
    winnerBackground: 'rgba(31, 22, 60, 0.78)',
    winnerOutline: '#9d69df',
    winnerText: 'white',
  },
};
