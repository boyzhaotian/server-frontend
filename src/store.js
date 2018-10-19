import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		guide: localStorage.getItem('guide') === 'true',
		guideTime: 5000
	},
	mutations: {
		guide(state, val) {
			localStorage.setItem('guide', val)
			state.guide = val
		}
	},
	actions: {

	}
})
