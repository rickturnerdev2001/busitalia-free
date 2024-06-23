import Navbar from "@/components/home/Navbar";
import TabLayout from "@/components/TabLayout";
import { Fragment } from "react";
import { Text } from "react-native";
export default function Home() {
  return (
    <TabLayout>
      <Fragment>
        <Navbar />
        <Text>Home</Text>
      </Fragment>
    </TabLayout>
  );
}
