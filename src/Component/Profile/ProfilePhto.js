import raed from "/home/raed/Desktop/project/app/src/raed.jpg" ; 
function ProfilePhoto()  {
return(
    <div className="container">
    <h1 className="title" >Profile  </h1>
    <p className="paragraph">profil photo  : </p>
    <img  className={"pimage"} src= {raed} alt="myProfileImage"  />
    
    
    </div>


) ; 
}
export default ProfilePhoto ;