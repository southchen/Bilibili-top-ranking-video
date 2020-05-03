import React, { Component } from 'react';
import Query from './query';
import VideoList from './videolist';
import VideoDetail from './videodetails';

import bili from './bilibili';
import Axios from 'axios';

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onSearch = async ({ rid, day }) => {
    try {
      let res = await Axios.get('http://localhost:5000/', {
        params: { rid, day },
      });
      let videos = res.data;
      this.setState({ videos });
    } catch (err) {
      console.log(err);
    }
  };
  onVideoSelect = (e) => {
    this.setState({ selectedVideo: e });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div id="logo">
            <img src="south.png" alt="logo" />
          </div>
          <Query onSearch={this.onSearch} />
        </div>
        <div className="container grid">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail
                  videos={this.state.videos}
                  video={this.state.selectedVideo}
                />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
