import { Text, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { HomeIcon } from '../components/Icons';

import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export default function About() {
    return (
        <ScrollView className='pt-24'>
            <Link href='/' asChild>
                <StyledPressable className={`active:opacity-50`}>
                    <HomeIcon />
                </StyledPressable>
            </Link>

            <Text className='text-white font-bold mb-8 text-2xl'>About project</Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>

            <Text className='text-white text-white/90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Text>
        </ScrollView>
    );
}