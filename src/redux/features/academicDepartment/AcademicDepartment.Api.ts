import { TSemester } from "../../../types/academicSemesterType";
import { TResponseApi } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicDepartment: builder.query({
      query: () => ({
        url: "/academic-departments",
        method: "GET",
        // Corrected to `body` for request payload
      }),
      transformResponse: (response: TResponseApi<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});
export const { useGetAllAcademicDepartmentQuery } = academicDepartmentApi;
