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
// 오락실 도트 테마의 캔버스용 색과 글꼴(패널 쪽 값은 assets/style.scss의 :root)
export const DOT_LINE = '#a09ce2';
export const DOT_INK = '#1b1838';
export const DOT_TEXT_SOFT = '#d3d0f8';
export const DOT_ACCENT = '#a9d8ff';
export const DOT_RED = '#c23a52';
export const NAME_FONT_FAMILY = `'Noto Sans KR', sans-serif`;
export const DOT_FONT_FAMILY = `'Galmuri11', 'Noto Sans KR', sans-serif`;
export const NUMBER_FONT_FAMILY = `'Press Start 2P', 'Galmuri11', monospace`;
export const WINNER_NAME_FONT_FAMILY = `'Do Hyeon', 'Noto Sans KR', sans-serif`;

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
    background: '#141127',
    marbleLightness: 75,
    marbleWinningBorder: 'white',
    skillColor: 'white',
    coolTimeIndicator: 'red',
    entity: {
      box: {
        fill: HAIR_NEON_SKY,
        outline: HAIR_NEON_SKY,
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
    minimapBackground: '#1b1838',
    minimapViewport: HAIR_BORDER,
    winnerBackground: 'rgba(27, 24, 56, 0.9)',
    winnerOutline: '',
    winnerText: 'white',
  },
};
