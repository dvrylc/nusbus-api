const utils = {
  stopFormatter: stop => {
    if (stop.name) {
      const code = stop.name.toUpperCase();
      delete stop.name;
      stop.code = code;
    }

    if (stop.caption) {
      const name = stop.caption;
      delete stop.caption;
      stop.name = name;
    }

    return stop;
  }
}

module.exports = utils;
