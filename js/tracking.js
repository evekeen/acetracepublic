/**
 * @file
 * A JavaScript file for analytic tracking.
 */


/* eslint-disable no-undef */
const cookieconsent = localStorage.getItem('cookieconsent');
const googleAnalytics = 'G-558SLD4KGN';

if (googleAnalytics && cookieconsent === 'decline') {
    console.log('Google Analytics disabled');
    window['ga-disable-' + googleAnalytics] = true;
}
