'use strict';

const CryptoJS = require("crypto-js");
const querystring = require('querystring');
const fetch = require('node-fetch');

const config = {
    url: 'https://api-adapter.backend.currency.com/api/v1',
    apiKey: null,
    secretKey: null,
};

function sign(message){
    return CryptoJS.HmacSHA256(message, config.secretKey).toString(CryptoJS.enc.hex);
}

function cuurencyApi(apiKey, secretKey, url) {
    config.apiKey = apiKey;
    config.secretKey = secretKey;

    if (url) {
        config.url = url;
    }

    const api = {
        get: async (uri, params) => {
            return api.execute('GET', uri, params);
        },
        post: async (uri, params) => {
            return api.execute('POST', uri, params);
        },
        execute: async (method, uri, params) => {
            if (!params) {
                params = {};
            }

            params['timestamp'] = Date.now();
            params['signature'] = sign(querystring.stringify(params));

            if (method == 'GET') {
                uri += '?' + querystring.stringify(params);
                params = null;
            }

            return fetch(config.url + uri, {
                method: method,
                headers: {
                  'X-MBX-APIKEY': config.apiKey,
                },
                body: params
              });
        },
    };

    return api;
}


module.exports = cuurencyApi;