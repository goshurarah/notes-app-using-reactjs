import { Paper, Box, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'


const CreateNote = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()
    console.log('this editNote id', id)

    useEffect(() => {
        if (id !== undefined) {
            fetch(`http://localhost:8000/blogApi/${id}`).then((res) => {
                return res.json()
            }).then((data) => {
                setTitle(data.title)
                setBody(data.body)
                setAuthor(data.author)
                console.log('data :>> ', data);
            }).catch((error) => {
                console.log('Update error :>> ', error);
            })
        }
        console.log('hook run');
    }, [id])

    const handleSubmit = () => {
        let createNoteData = { title, body, author }
        // console.log('noteData = ', createNoteData)
        // console.log('string data = ', JSON.stringify(createNoteData));
        fetch(`http://localhost:8000/blogApi`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createNoteData)
        }).then((data) => {
            resetData()
            navigate('/notes')
        })
    }
    const resetData = () => {
        setTitle('')
        setBody('')
        setAuthor('')
    }

    const handleUpdate = () => {
        console.log("handle update called")
        let updateNoteData = { title, body, author }
        console.log('this is update data', updateNoteData)
        fetch(`http://localhost:8000/blogApi/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateNoteData)
        }).then((data) => {
            console.log('db update data = ', data)
            resetData()
            navigate('/notes')
        })
    }
    return (
        <>
            <Paper elevation={6} sx={{
                paddingBottom: '1rem',
                width: '50%',
                marginTop: '2rem',
                mx: 'auto'
            }} >
                <h1 className='useState-heading'>NotePad</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, maxWidth: '100%', display: 'flex', direction: 'column', justifyContent: 'center' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <form>
                            <TextField
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                // id="outlined-multiline-flexible"
                                label="Title"
                                multiline
                                maxRows={1}
                                color="secondary"
                                required
                            />

                            <TextField
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                // id="outlined-multiline-flexible"
                                label="Content"
                                multiline
                                maxRows={3}
                                color="secondary"
                                required
                            />
                            <TextField
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                // id="outlined-multiline-flexible"
                                label="Author"
                                multiline
                                maxRows={1}
                                color="secondary"
                                required
                            />
                            <Box sx={{ display: 'flex', justifyContent: "center", pb: '1rem' }}>
                                <Button disabled={title === '' || body === '' || author === '' ? true : false} size="medium" variant="outlined" color="secondary" type="submit"
                                    onClick={id !== undefined ? (e) => {
                                        e.preventDefault()
                                        handleUpdate()
                                    } : (e) => {
                                        e.preventDefault()
                                        handleSubmit()
                                    }}
                                >{id !== undefined ? 'Update' : 'Save'}
                                </Button>
                            </Box>
                        </form>
                    </div>
                </Box>
            </Paper>
        </>
    );
}
export default CreateNote;