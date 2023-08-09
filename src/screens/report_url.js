import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, CheckBox , StyleSheet,} from 'react-native';
import axios from 'axios';

const Report_url = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [feedback, setFeedback] = useState('');
  const [reportedUrls, setReportedUrls] = useState([]);
  const [urlsFromApi, setUrlsFromApi] = useState([]);
  const [spamUPIs, setSpamUPIs] = useState([]);
  

  useEffect(() => {
    // Fetch URLs from API and update state
    fetchUrlsFromApi();
    fetch_data();
  }, []);

  const fetchUrlsFromApi = async () => {
    try {
      const response = await fetch('http://10.10.49.229:3000/api/get-spam-url');
      const data = await response.json();
      setUrlsFromApi(data.urls);
    } catch (error) {
      console.error('Error fetching URLs from API', error);
    }
  };

  const fetch_data = () => {
    axios.get('http://192.168.137.209:3000/retrieve')
      .then(response => {
        setSpamUPIs(response.data);
      })
      .catch(error => {
        console.error('Error fetching spam UPIs:', error);
      });
  };

  const handleSubmit = async () => {
    const formData = {
      aadharNumber,
      name,
      phoneNumber,
      address,
      feedback,
      reportedUrls,
    };

    try {
      const response = await fetch('http://10.10.49.229:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <ScrollView>
      <View style={{padding:5 , display:"flex"  , justifyContent:"center"} }>
      <Text  style={{marginTop:23}}>Aadhar Card Number:</Text>
      <TextInput  style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}} value={aadharNumber} onChangeText={setAadharNumber} />

      <Text style={{marginTop:23}}>Name:</Text>
      <TextInput style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}}  value={name} onChangeText={setName} />

      <Text style={{marginTop:23}}>Phone Number:</Text>
      <TextInput style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}}  value={phoneNumber} onChangeText={setPhoneNumber} />

      <Text style={{marginTop:23}}>Address:</Text>
      <TextInput style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}}  value={address} onChangeText={setAddress} />

      <Text style={{marginTop:23}}>Feedback:</Text>
      <TextInput style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}}  value={feedback} onChangeText={setFeedback} />

      <Text style={{marginTop:23}}>Type URL to Report:</Text>
      <TextInput style={{borderWidth:2 , width:"100%" , height:30 , marginTop:10}}  value={reportedUrls} onChangeText={setReportedUrls} />

      {/* {urlsFromApi.map((url, index) => (
        <View key={index}>
          <CheckBox
            value={reportedUrls.includes(url)}
            onValueChange={() => {
              if (reportedUrls.includes(url)) {
                setReportedUrls(reportedUrls.filter((reportedUrl) => reportedUrl !== url));
              } else {
                setReportedUrls([...reportedUrls, url]);
              }
            }}
          />
          <Text>{url}</Text>
        </View>
      ))} */}

      <Button
        style={{ backgroundColor: '#112244', width: '100%', marginTop: 15 }}
        title="Submit"
        onPress={(event) => {
          event.preventDefault(); // Prevent the default behavior
          handleSubmit(); // Call your submit function
        }}
      />
      </View>
      {/* <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Stored Details:</Text>
      {spamUPIs.map((spamUPI, index) => (
        <View key={index} style={{ borderWidth: 1, borderColor: 'lightgray', padding: 10, marginVertical: 5 }}>
          <Text>Aadhar Number: {spamUPI.aadharNumber}</Text>
          <Text>Name: {spamUPI.name}</Text>
          <Text>Phone Number: {spamUPI.phoneNumber}</Text>
          <Text>Address: {spamUPI.address}</Text>
          <Text>Feedback: {spamUPI.feedback}</Text>
          <Text>Reported URLs: {spamUPI.reportedUrls.join(', ')}</Text>
        </View>
      ))} */}
      
    </ScrollView>
  );
};

export default Report_url