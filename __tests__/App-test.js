/**
 * @format
 */

import 'react-native';
import React from 'react';
import axios from 'axios';
import {fetchTours} from "../src/helper/api";
jest.mock('axios');

const lat=29.77473853510061
const lng= -95.37748836595249

describe('fetchTours', () => {
  it('type of response data should be array ', async () => {
    fetchTours(lat,lng).then(response=>{
     expect(typeof response).toEqual('array')})
  });
  it('fetches successfully data from an API ', async () => {
    const data = {
      data: {
        data: [
          {
            average_rating: 5,
            booking_flow_type: 1,
            city: "Sonoma",
            city_id: 1241,
            duration_in_minutes: 480,
            favorited: false,
            id: 284146,
          },
          {
            average_rating: 5,
            booking_flow_type: 1,
            city: "San Jose",
            city_id: 853,
            duration_in_minutes: 540,
            favorited: false,
            id: 284850,
          },
        ],
      },
    };
    fetchTours(lat,lng).then(response=>{
      expect(response).toMatchObject(data)})
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    fetchTours(lat,lng).then(response => {
      expect(response).toThrow(errorMessage)})
  });

});
