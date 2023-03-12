export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  discovery_weekly: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_PLAYLIST": {
      return {
        ...state,
        playlist: action.payload,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "DELETE_PLAYLIST_ITEM": {
      const { id } = action.payload;
      const objectTamp = JSON.parse(JSON.stringify(state));
      objectTamp.playlist.items = objectTamp?.playlist?.items.filter(
        (e) => e.id != id
      );
      return objectTamp;
    }
    case "EDIT_PLAYLIST_ITEM": {
      const { id, title } = action.payload;
      console.log(title);
      const objectTamp = JSON.parse(JSON.stringify(state));
      if (
        objectTamp.playlist &&
        Array.isArray(objectTamp.playlist.items) &&
        objectTamp.playlist.items.length > 0
      ) {
        const index = objectTamp?.playlist?.items.findIndex((e) => e.id == id);
        objectTamp.playlist.items[index].name = title;
      }
      return objectTamp;
    }
    case "CREATE_PLAYLIST_ITEM": {
      const { data, id } = action.payload;
      const objectTamp = JSON.parse(JSON.stringify(state));
      if (objectTamp && objectTamp.playlist && objectTamp.playlist.items) {
        objectTamp.playlist.items.unshift({
          name: data.namePlaylist,
          id,
        });
      }
      return objectTamp;
    }
    case "SET_DISCOVERY_WEEKLY": {
      const objectTamp = JSON.parse(JSON.stringify(state));
      objectTamp["discovery_weekly"] = action.payload;
      return objectTamp;
    }
    default: {
      return state;
    }
  }
};
