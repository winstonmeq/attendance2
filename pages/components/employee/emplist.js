import { useState } from "react";
import DataTable from "react-data-table-component";
import { empList } from "../../../axios_con/employee_request";
import { useEffect } from "react";
import Image from "next/image";
import { Flex, Box, Avatar, Button, Spacer } from "@chakra-ui/react";
import Add_employee from "./add_employee";
import EmpAsign from "./empAsign";
import { useSession } from "next-auth/react";
import Loader from "../loader";
import { useRouter } from "next/router";

const Emplist = () => {
  const [data, setdata] = useState([]);
  const [dataloc, setdataloc] = useState([]);

  // const [modalopen, setmodalopen] = useState(false);
  // const [bioId,setbioId] = useState('')
  // const [fName,setfName] = useState('')
  const [userId, setuserId] = useState("");
  const { data: session } = useSession();

  const router = useRouter();



  const getData = async (userId) => {
    const payload = { userId };

    const emplist = await empList(payload);

    // console.log(emplist)

    if (!emplist.hasError == true) {
      if (!emplist.body == "") {
        setdata(emplist.body);
      }
    } else {
      console.log("wala data");
    }
  };

  const rload = () => {
    session && getData(session.user._id);
  };

  useEffect(() => {
    session && getData(session.user._id);
  }, [session]);

  const columns = [
    {
      name: "BioID",
      selector: (row) => row.bioId,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.fName,
      sortable: true,
    },

    {
      name: "Last Name",
      selector: (row) => row.lName,
      sortable: true,
    },

    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
    },

    {
      name: "Office",
      selector: (row) => row.office,
      sortable: true,
    },
    {
      name: "Profile",
      cell: (d) => <Avatar size={"sm"} src={d.image}></Avatar>,
    },

    {
      name: "Allowed",
      cell: (d) => (
        <Flex direction={"row"}>
          {d.locInfo.map((e, i) => (
            <Box key={i} p={1}>
              {e.locName},{" "}
            </Box>
          ))}
        </Flex>
      ),
    },

    {
      name: "Action",
      cell: (d) => (
        <Flex direction={"row"}>
          <EmpAsign
            onreload={rload}
            empid={d._id}
            bioid={d.bioId}
            fname={d.fName}
            lname={d.lName}
          />
        </Flex>
      ),
    },
  ];

   if (data.length == 0) {
        return <Loader />;
      }



  return (
    <Flex direction={"column"}>
      <Add_employee />
      {console.log("list", data)}
      <DataTable
        columns={columns}
        data={data}
        title="Employee Lists"
        defaultSortFieldId="createdAt"
        pagination
      />
    </Flex>
  );
};

export default Emplist;
