import UserService from "../services/user.service";

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  loginUser({ commit }, { login, password }) {
    commit("loginRequest", { login });

    return UserService.loginUser(login, password).then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure", error);
        return Promise.reject(error);
      }
    );
  },
  logout({ commit }) {
    UserService.logout();
    commit("logout");
  },
  register({ commit }, user) {
    commit("registerRequest", user);

    return UserService.register(user).then(
      (user) => {
        commit("registerSuccess", user);
        console.log(user.loginName);
        return Promise.resolve(user.loginName);
      },
      (error) => {
        commit("registerFailure", error);
        return Promise.reject(error);
      }
    );
  },
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  // eslint-disable-next-line no-unused-vars
  registerRequest(state, user) {
    state.status = { registering: true };
  },
  // eslint-disable-next-line no-unused-vars
  registerSuccess(state, user) {
    state.status = {};
  },
  // eslint-disable-next-line no-unused-vars
  registerFailure(state, error) {
    state.status = {};
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
