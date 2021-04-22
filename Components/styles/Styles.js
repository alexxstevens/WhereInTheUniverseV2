import {StyleSheet} from 'react-native';
import backgroundGalaxy from "../../assets/galaxyBackground.jpg";

const mainColor = "#1c1c45";
const secondaryColor = "orange";



const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  header: {
    backgroundColor: mainColor,
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
    color: mainColor,
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
    backgroundColor : mainColor,
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
    color: secondaryColor,
    fontWeight: '800',
    textAlign: 'center',
    backgroundColor: mainColor,
    paddingTop: 10,
    paddingBottom: 10,
  },
  homePlanet: {
    color: mainColor,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    width: '20%',
  },
  homeStats: {
    color: secondaryColor,
    backgroundColor: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    flexDirection: 'row',

  },
  homeBarBorder: {
    borderColor: secondaryColor,
    borderWidth: 1,
  },
  //Profile Card
  cardContainer: {
    backgroundColor: mainColor,
    borderColor: secondaryColor,
    borderRadius: 30,
    borderWidth: 5,
    width: 320,
    height: 400,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 30,
  },
  cardContentName: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Futura',
    marginBottom: 10,
  },
  cardContentHome: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Futura',
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
    cardContentOccupation: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Futura',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 2,
  },
  cardContentBio: {
    color: 'white',
    fontFamily: 'Futura',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: secondaryColor,
    borderBottomWidth: 2,
  },
  userImage: {
    borderRadius: 100,
    borderColor: secondaryColor,
    borderWidth: 3,
    width: 80,
    height: 100,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
  },
  bottomBorder: {
    borderBottomColor: secondaryColor,
    borderBottomWidth: 2,
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 15,
  }
});

export default Styles;