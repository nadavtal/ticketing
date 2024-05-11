const LandingPage = ({ currentUser, tickets }) => {
  

  return null;
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // const { data } = await client.get('/api/tickets');

  return { tickets: [] };
};

export default LandingPage;
