module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
      '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/fileMock.js',
    },
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
  };