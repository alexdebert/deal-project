/**
 * @overview Sidebar Service.
 */

import axios from 'axios'

const baseURL = `/data/sidebar.json`

export function fetchSidebarItems() {
	return axios.get(baseURL)
}