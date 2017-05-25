import testdata from './mockData.json';

const axios = jest.genMockFromModule('axios');

function get(data) {
	return Promise.resolve(testdata);
}

axios.get = get

export default axios;