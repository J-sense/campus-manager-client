import { baseApi } from "../../api/baseApi";

const createStudentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: () => ({
        url: "/users/create-student/",
        method: "POST",
      }),
    }),
  }),
});

export const { useAddStudentMutation } = createStudentApi;
