import authHeader from "./auth-header";
import jwt from "jsonwebtoken";

const API_URL = "http://localhost:8080/";

class UserService {
  loginUser(login, password) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ login, password }),
    };

    return fetch(`${API_URL}tokens`, requestOptions)
      .then(this.handleResponse)
      .then((user) => {
        // login successful if there's a jwt token in the response
        if (user.token) {
          const payload = jwt.decode(user.token, { complete: true }).payload;
          console.log(payload.groups);
          console.log(payload.uid);
          console.log(payload.upn);

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
  }

  register(user) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    return fetch(`${API_URL}users`, requestOptions).then(this.handleResponse);
  }

  getAll() {
    const requestOptions = {
      method: "GET",
      headers: authHeader(),
    };

    return fetch(`${API_URL}users`, requestOptions).then(this.handleResponse);
  }

  getById(id) {
    const requestOptions = {
      method: "GET",
      headers: authHeader(),
    };

    return fetch(`${API_URL}users/${id}`, requestOptions).then(
      this.handleResponse
    );
  }

  update(user) {
    const requestOptions = {
      method: "PUT",
      headers: {
        ...authHeader(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    return fetch(`${API_URL}users/${user.id}`, requestOptions).then(
      this.handleResponse
    );
  }

  // prefixed function name with underscore because delete is a reserved word in javascrip

  delete(id) {
    const requestOptions = {
      method: "DELETE",
      headers: authHeader(),
    };

    return fetch(`${API_URL}users/${id}`, requestOptions).then(
      this.handleResponse
    );
  }

  handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          //this.logout();
          //location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }
}

export default new UserService();
