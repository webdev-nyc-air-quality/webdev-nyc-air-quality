const viewport = {
  desktop: {
    width: 1920,
    height: 1080,
  },
  mobile: {
    width: 375,
    height: 812,
  },
}

module.exports = {
  launch: {
    defaultViewport: viewport[process.env.TEST_PLATFORM]
  },
}
