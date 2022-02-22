const acceptedKey = ["pokemon", "type", "ability"];

export default function createApi() {
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        return async (id) => {
          if (!acceptedKey.includes(prop)) {
            return Promise.reject({ error: `Key '${prop}' not accepted` });
          }
          const url = "https://pokeapi.co/api/v2";
          const resource = `${url}/${prop}/${id}`;
          const res = await fetch(resource);
          if (res.ok) {
            return { RES: await res.json(), PROP: prop };
          }

          return Promise.reject({
            error: `Something wrong happened with ${resource}`,
          });
        };
      },
    }
  );
}
