module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.[jt]s'],
  coveragePathIgnorePatterns: ['/node_modules/']
};
