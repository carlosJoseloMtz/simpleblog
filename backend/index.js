import express from 'express'
import consign from 'consign'

const app = express()

consign({
    logger: console,
    loggingType: 'info',
    verbose: true
  })
  .include('app/config.js')
  .then('routes')
  .include('app/bootloader.js')
  .into(app)
