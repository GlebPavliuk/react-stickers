export function useAPImethod(APIget, setState) {
  function runAPImethod(APImethod = APIget, APIparameters = {}) {
    console.log(APIparameters);
    const typeGET = APImethod.name.toLowerCase().includes(`get`);

    if (typeGET) {
      APIget()
        .then((data) => {
          setState(data);
          return data;
        })
        .catch((error) => {
          alert(error);
          return Promise.reject(error);
        });
    } else {
      APImethod(APIparameters)
        .then(() => APIget())
        .then((data) => {
          setState(data);
          return data;
        })
        .catch((error) => {
          alert(error);
          return Promise.reject(error);
        });
    }
  }

  return {
    runAPImethod,
  };
}
