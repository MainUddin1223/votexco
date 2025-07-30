

export default function Home() {
  return (
<div
  style={{
    display: "flex",
    justifyContent: "center", // center horizontally
    alignItems: "center", // center vertically
    height: "100vh", // full screen height
    backgroundColor: "#f9f9f9",
  }}
>
  <div style={{ textAlign: "center" }}>
    <h1 style={{fontWeight:'1.5rem',margin:'15px'}}>Welcome to <span style={{color:'red',fontSize:'50px'}}>VOT<span style={{color:'green'}}>Ex</span> CO.,</span></h1>
    <h2 style={{margin:'5px'}}>We are under construction</h2>
    <p>If you have any query please contact us</p>
    <div style={{margin:'5px',fontWeight:"500",fontSize:"25px",color:'blue',}}>
      <p style={{margin:'5px'}}>info@votexco.com</p>
      <p>harun@votexco.com</p>
    </div>
  </div>
</div>

  );
}
