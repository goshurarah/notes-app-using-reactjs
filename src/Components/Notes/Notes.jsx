import NotesList from './NotesList'
import { useState, useEffect } from 'react'

function CustomNotes() {
    //for fetch data
    const [blogData, setBlogData] = useState(null)
    //for showing loading message
    const [isLoading, setIsLoading] = useState(true)
    //for showing error
    const [error, SetError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogApi').then((res) => {
            return res.json()
        }).then((data) => {
            setBlogData(data)
            setIsLoading(false)
        }).catch((error) => {
            SetError(error)
        })
    }, [])

    return (
        <>
            {error && <div className="Error-div"><p>{`Error Name = ${error.name}`}</p>
                <p>{`Error Message = ${error.message}`}</p></div>}

            {isLoading && <div className="Loading-div">Data is Loading...</div>}

            {blogData && <NotesList
                blogData={blogData}
                title='All Notes!'
            />}
        </>
    );
}
export default CustomNotes;