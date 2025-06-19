import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '07633806089f4396b03ec8231265b6b5',
    }
})