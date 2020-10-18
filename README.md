# -react-native-boilerplate
This is an simple react native boilerplate
Architecture

Basic Description of the App

    This Application just show spinner value before and after dispatching and Spinner action.

    Presentational components are separated from containers (aka "screens"). 
    State is managed using global Redux stores.
    Redux Thunk is applied as middleware.
    2 Additional tests are written, For splash screen and for dispatching an action.
    
    Main Directory layout

    App/Actions: Actions for app state
    App/Assets: assets like Images files used by the application
    App/Components: presentational components
    App/Config: configuration of the application
    App/Containers: container components, i.e. the application's screens
    App/Navigators: react navigation navigators
    App/Reducers: Reducers 
    App/Store: Creating Store with thunk middleware
    App/Utils: All helpers files like Colors, Constants, Images, Redux Constants and styles
