
function App(){
    return(
        <NavigatorContainer>
            <Stack.Navigator initalRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
                <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
                <Stack.Screen name="StarMap" component={StarMapScreen}/>
            </Stack.Navigator> 
        </NavigatorContainer>
    );
}