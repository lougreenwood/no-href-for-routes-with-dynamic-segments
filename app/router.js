import EmberRouter from '@ember/routing/router';
import config from 'reproduction/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('no-dynamic-segment');
  this.route('with-dynamic-segment', { path: '/accounts/:account_id' });
});
