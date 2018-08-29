import React, { Component } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from "react-native";
import {
  Container,
  ScrollableTab,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon
} from "native-base";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default class TabView extends Component {
  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={props => (
            <View
              style={{
                zIndex: 1,
                width: "100%",
                backgroundColor: "white"
              }}
            >
              <ScrollableTab
                {...props}
                renderTab={(name, page, active, onPress, onLayout) => (
                  <TouchableOpacity
                    key={page}
                    onPress={() => onPress(page)}
                    onLayout={onLayout}
                    activeOpacity={0.4}
                  >
                    <View
                      style={{
                        flex: 1,
                        height: 100,
                        backgroundColor: "red"
                      }}
                    >
                      <TabHeading
                        scrollable
                        style={{
                          backgroundColor: "transparent",
                          width: SCREEN_WIDTH / 2
                        }}
                        active={active}
                      >
                        <Text
                          style={{
                            fontWeight: active ? "bold" : "normal",
                            color: "white",
                            fontSize: 14
                          }}
                        >
                          {name}
                        </Text>
                      </TabHeading>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        >
          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" size={20} color="#fff" />
              </TabHeading>
            }
          >
            <View>
              <Text>Hi there - Tab 1</Text>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }
          >
            <View>
              <Text>Hi there - Tab 2</Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

// ​export default class TabView extends Component {
//   render() {
//     return (
//       <Container>
//         <Header hasTabs />
//         <Tabs>
//           <Tab heading="Tab1">
//             <View>
//               <Text>TabContent!</Text>
//             </View>
//           </Tab>
//           <Tab heading="Tab2">
//             <View>
//     <Text>TabContent!</Text>
//   </View>
//           </Tab>
//           <Tab heading="Tab3">
//             <View>
//     <Text>TabContent!</Text>
//   </View>
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }
