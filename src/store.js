import createStore from 'unistore';
import axios from "axios"

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    article: "",
    listNews: []
};

const baseUrl = "https://newsapi.org/v2/everything?q="
const apiKey = "&apiKey=995ea15a75714a0496b4befa6ae915ef"

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    // updateCategory: (state, match) => {
    //     // console.log("Berjalan sesuai plan")
    //     console.log("test value match at store.js", state)
    //     // this.props.searchNews(match.query)
    //     return (store.setState({ article: match.query }))
    // },
    // searchNews: async keywords => {
    //     // console.log("searchNews", keywords);
    //     const self = this;
    //     if (keywords.length > 2) {
    //       try {
    //         const response = await axios.get(
    //             baseUrl + keywords + apiKey
    //           );
    //         //   console.log(response);
    //           store.setState({ listNews: response.data.articles })
    //         //   console.log("CEK list news dong", state)
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    // },
    updateCategory: async (state, match) => {
        // console.log("test value match at store.js", state)
        try {
            const response = await axios.get(
                baseUrl + match.query + apiKey
              );
            //   console.log(response);
              store.setState({ listNews: response.data.articles });
            //   console.log("CEK list news dong", state)
          } catch (error) {
            console.error(error);
          }
          store.setState({ article: match.query });
          console.log("test value match at store.js", state);
        // return ()
    },
    // searchNews: async keywords => {
    //     // console.log("searchNews", keywords);
    //     const self = this;
    //     if (keywords.length > 2) {
    //       try {
    //         const response = await axios.get(
    //             baseUrl + keywords + apiKey
    //           );
    //         //   console.log(response);
    //           store.setState({ listNews: response.data.articles })
    //         //   console.log("CEK list news dong", state)
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    // },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };
        const self = this;
        axios
            .post("https://loginadmin.free.beeceptor.com/auth", data)
            .then(function(response) {
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    });
                    // console.log("test api postLogin > state", self);
                    // self.props.history.push("/profile");
                    // console.log("test api postLogin > state", state);
                } else {
                    store.setState({
                        is_login: true,
                        api_key: "response.data.api_key",
                        full_name: "response.data.full_name",
                        email: "response.data.email",
                        article: "TEST"
                    });
                    console.log("test api postLogin > state", state);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }
})

// export default store;