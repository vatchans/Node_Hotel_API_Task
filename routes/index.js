var express = require('express');
var router = express.Router();
let rooms=[]
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Create_rooms',(req,res)=>{
  try{
    let{roomid,total_seats,amenities,Price}=req.body
    data={
      RoomId:roomid,
      Number_of_seats:total_seats,
      amenities:amenities,
      Price:Price,
      RoomStatus:"vacant",
      Customer_Name:'',
      Date:"",
      Start_time:"",
      End_time:"",
      Booking_id:"",
      Booking_Status:"",
    }
    rooms.push(data)
    res.status(200).send("Room Successfully Created")
  }
  catch{
    res.status(500).send("Internal server error")
  }
})

router.post("/Booking_rooms",(req,res)=>{
try{
  let {RoomId,Customer_Name,startTime,Endtime,Booking_id}=req.body
 let data= rooms.map((e)=>{
 
    if(e.RoomId===RoomId){
        e.RoomStatus="Occupied";
        e.Customer_Name=Customer_Name;
        e.Date=new Date()
        e.startTime=startTime;
        e.endTime=Endtime;
        e.Booking_id=Booking_id
        e.Booking_Status='Success'
    }
  })
  console.log(data)
  res.status(200).send('Room Booked Successfully')

}
catch{
res.status(500).send("Internal server error")
}
})

router.get('/Booked_room_details',(req,res)=>{
  try{
   let data=rooms.filter((e)=>{if(e.RoomStatus==='Occupied'){
        return e
   }}).map((e)=>{
    let Room_details={
      RoomID:e.RoomId,
      Booking_Status:e.RoomStatus,
      Customer_Name:e.Customer_Name,
      Date:e.Date,
      Starttime:e.startTime,
      Endtime:e.Endtime
    }
    return Room_details
   })

   res.status(200).send(data)
  }
  catch{
   res.status(500).send("Internal Server error")
  }
})

router.get('/Booked_Customers_details',(req,res)=>{
  try{
   let data=rooms.filter((e)=>{if(e.RoomStatus==='Occupied'){
        return e
   }}).map((e)=>{
    let Customer_details={
      Customer_Name:e.Customer_Name,
      RoomID:e.RoomId,
      Date:e.Date,
      Starttime:e.startTime,
      Endtime:e.Endtime
    }
    return Customer_details
   })

   res.status(200).send(data)
  }
  catch{
   res.status(500).send("Internal Server error")
  }
})

router.post('/Booking_survey',(req,res)=>{
  try{
   let{Customer_Name}=req.body
   let Booking_history=rooms.filter((e)=>{
    if(e.Customer_Name===Customer_Name){
      return e
    }
   })
   let data=Booking_history.map((e)=>{
    let Data={
      Customer_Name:e.Customer_Name,
      RoomID:e.RoomID,
      Date:e.Date,
      Booking_id:e.Booking_id,
      Booking_Status:e.Booking_Status,
      Booking_Date:e.Date,
    }
    return Data
   })
   res.status(200).send({data, Booked_history:`${Customer_Name} has Already Booked Rooms ${Booking_history.length} times`,})
  }
  catch{
   res.status(500).send("Internal server Error")
  }
})

module.exports = router;
