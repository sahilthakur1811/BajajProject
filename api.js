async funtion k(){

  try{
  const res=await fetch();
  const data=await res.json();
  console.log(data);
  }
  catch(err){
    console.log(err);
  }
}
