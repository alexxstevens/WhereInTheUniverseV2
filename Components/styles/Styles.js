import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c45',
  },
  header: {
    backgroundColor: '#1c1c45',
    paddingTop: 20,
    flex: 1,
    flexDirection:'row',
  },
  headerText: {
    color: 'white',
    flex: 1,
    fontSize: 33,
    fontWeight: 'bold',
    paddingTop: 20,
    marginTop: 30,
    paddingLeft: 5,
    fontFamily: 'Futura',
    position: 'absolute',
    zIndex: 99999,
  },
  tinyLogo: {
    transform: [{ rotate: "45deg" }],
    width: 60,
    height: 50,
    marginLeft: '85%',
    marginTop: 15,
  },
  //login style
  containerView: {
    flex: 6,
    zIndex: 999,
    backgroundColor: 'white',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 60,
    marginBottom: 25,
    textAlign: 'center',
    color: '#1c1c45',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 50,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  highlight: {
    height: 40,
    width:'80%',
    borderRadius:10,
    backgroundColor : "#1c1c45",
    marginLeft :'auto',
    marginRight:'auto',
    marginTop :20,
    textAlign: 'center',
  },
  blockImage: {
    width: '100%',
    height: 250,
    top: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  //homepage
  homeContainer: {
    height: '100%',
  },
  homeHeading: {
    fontSize: 40,
    color: 'orange',
    fontWeight: '800',
    textAlign: 'center',
    backgroundColor: '#1c1c45',
    paddingTop: 10,
    paddingBottom: 10,
  },
  homePlanet: {
    color: '#1c1c45',
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    width: '20%',
  },
  homeStats: {
    color: 'orange',
    backgroundColor: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    flexDirection: 'row',

  },
  homeBarBorder: {
    borderColor: 'orange',
    borderWidth: 1,
  }
});

export default Styles;