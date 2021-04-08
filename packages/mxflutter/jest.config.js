module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    MXJSAPI: {
      nativePrint: () => {},
    },
  },
};
