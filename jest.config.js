const config = {
    verbose: true,
    collectCoverage: true,
    //collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',//'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      "^.+\\.(ts|tsx|js|cjs)$": "babel-jest"
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    
  };
  
  module.exports = config;

  /**
   * //moduleDirectories: [ 'node_modules']
    moduleNameMapper : {
      '^react-dnd$': 'react-dnd/dist/cjs',
      '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
      '^dnd-core$': 'dnd-core/dist/cjs',
    }
   */