import React from 'react';
import axios from "axios";

const baseURL = 'https://623c2a6d2e056d1037fa9e3f.mockapi.io';

const apiServices = {
    userGetList: () => axios.get(`${baseURL}/user`),
    addUserList: (data, editDataList) => {
        if (editDataList ) {
            console.log('TEST1','test');
            return axios.put(`${baseURL}/user`, data)
        }
        else {
            console.log('TEST2','test');
            return axios.post(`${baseURL}/user`, data)
        }
    },
    deleteUserlist:(deletUserData)=>{
        axios.delete(`${baseURL}/user/${deletUserData.id}`, deletUserData)
    }
};

export default apiServices;