import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const profile=useLoaderData();
//   useEffect(() => {
//     fetch('https://api.github.com/users/Ishu6129')
//       .then((response) => {
//         if (!response.ok) throw new Error('Unable to load the GitHub profile.')
//         return response.json()
//       })
//       .then(setProfile)
//   }, [])

  if (!profile) return <p>Loading GitHub profile...</p>

  return (
    <main className="w-full max-w-2xl text-center">
      <img
        className="mx-auto h-24 w-24 rounded-full"
        src={profile.avatar_url}
        alt={`${profile.login}'s GitHub avatar`}
      />
      <h1 className="mt-4 text-2xl font-bold">{profile.name || profile.login}</h1>
      <p className="mt-1">@{profile.login}</p>
      {profile.bio && <p className="mt-3">{profile.bio}</p>}
      <p className="mt-3 text-gray-600">
        {profile.public_repos} public repositories · {profile.followers} followers
      </p>
      <a
        className="mt-4 inline-block text-blue-700 underline"
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View GitHub profile
      </a>
    </main>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const res=await fetch('https://api.github.com/users/Ishu6129');
    return res.json();
}