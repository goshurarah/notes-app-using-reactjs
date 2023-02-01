// import { useState, useEffect } from 'react'

// const useFetch = (url) => {
//     //for fetch data
//     const [blogData, setBlogData] = useState(null)
//     //for showing loading message
//     const [isLoading, setIsLoading] = useState(true)
//     //for showing error
//     const [error, SetError] = useState(null)

//     useEffect(() => {
//         fetch(url).then((res) => {
//             return res.json()
//         }).then((data) => {
//             setBlogData(data)
//             setIsLoading(false)
//         }).catch((error) => {
//             SetError(error)
//         }) 
//     }, [url])
//     return { blogData, isLoading, error }
// }
// export default useFetch;