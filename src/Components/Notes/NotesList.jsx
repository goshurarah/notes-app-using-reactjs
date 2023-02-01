import { Paper, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotesList = (props) => {
    const blogData = props.blogData

    return (
        <>
            <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'center', mt: '2rem', mb: '2rem' }}>
                <Link to="/createNote" className='addNoteButton'><Button size="large" variant="outlined" color="secondary">Add New Note</Button></Link>
            </Box>
            <Paper elevation={12} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} > 
                <h1 className='useState-heading'>{props.title}</h1>
                <Container>
                    {blogData.map((item) => (
                        <div className='NotesContainer'>
                            <h2 className='NoteTitle'>{item.title}</h2>
                            <p className='author'>Authorized by "{item.author}"</p>
                            <Box sx={{ display: 'flex', justifyContent: "center", pb: '1rem' }}>
                                <Link to={`/noteDetail/${item.id}`} className="readMoreButton">
                                    <Button size="small" variant="outlined" color="secondary">Read More</Button>
                                </Link>
                            </Box>
                        </div>
                    ))}
                </Container>
            </Paper>
        </>
    );
}

export default NotesList;