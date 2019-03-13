import createStore from 'unistore';
import axios from "axios"

const initialState = {
    api_key: "",
    email: "mae@alterra.id",
    password: "eam",
    full_name: "maestro",
    username: "mae14",
    is_login: false
};

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };
        const self = this;
        axios
            .post("https://trastanechora.free.beeceptor.com/auth", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    })
                    self.props.history.push("/profile");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }
})

export default store;