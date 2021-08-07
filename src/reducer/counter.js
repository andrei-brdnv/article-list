export default (count = 0, action) => {
    if (action.type === 'INCREMENT') {
        return count + 1
    }

    return count
}