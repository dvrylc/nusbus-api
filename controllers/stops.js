const fetch = require('node-fetch');
const utils = require('../utils');

const apiRoot = 'https://nextbus.comfortdelgro.com.sg/eventservice.svc';

const stopsController = {
  stops: async (req, res) => {
    const rawAPIRes = await fetch(`${apiRoot}/busstops`);
    const parsedAPIRes = await rawAPIRes.json();

    const rawStops = parsedAPIRes.BusStopsResult.busstops;
    const formattedStops = rawStops.map(utils.stopFormatter);

    return res.json(formattedStops);
  }
}

module.exports = stopsController;
