import { baseApi } from "../../api/baseApi";

const createStudentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudent: builder.query({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddStudentMutation, useGetAllStudentQuery } =
  createStudentApi;
