import { useUserManagmentInternalState } from "@/store/userManagement";
import { useMemo, useState } from "react";
import { useTable ,useGlobalFilter,} from "react-table";
import ClickAwayListener from "react-click-away-listener";
import {format} from 'date-fns'


const Penality = () => {
const {selectedUser}=useUserManagmentInternalState()
const [selectedRow, setSelectedRow] = useState("");


const COLUMNS=[
    {
        Header:"PENALTY TYPE",
        accessor: "type",
    },
    {
        Header:"DATE & TIME",
        accessor: "time",
        Cell:({value})=>{
            const timestamp = '1680733363';
const date = new Date(timestamp * 1000);
const formattedDate = format(new Date(Number(value)), 'd-m-yyyy h:mm a');


            return  formattedDate}
    },
    {
        Header:"POINTS",
        accessor: "points",
    },
    {
        Header:"PENALTY ADDED BY",
        accessor: "added_by",
    },
    {
        Header:"STATUS",
        accessor: "status",
    },
    {
        Header:"ACTION",
    }

]


const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => selectedUser.penalties, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  
  );
  
  const {globalFilter}=state

  const HandelDropDownFilter=(e)=>{

   // setGlobalFilter('che')
        const filter =e.target.value
        if(filter=='all'){
            setGlobalFilter('')
        } else{

            setGlobalFilter(filter)
        }
     
  }
  return (
    <div className="w-full h-full pb-8 ">
      <div className="w-full h-full   relative">
      
        <div
          style={{
            background:
              "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "blur(28.5px)",
          }}
          className="absolute z-10 rounded-[10px] scrollbar-hide  top-7 left-0 right-0 max-h-full   overflow-scroll bg-black"
        >
          <div className="w-full h-fit  font-inter ">
            <div className="w-full h-[78px] items-center flex justify-between pl-4 pr-5">
              <h2 className=" font-semibold text-sm text-[#cecee0]">
                Penalty History
              </h2>

              <div className="flex gap-4 max-[1227px]:gap-2">
                <div
                  style={{
                    background:"linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
                    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
                  
                  }}
                  className="h-10 w-[150px] max-[1227px]:w-[120px] rounded-lg  "
                >
                  <div className="w-full h-full  relative rounded-[8px]">
                    <label
                      htmlFor="Search_Penalies"
                      className="mb-2 text-sm font-medium  sr-only "
                    >
                      Search
                    </label>

                    <div className="absolute inset-y-0  left-0 flex items-center pl-3 max-[1227px]:pl-2 pointer-events-none">
                      <svg
                      
                        className=" w-[17px] h-[18px] max-[1227px]:w-[14px] max-[1227px]:h-[14px]"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        
                      >
                        <path
                          d="M12.1498 11.2155H11.3819L11.1098 10.9552C12.0623 9.85615 12.6358 8.42929 12.6358 6.8771C12.6358 3.41599 9.80732 0.610474 6.3179 0.610474C2.82847 0.610474 0 3.41599 0 6.8771C0 10.3382 2.82847 13.1437 6.3179 13.1437C7.88279 13.1437 9.32133 12.5749 10.4294 11.6301L10.6918 11.9V12.6617L15.5517 17.4725L17 16.036L12.1498 11.2155ZM6.3179 11.2155C3.89766 11.2155 1.94397 9.2777 1.94397 6.8771C1.94397 4.4765 3.89766 2.53867 6.3179 2.53867C8.73814 2.53867 10.6918 4.4765 10.6918 6.8771C10.6918 9.2777 8.73814 11.2155 6.3179 11.2155Z"
                          fill="#EAEAFF"
                          fillOpacity="0.5"
                        />
                      </svg>
                    </div>

                    <input
                    value={globalFilter}
                    onChange={(e)=>{setGlobalFilter(e.target.value)}}
                      id="Search_Penalies"
                      className="block w-full h-full pl-[45px] max-[1227px]:pl-[25px]  text-sm max-[1227px]:text-xs bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "
                      placeholder="Search Penalies"
                    />
                  </div>
                </div>
                
                <select
                style={{
                    background:"linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
                    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
                    backdropFilter: "backdrop-filter: blur(28.5px)",
                        }}
                    className=" w-[86px] h-[38px] max-[1227px]:w-[60px]  text-xs rounded-lg  block  p-1.5 bg-[rgba(30,30,30,0.69)]   text-white  "

                    onChange={(e)=>{HandelDropDownFilter(e)}}
                >
                        <option className="bg-[#1E1E1E] text-sm" value='all'>All</option>
                        <option className="bg-[#1E1E1E] text-sm" value='cheating' >Cheating</option>
                        <option className="bg-[#1E1E1E] text-sm" value='hacking' >Hacking</option>
                        <option className="bg-[#1E1E1E] text-sm" value='ddosing' > Ddosing</option>
                </select>

                <button 
                style={{
                    background:"linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
                    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
                    backdropFilter: "backdrop-filter: blur(28.5px)",
                        }}
                 className="w-[86px] h-[38px] max-[1227px]:w-[60px]  rounded-lg text-sm max-[1227px]:text-xs font-medium text-[#cecee0]">History</button>

                <button className="w-[86px] h-[38px] max-[1227px]:w-[60px] bg-[#FFB53B] rounded-lg text-sm font-medium text-white">
                        New
                </button>
              </div>
            </div>
          </div>
        <div>
        <table {...getTableProps()}  className=" w-full">
            <thead  >
            {headerGroups.map((headerGroup)=>{
                return <tr
                    style={{
                        background:'linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)',
                        boxShadow:'inset 0px 0px 3px rgba(255, 255, 255, 0.31)',
                      //  backdropFilter:'blur(28.5px)'
                        }}
                 className="text-left  text-xs max-[1227px]:text-[10px] font-inter font-medium text-white w-full h-[61px]" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column=>{
                    
                    if(column.Header=='ACTION'){
                        return <th className="text-left pl-2 pr-4 " {...column.getHeaderProps()}>{column.render('Header')}</th>
                    }
                    return <th className="px-3 max-[1227px]:px-1 " {...column.getHeaderProps()}>{column.render('Header')}</th>
                })}
                    
                </tr>
            })}
                     
            </thead>
            <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr className="h-[65px] relative  text-xs max-[1227px]:text-[10px] text-[#adadad] font-inter" {...row.getRowProps()}>
              {row.cells.map(cell => {

                    if (cell.column.Header == "ACTION") {
                      return (
                        <td className=" text-left pl-0">
                          <div  className="relative z-50">
                            <button
                              className="flex  w-full "
                              onClick={() => {
                                setSelectedRow(cell.row.original.time);
                                
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
                            {selectedRow==cell.row.original.time && (
                              <ClickAwayListener onClickAway={()=>{setSelectedRow('')}}>

                              <ul 
                              style={{background:'linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)',boxShadow:'inset 0px 0px 3px rgba(255, 255, 255, 0.31)',backdropFilter:'blur(28.5px)'}}
                              className="absolute text-center z-50 right-2 mt-2 py-2 w-36 h-[91px]   rounded-[9px]  ">
                                <li className="px-3 font-inter text-sm text-[#adadad] py-2 hover:bg-gray-100 cursor-pointer">
                                  Warn
                                </li>
                                <li className="px-3 py-2 font-inter text-sm text-[#adadad] border-t border-t-[#ccccde] border-opacity-[26%] hover:bg-gray-100 cursor-pointer">
                                  Ban
                                </li>
                              </ul>
                              </ClickAwayListener>
                            )}
                          </div>
                        </td>
                      );
                    }

                    if(cell.column.Header == "PENALTY ADDED BY"){
                            
                        return <td  className='px-3 h-full    max-[1227px]:px-1 '>
                                    <div className="flex items-center gap-5  h-full">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z" fill="white"/>
                                </svg>
                                <p>{cell.render("Cell")}</p>
                                    </div>
                        </td>

                    }

                    if(cell.column.Header=='STATUS'){
                        return <td className='px-3 h-full  max-[1227px]:px-1'>
                                <span className={`px-3 py-1 max-[1227px]:px-1 rounded-3xl text-xs ${cell.value=='warning'?'text-[#ec9e08] bg-[#EC9E08] bg-opacity-[18%]':'text-[#D41212] bg-[#D41212] bg-opacity-[14%]'}`}>{cell.render("Cell")}</span>
                        </td>
                    }
                    return (
                      <td
                      className="px-3 max-[1227px]:px-1 "
                        //className="whitespace-nowrap px-3 py-3   "
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
        
        </div>
      </div>
    </div>
  );
};

export default Penality;
