import '../App.css';



function loopTest(){
  const test_titles = [
    {
      title: 'U.S. Event, Landmarks & Monuments',
      genre: 'U.S. History'
    },
    {
      title: 'Great Lines from Great Works',
      genre: 'Literature'
    },
    {
      title: 'Famous Discoveries of Biological Science',
      genre: 'Biology'
    },
  ];

  for(var i = 0; i < test_titles.length; i++){
    document.getElementById('make').innerHTML = "this here";
  }
}
function Title() {
 
  return (
    <div className="Title">
        
        <h2 id="make">U.S. Events, Landmarks & Monuments</h2>
    </div>
  );
}

export default Title;
