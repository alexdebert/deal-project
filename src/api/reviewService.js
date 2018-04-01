/**
 * @overview Review Service.
 */

import axios from 'axios'

const baseURL = `/data/reviews.json`

export function fetchReviews() {
	return axios.get(baseURL)
}
