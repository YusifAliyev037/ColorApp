import React, { } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../Constant/router';
import { useSelector } from 'react-redux';
import { useTitle } from '../../Hooks/useTitle';

function Home() {
    useTitle("Home");

    const group = useSelector(state => state.color.colorHome.home);
    const name = useSelector(state => state.color.colorHome.name);
    const navigate = useNavigate();
    console.log(group);

    

    return (
        <Box backgroundColor="#051650" height="100vh">
            <Header />

            {!group && (
                <Box p={60} display="flex" alignItems="center" justifyContent="center">
                    <Button backgroundColor="#40b708" onClick={() => navigate(ROUTER.SETTING)}>Get Started</Button>
                </Box>
            )}

            <Box px={4} display="flex" alignItems="center" justifyContent="space-between">
                {group && (
                    <Box>
                        <Text color="white">Group Name</Text>
                        <Text color="white">{name}</Text>
                    </Box>
                )}
                <Box p={10} display="flex" w='300px' flexWrap="wrap">
                    {group?.map((item, index) => (
                        <Box key={index} bg={item.code} border="1px solid" height='70px' w='100px' p={4} color='white'>
                            <Text color="white">{item.name}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
