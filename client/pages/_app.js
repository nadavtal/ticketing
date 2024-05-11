import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
import 'cesium/Build/Cesium/Widgets/widgets.css'
import '../app.scss'

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="page">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
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
