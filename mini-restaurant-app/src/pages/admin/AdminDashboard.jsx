import { useEffect, useState } from "react";
import {getRestaurants, saveRestaurants} from "../../utils/localStorage"
const AdminDashboard = () => {
    const[restaurants, setRestaurants] = useState([]);
    const[formData, setFormData] = useState({
        restaurantName : "",
        address: "",
        type : "",
        parkingLot: "",
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",

    });

    useEffect(()=> {
        setRestaurants(getRestaurants());
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleAdd = (e) => {
        e.preventDefault();

    const { restaurantName, address, type, parkingLot } = formData;

        if(!restaurantName || !address || !type || parkingLot === ""){
            alert("Please fill all fields");
            return;
        }

        const newRestaurant = {
            restaurantID: Date.now(),
            ...formData,
            parkingLot: parkingLot === "true",
        };

        const updated = [...restaurants, newRestaurant];
        setRestaurants(updated);
        saveRestaurants(updated);

        alert("Restaurant added");

        setFormData({
            restaurantName: "",
            address: "",
            type: "",
            parkingLot:"",
            image: formData.image,
        });
    };


    return (

        <div className="container">
            <h2>Admin Dashboard</h2>
            <div style={{display: "flex", gap : "20px"}}>
                <form onSubmit={handleAdd}>
                    <h4>Add Restaurant</h4>

                    <input name="restaurantName"
                    placeholder="Restaurant Name"
                    value = {formData.restaurantName}
                
        </div>
    )
}