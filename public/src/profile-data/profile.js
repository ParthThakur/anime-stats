import { useState, useEffect } from "react";
import MockData from './../mock-data';
import "./profile.css";

function Profile(props) {
    const [profileData, setProfileData] = useState({});
    console.log(props);

    useEffect(() => {
        // fetch props username
        console.log("Component Mounted","Fetched the api call");
        setProfileData(MockData);
    }, []);

    useEffect(() => {
        // fetch props username
        // request API + token
        console.log("Component did update","Fetched the api call");
        setProfileData(MockData);
    }, [props.userName]);

    const titlesTree = () => {
        console.log("Titletree", profileData.anime_data)
       if(profileData.anime_data){
           return (<ul className="anime-list">
            {profileData.anime_data.map((el, id) => {
                return <li key={id}>
                    <h3>{el.animeName}</h3>
                    <span>Review: {el.review}</span>
                    <div>
                        Types
                    <ol>{el.type.map((ty, id2) => {
                        return <li key={id2}>
                            {ty}
                        </li>
                    })}
                        </ol>
                    </div>
                </li>
            })}
        </ul>)
       }
       else {
           return (<p> No data yet</p>)
       }
    }

    return (
        <div>
            <h2>
                {props.userName}
            </h2>
            <div className="anime-list-data">
                {titlesTree()}
            </div>
        </div>
    )
}

export default Profile;