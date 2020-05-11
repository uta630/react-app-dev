import _ from 'lodash' // utility package
import { READ_EVENTS, DELETE_EVENTS } from '../actions'

export default (events = {}, action) => {
    switch(action.type) {
        case READ_EVENTS:
            // lodashのmapKeysを用いて、
            // オブジェクト(action.response.data)のkeyを任意の値(id)から取得して変換する
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
