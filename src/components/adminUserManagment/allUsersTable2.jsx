import { useTable, usePagination, useRowSelect ,useSortBy,useGlobalFilter} from "react-table";
import { IndeterminateCheckbox } from "./checkbox";
import MOCK_DATA3 from "./MOCK_DATA3.json";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import tableUserProfilePicture from "../../../public/tableUserProfilePicture.png";
import { useUserManagmentInternalState } from "@/store/userManagement";
import ClickAwayListener from "react-click-away-listener";

/* 
cell:(row)=>(
        <div className="flex gap-1">
            <Image src={tableUserProfilePicture.src} width={35} height={35} alt="user profile picture" />
            <p>{row.id}</p>
        </div>
      )
*/

const AllUsersTable = () => {
  const { setSelectedUser, setUserManagmentCurrentItem } =
    useUserManagmentInternalState();
  const [selectedRow, setSelectedRow] = useState("");

  useEffect(() => {
    //console.log(selectedRow);
  }, [selectedRow]);
  ////console.log(selectedRow)
  const COLUMNS = [
    {
      Header: "USER ID",
      Cell: (row) => {
        ////console.log(row.row.original)
        return (
          <div
          key={row.row.original.id}
            onClick={() => {
              console.log(row.row.original)
              handleUserSelection(row.row.original);
            }}
            className="relative flex gap-4 items-center hover:cursor-pointer"
          >
            <Image
              src={tableUserProfilePicture.src}
              width={35}
              height={35}
              alt="user profile picture"
              className="rounded-full"
            />
            <span>{row.row.original.id}</span>
          </div>
        );
      },
    },
    {
      Header: "USER NAME",
      accessor: "user_name",
    },
    {
      Header: "EMAIL ID",
      accessor: "email",
    },
    {
      Header: "PSN ID",
      accessor: "psn_id",
    },
    {
      Header: "IP ADDRESS",
      accessor: "ip_adress",
    },
    {
      Header: "ACTION",

      Cell: (row) => {
        useEffect(() => {
          //console.log(selectedRow);
        }, [selectedRow]);
        return (
          <div className="relative">
            <button
              className="flex  w-full "
              onClick={() => {
                setSelectedRow(row.row.id);
                //console.log(row.row.id == selectedRow);
              }}
            >
              <svg
                width="4"
                height="19"
                viewBox="0 0 4 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path
                  d="M2 4.35328C2.39556 4.35328 2.78224 4.23694 3.11114 4.01896C3.44004 3.80098 3.69639 3.49115 3.84776 3.12867C3.99914 2.76618 4.03874 2.36731 3.96157 1.9825C3.8844 1.59768 3.69392 1.24421 3.41421 0.966775C3.13451 0.68934 2.77814 0.500405 2.39018 0.423861C2.00222 0.347316 1.60009 0.386602 1.23463 0.536748C0.869182 0.686895 0.556825 0.94116 0.337062 1.26739C0.117299 1.59362 1.07779e-06 1.97716 1.07779e-06 2.36951C1.07779e-06 2.89564 0.210715 3.40022 0.585788 3.77225C0.960861 4.14428 1.46957 4.35328 2 4.35328ZM2 14.2721C1.60444 14.2721 1.21776 14.3885 0.888861 14.6065C0.559963 14.8244 0.303617 15.1343 0.152242 15.4967C0.000866562 15.8592 -0.0387401 16.2581 0.0384303 16.6429C0.115601 17.0277 0.306083 17.3812 0.585788 17.6586C0.865493 17.9361 1.22186 18.125 1.60982 18.2015C1.99778 18.2781 2.39992 18.2388 2.76537 18.0887C3.13082 17.9385 3.44318 17.6842 3.66294 17.358C3.8827 17.0318 4 16.6482 4 16.2559C4 15.7298 3.78929 15.2252 3.41421 14.8532C3.03914 14.4811 2.53043 14.2721 2 14.2721ZM2 7.32893C1.60444 7.32893 1.21776 7.44528 0.888861 7.66326C0.559963 7.88124 0.303617 8.19106 0.152242 8.55355C0.000866562 8.91603 -0.0387401 9.3149 0.0384303 9.69972C0.115601 10.0845 0.306083 10.438 0.585788 10.7154C0.865493 10.9929 1.22186 11.1818 1.60982 11.2584C1.99778 11.3349 2.39992 11.2956 2.76537 11.1455C3.13082 10.9953 3.44318 10.7411 3.66294 10.4148C3.8827 10.0886 4 9.70506 4 9.3127C4 8.78658 3.78929 8.282 3.41421 7.90997C3.03914 7.53794 2.53043 7.32893 2 7.32893Z"
                  fill="#CCCCDE"
                />
              </svg>
            </button>
            {/* {selectedRow === row.id && ( */}
            {selectedRow == row.row.id && (
              <ul className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Warn
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Ban
                </li>
              </ul>
            )}
          </div>
        );
      },
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA3, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    state,
    pageCount,
    setPageSize,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div className="">
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => {
            return (
              <div className="text-center">
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            );
          },
        },
        ...columns,
      ]);
    }
  );

  const handleUserSelection = (user) => {
    ////console.log(user)
    setSelectedUser(user);

    setUserManagmentCurrentItem("userDetails");
  };

  const { pageIndex, pageSize } = state;
  return (
    <div
      style={{
        background:
          "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "backdrop-filter: blur(28.5px)",
      }}
      className="rounded-xl w-full h-full py-3 flex flex-col gap-[18px] font-inter"
    >
      <div className="h-10 pl-10 pr-3 flex justify-between">
        <h1 className="text-xl  lg:text-2xl xl:text-3xl    font-inter font-semibold leading-[150%] tracking-[0.15px] text-[#ccccde]">
          User List
        </h1>
        <button className="rounded-lg bg-[#FFB538] px-[21px] py-[7px]   text-white bg-opacity-90 font-inter font-medium text-sm  ">
          Add user
        </button>
      </div>

      <div className="flex-grow flex flex-col  w-full overflow-x-scroll text-sm 2xl:text-md scrollbar-hide">
        <table {...getTableProps()} className="text-white   w-full ">
          <thead
            style={{
              background:
                "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "backdrop-filter: blur(28.5px)",
            }}
            className="opacity-[85%] "
          >
            {headerGroups.map((headerGroup) => (
              <tr className="" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  if (column.id == "selection" ) {
                    return (
                      <th
                        scope="col"
                        className=" px-3 py-3"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    );
                  }
                  return (
                    <th
                      scope="row"
                      className=" relative  text-left px-3 py-3 "
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <span
                        style={{
                          background:
                            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
                          boxShadow:
                            "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
                          backdropFilter: "backdrop-filter: blur(28.5px)",
                        }}
                        className="absolute -left-[1px] top-1/2  -translate-y-1/2 w-0.5 h-3 "
                      ></span>
                      <span>{column.render("Header")}</span>
                      <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-[#ADADAD]">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  style={{
                    boxShadow: "inset 0px 0px 1px rgba(207 , 207, 226, 0.31)",
                  }}
                  className=""
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => {
                    //ACTION
                    //console.log(cell.row.original.id);
                    if (cell.column.Header == "ACTION") {
                      return (
                        <td >
                          <div >
                            <button
                              className="flex  w-full "
                              onClick={() => {
                                setSelectedRow(cell.row.original.id);
                                //console.log(cell.row.original.id == selectedRow);
                              }}
                            >
                              <svg
                                width="4"
                                height="19"
                                viewBox="0 0 4 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto"
                              >
                                <path
                                  d="M2 4.35328C2.39556 4.35328 2.78224 4.23694 3.11114 4.01896C3.44004 3.80098 3.69639 3.49115 3.84776 3.12867C3.99914 2.76618 4.03874 2.36731 3.96157 1.9825C3.8844 1.59768 3.69392 1.24421 3.41421 0.966775C3.13451 0.68934 2.77814 0.500405 2.39018 0.423861C2.00222 0.347316 1.60009 0.386602 1.23463 0.536748C0.869182 0.686895 0.556825 0.94116 0.337062 1.26739C0.117299 1.59362 1.07779e-06 1.97716 1.07779e-06 2.36951C1.07779e-06 2.89564 0.210715 3.40022 0.585788 3.77225C0.960861 4.14428 1.46957 4.35328 2 4.35328ZM2 14.2721C1.60444 14.2721 1.21776 14.3885 0.888861 14.6065C0.559963 14.8244 0.303617 15.1343 0.152242 15.4967C0.000866562 15.8592 -0.0387401 16.2581 0.0384303 16.6429C0.115601 17.0277 0.306083 17.3812 0.585788 17.6586C0.865493 17.9361 1.22186 18.125 1.60982 18.2015C1.99778 18.2781 2.39992 18.2388 2.76537 18.0887C3.13082 17.9385 3.44318 17.6842 3.66294 17.358C3.8827 17.0318 4 16.6482 4 16.2559C4 15.7298 3.78929 15.2252 3.41421 14.8532C3.03914 14.4811 2.53043 14.2721 2 14.2721ZM2 7.32893C1.60444 7.32893 1.21776 7.44528 0.888861 7.66326C0.559963 7.88124 0.303617 8.19106 0.152242 8.55355C0.000866562 8.91603 -0.0387401 9.3149 0.0384303 9.69972C0.115601 10.0845 0.306083 10.438 0.585788 10.7154C0.865493 10.9929 1.22186 11.1818 1.60982 11.2584C1.99778 11.3349 2.39992 11.2956 2.76537 11.1455C3.13082 10.9953 3.44318 10.7411 3.66294 10.4148C3.8827 10.0886 4 9.70506 4 9.3127C4 8.78658 3.78929 8.282 3.41421 7.90997C3.03914 7.53794 2.53043 7.32893 2 7.32893Z"
                                  fill="#CCCCDE"
                                />
                              </svg>
                            </button>
                            {/* {selectedRow === row.id && ( */}
                            {selectedRow==cell.row.original.id && (
                              <ClickAwayListener onClickAway={()=>{setSelectedRow('')}}>

                              <ul 
                              style={{background:'linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)',boxShadow:'inset 0px 0px 3px rgba(255, 255, 255, 0.31)',backdropFilter:'blur(28.5px)'}}
                              className="absolute text-center z-50 right-2 mt-2 py-2 w-36 h-[91px]   rounded-[9px]  ">
                                <li className="px-4 font-inter text-sm text-[#adadad] py-2 hover:bg-gray-100 cursor-pointer">
                                  Warn
                                </li>
                                <li className="px-4 py-2 font-inter text-sm text-[#adadad] border-t border-t-[#ccccde] border-opacity-[26%] hover:bg-gray-100 cursor-pointer">
                                  Ban
                                </li>
                              </ul>
                              </ClickAwayListener>
                            )}
                          </div>
                        </td>
                      );
                    }
                    return (
                      <td
                        className="whitespace-nowrap px-3 py-3   "
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className=" ml-auto  h-[72px] flex items-center text-white gap-5 pr-8">
        <select
          style={{
            //   background:"linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "backdrop-filter: blur(28.5px)",
          }}
          className="  text-sm rounded-lg  block  p-2.5 bg-[rgba(30,30,30,0.69)]   text-white  "
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className="flex gap-8">
          <p>Rows per page:</p>
          <p>
            {pageIndex * pageSize + 1}-{pageIndex * pageSize + pageSize} of{" "}
            {MOCK_DATA3.length}
          </p>
        </span>
        <button className="" onClick={previousPage} disabled={!canPreviousPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={canPreviousPage ? "#FFB53B" : "white"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button onClick={nextPage} disabled={!canNextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={canNextPage ? "#FFB53B" : "white"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllUsersTable;
