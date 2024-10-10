import axiosInstance from "./axios"

export const Playlist = async () => {
    const response = await axiosInstance.get('/search/playlists?query=Indie')
    return response.data
}