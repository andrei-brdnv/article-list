import {
    DELETE_ARTICLE,
    CHANGE_SELECTION,
    CHANGE_DATE_RANGE,
    RESET_DATE_RANGE
} from '../types'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default function (filtersState = defaultFilters, action) {
    switch (action.type) {
        case DELETE_ARTICLE:
            return {
                ...filtersState,
                selected: filtersState.selected.filter(item => item.id !== action.payload.id)
            }

        case CHANGE_SELECTION:
            return {
                ...filtersState,
                selected: action.payload.selected
            }

        case CHANGE_DATE_RANGE:
            return {
                ...filtersState,
                dateRange: action.payload.dateRange
            }

        case RESET_DATE_RANGE:
            return {
                ...filtersState,
                dateRange: defaultFilters.dateRange
            }

        default:
            return filtersState
    }
}