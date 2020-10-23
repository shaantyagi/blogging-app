import axios from 'axios';

export const getUsers = () => {
    const URL = `https://jsonplaceholder.typicode.com/users`;

    return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const getUserPosts = (userid) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userid}&skip=
    0&limit=10`;
    
    return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const getPost = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const getComments = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
};

export const deletePost = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios.delete(URL)
    .then((response) => console.log("Deleted Successfully:",response))
    .catch((error) => console.log("Error deleting post: ", error));
};