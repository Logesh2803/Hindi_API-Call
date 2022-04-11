import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Provider, Card, Avatar, DataTable } from "react-native-paper";
import axios from "axios";

const SecondPage = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get('http://learnhindi.yesinfoveetech.com/API/step1.php')
      .then((response) => {
        console.log(response);
        setData(response.data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Provider>
      <ScrollView>
        <View style={styles.mainbox}>
          {/* <ScrollView horizontal> */}
          <Card>
            <DataTable>
              <DataTable.Header style={styles.databeHeader}>

                <DataTable.Title>Hindi</DataTable.Title>
                <DataTable.Title>English</DataTable.Title>
                <DataTable.Title >Tamil</DataTable.Title>


              </DataTable.Header>
              {data.map((l, i) => (
                <ScrollView>
                  <DataTable.Row style={styles.databeBox} key={i}>



                    <DataTable.Cell>{l.Hindi}</DataTable.Cell>
                    <DataTable.Cell>{l.English}</DataTable.Cell>
                    <DataTable.Cell>{l.Tamil}</DataTable.Cell>
                  </DataTable.Row>
                </ScrollView>
              ))}

            </DataTable>
          </Card>

        </View>
      </ScrollView>
    </Provider>
  );
}

export default SecondPage

const styles = StyleSheet.create({ mainbox: {

  margin: 15,
  flex: 1,
  alignContent: 'center'


},

databeBox: {
  margin: 10,
  textAlign: "center",


},

databeHeader: {
  margin: 10,
  textAlign: "center",
  justifyContent: 'space-around',
  paddingLeft: 20
},
});