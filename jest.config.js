module.exports = {
  testEnvironment: 'jsdom',
  snapshotSerializers: ['@emotion/jest/enzyme-serializer', 'enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/mocks/StyleMock.js',
  },
}
