// ─────────────────────────────────────────────────────────────────────────────
// Chromium offline.js 원본 전체 상수
// source: https://source.chromium.org/chromium/chromium/src/+/main:components/neterror/resources/offline.js
//
// 섹션 순서는 원본 파일의 클래스 선언 순서를 따름:
//   Runner → Trex → DistanceMeter → HorizonLine → NightMode → Cloud
//   → Obstacle → Pterodactyl → GameOverPanel → CollisionBox
// ─────────────────────────────────────────────────────────────────────────────

export type SpriteRect = { x: number; y: number; w: number; h: number };
export type CollisionBoxDef = { x: number; y: number; w: number; h: number };

// ─── Canvas (Runner.defaultDimensions) ───────────────────────────────────────
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 150;

// ─── Runner.config ───────────────────────────────────────────────────────────
export const RUNNER = {
  ACCELERATION: 0.001,
  BG_CLOUD_SPEED: 0.2,
  BOTTOM_PAD: 10,
  CLEAR_TIME: 3000,
  CLOUD_FREQUENCY: 0.5,
  GAMEOVER_CLEAR_TIME: 750,
  GAP_COEFFICIENT: 0.6,
  GRAVITY: 0.6,
  INITIAL_JUMP_VELOCITY: 12,       // 원본 Runner.config 값 (Trex는 음수화해서 씀)
  INVERT_FADE_DURATION: 12000,
  INVERT_DISTANCE: 700,            // 밤 모드 전환 거리
  MAX_BLINK_COUNT: 3,
  MAX_CLOUDS: 6,
  MAX_OBSTACLE_LENGTH: 3,          // 선인장 그룹 최대 개수
  MAX_OBSTACLE_DUPLICATION: 2,     // 같은 종류 연속 최대
  MAX_SPEED: 13,
  MIN_JUMP_HEIGHT: 35,
  MOBILE_SPEED_COEFFICIENT: 1.2,
  RESOURCE_TEMPLATE_ID: "audio-resources",
  SPEED: 6,
  SPEED_DROP_COEFFICIENT: 3,
  ARCADE_MODE_INITIAL_TOP_POSITION: 35,
  ARCADE_MODE_TOP_POSITION_PERCENT: 0.1,
} as const;

// ─── Runner.keycodes ─────────────────────────────────────────────────────────
export const KEYCODES = {
  JUMP: ["Space", "ArrowUp"] as const,
  DUCK: ["ArrowDown"] as const,
  RESTART: ["Enter"] as const,
} as const;

// ─── Runner.classes ──────────────────────────────────────────────────────────
export const CSS_CLASSES = {
  ARCADE_MODE: "arcade-mode",
  CANVAS: "runner-canvas",
  CONTAINER: "runner-container",
  CRASHED: "crashed",
  ICON: "icon-offline",
  INVERTED: "inverted",
  SNACKBAR: "snackbar",
  SNACKBAR_SHOW: "snackbar-show",
  TOUCH_CONTROLLER: "controller",
} as const;

// ─── Trex.config ─────────────────────────────────────────────────────────────
export const TREX = {
  DROP_VELOCITY: -5,
  GRAVITY: 0.6,
  HEIGHT: 47,
  HEIGHT_DUCK: 25,
  INITIAL_JUMP_VELOCITY: -12,      // md 기준: 원본 Runner.config.INITIAL_JUMP_VELOCITY=12 (부호만 반대)
                                    // 최대 높이: 12² / (2×0.6) = 120px
  INTRO_DURATION: 1500,
  MAX_JUMP_HEIGHT: 30,
  MIN_JUMP_HEIGHT: 30,
  SPEED_DROP_COEFFICIENT: 3,
  SPRITE_WIDTH: 262,
  START_X_POS: 50,
  WIDTH: 44,
  WIDTH_DUCK: 59,
  Y_POS: 93,                        // standing top y
  Y_POS_DUCK: 105,                  // ducking top y
  // blinking intervals (waiting state)
  BLINK_TIMING: 7000,
  BLINK_DURATION: 200,
} as const;

