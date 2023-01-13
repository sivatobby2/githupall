import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
// import PostFlatlist from '../components/PostFlatlist';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View padding={3} shadow={4} bgColor={'#F7FCFC'}>
      <Box>
        <HStack justifyContent={'space-between'}>
          <VStack>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
             >
              <Icon2 name="menu" size={30} color="#33C7FF" />
            </TouchableOpacity>
          </VStack>
          <VStack>
            <Text fontSize={20} fontWeight={700}>
              Home
            </Text>
          </VStack>
          <VStack>
            <TouchableOpacity
            // onPress={() => navigation.navigate("ChatList")}
            >
              <Icon name="message1" size={30} color="#33C7FF" />
            </TouchableOpacity>
          </VStack>
        </HStack>
      </Box>
    </View>
  );
};

export default Header;
