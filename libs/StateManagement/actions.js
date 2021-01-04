export default {
    setView(context, payload) {
        context.commit('setViewLyrics', payload);
    },
    removeView(context, payload) {
        context.commit('removeViewLyrics');
    },
    setSongSearch(context, payload) {
        context.commit('setSongSearch', payload);
    },
    setLoading(context, payload) {
        context.commit('setLoading')
    },
    setSearchTerm(context, payload) {
        context.commit('setSearch', payload)
    },
    clearSearch(context, payload) {
        context.commit('clearSongSearch')
    },
    setPaginationItems(context, payload) {
        context.commit('setPagination', payload)
    },
    clearInitialArray(context, payload) {
        context.commit('clearInitial')
    },
    addLyricsActions(context, payload) {
        context.commit('addLyrics', payload)
    }
}
