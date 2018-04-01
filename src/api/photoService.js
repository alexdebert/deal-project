/**
 * @overview Photo Service.
 */

import axios from 'axios'

const baseURL = `/data/photos.json`

export function fetchHomePhotos() {
	return axios.get(baseURL)
}
