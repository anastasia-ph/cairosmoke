import axios from 'axios';
import { useState } from 'react';

export const setGifPath = (gif, formsent) => {
    const key = "Z7ake9ZBCAZgPX8lAaivZUJzMyPjUy6w"
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=kitten&rating=g`
    axios.get(URL).then((response) => { gif(response.data.data.images.downsized.url); formsent(true); })

}