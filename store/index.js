import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    paperList:[],
    questionsList:[],
    chosePaperId:null
  },

  actions: {
    FETCH_PAPER_LIST_DATA: ({commit, dispatch, state}) => {
      return api.fetchPaperList()
          .then(body => Promise.resolve(body))
          .then(paperlist => {
            commit('SET_PAPER_LIST', {paperlist})
          })
    },
    FETCH_QUESTIONS_LIST_DATA: ({commit, dispatch, state}) => {
      return api.fetchPaperList()
          .then(body => Promise.resolve(body))
          .then(questionsList => {
            commit('SET_QUESTIONS_LIST', {questionsList})
          })
    }
  },

  mutations: {
    SET_PAPER_LIST: (state, {paperlist}) => {
      state.paperList = paperlist
    },
    SET_QUESTIONS_LIST: (state, {questionsList}) => {
      state.questionsList = questionsList
    },
    SET_CHOSE_PAPER: (state,{chosePaperId}) => {
      state.chosePaperId = chosePaperId
    }
  },

  getters: {
    activePaperList (state) {
      return state.paperList
    },
    activeQuestionsList (state) {
      return state.questionsList
    },
    activeChosePaper (state){
      return state.chosePaperId
    }
  }
})

export default store
