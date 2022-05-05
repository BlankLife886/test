import axios from './request'

export function getnav() {
    return axios({
        method: 'get',
        url: `get_navData`
    })
}