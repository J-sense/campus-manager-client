import { baseApi } from "../../api/baseApi";

const academicFacultiApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculties: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
        // Corrected to `body` for request payload
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useGetAllFacultiesQuery, useAddAcademicFacultyMutation } =
  academicFacultiApi;
