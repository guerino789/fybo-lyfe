import react, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import onAddVessle from "../pages/AddVesslePage"








function AddVessle({ onAddVessle }) {

    const [vessleName, setVessleName] = useState("");
    const [vessleLength, setVessleLength] = useState("");
    const [captinsName, setCaptinsName] = useState("");
    const [projectManager, setProjectManager] = useState("");

    const history = useHistory()


    function handleSubmit(e) {
        e.preventDefault();
        const vessleData = {
            vessleName: vessleName,
            vessleLength: vessleLength,
            captinsName: captinsName,
            projectManager: projectManager,

        };
        console.log(vessleData)
        fetch("/vessles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vessleData),
        })
            .then((resp) => resp.json())
            .then((newVessle) => onAddVessle(newVessle))
            .then(history.push("/vessles"))

    }
    return (
        <form className="NewVessle" onSubmit={handleSubmit} >
            <label>
                Vessle Name:
                <input
                    type="text"
                    name="name"
                    value={vessleName}
                    onChange={(e) => setVessleName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Vessle Length:
                <input
                    type="number"
                    name="length"
                    value={vessleLength}
                    onChange={(e) => setVessleLength(e.target.value)}
                />
            </label>
            <br />
            <label>
                Captins Name:
                <input
                    type="text"
                    name="captins name"
                    value={captinsName}
                    onChange={(e) => setCaptinsName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Project Manager:
                <input
                    type="text"
                    name="project manager"
                    value={projectManager}
                    onChange={(e) => setProjectManager(e.target.value)}
                />
            </label>

            <button type="submit" >Add Vessle</button>
        </form>
    );

}

export default AddVessle