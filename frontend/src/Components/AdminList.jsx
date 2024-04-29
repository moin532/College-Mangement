import React, { useEffect } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import FistYearStudent from "./FistYearStudent";
import ThirdStudent from "./ThirdStudent";
import MidSecStd from "./MidSecStd";
import { AllStudentFetch } from "../action/StudentAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AdminList = () => {
  const dispatch = useDispatch();


  const { loading, std, error } = useSelector((state) => state.optStudent);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(AllStudentFetch());
  }, [error, dispatch]);

 if(!std){
  return <div>...loading</div>
}


 return (
    <>
      <div className="overflow-x-auto mt-7">
        <Tabs aria-label="Full width  tabs" style="fullWidth">
          <Tabs.Item active title="1st Year Students" icon={HiUserCircle}>
            <FistYearStudent  data = {std}/>
          </Tabs.Item>
          <Tabs.Item title="2 nd Year Students" icon={MdDashboard}>
            <MidSecStd data={std} />
          </Tabs.Item>
          <Tabs.Item title="3 rd Year Students" icon={HiAdjustments}>
            <ThirdStudent data={std}/>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default AdminList;
