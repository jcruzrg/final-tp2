const BASE_API = '/api/';

const ROUTES = [{
  path: `${BASE_API}temperature`,
  route: require("../routes/temperature.route")
}];

module.exports = {
  ROUTES
};
