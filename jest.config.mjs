// jest.config.mjs
export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transpile JS/JSX files
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Correct regex for CSS mapping
  },
};