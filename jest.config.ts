import type { Config } from "jest"

const config: Config = {
  roots: ["."],
  testMatch: ["**/?(*.)+(test).+(ts)"],
  transform: {
    "^.+\\.(ts|ts)$": "ts-jest",
  },
}

export default config
