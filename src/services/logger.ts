import * as winston from 'winston'

export type Logger = winston.Logger

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize(),
  winston.format.printf(values => {
    return `[${values.timestamp}] [${values.level}]: ${values.message}`
  }),
)

const transports = [new winston.transports.Console()]

export const logger = winston.createLogger({ format, transports })
