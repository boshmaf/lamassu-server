const car = require('../lib/coinatmradar/coinatmradar')

require('../lib/settings-loader').loadLatest()
  .then(settings => {
    return car.mapRecord({config: settings.config, rates: {BTC: {cashIn: 1000, cashOut: 1100}}})
      .then(require('../lib/pp')('DEBUG100'))
      .catch(console.log)
      .then(() => process.exit())
  })
