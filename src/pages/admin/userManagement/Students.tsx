import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParametter } from "../../../types/global";
import { TSemester } from "../../../types/academicSemesterType";
import { useGetAllStudentQuery } from "../../../redux/features/user/createStudent.Api";
// import { useState } from "react";

const Students = () => {
  const [params, setParams] = useState<TQueryParametter[] | undefined>(
    undefined
  );
  const { data: studentData, isFetching } = useGetAllStudentQuery(params);
  console.log(studentData);
  const tableData = studentData?.data?.map(
    ({ fullName, academicDepartment, id }) => ({
      name: fullName,
      department: academicDepartment.name,
      roll: id,
    })
  );
  type DataType = Pick<TSemester, "name" | "year" | "startMonth" | "endMonth">;
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Roll",
      dataIndex: "roll",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <Space>
            <Button>Updata</Button>
            <Button>Block</Button>
            <Button>Updata</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryFilter: TQueryParametter[] = [];
      filters.name?.forEach((item) =>
        queryFilter.push({ name: "name", value: item })
      );
      setParams(queryFilter);
    }
  };
  return (
    <div>
      <Table<DataType>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default Students;

// { _id, name, year, startMonth, endMonth }) => ({
//     key: _id,
//     name,
//     year,
//     startMonth,
//     endMonth,
//   }