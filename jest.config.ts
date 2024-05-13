import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle imports of CSS/SCSS files
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    // Transform TypeScript files using ts-jest
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
