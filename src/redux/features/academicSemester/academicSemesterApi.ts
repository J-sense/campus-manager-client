// import { useSearchParams } from "react-router-dom";
import { TSemester } from "../../../types/academicSemesterType";
import { TResponseApi } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (args) => {
        console.log("dfafds", args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((element) => {
            params.append(element.name, element.value);
          });
        }
        return { url: "/academic-semesters", method: "GET", params };
      },
      transformResponse: (response: TResponseApi<TSemester[]>) => {
        // console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data, // Corrected to `body` for request payload
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery, useAddAcademicSemesterMutation } =
  academicSemesterApi;
