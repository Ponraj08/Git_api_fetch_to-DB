import axios from "axios";


function Index() {

  const gerstart = async (e:any) => {

    e.preventDefault();
      console.log("hii")
    try {
    window.location.assign("http://localhost:5002/gitTableData/github")

    } catch (err) {
      console.log(err,"error mesg");
    }
  };

  return (
    <>
      <h1 className="m-5">welcome</h1>
      <button
        
        onClick={(e) => {gerstart(e)}}
        className="btn btn-primary m-5"
      >
        get started
      </button>
    </>
  );
}

export default Index;
