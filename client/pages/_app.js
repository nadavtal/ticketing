import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
import 'cesium/Build/Cesium/Widgets/widgets.css'
import '../app.scss'
import  { Provider } from "react-redux";
import { store } from "../state/store";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return <Provider store={store}>
  
      <Header currentUser={currentUser} />

      <div className="page">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
  
  </Provider>;
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  // console.log('client', client)
  // const { data } = await client.get('/api/users/currentuser');
  // console.log('data', data);
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      // data.currentUser
    );
  }

  return {
    pageProps,
    // ...data,
  };
};

export default AppComponent;
