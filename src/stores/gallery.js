import { defineStore } from 'pinia'

export const useGallery = defineStore('gallery-store', {
    state: () => {
        return {
            chosenPicture: [],
            fetching: false
        }
    },

    getters: {
        results(state) {
            return state.chosenPictures;
        },

        isFetching(state) {
            return state.fetching;
        }
    },

    actions: {
        async fetchChosenPictures() {
            this.fetching = true;
            const response = await fetch('/data/chosen-pictures.json');
            try {
                const result = await response.json();
                this.chosenPictures = result.books;
            } catch (err) {
                this.chosenPictures = [];
                console.error('Error loading pictures:', err);
                return err;
            }

            this.fetching = false;
        }
    }
})