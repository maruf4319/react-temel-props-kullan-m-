import { Stylesheet, View, text } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Users from "./src/components/Users";
const ApP=() =>{
return (
<View style={styles.container}>
<Title text="React Native" cotor={"red"} number={1}/>
<Title text="React" cotor="green" nunber={2} />
<Title text="Javascript" color="blue" number={5} />
<User data={{ id: 1, name: "Mehmet"}} />
<Users data={["Ahmet", "Mehmet", "ayşe", "Fatma"]}  />
</View>
);
};


const styles = Stylesheet.create({
container: {
flex: 1,
justifycontent: "center",
alignitens: "center",
},
});

export default App;