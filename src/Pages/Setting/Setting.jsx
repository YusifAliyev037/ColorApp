// Setting.js
import React, { useEffect, useState } from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addColor, clearColorGroup, setColorHome } from '../../store/colorSlice';
import ColorBlock from '../../Components/colorBlock';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../Constant/router';
import { useTitle } from '../../Hooks/useTitle';

function Setting() {
    useTitle("Setting")
    const [groupName, setGroupName] = useState('');
    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isButtonGruDisabled, setIsButtonGruDisabled] = useState(true);

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const colorGroup = useSelector(state => state.color.colorGroup);
    const home = useSelector(state => state.color.colorHome);
    console.log("home",home);
    console.log("colorGroup", colorGroup);

    useEffect(() => {
        dispatch(setColorHome(colorGroup));
    }, [colorGroup, dispatch]);

    function handleAddColor() {
        if (colorName.trim() === '') {
            console.log("Color name cannot be empty");
            return;
        }
        
        dispatch(addColor({
            name: colorName,
            code: colorCode
        }));

        setClickCount(prev => prev + 1);
        if (clickCount >= 5) {
            setIsButtonDisabled(true);
            setIsButtonGruDisabled(false)
        } 
    }


    function handleGroup () {
        if (groupName.trim() === '') {
            console.log("Color name cannot be empty");
            return;
        }

        dispatch(setColorHome({
            name: groupName,
            home
        }));

        dispatch(clearColorGroup())
        navigate(ROUTER.HOME)
        
    }

    return (
        <Box backgroundColor="#051650" height="100vh">
            <Header />
            <Box p={8} textAlign="center">
                <Text as="b" color="white" fontSize="4xl">Create Color Group</Text>
            </Box>
           

            <Box p={8} display="flex" justifyContent="space-between">
                <Box display="flex" gap={4} flexDirection="column">
                    <Box>
                        <Text color="white">Color Name</Text>
                        <Input value={colorName} onChange={(e) => setColorName(e.target.value)} backgroundColor="white" width="200px" />
                    </Box>
                    <Box>
                        <Text color="white">Color Code</Text>
                        <Input value={colorCode} onChange={(e) => setColorCode(e.target.value)} backgroundColor="white" width="200px" />
                    </Box>
                    <Box>
                        <Button onClick={handleAddColor} backgroundColor="#40b708" isDisabled={isButtonDisabled}>Add Color</Button>
                    </Box>
                </Box>
                <Box display="flex" gap={4} flexDirection="column">
                    <ColorBlock />
                    <Box display="flex" gap={6} flexDirection="column">
                        <Text color="white">Group Name</Text>
                        <Input value={groupName} onChange={(e) => setGroupName(e.target.value) } backgroundColor="white" width="400px" />
                        <Button onClick={handleGroup} isDisabled={isButtonGruDisabled}  backgroundColor="#40b708" >   Add Name</Button>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Setting;
