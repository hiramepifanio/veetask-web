import {api, requestConfig} from '../utils/config.js'

const cadastro = async(data) => {
    
    const config = requestConfig('POST', data);

    try {
        const res = await fetch(api + '/cadastro', config)
            .then((res) => res.json())
            .catch((err) => err);

        if (res) {
            localStorage.setItem('user', JSON.stringify(res));
        }
    } catch (error) {
        console.log(error);
    }
}

const authService = {
    cadastro
};

export default authService;