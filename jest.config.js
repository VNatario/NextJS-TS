module.exports = {
  // indica do tipo de ambiente (brownser)
  testEnvironment: 'jsdom',

  //igonarar certas pastas
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  //aplica teste de cobertura
  //verifica funçoes, variaveis e etc
  collectCoverage: true,

  //onde aplica o codigo de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)'],

  //passa informaçoes para o jest antes de executar o jest
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
