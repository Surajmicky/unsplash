import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator,TouchableOpacity } from 'react-native';
import axios from 'axios'
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';

const Home = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [searchPage,setSearchPage] = useState(1);
    const [searchImages,setSearchImages] = useState([])
    const [text, setText] = useState('');
   
    useEffect(() => {
        fetchImages(page);
    }, []);
 const fetchSearchResult=async(searchPage,text)=>{
    try {
        setIsLoading(true);
        const { data } = await axios.get(`https://api.unsplash.com/search/photos/?page=${searchPage}&query=${text.toLowerCase()}&client_id=XgvRBIVyP5VQDyIzbcbnFTzzcRbStETDGbpqM80JQd8`);
        console.log(text,searchPage);
        let newimages = [...searchImages, ...data.results]
        setSearchImages(newimages);
        setIsLoading(false);
     
    } catch (error) {
        console.log(error)
    }
 }
 const navprops= {fetchSearchResult,searchPage,setSearchImages,setSearchPage}
    const fetchImages = async (page) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`https://api.unsplash.com/photos/?page=${page}&client_id=XgvRBIVyP5VQDyIzbcbnFTzzcRbStETDGbpqM80JQd8`);
            let newimages = [...images, ...data]
            setImages(newimages);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }


    }
    
    const handleLoadMore = () => {
        setPage(page + 1);
        fetchImages(page + 1);
    }
    
    const handleLoadMoreSearch = () => {
        setSearchPage(searchPage + 1);
        fetchSearchResult(searchPage + 1,text);
        
    }

    return (
        <View>
          <Navbar navigation={navigation} text={text} setText={setText} {...navprops}/>
            {searchImages.length>0?<FlatList
                data={searchImages}
                renderItem={({ item }) => (
                    <Card description={item.alt_description} profile_img={item.user.profile_image.small} name={item.user.name} image={item.urls.regular} />
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMoreSearch}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => isLoading && <ActivityIndicator size="large" />}
            />:<FlatList
                data={images}
                renderItem={({ item }) => (
                    <Card description={item.alt_description} profile_img={item.user.profile_image.small} name={item.user.name} image={item.urls.regular} />
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => isLoading && <ActivityIndicator size="large" />}
            />}
        </View>
    );
}

export default Home;
