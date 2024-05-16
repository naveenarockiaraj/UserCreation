import React from 'react';
import axios from "axios";

const baseURL = 'https://623c2a6d2e056d1037fa9e3f.mockapi.io';

const apiServices = {
    userGetList: () => axios.get(`${baseURL}/user`),
    addUserList: (data) => axios.post(`${baseURL}/user`, data)
};

export default apiServices;