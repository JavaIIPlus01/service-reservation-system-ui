import Vuex from "vuex";

import { alert } from "./alert.module";
import { account } from "./account.module";
import { users } from "./users.module";

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    users
  }
});
