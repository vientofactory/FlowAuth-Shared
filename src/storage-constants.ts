/**
 * 스토리지 관련 상수들
 * 프론트엔드와 백엔드에서 공통으로 사용하는 키들을 정의
 */

// 쿠키 키 상수들
export const COOKIE_KEYS = {
  /**
   * 인증 토큰 쿠키 키
   * 백엔드에서 설정하고 프론트엔드에서 읽는 HTTP-Only 쿠키
   */
  TOKEN: "token",

  /**
   * CSRF 방지 토큰 쿠키 키
   */
  CSRF_TOKEN: "csrf_token",

  /**
   * 세션 ID 쿠키 키
   */
  SESSION_ID: "session_id",
} as const;

// 로컬 스토리지 키 상수들
export const LOCAL_STORAGE_KEYS = {
  /**
   * 로그인 토큰 (JWT Access Token)
   * 일반 로그인 시 사용하는 토큰
   */
  LOGIN_TOKEN: "auth_token_login",

  /**
   * OAuth2 토큰 (OAuth2 Access Token)
   * OAuth2 플로우에서 발급받은 토큰
   */
  OAUTH2_TOKEN: "auth_token_oauth2",

  /**
   * 로그인 리프레시 토큰
   */
  REFRESH_LOGIN_TOKEN: "refresh_token_login",

  /**
   * OAuth2 리프레시 토큰
   */
  REFRESH_OAUTH2_TOKEN: "refresh_token_oauth2",

  /**
   * 사용자 프로필 캐시
   */
  USER_PROFILE: "user_profile",

  /**
   * 사용자 권한 캐시
   */
  USER_PERMISSIONS: "user_permissions",

  /**
   * 테마 설정
   */
  THEME_PREFERENCE: "theme_preference",

  /**
   * 언어 설정
   */
  LANGUAGE_PREFERENCE: "language_preference",

  /**
   * 마지막 로그인 이메일 (자동완성용)
   */
  LAST_LOGIN_EMAIL: "last_login_email",
} as const;

// 세션 스토리지 키 상수들
export const SESSION_STORAGE_KEYS = {
  /**
   * OAuth2 리디렉션 중 플래그
   * 무한 리디렉션 방지용
   */
  OAUTH2_REDIRECTING: "oauth2_redirecting",

  /**
   * OAuth2 API 에러로 인한 리디렉션 플래그
   * 무한 리디렉션 방지용
   */
  OAUTH2_API_REDIRECTING: "oauth2_api_redirecting",

  /**
   * 2FA 진행 중 상태
   */
  TWO_FACTOR_IN_PROGRESS: "two_factor_in_progress",

  /**
   * 임시 로그인 데이터
   */
  TEMP_LOGIN_DATA: "temp_login_data",

  /**
   * 폼 데이터 임시 저장
   */
  FORM_DATA_CACHE: "form_data_cache",

  /**
   * OAuth2 OIDC nonce
   */
  OIDC_NONCE: "oidc_nonce",

  /**
   * OAuth2 OIDC state
   */
  OIDC_STATE: "oidc_state",

  /**
   * 페이지 리로드 카운터 (무한 리로드 방지)
   */
  RELOAD_COUNTER: "reload_counter",
} as const;

// 모든 스토리지 키들을 하나의 객체로 통합
export const STORAGE_KEYS = {
  COOKIE: COOKIE_KEYS,
  LOCAL_STORAGE: LOCAL_STORAGE_KEYS,
  SESSION_STORAGE: SESSION_STORAGE_KEYS,
} as const;

// 토큰 관련 헬퍼 함수들
export const TOKEN_UTILS = {
  /**
   * 토큰 타입에 따른 로컬 스토리지 키 반환
   */
  getTokenKey: (tokenType: StorageTokenType) => {
    return tokenType === "login" ? LOCAL_STORAGE_KEYS.LOGIN_TOKEN : LOCAL_STORAGE_KEYS.OAUTH2_TOKEN;
  },

  /**
   * 리프레시 토큰 타입에 따른 로컬 스토리지 키 반환
   */
  getRefreshTokenKey: (tokenType: StorageTokenType) => {
    return tokenType === "login"
      ? LOCAL_STORAGE_KEYS.REFRESH_LOGIN_TOKEN
      : LOCAL_STORAGE_KEYS.REFRESH_OAUTH2_TOKEN;
  },

  /**
   * 모든 토큰 키 목록 반환
   */
  getAllTokenKeys: () => [
    LOCAL_STORAGE_KEYS.LOGIN_TOKEN,
    LOCAL_STORAGE_KEYS.OAUTH2_TOKEN,
    LOCAL_STORAGE_KEYS.REFRESH_LOGIN_TOKEN,
    LOCAL_STORAGE_KEYS.REFRESH_OAUTH2_TOKEN,
  ],

  /**
   * 인증 관련 모든 키 목록 반환 (토큰 + 프로필 + 권한)
   */
  getAllAuthKeys: () => [
    ...TOKEN_UTILS.getAllTokenKeys(),
    LOCAL_STORAGE_KEYS.USER_PROFILE,
    LOCAL_STORAGE_KEYS.USER_PERMISSIONS,
  ],
} as const;

// 스토리지 유틸리티 타입
export type CookieKey = keyof typeof COOKIE_KEYS;
export type LocalStorageKey = keyof typeof LOCAL_STORAGE_KEYS;
export type SessionStorageKey = keyof typeof SESSION_STORAGE_KEYS;
export type StorageTokenType = "login" | "oauth2";
