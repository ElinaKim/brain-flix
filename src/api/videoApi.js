import axios from 'axios'

const API_PORT = process.env.REACT_APP_PORT

export const fetchVideos = async () => {
    try {
        const response = await axios.get(`http://localhost:${API_PORT}/videos`)
        return response.data
    } catch (error) {
        console.error('Invalid get request: ', error)
    }
}

export const fetchVideoDetails = async (id) => {
    try {
        const response = await axios.get(`http://localhost:${API_PORT}/videos${id}`)
        return response.data
    } catch (error) {
        console.error('Unable to get video details: ', error)
    }
}
