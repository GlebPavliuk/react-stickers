import { contactBaseURL } from "../constants";

export function APIget() {
  let options = {
    method: `GET`,
    headers: {
      "Content-type": "application/json",
    },
  };
  return fetch(contactBaseURL, options).then((resp) => resp.json());
}

export function APIpost(params) {
  const { obj } = params;
  let options = {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(contactBaseURL, options).then((resp) => resp.json());
}

export function APIput(params) {
  const { obj, id } = params;
  let options = {
    method: `PUT`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  return fetch(contactBaseURL + `/` + id, options).then((resp) => resp.json());
}

export function APIdelete(params) {
  const { id } = params;

  let options = {
    method: `DELETE`,
    headers: {
      "Content-type": "application/json",
    },
  };
  return fetch(contactBaseURL + `/` + id, options).then((resp) => resp.json());
}
