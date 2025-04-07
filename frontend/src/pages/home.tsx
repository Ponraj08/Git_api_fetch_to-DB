import axios from "axios";
import { useEffect, useState } from "react";


interface Idatas {

  id:string
  name: string,
  node_id: string,
  full_name: string,
  html_url: string,
  description: string|null,
}


function Home() {


  const [overalldata, setOveralldata] = useState<Idatas[]>([]);

  const [editinput, setEditinput] = useState(false);
  const [nameEdit,setNameEdit]=useState("")
  const [node_idEdit,setNode_idEdit]=useState("")
  const [full_nameEdit,setFull_nameEdit]=useState("")
  const [html_urlEdit,setHtml_urlEdit]=useState("")
  const [descriptionEdit,setdescriptionEdit]=useState("")
  const [idedit,setIdEdit]=useState("")
  
  

  //get method

  const gettingUsers = async () => {
    try {

      const response:any = await axios.get(
        "http://localhost:5002/gitTableData/getDatas" );
      console.log(response);
      const data: Idatas[] = response.data.map((data: Idatas) => ({
        id:data.id,
        name: data.name,
          node_id: data.node_id,
          full_name: data.full_name,
          html_url: data.html_url,
          description: data.description==null?"NULL":data.description,
      }));
      setOveralldata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    gettingUsers();
  }, []);

  //delet users

  const deletingUsers = async (id: string, e: any) => {
    try {
      console.log(id);
      e.preventDefault();

    
      await axios.delete(`http://localhost:5002/gitTableData/deletdatas/${id}`);
      gettingUsers();
    } catch (err) {
      console.log(err)
    }
  };

  //edit users

 

  const editusers = async (id: string, e: any) => {
    try {
        e.preventDefault();


        await axios.put(`http://localhost:5002/gitTableData/updatedatas/${id}`,
          {
              name: nameEdit,
              node_id: node_idEdit,
              full_name: full_nameEdit,
              html_url: html_urlEdit,
              description: descriptionEdit
          }
      );
      gettingUsers();
    } catch (err) {
      console.log(err)

    }
  };



  return (
    <>

    <div>
      <h1 className="m-5">Git Repo Table</h1>
    </div>

      <table className="table  table-bordered table-hover m-5  me-5">
        <thead>
          <tr>
            <th>s.no</th>
            <th>name</th>
            <th>node_id</th>
            <th>full_name</th>
            <th>html_url</th>
            <th>description</th>
            <th>delet</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {overalldata.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.node_id}</td>
              <td>{data.full_name}</td>
              <td>{data.html_url}</td>
              <td>{data.description}</td>
              <td>
                <button className="btn btn-danger m-5 fs-3"
                  onClick={(e) => {
                    deletingUsers(data.id, e);
                  }}
                >
                  delet
                </button>
              </td>
              <td>
                <button

                className="btn btn-warning m-5 fs-3"
                  onClick={() => {
                  setEditinput(true)
                  setIdEdit (data.id)
                  }}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!editinput ? (
        <div></div>
      ) : 
      (
        <div>

            <h1 className="m-5">Edit Git Table Datas</h1>
          <div className="edit_input">
            <input type="text" placeholder="name" className="form-control ms-5 mb-4"  onChange={(e) => {setNameEdit(e.target.value);}} style={{width:"500px"}}/>
          </div>

          <div className="edit_input">
            <input type="text"  placeholder="Node_id" className="form-control ms-5 mb-4"  required  onChange={(e) => { setNode_idEdit(e.target.value);}} style={{width:"500px"}}/>
          </div>

          <div className="edit_input">
            <input type="text"  placeholder="Fill_name" className="form-control ms-5 mb-4" required  onChange={(e) => { setFull_nameEdit(e.target.value);}} style={{width:"500px"}}/>
          </div>

          <div className="edit_input">
            <input type="text"  placeholder="html_url" className="form-control ms-5 mb-4"  required  onChange={(e) => { setHtml_urlEdit(e.target.value);}} style={{width:"500px"}}/>
          </div>

          <div className="edit_input">
            <input type="text"  placeholder="description" className="form-control ms-5 mb-4" required  onChange={(e) => { setdescriptionEdit(e.target.value);}} style={{width:"500px"}}/>
          </div>

          <button className="btn btn-success m-5 fs-3" onClick={(e)=>{editusers(idedit,e)}}>update</button>
        </div>
      )}
    </>
  );
}

export default Home;