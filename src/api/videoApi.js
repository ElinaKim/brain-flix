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
        const response = await axios.get(`http://localhost:${API_PORT}/videos/${id}`)
        return response.data
    } catch (error) {
        console.error('Unable to get video details: ', error)
    }
}

export const postVideo = async (title, description) => {
    try {
        const response = await axios.post(`http://localhost:${API_PORT}/videos`, {title: title, description: description})
        return response
    } catch (error) {
        console.error('Error posting video: ', error)
    }
}