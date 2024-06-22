import { useState } from "react"
function App ({name,username,image}) {
    const userImage = `http://myblog.com/storage/posts/${image}.jpg`
    const isFollow = (bolean) => {
        if (bolean == true) {
            return "Siguiendo"
        } else {
            return "Seguir"
        }
    }
    const [isFollowing, setIsFollowing] =  useState(false)
    const isFollowClass = isFollowing ? "follow" : "disfollow"

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
       <article className='profile'>
        <header>
            <img src={userImage}/>
            <div className='info'>
                <strong className='name'>{name}</strong>
                <span>{username}</span>
            </div>
        </header>

        <aside>
            <button className={isFollowClass} onClick={handleClick}>
                <span>{isFollow(isFollowing)}</span>
            </button>
        </aside>
       </article>
    )
}

export default App;