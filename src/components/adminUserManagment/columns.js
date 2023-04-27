export const COLUMNS=[
    {
        Header:'USER ID',
        accessor:'id'
    },
    {
        Header:'USER NAME',
        accessor:'user_name'
    },
    {
        Header:'EMAIL ID',
        accessor:'email'
    },
    {
        Header:'PSN ID',
        accessor:'psn_id'
    },
    {
        Header:'IP ADDRESS',
        accessor:'ip_adress'
    },
    {
        Header:'ACTION',
        
        Cell: row => (
            <div className="relative">
              <button
                className="flex items-center text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => setSelectedRow(row.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.5 14.5v-9l1-1h8l1 1v9l-1 1h-8l-1-1zm9.5-9.5v-2h-2l-1-1h-6l-1 1H1v2h1v9l1 1h12l1-1v-9h1z" clipRule="evenodd" />
                </svg>
                Edit
             </button>
              {selectedRow === row.id && (
                <ul className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-10">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Warn</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ban</li>
                </ul>
              )}
            </div>
          )
    
      
    },
]