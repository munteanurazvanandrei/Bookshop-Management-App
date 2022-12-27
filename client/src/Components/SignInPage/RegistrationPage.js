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


    return(<div className="registration"></div>)
}