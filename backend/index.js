import express from 'express'
import consign from 'consign'

const app = express()

consign({
    logger: console,
    loggingType: 'info',
    verbose: true
  })
  .include('app/config.js')
  .include('app/bootloader.js')
  .then('routes')
  .into(app)
