import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL

export const fetchVideos = async () => {
    try {
        const response = await axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        console.error('Invalid get request: ', error)
    }
}

export const fetchVideoDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        console.error('Unable to get video details: ', error)
    }
}
