import Vue from 'vue'
import Vuex from 'vuex'
import request from 'superagent'
import _ from 'underscore'
import {
    API_ROOT
} from './config'

Vue.use(Vuex)

function fetch(child) {
    return new Promise((resolve, reject) => {
        request.get(API_ROOT + child).then((response) => {
            if (typeof response.text == 'string') {
                resolve(JSON.parse(response.text))
            } else {
                resolve(response.text)
            }
        }, reject)
    })
}

export function fetchPaperList() {
    return fetch('WxBus/getPaperList').then((response) => {
        let paperList = _.map(response.data, (value, key) => {
                return {
                    id: key,
                    title: value.name
                }
            })
        return paperList
    })
}

export function fetchPaperQuestions(wxId, paperId) {
    return fetch(`WxBus/getPaperQuestions?wxId=${wxId}&paperId=${paperId}`).then((response) => {
        let questions = _.map(response, (key, value) => {
            return {
                title: value.name
            }
        })
        return item
    })
}
