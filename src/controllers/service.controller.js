const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const getMonitorningData = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send({ hello: 'world' });
});

module.exports = {
  getMonitorningData,
};
