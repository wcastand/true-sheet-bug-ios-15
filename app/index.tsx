import { TrueSheet, TrueSheetProps } from "@lodev09/react-native-true-sheet"
import { forwardRef, useRef } from "react";
import { Pressable, Text, View } from "react-native";

export const BottomSheet = forwardRef<TrueSheet, TrueSheetProps>(({ children, ...props }, ref) => {
	return (
		<TrueSheet sizes={["auto"]} cornerRadius={24} {...props} ref={ref}>
				{children}
		</TrueSheet>
	)
})

export default function Index() {
  const bottomSheetRef = useRef<TrueSheet>(null)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={() => bottomSheetRef.current?.present()}>
          <Text>Open</Text>
      </Pressable>
      <BottomSheet ref={bottomSheetRef}>
        <View style={{height:400,   padding: 10, justifyContent:'flex-end', alignItems:"flex-end"}}>
        <Text>Hello</Text>
          <Text style={{ padding: 16, backgroundColor:'red'}}>Bottom Sheet</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
