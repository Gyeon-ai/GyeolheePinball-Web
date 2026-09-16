import type { ColorTheme } from '../types/ColorTheme';

export const initialZoom = 30;
export const canvasWidth = 1600;
export const canvasHeight = 900;
export const zoomThreshold = 5;
export const STUCK_DELAY = 5000;
export const winnerAreaHeight = 168;
export const HAIR_BORDER = '#b79cf2';
export const HAIR_NEON_SKY = '#78c8ff';
export const HAIR_NEON_SKY_FILL = '#bfdfff';
export const HAIR_NEON_SKY_HIGHLIGHT = '#eaf7ff';
export const HAIR_NEON_PURPLE = '#cfb9ff';
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
  box: HAIR_NEON_SKY_FILL,
  circle: 'yellow',
  polyline: 'white',
} as const;

export const DefaultBloomColor = {
  box: HAIR_NEON_SKY,
  circle: 'yellow',
  polyline: HAIR_NEON_SKY,
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
        bloom: HAIR_NEON_SKY,
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
        bloom: HAIR_NEON_SKY,
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
    background: '#000000',
    marbleLightness: 75,
    marbleWinningBorder: 'white',
    skillColor: 'white',
    coolTimeIndicator: 'red',
    entity: {
      box: {
        fill: HAIR_NEON_SKY_FILL,
        outline: HAIR_NEON_SKY_HIGHLIGHT,
        bloom: HAIR_NEON_SKY,
        bloomRadius: 12,
      },
      circle: {
        fill: 'yellow',
        outline: 'yellow',
        bloom: 'yellow',
        bloomRadius: 15,
      },
      polyline: {
        fill: HAIR_NEON_SKY_HIGHLIGHT,
        outline: HAIR_NEON_SKY_HIGHLIGHT,
        bloom: HAIR_NEON_SKY,
        bloomRadius: 12,
      },
    },
    rankStroke: '',
    minimapBackground: '#000000',
    minimapViewport: HAIR_BORDER,
    winnerBackground: 'rgba(0, 0, 0, 0.72)',
    winnerOutline: '',
    winnerText: 'white',
  },
};
