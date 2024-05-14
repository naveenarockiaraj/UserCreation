import React from 'react';
import axios from "axios";

axios.defaults.baseUrl = 'https://623c2a6d2e056d1037fa9e3f.mockapi.io';

export const apiServices = () => {
   
    userGetList :()=> {return axios.get('/user')}
};
