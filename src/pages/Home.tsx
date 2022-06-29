import text from '../data/text.json';

export default function Home() {
  const homepageText = text.find((page) => page.name === 'home') || {
    col1: { header: 'Page not found', text: 'Text not found' },
  };

  return (
    <div className="container" style={homeStyles.container}>
      <h1 style={{ fontSize: '4rem', marginTop: '5rem', marginBottom: '8rem' }}>
        Welcome to <span style={homeStyles.walmartSpan}>Little Happy Shop</span>
      </h1>
      <div style={{ width: '100%' }}>
        <div style={homeStyles.column}>
          <div>
            <h2 style={homeStyles.headerTwo}>{homepageText['col1'].header}</h2>
            <p style={homeStyles.text}>{homepageText['col1'].text1}</p>
          </div>

          <div style={homeStyles.minContainerRight}>
            <div>
              <h3 style={homeStyles.headerThree}>
                {homepageText['col1'].minorHeader1}
              </h3>
              <p style={homeStyles.text}>{homepageText['col1'].text2}</p>
            </div>
          </div>

          <div>
            <div>
              <h3 style={homeStyles.headerThree}>
                {homepageText['col1'].minorHeader2}
              </h3>
              <p style={homeStyles.text}>{homepageText['col1'].text3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const homeStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  minContainerRight: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  walmartSpan: {
    color: '#1557bf',
  },
  headerTwo: {
    color: '#1557bf',
    marginTop: '2rem',
    fontSize: '2.8rem',
  },
  headerThree: {
    color: '#1557bf',
    marginTop: '2rem',
    fontSize: '2rem',
  },
  text: {
    maxWidth: 500,
    fontSize: '1.2rem',
  },
};
