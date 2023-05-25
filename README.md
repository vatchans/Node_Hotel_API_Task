Hi, here's the document for Node Hall Booking API:

1. We can create rooms using this endpoint: POST https://hotel-api-kw60.onrender.com/Create_rooms

Here's the sample request body:

{
    "roomid": "D#234",
    "number_of_seats": 10,
    "amenities": ["Ac", "SwimmingPool", "PrivateTheater", "Spa"],
    "price": 1500
}


If it's a success, the status code will send a response as "Room Successfully Created." Otherwise, it will send an internal server error.

2. We can book rooms using this endpoint: POST https://hotel-api-kw60.onrender.com/Booking_rooms

Here's the sample request body:

{
    "RoomId": "D#234",
    "Customer_Name": "Kishore",
    "startTime": "10 AM",
    "endTime": "8.30 PM"
}


If it's a success, the status code will send a response as "Room Successfully Booked." Otherwise, it will send an internal server error.

3. We can get all the room booked details using this endpoint: GET https://hotel-api-kw60.onrender.com/Booked_room_details

If it's a success, the status code will send a response like this:


{
    "RoomID": "D#234",
    "Booking_Status": "Occupied",
    "Customer_Name": "Kishore",
    "Date": "2023-05-25T13:12:35.079Z",
    "StartTime": "10 AM"
}


Otherwise, it will send an internal server error.

4. We can get all the customer details who have booked their rooms using this endpoint: GET https://hotel-api-kw60.onrender.com/Booked_Customers_details

If it's a success, the status code will send a response like this:


{
    "Customer_Name": "Kishore",
    "RoomID": "D#234",
    "Date": "2023-05-25T13:12:35.079Z",
    "StartTime": "10 AM"
}


Otherwise, it will send an internal server error.

5. We can get customer booking history to know how many times a customer has booked using this endpoint: POST https://hotel-api-kw60.onrender.com/Booking_survey

Here's the sample request body:


{
    "Customer_Name": "Kishore"
}


If it's a success, the status code will send a response like this:

{
    "data": [
        {
            "Customer_Name": "Kishore",
            "Date": "2023-05-25T13:12:35.079Z",
            "Booking_Status": "Success",
            "Booking_Date": "2023-05-25T13:12:35.079Z"
        },
        {
            "Customer_Name": "Kishore",
            "Date": "2023-05-25T13:12:35.079Z",
            "Booking_Status": "Success",
            "Booking_Date": "2023-05-25T13:12:35.079Z"
        }
    ],
    "Booked_history": "Kishore has already booked rooms 2 times"
}

Otherwise, it will send an internal server error.
