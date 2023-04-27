import { useUserManagmentInternalState } from "@/store/userManagement";
import AllUsersTable from "./allUsersTable";
import AllUsersTable2 from "./allUsersTable2";
import UserDetails from "./userDetails";


const AdminUserManagment = () => {
    const {currentItem}=useUserManagmentInternalState()
    return ( 
        <div className=" w-full relative  h-full  rounded-xl">
    {currentItem=='index'&&    <div className="absolute top-0 left-0 right-0 bottom-0 ">

    <AllUsersTable/>
        </div>
    }

    {
        currentItem=='userDetails'&&<div className="w-full h-full min-h-full">
            <UserDetails/>
        </div>
    }
</div> );
}
 
export default AdminUserManagment;


/* 
 <div className=" w-full relative  h-full ">
            <div className="absolute top-0 left-0 right-0 bottom-0 ">

        {currentItem=='index'&&<AllUsersTable2/>}
            </div>
    </div> */