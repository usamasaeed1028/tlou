export const IdFilter=({column})=>{

    console.log(column)
    const {filterValue,setFilter}=column

    return <input
                  className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "

        value={filterValue||''}
        onChange={(e)=>setFilter(e.target.value)}
        placeholder="Search ID"
    />
}
export const UserNameFilter=({column})=>{
console.log(column)
    const {filterValue,setFilter}=column

    return <input
                  className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "

        value={filterValue||''}
        onChange={(e)=>setFilter(e.target.value)}
        placeholder="Search USER NAME"
    />
}
export const EmailFilter=({column})=>{
    console.log(column)
    const {filterValue,setFilter}=column

    return <input
                  className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "

        value={filterValue||''}
        onChange={(e)=>setFilter(e.target.value)}
        placeholder="Search EMAIL"
    />
}
export const PSNFilter=({column})=>{
    console.log(column)
    const {filterValue,setFilter}=column

    return <input
                  className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "

        value={filterValue||''}
        onChange={(e)=>setFilter(e.target.value)}
        placeholder="Search PSN ID"

    />
}
export const IPAdressFilter=({column})=>{
    console.log(column)
    const {filterValue,setFilter}=column

    return <input
                  className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "

        value={filterValue||''}
        onChange={(e)=>setFilter(e.target.value)}
        placeholder="Search IP ADDRESS"
    />
}

export const GLObalFilter=({globalFilter,setGlobalFilter})=>{


    return <input
    value={globalFilter || ""}
    onChange={(e) => {
      setGlobalFilter(e.target.value);
    }}
    id="default-search"
    className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "
    placeholder="Search All Columns"
  />
}