/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_TEST: string;
    REACT_APP_API_KEY3: string;
    REACT_APP_ACCESS_TOKEN: string;
    REACT_APP_CLIENT_PORT: string;
  }
}
