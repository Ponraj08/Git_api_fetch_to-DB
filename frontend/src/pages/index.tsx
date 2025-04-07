import axios from "axios";


function Index() {

  const gerstart = async () => {
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
        
        onClick={() => {gerstart()}}
        className="btn btn-primary m-5"
      >
        get started
      </button>
    </>
  );
}

export default Index;
