
export default class Stroage {
    static LoadState = () => {
        try {
            if (typeof window !== 'undefined') {
                const sessionState = localStorage.getItem('state') || {};
                const state = Object.assign({}, JSON.parse(sessionState));
                return state;
            }
        } catch (err) {
            return {};
        }
    };

    static SaveState = (data) => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.clear();
                localStorage.setItem('state', JSON.stringify(data));
            }
        } catch (err) {
            console.error(err);
        }
        // }
    };
}
