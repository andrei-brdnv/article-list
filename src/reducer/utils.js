import { OrderedMap } from "immutable";

export function arrToMap(arr, ItemRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, ItemRecord ? new ItemRecord(item) : item),
        new OrderedMap()
    )
}

/*export function arrToMap(arr) {
    return arr.reduce(
        (acc, item) => ({
            ...acc,
            [item.id]: item
        }),
        {}
    )
}*/
