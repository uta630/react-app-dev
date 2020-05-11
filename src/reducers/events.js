import _ from 'lodash' // utility package
import {
    CREATE_EVENTS,
    READ_EVENTS,
    DELETE_EVENTS,
    READ_EVENT,
    UPDATE_EVEMT
} from '../actions'

export default (events = {}, action) => {
    switch(action.type) {
        case CREATE_EVENTS:
        case UPDATE_EVEMT:
        case READ_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
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
