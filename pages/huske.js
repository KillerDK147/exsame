// import { Fragment } from "react";
// import { useState, useEffect } from "react";
// import httpService from "../service/httpService";
// import CardBord from "../comp/CardBord";
// import { getCurrentUser } from "../service/authService";
// import { getBruger } from "../service/huskeService";
const Huske = () => {
  //   const [Bruger, setBruger] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         await getBruger(getCurrentUser()._id).then((res) => {
  //           console.log(res.data);
  //           setBruger(res.data);
  //         });
  //         console.log(getCurrentUser()._id);
  //       } catch (e) {
  //         console.log("pizza er godt");
  //         console.log(e.response.error);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(Bruger[0]);
  return (
    <h1>Huske</h1>
    //     <div>
    //       <h1>Huske</h1>
    //       <CardBord cards={Bruger} />
    //     </div>
  );
};

export default Huske;
