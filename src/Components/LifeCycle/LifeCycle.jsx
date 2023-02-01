import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CustomMount, { CustomGetDerivedStateFromProps, CustomRender, CustomComponentDidMount } from './Mount'
import CustomUpdate, { CustomShouldComponentUpdate, CustomRender2, CustomGetSnapshotBeforeUpdate, CustomComponentDidUpdate } from './Update'
import CustomUnmount from './Unmount'


const LifeCycle = () => {
    return (
        <>
            <Container fixed sx={{ bgcolor: 'khaki', m: '1rem', p: '1rem' }}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Mount Phase</Typography>
                <CustomMount />
                <CustomGetDerivedStateFromProps parentColor="blue" />
                <CustomRender />
                <CustomComponentDidMount />
            </Container>

            <Container fixed sx={{ bgcolor: 'brown', m: '1rem', p: '1rem' }}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Update Phase</Typography>
                <CustomUpdate parentColor="khaki" />
                <CustomShouldComponentUpdate />
                <CustomRender2 />
                <CustomGetSnapshotBeforeUpdate />
                <CustomComponentDidUpdate />
            </Container>

            <Container fixed sx={{ bgcolor: 'gold', m: '1rem', p: '1rem' }}>
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Unmount Phase</Typography>
                <CustomUnmount />

            </Container>
        </>
    );
}
export default LifeCycle;