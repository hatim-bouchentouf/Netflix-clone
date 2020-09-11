import axios from "axios";

// this creates a base url for the requests.js diction to append to.
// would be used like instance.get('/requestStuff')
// console.log(instance.get('requestStuff')) >>>> https://api.themoviedb.org/3/requestStuff

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
