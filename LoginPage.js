import React, { Component } from 'react';
import { StyleSheet, View, Linking , AsyncStorage } from 'react-native';
import SafariView from 'react-native-safari-view';
import LyftLoginButton from './LyftLoginButton';
// import { lyft_client_id, lyft_client_secret } from './config.js';
import LandingPage from './LandingPage'
import SInfo from 'react-native-sensitive-info'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lyftReady: false
    }

    // this.changeStatus = this.changeStatus.bind(this)
    // this.handleOpenUrl = this.handleOpenUrl.bind(this)
  };
  //
  openURL = (url) => {
    SafariView.show({
      url: url,
      fromBottom: true,
    })
  };

  componentDidMount() {
    Linking.addEventListener( 'url', this.scream );
    console.log(Linking.addEventListener( 'url', this.scream ))
  }

  scream() {
    console.log('SCREAM!!!!!!!!!!!')
  }

  // handleOpenUrl( event ) {
  //   console.log('1')
  //   const auth_code = event.url.toString().match( /code=([^&]+)/ );
  //   console.log('2')
  //   console.log(auth_code);
  //   if ( auth_code ) {
  //     console.log('3')
  //     fetch('https://api.lyft.com/oauth/token', {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json;charset=UTF-8',
  //         'Authorization': 'Basic '+btoa(lyft_client_id + ':' + lyft_client_secret)
  //       },
  //       body: JSON.stringify({
  //         "grant_type": "authorization_code",
  //         "code": auth_code[1]
  //       })
  //     })
  //     .then((response) => response.json())
  //     .then((parsedResponse) => {
  //       console.log(parsedResponse);
  //       SInfo.setItem('lyftToken', parsedResponse['access_token'], {});
  //       SInfo.setItem('lyftRefreshToken', parsedResponse['refresh_token'], {});
  //     });
  //   }
  //   else {
  //     reject( 'params' );
  //   };
  //   SafariView.dismiss();
  //   this.changeStatus;
  // };
  //
  // changeStatus() {
  //   this.setState(() => ({
  //     lyftReady: true
  //   }));
  // }

  render() {
    let page;
    if (this.state.lyftReady) {
      page = <LandingPage />
    } else {
      page = <LyftLoginButton clickEvent={() => this.openURL('https://www.lyft.com/oauth/authorize_app?client_id=hyyGpFDSm3OM&scope=public%20profile%20rides.read%20rides.request%20offline&state=%3Cstate_string%3E&response_type=code')}/>
    }
    return (
      <>
        {page}
      </>
    );
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttons: {
   justifyContent: 'space-between',
   flexDirection: 'row',
   margin: 20,
   marginBottom: 30,
 },
});
