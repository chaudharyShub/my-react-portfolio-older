export const initialState = {
    mode: false
};

const reducer = (state, action) => {

    switch (action.type) {
        case "ENABLE_DARK_MODE":
            return {
                mode: true
            };
        case "ENABLE_LIGHT_MODE":
            return {
                mode: false
            };
    };
};

export default reducer;
