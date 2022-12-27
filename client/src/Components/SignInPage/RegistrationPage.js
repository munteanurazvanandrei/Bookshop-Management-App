import React, { useState } from "react";

export default function Registration(){
    // the registration for the manager;
    // also for the bookshop

    const [formState, setFormState] = useState({});

    function formChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormState({ ...formState, [name]: value });
	}

    function handleSubmit(e){
        e.preventDefault()
        fetch("",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                name: formState.name,
                email: formState.email,
                password: formState.password,
                password_confirmation: formState.password_confirmation
            }),
        })
        .then((r) => r.json())
        .then((data) => data)
    }
    return(<div className="registration"></div>)
}