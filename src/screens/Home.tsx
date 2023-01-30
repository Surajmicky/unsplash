import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import axios from 'axios';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import { useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
const Home = ({ navigation }) => {
  //states for images, page No, searched items
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPage, setSearchPage] = useState(1);
  const [searchImages, setSearchImages] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    //initial images mounting in home page
    fetchImages(page);
  }, []);
  const fetchSearchResult = async (searchPage, text) => {
    // fetch search results 
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?page=${searchPage}&query=${text.toLowerCase()}&client_id=XgvRBIVyP5VQDyIzbcbnFTzzcRbStETDGbpqM80JQd8`
      );
      console.log(text, searchPage);
      let newimages = [...searchImages, ...data.results];
      setSearchImages(newimages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //props for navbar
  const navprops = {
    fetchSearchResult,
    searchPage,
    setSearchImages,
    setSearchPage,
  };
  //making GET request to unsplash api for images every time for infinite scrolling
  const fetchImages = async page => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.unsplash.com/photos/?page=${page}&client_id=XgvRBIVyP5VQDyIzbcbnFTzzcRbStETDGbpqM80JQd8`
      );
      let newimages = [...images, ...data];
      setImages(newimages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
//function to pagination 
  const handleLoadMore = () => {
    setPage(page + 1);
    fetchImages(page + 1);
  };

  const handleLoadMoreSearch = () => {
    setSearchPage(searchPage + 1);
    fetchSearchResult(searchPage + 1, text);
  };
  //asking permission from user for storage to save image
  const requestStoragePermission = async (downloadUrl) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download permission',
          message:
            'Suraj Unsplash app need access to your storage' +
            'so you can take download awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
        downloadImage(downloadUrl)
      } else {
        console.log('storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  //function for downloading the image
 const downloadImage=(downloadUrl) => {
  const {config,fs}=RNFetchBlob;
  const fileDir= fs.dirs.PictureDir;
  config({
    fileCache:true,
    addAndroidDownloads:
    {useDownloadManager:true,
    notification:true,
  path:fileDir+"/image"+Math.floor(new Date().getDate()+ Math.random())+".jpeg"}
  }).fetch('GET',downloadUrl).then(res=> Alert.alert("Image downloaded successfully"))
 };
  return (
    <View>
      <Navbar
        navigation={navigation}
        text={text}
        setText={setText}
        {...navprops}
      />
      {searchImages.length > 0 ? (
        //flatlist before searching
        <FlatList
          data={searchImages}
          renderItem={({ item }) => (
            <Card
              description={item.alt_description}
              profile_img={item.user.profile_image.small}
              name={item.user.name}
              image={item.urls.regular}
              downloadUrl={item.links.download}
              requestStoragePermission={requestStoragePermission}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMoreSearch}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            isLoading && <ActivityIndicator size="large" />
          }
        />
      ) : (
        //flatlist after search
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Card
              description={item.alt_description}
              profile_img={item.user.profile_image.small}
              name={item.user.name}
              image={item.urls.regular}
              downloadUrl={item.urls.full}
              requestStoragePermission={requestStoragePermission}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            isLoading && <ActivityIndicator size="large" />
          }
        />
      )}
    </View>
  );
};

export default Home;
