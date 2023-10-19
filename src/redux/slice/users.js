import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const usersWithAvatars = data.map((user) => {
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}&eyes=happy&mouth=smile`;
    return {
      ...user,
      avatar: avatarUrl,
      like:false
    };
  });

  return usersWithAvatars;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
  reducers: {
    userUpdated: (state, action) => {
      state.users = state.users.map((user, index) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },

    userDeleted: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);

    },
  },
});

export const { userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
