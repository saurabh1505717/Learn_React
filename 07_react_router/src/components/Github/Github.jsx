import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

    // const [loginId, setLoginId] = useState("")
    // const [name, setName] = useState("")
    // const [profile, setProfile] = useState("")
    // const [following, setFollowing] = useState(0)
    // const [followers, setFollowers] = useState(0)

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/saurabh1505717')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // setLoginId(data.login)
            // setName(data.name)
            // setProfile(data.url)
            // setFollowing(data.following)
            // setFollowers(data.followers)

            setData(data);
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <h3>Github Login: {data.login}</h3>
    <br />
    <h3>Github Name: {data.name}</h3>
    <br />
    <h3>Github Profile: {data.html_url}</h3>
    <br />
    <h3>Github Followers: {data.followers}</h3>
    <br />
    <h3>Github Following: {data.following}</h3>
    
    {/* <img src="{data.avatar_url}" alt="Git profile picture" /> */}

    {/* <h3>Github Login: {loginId}</h3>
    <br />
    <h3>Github Name: {name}</h3>
    <br />
    <h3>Github Profile: {profile}</h3>
    <br />
    <h3>Github Followers: {followers}</h3>
    <br />
    <h3>Github Following: {following}</h3> */}
    </div>
  )
}

export default Github