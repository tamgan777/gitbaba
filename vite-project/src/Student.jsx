import "./student.css"
function Student ({Student})
{
  return(
    <div className="student-card" >
        
      <h1>STUDENT ID CARD</h1>
      <h2>{Student.idCollegeName}</h2>
      <img src="student.jpg" alt="idcardimage" width="100px"/>
        <p className="name" >student name:{Student.idName}</p>
        <p className="roll">student rollno:{Student.idNumber}</p>
        <p className="address">student address:{Student.idAddress}</p>
        <p className="blood">student bloodgroup:{Student.idBloodGroup}</p>




    </div>
  )
}
export default Student;