// ─── Trex.status ─────────────────────────────────────────────────────────────
export const TREX_STATUS = {
  CRASHED: "CRASHED",
  DUCKING: "DUCKING",
  JUMPING: "JUMPING",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;

// ─── Trex.collisionBoxes (상태별 충돌 박스) ─────────────────────────────────
// 공룡 스프라이트 안에서의 상대좌표. 여러 박스로 외곽을 근사.
export const TREX_COLLISION_BOXES = {
  DUCKING: [{ x: 1, y: 18, w: 55, h: 25 }] as CollisionBoxDef[],
  RUNNING: [
    { x: 22, y: 0, w: 17, h: 16 },
    { x: 1, y: 18, w: 30, h: 9 },
    { x: 10, y: 35, w: 14, h: 8 },
    { x: 1, y: 24, w: 29, h: 5 },
    { x: 5, y: 30, w: 21, h: 4 },
    { x: 9, y: 34, w: 15, h: 4 },
  ] as CollisionBoxDef[],
} as const;

// ─── Trex.animFrames ────────────────────────────────────────────────────────
// status별로 그릴 프레임의 인덱스 배열 (스프라이트 가로 배열 기준)
export const TREX_ANIM_FRAMES = {
  WAITING: { frames: [44, 0], msPerFrame: 1000 / 3 },
  RUNNING: { frames: [88, 132], msPerFrame: 1000 / 12 },
  CRASHED: { frames: [220], msPerFrame: 1000 / 60 },
  JUMPING: { frames: [0], msPerFrame: 1000 / 60 },
  DUCKING: { frames: [264, 323], msPerFrame: 1000 / 8 },
} as const;

// ─── DistanceMeter.config (점수 표시) ────────────────────────────────────────
export const DISTANCE_METER = {
  MAX_DISTANCE_UNITS: 5,            // 점수 자릿수 (99999까지)
  ACHIEVEMENT_DISTANCE: 100,        // 업적 단위
  COEFFICIENT: 0.025,               // 거리→점수 변환
  FLASH_DURATION: 1000 / 4,
  FLASH_ITERATIONS: 3,
  DIGIT_WIDTH: 10,
  DIGIT_HEIGHT: 13,
  DEST_WIDTH: 11,
} as const;

// ─── HorizonLine.dimensions ──────────────────────────────────────────────────
export const HORIZON_LINE = {
  WIDTH: 600,
  HEIGHT: 12,
  YPOS: 127,
} as const;

// ─── NightMode.config ────────────────────────────────────────────────────────
export const NIGHT_MODE = {
  FADE_SPEED: 0.035,
  HEIGHT: 40,                       // 달 높이 (최대)
  MOON_SPEED: 0.25,
  NUM_STARS: 2,
  STAR_SIZE: 9,
  STAR_SPEED: 0.3,
  STAR_MAX_Y: 70,
  WIDTH: 20,                        // 달 너비 (단일 위상)
  PHASES: [140, 120, 100, 60, 40, 20, 0] as const, // 7가지 달 모양 x 오프셋
} as const;

// ─── Cloud.config ────────────────────────────────────────────────────────────
export const CLOUD = {
  HEIGHT: 14,
  MAX_CLOUD_GAP: 400,
  MAX_SKY_LEVEL: 30,                // 상한 y (높이 낮을수록 위)
  MIN_CLOUD_GAP: 100,
  MIN_SKY_LEVEL: 71,                // 하한 y
  WIDTH: 46,
} as const;

// ─── Obstacle.MAX_GAP_COEFFICIENT / MAX_OBSTACLE_LENGTH ─────────────────────
export const OBSTACLE = {
  MAX_GAP_COEFFICIENT: 1.5,
  MAX_OBSTACLE_LENGTH: 3,
} as const;

// ─── Obstacle.types (선인장 + 익룡 세부 설정) ───────────────────────────────
export type ObstacleTypeDef = {
  type: "CACTUS_SMALL" | "CACTUS_LARGE" | "PTERODACTYL";
  width: number;
  height: number;
  yPos: number | readonly number[]; // 익룡은 고도 3단계
  multipleSpeed: number;            // 속도 변화 계수
  minGap: number;                   // 장애물간 최소 gap
  minSpeed: number;                 // 이 타입이 등장하기 시작하는 최소 속도
  collisionBoxes: CollisionBoxDef[];
  numFrames?: number;               // 애니메이션 프레임 수
  frameRate?: number;               // ms
  speedOffset?: number;             // 추가 속도
};

export const OBSTACLE_TYPES: readonly ObstacleTypeDef[] = [
  {
    type: "CACTUS_SMALL",
    width: 17,
    height: 35,
    yPos: 105,                       // GROUND_BOTTOM - HEIGHT = 140-35
    multipleSpeed: 4,
    minGap: 120,
    minSpeed: 0,
    collisionBoxes: [
      { x: 0, y: 7, w: 5, h: 27 },
      { x: 4, y: 0, w: 6, h: 34 },
      { x: 10, y: 4, w: 7, h: 14 },
    ],
  },
  {
    type: "CACTUS_LARGE",
    width: 25,
    height: 50,
    yPos: 90,                        // 140-50
    multipleSpeed: 7,
    minGap: 120,
    minSpeed: 0,
    collisionBoxes: [
      { x: 0, y: 12, w: 7, h: 38 },
      { x: 8, y: 0, w: 7, h: 49 },
      { x: 13, y: 10, w: 10, h: 38 },
    ],
  },
  {
    type: "PTERODACTYL",
    width: 46,
    height: 40,
    yPos: [100, 75, 50] as const,    // 3 altitudes: low / mid / high
    multipleSpeed: 999,              // 항상 단일
    minGap: 150,
    minSpeed: 8.5,                   // 일정 속도 이상에서만 등장
    collisionBoxes: [
      { x: 15, y: 15, w: 16, h: 5 },
      { x: 18, y: 21, w: 24, h: 6 },
      { x: 2, y: 14, w: 4, h: 3 },
      { x: 6, y: 10, w: 4, h: 7 },
      { x: 10, y: 8, w: 6, h: 9 },
    ],
    numFrames: 2,
    frameRate: 1000 / 6,
    speedOffset: 0.8,
  },
] as const;

// ─── GameOverPanel.dimensions ────────────────────────────────────────────────
export const GAME_OVER = {
  TEXT_X: 0,
  TEXT_Y: 13,
  TEXT_WIDTH: 191,
  TEXT_HEIGHT: 11,
  RESTART_WIDTH: 38,
  RESTART_HEIGHT: 34,
} as const;

// ─── Sprite 좌표 (LDPI, 1x) ─────────────────────────────────────────────────
// 원본 Runner.spriteDefinition.LDPI 기반
// 스프라이트 내에서 각 요소의 "기준점"만 표시 (width/height는 각 config 참고)
export const SPRITE_POS = {
  // Trex (base x=848, 가로로 여러 프레임 배열)
  TREX_WAITING_1:  { x: 848,  y: 2,  w: 44, h: 47 }, // waiting idle + jump 재사용
  TREX_WAITING_2:  { x: 892,  y: 2,  w: 44, h: 47 }, // eye blink
  TREX_RUN_1:      { x: 936,  y: 2,  w: 44, h: 47 },
  TREX_RUN_2:      { x: 980,  y: 2,  w: 44, h: 47 },
  TREX_CRASHED:    { x: 1024, y: 2,  w: 44, h: 47 },
  TREX_DUCK_1:     { x: 1112, y: 19, w: 59, h: 30 },
  TREX_DUCK_2:     { x: 1171, y: 19, w: 59, h: 30 },

  // 선인장
  CACTUS_SMALL_1:  { x: 228, y: 2, w: 17, h: 35 },
  CACTUS_SMALL_2:  { x: 245, y: 2, w: 34, h: 35 },
  CACTUS_SMALL_3:  { x: 279, y: 2, w: 51, h: 35 },
  CACTUS_LARGE_1:  { x: 332, y: 2, w: 25, h: 50 },
  CACTUS_LARGE_2:  { x: 357, y: 2, w: 50, h: 50 },

  // 익룡 (날갯짓 2프레임)
  PTERODACTYL_1:   { x: 134, y: 2, w: 46, h: 40 },
  PTERODACTYL_2:   { x: 180, y: 2, w: 46, h: 40 },

  // 환경
  HORIZON:         { x: 2,   y: 54, w: 600, h: 12 },
  CLOUD:           { x: 86,  y: 2,  w: 46, h: 14 },

  // 낮/밤
  MOON:            { x: 484, y: 2,  w: 20, h: 40 }, // 7프레임 가로 배열
  STAR:            { x: 645, y: 2,  w: 9,  h: 9 },

  // UI
  TEXT_SPRITE:     { x: 655, y: 2, w: 191, h: 11 }, // 0123456789 HI
  RESTART:         { x: 2,   y: 2, w: 38,  h: 34 },
} as const;

// ─── Sprite 좌표 (HDPI, 2x, 필요시 사용) ────────────────────────────────────
export const SPRITE_POS_HDPI = {
  CACTUS_LARGE:    { x: 652, y: 2 },
  CACTUS_SMALL:    { x: 446, y: 2 },
  CLOUD:           { x: 166, y: 2 },
  HORIZON:         { x: 2,   y: 104 },
  MOON:            { x: 954, y: 2 },
  PTERODACTYL:     { x: 260, y: 2 },
  RESTART:         { x: 2,   y: 2 },
  TEXT_SPRITE:     { x: 1294, y: 2 },
  TREX:            { x: 1678, y: 2 },
  STAR:            { x: 1276, y: 2 },
} as const;

// ─── 파생 좌표 (렌더링에 바로 쓰는 값) ──────────────────────────────────────
export const GROUND_TOP_Y = HORIZON_LINE.YPOS;                     // 127
export const GROUND_BOTTOM_Y = CANVAS_HEIGHT - RUNNER.BOTTOM_PAD;  // 140
export const TREX_X = TREX.START_X_POS;                            // 50
export const TREX_STANDING_Y = TREX.Y_POS;                         // 93
export const TREX_DUCK_Y = TREX.Y_POS_DUCK;                        // 105
