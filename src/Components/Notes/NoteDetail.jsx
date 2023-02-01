import { Paper, Container, Box, Button } from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react'

const NoteDetail = () => {
    //for fetch data
    const [blogData, setBlogData] = useState(null)
    //for showing loading message
    const [isLoading, setIsLoading] = useState(true)
    //for showing error
    const [error, SetError] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8000/blogApi/${id}`).then((res) => {
            return res.json()
        }).then((data) => {
            setBlogData(data)
            setIsLoading(false)
        }).catch((error) => {
            SetError(error)
        })
    }, [id])

    const handleDeleteButton = () => {
        fetch(`http://localhost:8000/blogApi/${blogData.id}`, {
            method: "DELETE"
        }).then((data) => {
            navigate('/notes')
        })
    }
    return (
        <>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useState-heading'>Note Detail - {id}</h1>
                <Container>
                    <div className='NotesContainer'>
                        {error && <div className="Error-div"><p>{`Error Name = ${error.name}`}</p>
                            <p>{`Error Message = ${error.message}`}</p></div>}

                        {isLoading && <div className="Loading-div">Data is Loading...</div>}
                        {blogData && (<h2 className='NoteTitle'>{blogData.title}</h2>)}
                        {blogData && (<p>{blogData.body}</p>)}
                        {blogData && (<p className='author'>Authorized by "{blogData.author}"</p>)}
                        <Box sx={{ display: 'flex', justifyContent: "center", pb: '1rem' }}>
                            <Button size="small" variant="outlined" color="secondary" onClick={handleDeleteButton}><DeleteIcon /></Button>
                            <Link to={`/createNote/${id}`}>
                                <Button size="small" variant="outlined" color="secondary"><EditIcon /></Button>
                            </Link>
                        </Box>
                    </div>
                </Container>
            </Paper>
        </>
    );
}

export default NoteDetail;