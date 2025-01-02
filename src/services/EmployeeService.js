import axios from 'axios';

const REST_API_BASE_URL =  import.meta.env.VITE_API_URL;

export const listEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL , employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmloyee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId,employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);