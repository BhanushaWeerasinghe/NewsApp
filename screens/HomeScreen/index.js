import React, { Component } from 'react'
import { View, Text, Image, ScrollView, Linking } from 'react-native'
import axios from 'axios'
import { Card, Title, Paragraph } from 'react-native-paper'

import Header from '../../components/AppBar'
import { NEWS_API_KEY } from '../../config'

export default class HomeScreen extends Component {
    
    state = {
        articles: [],
        isLoading: true,
        error: null
    };

    getArticles() {
                // use the API key from config
                const apiKey = NEWS_API_KEY

                // fail early if key missing or left as the placeholder
                if (!apiKey || apiKey === 'YOUR_NEWSAPI_KEY_HERE' || apiKey === 'API_KEY') {
                        console.error('NEWS_API_KEY is not set. Update config.js with your NewsAPI key.')
                        this.setState({ error: 'NEWS_API_KEY is not set. Open config.js and add your NewsAPI key.', isLoading: false })
                        return
                }

                const url = `https://newsapi.org/v2/everything?q=Cryptocurrency&from=2021-09-08&sortBy=popularity&apiKey=${apiKey}`
                console.log('Requesting news from:', url)

                axios.get(url)
          .then(response =>
            response.data.articles.map(article => ({
              date: `${article.publishedAt}`,
              title: `${article.title}`,
              url: `${article.url}`,
              description: `${article.description}`,
                            urlToImage: article.urlToImage || 'https://via.placeholder.com/120',
            }))
          )
          .then(articles => {
            this.setState({
              articles,
              isLoading: false
            });
          })
                                        .catch(error => {
                                                console.error('Error fetching articles:', error && (error.response || error).toString())
                                                this.setState({ error: error && (error.message || 'Error fetching articles'), isLoading: false })
                                        });
    }

    componentDidMount() {
        this.getArticles();
    }


    render(){
        const{ isLoading, articles } = this.state;
        return (
            <View>
                <Header/>
                <ScrollView>
                    {!isLoading ? (
                        articles.map(article => {
                        const {date, title, url, description, urlToImage} = article;
                        return(
                            <Card key={url} style={{marginTop:10, borderColor:'black', borderRadius:5, borderBottomWidth:1}}
                            onPress={()=>{Linking.openURL(`${url}`)}}
                            >
                                <View style={{flexDirection:'row',}}>
                                    {/*  Text */}
                                    <View style={{justifyContent:'space-around', flex:2/3, margin:10}}>
                                        <Title>{title}</Title>
                                    </View>
                                    {/*  Image */}
                                    <View style={{flex:1/3, margin:10}}>
                                        <Image style={{width:120, height:120}} source={{uri: urlToImage}} />
                                    </View>  
                                </View>
                                <View style={{margin:10}}>
                                    <Paragraph>{description}</Paragraph>
                                    <Text>Published At: {date}</Text>
                                </View>
                            </Card>
                        );
                    })
                    ) : (
                    <Text style={{justifyContent:'center', alignItems:'center'}}>Loading...</Text>
                    )}
                </ScrollView>
            </View>
        )
    }
}


