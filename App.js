import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'www.scener.com'}}
        injectedJavaScript={'const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta);'}
      />
    );
  }
}
export default App;
