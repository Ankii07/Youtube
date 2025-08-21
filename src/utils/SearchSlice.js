import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEOS_API } from "./constants";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        videos: [],
        searchClicked: false,
    },
    reducers: {
        cacheResults: (state, action) => {
            // Correct way to merge state in Redux Toolkit
            return { ...state, ...action.payload };
        },
        setVideos: (state, action) => {
            // Correct mutation pattern (Immer handles immutability)
            state.videos = action.payload;
        },
        setSearchClicked: (state) => {
            state.searchClicked = true;
        },
    },
});

export const { cacheResults, setVideos, setSearchClicked } = searchSlice.actions;

// Export the async thunk for fetching videos
// export const fetchVideos = () => async (dispatch) => {
//     try {
//         const response = await fetch(YOUTUBE_VIDEOS_API);
//         const data = await response.json();
//         dispatch(setVideos(data.items));
//     } catch (error) {
//         console.error("Error fetching videos:", error);
//     }
// };

export default searchSlice.reducer;