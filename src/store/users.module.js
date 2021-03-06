import UserService from "../services/user.service";

const state = {
  all: {},
};

const actions = {
  getAll({ commit }) {
    commit("getAllRequest");

    UserService.getAll().then(
      (users) => commit("getAllSuccess", users),
      (error) => commit("getAllFailure", error)
    );
  },

  delete({ commit }, id) {
    commit("deleteRequest", id);

    UserService.delete(id).then(
      // eslint-disable-next-line no-unused-vars
      (user) => commit("deleteSuccess", id),
      (error) => commit("deleteFailure", { id, error: error.toString() })
    );
  },
};

const mutations = {
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, users) {
    state.all = { items: users };
  },
  getAllFailure(state, error) {
    state.all = { error };
  },
  deleteRequest(state, id) {
    // add 'deleting:true' property to user being deleted
    state.all.items = state.all.items.map((user) =>
      user.id === id ? { ...user, deleting: true } : user
    );
  },
  deleteSuccess(state, id) {
    // remove deleted user from state
    state.all.items = state.all.items.filter((user) => user.id !== id);
  },
  deleteFailure(state, { id, error }) {
    // remove 'deleting:true' property and add 'deleteError:[error]' property to user
    state.all.items = state.items.map((user) => {
      if (user.id === id) {
        // make copy of user without 'deleting:true' property
        // eslint-disable-next-line no-unused-vars
        const { deleting, ...userCopy } = user;
        // return copy of user with 'deleteError:[error]' property
        return { ...userCopy, deleteError: error };
      }

      return user;
    });
  },
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
};
